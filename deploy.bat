@echo off
REM Windows batch script for deploying Retard Labs Website to Kubernetes

echo 🚀 Starting deployment of Retard Labs Website
echo.

REM Configuration
set IMAGE_NAME=retard-labs-website
set IMAGE_TAG=%1
if "%IMAGE_TAG%"=="" set IMAGE_TAG=latest

echo Image: %IMAGE_NAME%:%IMAGE_TAG%
echo.

REM Check dependencies
echo 🔍 Checking dependencies...

where docker >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not installed
    exit /b 1
)

where kubectl >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ kubectl is not installed
    exit /b 1
)

REM Check Kubernetes cluster connectivity
kubectl cluster-info >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Cannot connect to Kubernetes cluster
    exit /b 1
)

echo ✅ All dependencies are available
echo.

REM Build Docker image
echo 🏗️ Building Docker image...
docker build -t %IMAGE_NAME%:%IMAGE_TAG% .
if %errorlevel% neq 0 (
    echo ❌ Failed to build Docker image
    exit /b 1
)

echo ✅ Docker image built successfully
echo.

REM Apply Kubernetes manifests
echo ☸️ Deploying to Kubernetes...

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/hpa.yaml

echo ✅ Kubernetes manifests applied
echo.

REM Wait for deployment to be ready
echo ⏳ Waiting for deployment to be ready...
kubectl rollout status deployment/retard-labs-website --timeout=300s
if %errorlevel% neq 0 (
    echo ❌ Deployment failed or timed out
    exit /b 1
)

echo ✅ Deployment is ready
echo.

REM Get service information
echo 📋 Service Information:
kubectl get pods -l app=retard-labs-website
kubectl get svc retard-labs-website-service
kubectl get ingress retard-labs-website-ingress

echo.
echo 🌐 To access the website, add this to your hosts file:
echo    ^<YOUR_CONTAINER_IP^> retardlabs.local
echo.
echo 🎉 Deployment completed successfully!