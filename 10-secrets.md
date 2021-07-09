# Secrets

Kubernetes Secrets let you store and manage sensitive information such as passwords , ssh keys , certificate details separately. 
This helps to decouple the sensitive information from Pod configuration and injected into the pod in runtime. 


# Task

In this Task, we will create a kubernetes secret and mount the secret in the as environment variable and as a volume.

Step 1: Create a kubernetes secret. Refer 10-secrets.yaml file 

```
apiVersion: v1
kind: Secret
metadata:
  name: basic-node-app-secret
  labels:
    name: basic-node-js-app
type: kubernetes.io/basic-auth
stringData:
  username: admin
  password: t0p-Secret
    
#data:
# username: YWRtaW4= #Need to be Base64 Encoded
# password: dDBwLVNlY3JldA== #Need to be Base64 Encoded
```

Step 2: Mount the Secret as a volume. 

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: basic-node-js-app
  labels:
    name: basic-node-js-app
  annotations:
    kubernetes.io/change-cause: "Deployed Version 3"
spec:
  replicas: 2
  selector:
    matchLabels:
      name: basic-node-js-app
  template:
    metadata:
      labels:
        name: basic-node-js-app
    spec:
      containers:
        - name: basic-node-js-app
          image: docker.io/k8sworkshop07jul/591242-basic-node-app:v3
          ports:
            - containerPort: 8080
          imagePullPolicy: Always
          volumeMounts:
            - name: basic-node-app-secret
              mountPath: "/etc/credentials"
              readOnly: true
      #Refer the Secret in as volume at pod level and mention it as a part of Volume Mounts
      volumes:
        - name: basic-node-app-secret
          secret:
            secretName: basic-node-app-secret
```

Step 3: Inject the Secret as Environment Variable.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: basic-node-js-app
  labels:
    name: basic-node-js-app
  annotations:
    kubernetes.io/change-cause: "Deployed Version 3"
spec:
  replicas: 2
  selector:
    matchLabels:
      name: basic-node-js-app
  template:
    metadata:
      labels:
        name: basic-node-js-app
    spec:
      containers:
        - name: basic-node-js-app
          image: docker.io/k8sworkshop07jul/591242-basic-node-app:v3
          ports:
            - containerPort: 8080
          imagePullPolicy: Always
          env:
            - name: USERNAME
              valueFrom:
                secretKeyRef:
                  name: basic-node-app-secret
                  key: username
            - name: PASSWORD
              valueFrom:
                secretKeyRef:
                  name: basic-node-app-secret
                  key: password
```


**If a container already consumes a Secret in an environment variable, a Secret update will not be seen by the container unless it is restarted.**