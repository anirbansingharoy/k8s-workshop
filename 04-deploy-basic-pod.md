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

There is already one pod deployment specification(03-basic-pod.yaml) present in this repository. We will use that for this deployment.

1. Goto the path where this repository is cloned

```
cd k8s-workshop
```

2. View the configuration file and tried to go through line by line
```
cat 03-basic-pod.yaml
```

3. Verify we are in a right context as a good practice 
```
k config current-context 
```

4. Deploy the spec in the cluster
```
k apply -f 03-basic-pod.yaml
```

5. Observe the events recorded in the cluster

```
k get events -w # Or the below command
k get events get events --sort-by=.metadata.creationTimestamp -w 
```
6. See the list of pods 
```
k gets pods
```

7. View last 100 lines of logs 

```
k logs pod/k8s-workshop-first-pod --tail=100 -f
```

8. Create a shell in the container and run curl towards the endpoint 
```
k exec -it pod/k8s-workshop-first-pod -- bash 
curl http://localhost:8080
```

9. Port forward the pod and tried to access the service from local
```
k port-forward pod/k8s-workshop-first-pod 8081:8080
curl http://localhost:8081
```

