#!/bin/bash

# Quick fix script for k3s in Proxmox LXC container
# Run this script to resolve kernel module loading issues

echo "🔧 Fixing k3s kernel module issues in LXC container..."

# Stop k3s if running
sudo systemctl stop k3s 2>/dev/null || true

# Remove existing k3s installation
if [ -f /usr/local/bin/k3s-uninstall.sh ]; then
    echo "🗑️ Removing existing k3s installation..."
    sudo /usr/local/bin/k3s-uninstall.sh
fi

echo "📦 Installing k3s with LXC-compatible settings..."

# Install k3s with host-gw backend (better for LXC)
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--flannel-backend=host-gw --disable-network-policy" sh -

# Wait a moment for startup
sleep 10

# Check status
echo "🔍 Checking k3s status..."
sudo systemctl status k3s --no-pager

# If still failing, try alternative installation
if ! sudo systemctl is-active --quiet k3s; then
    echo "⚠️ Primary installation failed, trying alternative..."
    sudo systemctl stop k3s
    sudo /usr/local/bin/k3s-uninstall.sh
    
    # Alternative installation without some networking features
    curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--disable-kube-proxy --flannel-backend=none --disable-network-policy" sh -
    
    sleep 10
    sudo systemctl status k3s --no-pager
fi

# Set up kubectl access
if sudo systemctl is-active --quiet k3s; then
    echo "✅ k3s is running! Setting up kubectl access..."
    
    mkdir -p ~/.kube
    sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
    sudo chown $USER:$USER ~/.kube/config
    
    # Test kubectl
    kubectl get nodes
    
    echo "🎉 k3s installation complete!"
    echo "You can now deploy your application with: kubectl apply -f k8s/"
else
    echo "❌ k3s installation failed. Check the troubleshooting guide."
    echo "You may need to load kernel modules on the Proxmox host:"
    echo "  - SSH to Proxmox host"
    echo "  - Run: modprobe br_netfilter && modprobe overlay"
    echo "  - Add to /etc/modules for persistence"
fi