#!/bin/bash

# Quick k3s API Server Fix
echo "🚀 Quick k3s API Server Fix"

# Check current status
echo "Current k3s status:"
sudo systemctl status k3s --no-pager

echo ""
echo "🔄 Restarting k3s service..."
sudo systemctl restart k3s

echo "⏳ Waiting 20 seconds for k3s to fully start..."
sleep 20

echo "🔧 Fixing kubeconfig permissions..."
mkdir -p ~/.kube
sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
sudo chown $USER:$USER ~/.kube/config

echo "🧪 Testing kubectl..."
if kubectl get nodes; then
    echo "✅ Success! k3s is working"
    echo "Ready to deploy with: kubectl apply -f k8s/"
else
    echo "❌ Still having issues. Run the full diagnostic:"
    echo "chmod +x diagnose-k3s.sh && ./diagnose-k3s.sh"
fi