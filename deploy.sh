#!/bin/bash

# Retard Labs Website Deployment Script
# This script builds and deploys the website to Kubernetes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
IMAGE_NAME="retard-labs-website"
IMAGE_TAG="${1:-latest}"
NAMESPACE="default"

echo -e "${BLUE}🚀 Starting deployment of Retard Labs Website${NC}"
echo -e "${BLUE}Image: ${IMAGE_NAME}:${IMAGE_TAG}${NC}"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check dependencies
echo -e "${YELLOW}🔍 Checking dependencies...${NC}"
if ! command_exists docker; then
    echo -e "${RED}❌ Docker is not installed${NC}"
    exit 1
fi

if ! command_exists kubectl; then
    echo -e "${RED}❌ kubectl is not installed${NC}"
    exit 1
fi

# Check if Kubernetes cluster is accessible
if ! kubectl cluster-info >/dev/null 2>&1; then
    echo -e "${RED}❌ Cannot connect to Kubernetes cluster${NC}"
    exit 1
fi

echo -e "${GREEN}✅ All dependencies are available${NC}"

# Build Docker image
echo -e "${YELLOW}🏗️  Building Docker image...${NC}"
docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Docker image built successfully${NC}"
else
    echo -e "${RED}❌ Failed to build Docker image${NC}"
    exit 1
fi

# Import image to k3s (if using k3s)
if command_exists k3s; then
    echo -e "${YELLOW}📦 Importing image to k3s...${NC}"
    sudo k3s ctr images import ${IMAGE_NAME}:${IMAGE_TAG} || docker save ${IMAGE_NAME}:${IMAGE_TAG} | sudo k3s ctr images import -
    echo -e "${GREEN}✅ Image imported to k3s${NC}"
fi

# Apply Kubernetes manifests
echo -e "${YELLOW}☸️  Deploying to Kubernetes...${NC}"

# Apply manifests in order
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/hpa.yaml

echo -e "${GREEN}✅ Kubernetes manifests applied${NC}"

# Wait for deployment to be ready
echo -e "${YELLOW}⏳ Waiting for deployment to be ready...${NC}"
kubectl rollout status deployment/retard-labs-website --timeout=300s

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment is ready${NC}"
else
    echo -e "${RED}❌ Deployment failed or timed out${NC}"
    exit 1
fi

# Get service information
echo -e "${BLUE}📋 Service Information:${NC}"
kubectl get pods -l app=retard-labs-website
kubectl get svc retard-labs-website-service
kubectl get ingress retard-labs-website-ingress

# Get external access information
EXTERNAL_IP=$(kubectl get svc -n kube-system traefik -o jsonpath='{.status.loadBalancer.ingress[0].ip}' 2>/dev/null || echo "Not available")
if [ "$EXTERNAL_IP" != "Not available" ] && [ "$EXTERNAL_IP" != "" ]; then
    echo -e "${GREEN}🌐 Website accessible at: http://${EXTERNAL_IP}${NC}"
    echo -e "${GREEN}   Or add to /etc/hosts: ${EXTERNAL_IP} retardlabs.local${NC}"
else
    echo -e "${YELLOW}🌐 To access the website, add this to your /etc/hosts:${NC}"
    echo -e "${YELLOW}   <YOUR_CONTAINER_IP> retardlabs.local${NC}"
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"