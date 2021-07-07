# Namespace #

Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces.

Namespaces are intended for use in environments with many users spread across multiple teams, or projects. 

For example ,in your project if you have two teams and individually you can have 10 applications belongs to each team.
It is wise to create two namespaces in the cluster say `team01`, `team02` . Using Role Base Access Control rule you can add restriction that developer in Team 01 can not do any modification in namespace `team02` and vice-versa

### Working with  namespace

1. Create namespace called `k8s-workshop`

```
k create namespace k8s-workshop
```

2. List all pods present in that namespace 

```
k get pods -n k8s-workshop
```

3. Deploy the earlier created pod in `k8s-workshop` namespace

4. Again List all pods present in that namespace

```
k get pods -n k8s-workshop
```
5. Permanently save the namespace for all subsequent kubectl commands in that context. Then we don't need to mention `-n` after each commands

```
kubectl config set-context --current --namespace=k8s-workshop
```