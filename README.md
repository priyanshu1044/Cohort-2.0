# Kubernetes Cluster Components

## Master Node

The master node is responsible for managing the Kubernetes cluster. It includes the following components:

- **API Server**: The front-end for the Kubernetes control plane.
- **Scheduler**: Assigns workloads to specific nodes based on resource availability.
- **etcd**: A consistent and highly-available key-value store used for all cluster data.
- **Kube-Controller-Manager**: Runs controller processes to regulate the state of the cluster.

## Worker Node

Worker nodes run the applications and workloads. They include the following components:

- **Kubelets**: An agent that communicates with the API server to ensure containers are running as expected.
- **Kube-Proxy**: Maintains network rules on nodes and allows network communication to your pods.
- **Container Runtime**: The software that runs containers, such as Docker or containerd.

## Detailed Descriptions

- **Kubelets**: This process communicates with the API server on the master node to check if it needs to run any containers.
- **Scheduler**: Schedules the pods and updates etcd with information about which node is running each pod.
- **etcd**: Stores all cluster data as key-value pairs.


