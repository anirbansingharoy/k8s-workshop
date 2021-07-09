# ConfigMap

A ConfigMap is an API object used to store non-confidential data in key-value pairs. Pods can consume ConfigMaps as environment variables, command-line arguments, or as configuration files in a volume.

https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/

# Task

In this Task, we will create a config map and mount the ConfigMap as a volume  

Step 1: Create a ConfigMap 

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: basic-node-app-secret
  labels:
    name: basic-node-js-app
data:
  # property-like keys; each key maps to a simple value
  player_initial_lives: "3"
  ui_properties_file_name: "user-interface.properties"

  # file-like keys
  game.properties: |
    enemy.types=aliens,monsters
    player.maximum-lives=5    
  user-interface.properties: |
    color.good=purple
    color.bad=yellow
    allow.textmode=true    
```
You can also create config map using `k create configmap "map-name" --from-file=<file_name>`

Step 2: Mount the properties file a volume and inject the properties as environment variables

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: basic-node-js-app
  labels:
    name: basic-node-js-app
  annotations:
    kubernetes.io/change-cause: "Deployed Version 3"
spec:
  replicas: 2
  selector:
    matchLabels:
      name: basic-node-js-app
  template:
    metadata:
      labels:
        name: basic-node-js-app
    spec:
      containers:
        - name: basic-node-js-app
          image: docker.io/k8sworkshop07jul/591242-basic-node-app:v3
          ports:
            - containerPort: 8080
          imagePullPolicy: Always
          env:
            # Define the environment variable
            - name: PLAYER_INITIAL_LIVES # Notice that the case is different here
              # from the key name in the ConfigMap.
              valueFrom:
                configMapKeyRef:
                  name: basic-node-app-config           # The ConfigMap this value comes from.
                  key: player_initial_lives # The key to fetch.
            - name: UI_PROPERTIES_FILE_NAME
              valueFrom:
                configMapKeyRef:
                  name: basic-node-app-config
                  key: ui_properties_file_name
          volumeMounts:
            - name: config
              mountPath: "/etc/config"
              readOnly: true

      volumes:
        # You set volumes at the Pod level, then mount them into containers inside that Pod
        - name: config
          configMap:
            # Provide the name of the ConfigMap you want to mount.
            name: basic-node-app-config
            # An array of keys from the ConfigMap to create as files
            items:
              - key: "game.properties"
                path: "game.properties"
              - key: "user-interface.properties"
                path: "user-interface.properties"
```