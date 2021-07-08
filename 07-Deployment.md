# Deployment
A Deployment provides declarative updates for Pods and ReplicaSets.
You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate

https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

# Task

In this task , we will create deployment and orchestrate different options we can do with deployment.

Step 1:  Open 07-basic-node-app-deployment.yaml file and observe the configuration

Step 2: Apply the Deployment
```
k apply -f 07-basic-node-app-deployment.yaml

```
Step 3: Observe the rollout status.
```
k rollout status deployment basic-node-js-app
```
Step 4: Observe the events to understand how kubernetes rolled out the change
```
k get events -w
```

Step 5: Create a new version and deploy the new version

Step 6: See deployment history
```
k rollout history deployment basic-node-js-app
```

Step 7: Rollback to earlier version 

```
k rollout undo deployment basic-node-js-app
```

Step 8: Scale up the deployment

```
k scale deployment basic-node-js-app --replicas=5
```
Alternatively you can also change replica details in the deployment yaml file and apply it. 

Step 9: There are two strategies of rollout which can be configured in `spec.strategy.type`

- **Rolling Update**: New pods are added gradually, and old pods are terminated gradually 
- **Recreate**: All old pods are terminated before any new pods are added.

When using the RollingUpdate strategy, there are two more options that let you fine-tune the update process:
- **maxSurge**: The number of pods that can be created above the desired amount of pods during an update
- **maxUnavailable**: The number of pods that can be unavailable during the update process

Example: 

```
spec:
  replicas: 4
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge:1
      maxUnavailable:0

```

In this example we are configuring that during the deployment process we want 4 pods to be always available (maxUnavailable = 0) and kubernetes can create one extra pod before tearing down one pod

Step 10: Configure Kubernetes health check probes. 

Kubernetes uses this health check probes to understand the state of the application and do what is necessary.

**LivenessProbe:** Kubernetes uses liveness probes to know when to restart a container. For example, liveness probes could catch a deadlock, where an application is running, 
but unable to make progress. Restarting a container in such a state can help to make the application more available despite bugs

**ReadinessProbe:** Kubernetes uses readiness probes to know when a container is ready to start accepting traffic

**StartupProbe:** Kubernetes uses startup probes to know when a container application has started. 
If such a probe is configured, it disables liveness and readiness checks until it succeeds, making sure those probes don't interfere with the application startup. 

See 07-basic-node-app-deployment-with-probes.yaml file for example usage

Step 11: Managing Resources(cpu/memory) for Containers

It's possible and often recommended configuring resources for containers. There are two configuration options present

**Requests:** Kubernetes reserve this amount of resources and make it available to the container to use. This is a guaranteed quota.  
**Limits:** Maximum amount of resource the container can consume. If memory consumption is higher than limits , kubernetes will restart the pod.

Sample configuration can be found 07-basic-node-app-deployment-with-resources.yaml 
