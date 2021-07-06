# Working with Pods 

**Pod:** 
Pods are the smallest deployable units of computing that you can create and manage in Kubernetes.
A Pod (as in a pod of whales or pea pod) is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers

**Container:**
A Container is running instance of a container image. A container image is a ready-to-run software package, containing everything needed to run an application: the code and any runtime it requires, application and system libraries, and default values for any essential settings.

**Node:**
A node is a worker machine in Kubernetes

*Relationship:*
One pod can have multiple containers and on node can host multiple pods.

## Deploy a basic pod  

In this task we will deploy a basic application/pod in kubernetes and perform some operational with that.

Please follow the below steps

```
cd k8s-workshop # Or Goto the path where this repository is cloned
cat 03-basic-pod.yaml #View the configuration file and tried to go through line by line
k config current-context  #Verify we are in a right context 
k apply -f 03-basic-pod.yaml #Deploy the spec in the cluster
k get events -w #Observe the events recorded in the cluster
k gets pods #Get list of pods
k logs pod/k8s-workshop-first-pod --tail=100 -f #View last 100 
k port-forward pod/k8s-workshop-first-pod 8081:8080 
k exec -it pod/k8s-workshop-first-pod -- bash # Create a Shell in the container
```

