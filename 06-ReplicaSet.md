# ReplicaSet

A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time. As such, it is often used to guarantee the availability of a specified number of identical Pods.

https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/

# Task

In this task , we will create multiple replicas of single pod which we crated earlier.

Step 1:  Open 06-basic-node-app-replica-set.yaml file and observe the configuration

Step 2: Deploy the Replica Set
```
k apply -f 06-basic-node-app-replica-set.yaml
```

Step 3: Delete any one of the pod and see what happens

# Notes
- Replicaset helps us to create multiple instances of the application, but it's difficult to roll out new version of the application.
  We need to use `Deployment` instead of Replicaset which internally creates replicaset and provides other option like rollout and rollback etc.


