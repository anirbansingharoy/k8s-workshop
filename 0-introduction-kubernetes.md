# Kubernetes

https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/#why-you-need-kubernetes-and-what-can-it-do

Kubernetes is container orchestration framework that helps us running containerized applications in production and provide a wide range of supporting mechanismas like:

* Service discovery and load balancing
* Storage orchestration
* Automated rollouts and rollbacks
* Resource management (cpu and memory)
* Self-healing
* Secret and configuration management

## Components

https://kubernetes.io/docs/concepts/overview/components/

![k8s components](components-of-kubernetes.png)

The three main types of components in Kubernetes cluster:

* **Kubernetes control plane components** which is the control center of kubernetes and where all the centralized decisions of the cluster is being made. Typically runs on a separate node.
* **Node components** which run on every node, maintaining running pods and providing the Kubernetes runtime environment.
* **Addons** Which is cluster wide support functions like DNS, Web dashboard, Monitoring and Logging etc.

![typical k8s node with pods and containers](module_03_nodes.svg)

## Networking

A small note on kubernetes networking. The networking model in kubernetes is very simple and works in the same basic
way as IP-network between traditional virtual machines.

The basis for kubernetes networking is that:

* pods on a node can communicate with all pods on all nodes
* agents on a node (e.g. system daemons, kubelet) can communicate with all pods on that node

This means that:

* Containers can reach other containers inside other pods using the pods IP-address
* Containers can reach other containers inside the same pod using the localhos network

 