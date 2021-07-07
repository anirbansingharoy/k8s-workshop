# Kubectl #

The Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters. You can use kubectl to deploy applications, inspect and manage cluster resources, and view logs.

**Basic Usage**

```
kubectl [command] [TYPE] [NAME] [flags]
kubectl get pod {pod_name} -n {namepace}        
``` 
**Cheat Sheet**

Most Commonly used Kubectl commands has been described in this page 

https://kubernetes.io/docs/reference/kubectl/cheatsheet/

# Tasks #

## 1. Improve kubectl installation

**This is implemented in the safari sandbox you will be working, so you don't need to complete this task.**
This is completely optional step to follow. It indeed helpful to not repeatedly type `kubectl`, instead have an alias on top of it. 
```
alias k=“kubectl”
```
We will be use `k` in this workshop further on to refer `kubectl`

There are [many](https://github.com/ahmetb/kubectl-aliases) possible aliases...

## 2. Verify kubectl installation
You can verify the installation with the version-command above, but to be sure that everything is running correctly you should do:
```
$ k cluster-info
Kubernetes control plane is running at https://172.17.0.13:6443
KubeDNS is running at https://172.17.0.13:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
```
## 3. Get info from the cluster
Use the following commands to get info and read about the different parts
- [Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)
- [Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Services](https://kubernetes.io/docs/concepts/services-networking/service/)
- [Nodes](https://kubernetes.io/docs/concepts/architecture/nodes/)

```
$ k get deployments --all-namespaces
$ k get services --all-namespaces
$ k get pods --all-namespaces
$ k get nodes --all-namespaces
```

## 4.Observe Kubernetes Events 
Kubernetes events helps us to observe what is happening in the cluster. Any actions towards the cluster triggers events and the same can be observed by us. 
```
k get events -w #Show events in watch mode
```

## 5. Important!
When working with Kubernetes and kubectl you should ALWAYS know which context you work in. A context refers to the Kubernetes cluster you will be executing the `kubectl` commands. 
For Example : You might have two different cluster for QA and Production

```
$ k config get-contexts         # display list of contexts 
$ k config current-context      # display the current-context
$ k config use-context kubernetes-admin@kubernetes # set the default context to kubernetes-admin@kubernetes
```


## 6. More Tasks (Refer Cheat Sheet)
- Get list of nodes present in the cluster (Hint: `k get n......`)  
- What is the IP address for the Node ? (Hint: `-o wide`/`k describe ....`)
- What is OS running in these nodes ? (Hint:  `-o wide`/`k describe ....`)
- See the entire kubectl configuration file
- Sort Kubernetes Events by timestamp
