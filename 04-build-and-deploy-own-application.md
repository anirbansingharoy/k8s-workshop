# Build and Deploy Own application 

In this task we will be going build a docker image, push it to an image registry and deploy it in kubernetes.  

In `k8s-workshop` github repository, you will find a folder called `nodejs_app`. 
This repository includes the necessary source codes to spin up a node js application with some api's. 

## Task

1. Take a look at `server.js`. This is the node js app source code

2. Take a look at `Dockerfile`. This describes how we are creating the docker image

3. Build the docker image. Ensure to include your employee id in the docker image name 

```
docker build . -t k8sworkshop07jul/{EMP_ID}-basic-node-app:v1
```

4. Push the docker image to docker hub(Ensure that you already did the docker login as a part of setting up the lab)

```
docker push k8sworkshop07jul/{EMP_ID}-basic-node-app:v1
```

5. Create a basic pod deployment yaml file. Make sure to refer the image you just pushed

```
apiVersion: v1
kind: Pod
metadata:
  name: k8s-workshop-basic-node-app
  labels:
    app.kubernetes.io/name: k8s-workshop-basic-node-app
    app.kubernetes.io/instance: instance-1
spec:
  containers:
    - name: container
      image: docker.io/k8sworkshop07jul/321564-basic-node-app:v1
      ports:
        - containerPort: 8080
      imagePullPolicy: Always
```
6. Do port-forward and check if your access the api's from the lab.


**Challenges**
- Create another Pod using the same image.
- Create a new endpoint in the node js. Build and deploy the new version in kubernetes
- Create Spring Boot application(Or any other language as per your preference) and build & deploy the application in the kubernetes cluster 

