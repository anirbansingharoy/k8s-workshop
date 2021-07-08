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

Step 3: Now we will try to access the application using the service ip address within the cluster. 
- First we need to get the IP address for the service. Execute below command and take a note on IP Address present in Cluster IP Column

```
k get service basic-node-js-app 
```

- Then we will create a test pod in the cluster

```
kubectl run -i --tty testcontainer --image=gcr.io/google-samples/kubernetes-bootcamp:v1 -- bash
```
- Next we will try to access the endpoint via service ip address 

```
curl http://{SERVICE_IP_ADDRESS}/helloworld
```

- You can also use kubernetes internal DNS to access the service 

```
curl http://basic-node-js-app.default.svc.cluster.local/helloworld #
```

The DNS is constructed as follows `<servicename>.<namespace>.svc.cluster.local`

# Types of kubernetes Services 

There are four types of service exists 

- ClusterIP. Exposes a service which is only accessible from within the cluster.
- NodePort. Exposes a service via a static port on each node’s IP.
- LoadBalancer. Exposes the service via the cloud provider’s load balancer.
- ExternalName. Maps a service to a predefined externalName field by returning a value for the CNAME record.

More information https://kubernetes.io/docs/concepts/services-networking/service/
