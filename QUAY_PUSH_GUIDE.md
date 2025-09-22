# Pushing to Quay.io Container Registry

## 🚀 **Complete Quay.io Push Guide**

### **Step 1: Login to Quay.io**

```powershell
# Login to Quay.io
docker login quay.io
# Enter username: fuad-bader
# Enter password: [your-quay-password]
```

**Note:** If login fails, check:

- Your Quay.io username/password
- Consider using a Robot Account (recommended for automation)

### **Step 2: Tag Your Image for Quay.io**

```powershell
# Tag your existing image for Quay.io
docker tag fuad-bader/retard-labs-website:latest quay.io/fuad-bader/retard-labs-website:latest
```

### **Step 3: Push to Quay.io**

```powershell
# Push to Quay.io
docker push quay.io/fuad-bader/retard-labs-website:latest
```

### **Step 4: Verify the Push**

```powershell
# Check your images
docker images | findstr quay
```

## 🔧 **Alternative: Using Robot Account (Recommended)**

For better security, use a Robot Account:

1. Go to [quay.io](https://quay.io)
2. Navigate to your repository
3. Go to "Settings" → "Robot Accounts"
4. Create a new robot account
5. Download the credentials

```powershell
# Login with robot account
docker login quay.io -u "fuad-bader+robot_name" -p "robot_token"
```

## 📝 **Update Kubernetes Deployment**

After successful push, update your Kubernetes deployment:

```yaml
# In k8s/deployment.yaml
containers:
  - name: retard-labs-website
    image: quay.io/fuad-bader/retard-labs-website:latest
    imagePullPolicy: Always
```

## 🔍 **Complete Command Sequence**

Here's the complete sequence to run:

```powershell
# 1. Tag for Quay.io
docker tag fuad-bader/retard-labs-website:latest quay.io/fuad-bader/retard-labs-website:latest

# 2. Login to Quay.io (you'll need to enter credentials)
docker login quay.io

# 3. Push to Quay.io
docker push quay.io/fuad-bader/retard-labs-website:latest

# 4. Verify
docker images | findstr quay
```

## 🚨 **Troubleshooting**

### **Login Issues:**

- Verify username/password at quay.io
- Try logging out first: `docker logout quay.io`
- Check if 2FA is enabled (use robot account instead)

### **Repository Doesn't Exist:**

Quay.io auto-creates public repositories on first push, so this shouldn't be an issue.

### **Permission Issues:**

- Ensure you're using the correct username: `fuad-bader`
- Consider using a robot account for automation

Try the login again with your correct Quay.io credentials!
