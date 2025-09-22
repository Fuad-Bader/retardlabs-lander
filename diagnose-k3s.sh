#!/bin/bash

# k3s Diagnostic and Fix Script
# This script diagnoses and fixes common k3s issues in LXC containers

set -e

echo "🔍 k3s Diagnostic and Fix Script"
echo "================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    SUDO=""
else
    SUDO="sudo"
fi

print_status "Step 1: Checking k3s service status..."
echo "----------------------------------------"
$SUDO systemctl status k3s --no-pager || true
echo

print_status "Step 2: Checking k3s logs..."
echo "-----------------------------"
print_warning "Recent k3s logs (last 20 lines):"
$SUDO journalctl -u k3s --no-pager -n 20 || true
echo

print_status "Step 3: Checking kubeconfig..."
echo "------------------------------"
if [ -f ~/.kube/config ]; then
    print_success "Kubeconfig exists at ~/.kube/config"
    echo "Kubeconfig server:"
    grep server ~/.kube/config || true
else
    print_error "Kubeconfig not found at ~/.kube/config"
fi
echo

print_status "Step 4: Checking k3s API server..."
echo "----------------------------------"
if $SUDO systemctl is-active --quiet k3s; then
    print_success "k3s service is active"
    
    # Check if API server is listening
    if netstat -tlnp 2>/dev/null | grep :6443 >/dev/null; then
        print_success "k3s API server is listening on port 6443"
    else
        print_error "k3s API server is not listening on port 6443"
    fi
    
    # Test API server directly
    print_status "Testing API server connectivity..."
    if curl -k -s https://127.0.0.1:6443/version >/dev/null 2>&1; then
        print_success "API server is responding"
    else
        print_error "API server is not responding"
    fi
else
    print_error "k3s service is not active"
fi
echo

print_status "Step 5: Checking container environment..."
echo "----------------------------------------"
# Check if we're in a container
if [ -f /.dockerenv ] || grep -q container=lxc /proc/1/environ 2>/dev/null; then
    print_warning "Running in container environment"
    
    # Check kernel modules
    print_status "Checking kernel modules..."
    if lsmod | grep br_netfilter >/dev/null; then
        print_success "br_netfilter module is loaded"
    else
        print_error "br_netfilter module is not loaded"
    fi
    
    if lsmod | grep overlay >/dev/null; then
        print_success "overlay module is loaded"
    else
        print_error "overlay module is not loaded"
    fi
else
    print_success "Running on bare metal/VM"
fi
echo

print_status "Step 6: Attempting fixes..."
echo "---------------------------"

# Fix 1: Restart k3s service
print_status "Fix 1: Restarting k3s service..."
$SUDO systemctl restart k3s
sleep 15

# Check if it's working now
if kubectl get nodes >/dev/null 2>&1; then
    print_success "kubectl is working after restart!"
    kubectl get nodes
    exit 0
fi

# Fix 2: Recreate kubeconfig
print_status "Fix 2: Recreating kubeconfig..."
mkdir -p ~/.kube
$SUDO cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
$SUDO chown $USER:$USER ~/.kube/config

# Test again
if kubectl get nodes >/dev/null 2>&1; then
    print_success "kubectl is working after kubeconfig fix!"
    kubectl get nodes
    exit 0
fi

# Fix 3: Wait longer for k3s to be ready
print_status "Fix 3: Waiting for k3s to be fully ready..."
for i in {1..30}; do
    if kubectl get nodes >/dev/null 2>&1; then
        print_success "kubectl is working after waiting!"
        kubectl get nodes
        exit 0
    fi
    echo "Waiting... attempt $i/30"
    sleep 5
done

# Fix 4: Complete reinstall with LXC-optimized settings
print_warning "Fix 4: Performing complete k3s reinstall..."
print_status "Stopping k3s..."
$SUDO systemctl stop k3s 2>/dev/null || true

print_status "Uninstalling k3s..."
if [ -f /usr/local/bin/k3s-uninstall.sh ]; then
    $SUDO /usr/local/bin/k3s-uninstall.sh
fi

print_status "Reinstalling k3s with LXC-optimized settings..."
# Use write-kubeconfig-mode to ensure proper permissions
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--write-kubeconfig-mode 644 --flannel-backend=host-gw --disable-network-policy --kube-apiserver-arg=feature-gates=RemoveSelfLink=false" sh -

print_status "Waiting for k3s to start..."
sleep 20

# Set up kubeconfig again
mkdir -p ~/.kube
$SUDO cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
$SUDO chown $USER:$USER ~/.kube/config

# Final test
print_status "Final test..."
for i in {1..20}; do
    if kubectl get nodes >/dev/null 2>&1; then
        print_success "🎉 kubectl is working after reinstall!"
        kubectl get nodes
        kubectl get pods --all-namespaces
        print_success "k3s is ready for deployment!"
        exit 0
    fi
    echo "Final test attempt $i/20..."
    sleep 5
done

print_error "❌ k3s installation failed. Manual intervention required."
echo
print_status "Manual steps to try:"
echo "1. Check Proxmox host kernel modules:"
echo "   - SSH to Proxmox host"
echo "   - Run: modprobe br_netfilter && modprobe overlay"
echo "2. Increase container resources (RAM/CPU)"
echo "3. Check container nesting is enabled"
echo "4. Try k3d or microk8s as alternatives"
echo
print_status "For detailed logs:"
echo "$SUDO journalctl -u k3s -f"