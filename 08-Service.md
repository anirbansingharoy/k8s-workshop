# Service

A Kubernetes service is a logical abstraction for a deployed group of pods in a cluster.
Since pods are ephemeral, a service enables a group of pods to be assigned a name and unique IP address and provide appropriate load balancing.

# Task: 

We will create a Cluster IP Service and access the pods we have created earlier

Step 1: Open Service 08-basic-node-app-service.yaml and observe the configuration

Step 2: Apply the configuration 

```
k apply -f 08-basic-node-app-service.yaml
```
