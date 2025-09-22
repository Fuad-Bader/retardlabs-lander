# Kubernetes Troubleshooting Guide

This guide covers common issues and solutions when deploying the Retard Labs website to Kubernetes.

## 🔍 Quick Diagnosis Commands

```bash
# Check overall cluster health
kubectl get nodes
kubectl get pods --all-namespaces

# Check your application
kubectl get pods -l app=retard-labs-website
kubectl get svc retard-labs-website-service
kubectl get ingress retard-labs-website-ingress

# View logs
kubectl logs -l app=retard-labs-website --tail=50
kubectl describe pod <pod-name>
```

## 🚨 Common Issues and Solutions

### 1. Pod Not Starting

**Symptoms:**

- Pod stuck in `Pending`, `ImagePullBackOff`, or `CrashLoopBackOff`

**Diagnosis:**

```bash
kubectl describe pod <pod-name>
kubectl logs <pod-name>
```

**Solutions:**

#### ImagePullBackOff

```bash
# Check if image exists locally (k3s)
sudo k3s ctr images ls | grep retard-labs

# Rebuild and import image
docker build -t retard-labs-website:latest .
sudo k3s ctr images import retard-labs-website:latest
```

#### Insufficient Resources

```bash
# Check node resources
kubectl describe node

# Reduce resource requests in deployment.yaml
resources:
  requests:
    memory: "32Mi"
    cpu: "50m"
```

#### CrashLoopBackOff

```bash
# Check application logs
kubectl logs <pod-name> --previous

# Common fixes:
# 1. Check nginx configuration
# 2. Verify build process
# 3. Check health check endpoints
```

### 2. Service Not Accessible

**Symptoms:**

- Cannot reach website through browser
- Service exists but no response

**Diagnosis:**

```bash
# Check service endpoints
kubectl get endpoints retard-labs-website-service

# Test service internally
kubectl run test-pod --image=busybox --restart=Never --rm -it -- wget -qO- http://retard-labs-website-service
```

**Solutions:**

#### No Endpoints

```bash
# Check pod labels match service selector
kubectl get pods --show-labels
kubectl describe svc retard-labs-website-service

# Fix label mismatch in deployment.yaml or service.yaml
```

#### Port Issues

```bash
# Verify container port in deployment
kubectl describe deployment retard-labs-website

# Check nginx is listening on port 80
kubectl exec <pod-name> -- netstat -tlnp
```

### 3. Ingress Not Working

**Symptoms:**

- External access not working
- DNS resolution issues

**Diagnosis:**

```bash
# Check ingress controller
kubectl get pods -n kube-system | grep traefik

# Check ingress status
kubectl describe ingress retard-labs-website-ingress
```

**Solutions:**

#### Traefik Not Running

```bash
# Restart k3s
sudo systemctl restart k3s

# Check k3s logs
sudo journalctl -u k3s -f
```

#### DNS Issues

```bash
# Add to /etc/hosts on client machine
echo "<CONTAINER_IP> retardlabs.local" | sudo tee -a /etc/hosts

# Or use IP directly
kubectl get svc -n kube-system traefik
```

### 4. SSL/TLS Issues

**Symptoms:**

- Certificate errors
- HTTPS redirect not working

**Solutions:**

#### Disable HTTPS Redirect

Edit `k8s/ingress.yaml`:

```yaml
metadata:
  annotations:
    kubernetes.io/ingress.class: traefik
    # Remove these lines for HTTP only:
    # traefik.ingress.kubernetes.io/redirect-entry-point: https
    # traefik.ingress.kubernetes.io/redirect-permanent: "true"
```

#### Add Let's Encrypt

```bash
# Install cert-manager
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.12.0/cert-manager.yaml

# Create ClusterIssuer for Let's Encrypt
# (See cert-manager documentation)
```

### 5. Performance Issues

**Symptoms:**

- Slow response times
- High resource usage

**Diagnosis:**

```bash
# Check resource usage
kubectl top pods
kubectl top nodes

# Check HPA status
kubectl get hpa
```

**Solutions:**

#### Scale Up

```bash
# Manual scaling
kubectl scale deployment retard-labs-website --replicas=3

# Check HPA configuration
kubectl describe hpa retard-labs-website-hpa
```

#### Resource Optimization

```bash
# Increase resource limits
kubectl patch deployment retard-labs-website -p '{"spec":{"template":{"spec":{"containers":[{"name":"retard-labs-website","resources":{"limits":{"memory":"512Mi","cpu":"1000m"}}}]}}}}'
```

### 6. Health Check Failures

**Symptoms:**

- Pods restarting frequently
- Ready state failing

**Diagnosis:**

```bash
# Check health endpoint manually
kubectl exec <pod-name> -- curl localhost/health

# Check probe configuration
kubectl describe pod <pod-name>
```

**Solutions:**

#### Fix Health Endpoint

Verify nginx.conf has health check:

```nginx
location /health {
    access_log off;
    return 200 "healthy\n";
    add_header Content-Type text/plain;
}
```

#### Adjust Probe Timing

Edit deployment.yaml:

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 80
  initialDelaySeconds: 60 # Increase if needed
  periodSeconds: 30
```

## 🔧 Maintenance Commands

### Update Deployment

```bash
# Update image
kubectl set image deployment/retard-labs-website retard-labs-website=retard-labs-website:v2

# Check rollout status
kubectl rollout status deployment/retard-labs-website

# Rollback if needed
kubectl rollout undo deployment/retard-labs-website
```

### Scaling

```bash
# Manual scaling
kubectl scale deployment retard-labs-website --replicas=5

# Auto-scaling
kubectl autoscale deployment retard-labs-website --cpu-percent=50 --min=1 --max=10
```

### Monitoring

```bash
# Real-time logs
kubectl logs -f deployment/retard-labs-website

# Resource monitoring
watch kubectl top pods

# Events
kubectl get events --sort-by=.metadata.creationTimestamp
```

### Cleanup

```bash
# Delete application
kubectl delete -f k8s/

# Clean up images (k3s)
sudo k3s ctr images rm retard-labs-website:latest

# Clean up unused resources
kubectl delete pods --field-selector=status.phase=Succeeded
```

## 🚑 Emergency Procedures

### Complete Reset

```bash
# Delete everything
kubectl delete -f k8s/

# Restart k3s
sudo systemctl restart k3s

# Wait for cluster to be ready
kubectl wait --for=condition=Ready nodes --all --timeout=300s

# Redeploy
kubectl apply -f k8s/
```

### Backup Configuration

```bash
# Export current configuration
kubectl get deployment retard-labs-website -o yaml > backup-deployment.yaml
kubectl get service retard-labs-website-service -o yaml > backup-service.yaml
kubectl get ingress retard-labs-website-ingress -o yaml > backup-ingress.yaml
```

## 📊 Performance Tuning

### Resource Optimization

```yaml
# Optimized resource configuration
resources:
  requests:
    memory: "128Mi"
    cpu: "100m"
  limits:
    memory: "256Mi"
    cpu: "500m"
```

### Nginx Tuning

```nginx
# Add to nginx.conf for better performance
worker_processes auto;
worker_connections 2048;
keepalive_timeout 30;
client_max_body_size 1m;
```

### HPA Configuration

```yaml
# Fine-tuned HPA
metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 60
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 70
```

## 🔍 Debugging Tools

### Useful kubectl Plugins

```bash
# Install krew (kubectl plugin manager)
curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/krew-linux_amd64.tar.gz"

# Install useful plugins
kubectl krew install ctx ns tree
```

### Debug Pod

```bash
# Create debug pod
kubectl run debug --image=busybox --restart=Never --rm -it -- sh

# Network debugging
kubectl run netshoot --image=nicolaka/netshoot --restart=Never --rm -it
```

## 📞 Getting Help

### Log Collection

```bash
# Collect all logs
mkdir debug-logs
kubectl logs deployment/retard-labs-website > debug-logs/app-logs.txt
kubectl describe deployment retard-labs-website > debug-logs/deployment.txt
kubectl get events > debug-logs/events.txt
```

### Community Resources

- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [k3s Documentation](https://docs.k3s.io/)
- [Kubernetes Slack](https://kubernetes.slack.com/)
- [Stack Overflow - Kubernetes](https://stackoverflow.com/questions/tagged/kubernetes)

Remember: Most issues can be resolved by checking logs and describing resources! 🚀
