# Troubleshooting

Recommended Read https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application-introspection/

1. See Previous Container Logs:  `k logs -p {pod_name} {container_name}`
2. Create Shell inside the container `k exec -it {pod_name}`
3. Keep an eye on the Exit code from the "Pod Describe" Output if you are facing continuous restart
4. Always keep an eye on Events