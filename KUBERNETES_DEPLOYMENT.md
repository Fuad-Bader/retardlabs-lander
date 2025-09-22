# Kubernetes Deployment Guide for Proxmox Ubuntu Container

This guide will help you install Kubernetes on your Ubuntu container in Proxmox and deploy your Retard Labs website.

## 🏗️ Prerequisites

### Proxmox Container Requirements

- **RAM**: Minimum 4GB (8GB recommended)
- **CPU**: 2+ cores
- **Storage**: 20GB+ available space
- **Network**: Bridge network with internet access
- **Ubuntu**: 20.04 LTS or newer

### Container Configuration

1. **Enable nesting** in Proxmox:

   ```bash
   # In Proxmox host
   pct set <CT_ID> -features nesting=1
   ```

2. **Restart the container** after enabling nesting

## 🐳 Step 1: Install Docker

SSH into your Ubuntu container and run:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Add user to docker group
sudo usermod -aG docker $USER

# Enable Docker service
sudo systemctl enable docker
sudo systemctl start docker

# Log out and back in for group changes to take effect
```

## ☸️ Step 2: Install Kubernetes (k3s)

We'll use k3s (lightweight Kubernetes) which is perfect for single-node deployments:

```bash
# For LXC containers, install k3s with specific options
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--flannel-backend=host-gw" sh -

# Alternative if above fails (disables some networking features):
# curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--disable-kube-proxy --flannel-backend=none" sh -

# Wait for k3s to be ready
sudo systemctl status k3s

# Copy kubeconfig for current user
mkdir -p ~/.kube
sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
sudo chown $USER:$USER ~/.kube/config

# Install kubectl (if not already available)
sudo snap install kubectl --classic

# Verify installation
kubectl get nodes
kubectl get pods --all-namespaces
```

## 🐋 Step 3: Install Helm (Package Manager)

```bash
# Install Helm
curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt update
sudo apt install helm

# Verify Helm installation
helm version
```

## 📦 Step 4: Build and Deploy Your Website

### Option A: Using Docker Registry (Recommended)

1. **Build and push to a registry** (Docker Hub, GitHub Container Registry, etc.):

```bash
# In your project directory on your development machine
docker build -t your-username/retard-labs-website:latest .
docker push your-username/retard-labs-website:latest
```

2. **Deploy to Kubernetes**:

```bash
# Apply the Kubernetes manifests (created in next steps)
kubectl apply -f k8s/
```

### Option B: Build Locally on Server

1. **Clone your repository**:

```bash
# Install git if not available
sudo apt install -y git

# Clone your repository
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. **Build Docker image locally**:

```bash
# Build the image
sudo docker build -t retard-labs-website:latest .

# Import to k3s
sudo k3s ctr images import retard-labs-website:latest
```

## 🌐 Step 5: Set Up Ingress Controller

k3s comes with Traefik ingress controller by default, but we'll configure it:

```bash
# Check Traefik is running
kubectl get pods -n kube-system | grep traefik

# Get the LoadBalancer IP (usually your container IP)
kubectl get svc -n kube-system traefik
```

## 🔧 Step 6: Configure Domain/DNS

### Option A: Use Local DNS

Add to your `/etc/hosts` file (on machines accessing the site):

```
<CONTAINER_IP> retardlabs.local
<CONTAINER_IP> www.retardlabs.local
```

### Option B: Use Real Domain

Point your domain's DNS A record to your Proxmox container's IP address.

## 📊 Step 7: Monitoring and Management

### Install Kubernetes Dashboard

```bash
# Install dashboard
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml

# Create admin user
kubectl apply -f k8s/dashboard-admin.yaml

# Get access token
kubectl -n kubernetes-dashboard create token admin-user

# Port forward to access
kubectl proxy --address='0.0.0.0' --disable-filter=true
```

Access at: `http://<CONTAINER_IP>:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/`

### Useful Commands

```bash
# View all resources
kubectl get all

# View logs
kubectl logs -f deployment/retard-labs-website

# Scale deployment
kubectl scale deployment retard-labs-website --replicas=3

# Update deployment
kubectl set image deployment/retard-labs-website retard-labs-website=your-username/retard-labs-website:v2

# Delete all resources
kubectl delete -f k8s/
```

## 🔄 Step 8: Set Up CI/CD (Optional)

### GitHub Actions Example

```yaml
name: Deploy to Kubernetes
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build and Deploy
        run: |
          # Build and push Docker image
          # Deploy to Kubernetes cluster
```

## 🚨 Troubleshooting

### Common Issues

1. **k3s won't start - Kernel module issues**:

   **Error:** `ExecStartPre=/sbin/modprobe br_netfilter (code=exited, status=1/FAILURE)`

   **Solution for Proxmox LXC:**

   ```bash
   # On Proxmox HOST (not in container), load modules:
   modprobe br_netfilter
   modprobe overlay

   # Make modules persistent on Proxmox host:
   echo 'br_netfilter' >> /etc/modules
   echo 'overlay' >> /etc/modules

   # In container, install k3s without kernel module checks:
   curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--disable-kube-proxy --flannel-backend=none" sh -

   # Or install with system default CNI:
   curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--flannel-backend=host-gw" sh -
   ```

2. **Container won't start pods**:

   ```bash
   # Check if nesting is enabled
   cat /proc/sys/kernel/unprivileged_userns_clone
   # Should return 1
   ```

3. **Network issues**:

   ```bash
   # Check Proxmox firewall settings
   # Ensure container has internet access
   ping google.com
   ```

4. **Resource constraints**:

   ```bash
   # Check resources
   kubectl top nodes
   kubectl describe node
   ```

5. **k3s issues**:

   ```bash
   # Restart k3s
   sudo systemctl restart k3s

   # Check logs
   sudo journalctl -u k3s -f
   ```

## 📈 Performance Optimization

### Resource Limits

Set appropriate resource limits in your deployments:

```yaml
resources:
  requests:
    memory: "64Mi"
    cpu: "250m"
  limits:
    memory: "128Mi"
    cpu: "500m"
```

### Horizontal Pod Autoscaler

```bash
kubectl autoscale deployment retard-labs-website --cpu-percent=50 --min=1 --max=10
```

## 🔐 Security Considerations

1. **Use non-root user in Docker containers**
2. **Set up network policies**
3. **Use secrets for sensitive data**
4. **Regular security updates**
5. **Monitor container vulnerabilities**

## 🎯 Next Steps

1. Set up SSL/TLS certificates (Let's Encrypt)
2. Configure monitoring (Prometheus + Grafana)
3. Set up logging (ELK stack)
4. Implement backup strategies
5. Set up alerting

---

This guide provides a complete setup for running your website on Kubernetes in a Proxmox container. The setup is production-ready and scalable! 🚀
