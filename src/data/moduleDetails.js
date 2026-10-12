// Topic-level detail for every module. Key format: "<course-slug>:<module number>".
// Networking, Cybersecurity and Cloud content is taken from the institute curriculum documents.
// Artificial Intelligence detail is a draft written for this site: please review it.
// Fields: objective (one line), topics [title, detail], practical (list), evidence (text), tools (text).

export const moduleDetails = {
 "artificial-intelligence:01": {
  "evidence": "GitHub repository with exercises and the command-line tool",
  "objective": "Learn to write clear, working Python programs and manage your own code.",
  "practical": [
   "Solve a set of graded coding exercises",
   "Build a small command-line data tool"
  ],
  "tools": "",
  "topics": [
   [
    "Python basics",
    "Variables, data types, operators, input and output."
   ],
   [
    "Control flow",
    "Conditions, loops and writing readable logic."
   ],
   [
    "Functions and modules",
    "Reusable code, parameters, return values and importing libraries."
   ],
   [
    "Data structures",
    "Lists, tuples, dictionaries and sets, and when to use each."
   ],
   [
    "Files and errors",
    "Reading and writing files, JSON, exceptions and debugging."
   ],
   [
    "Working tools",
    "Jupyter notebooks, virtual environments and Git basics."
   ]
  ]
 },
 "artificial-intelligence:02": {
  "evidence": "Worked problem set and a short written explanation",
  "objective": "Understand the maths that sits behind machine learning, without heavy theory.",
  "practical": [
   "Compute statistics by hand and with Python",
   "Visualise gradient descent on a simple function"
  ],
  "tools": "",
  "topics": [
   [
    "Linear algebra",
    "Vectors, matrices and dot products, and why models use them."
   ],
   [
    "Calculus intuition",
    "Derivatives and gradients, and how gradient descent finds good answers."
   ],
   [
    "Probability",
    "Events, conditional probability, Bayes rule and common distributions."
   ],
   [
    "Descriptive statistics",
    "Mean, median, variance, standard deviation and correlation."
   ],
   [
    "Inference basics",
    "Sampling, confidence intervals and hypothesis tests, interpreted carefully."
   ]
  ]
 },
 "artificial-intelligence:03": {
  "evidence": "Notebook report with cleaning steps and findings",
  "objective": "Load, clean, explore and visualise real data.",
  "practical": [
   "Clean a messy dataset and document each step",
   "Produce an exploratory analysis report with charts"
  ],
  "tools": "",
  "topics": [
   [
    "NumPy",
    "Arrays, vectorised operations and basic linear algebra in code."
   ],
   [
    "pandas",
    "DataFrames, selecting, filtering, grouping, merging and reshaping."
   ],
   [
    "Data cleaning",
    "Missing values, duplicates, outliers and wrong data types."
   ],
   [
    "Visualisation",
    "Matplotlib and Seaborn charts, and choosing the right chart for a question."
   ],
   [
    "Exploratory analysis",
    "Asking questions of data and summarising findings clearly."
   ],
   [
    "SQL basics",
    "Selecting, filtering, joining and aggregating data from a database."
   ]
  ]
 },
 "artificial-intelligence:04": {
  "evidence": "Notebook with model comparison and written conclusions",
  "objective": "Build your first machine learning models and understand how they learn.",
  "practical": [
   "Predict house prices with regression",
   "Classify customer data with at least three algorithms and compare them"
  ],
  "tools": "",
  "topics": [
   [
    "Types of learning",
    "Supervised, unsupervised and reinforcement learning overview."
   ],
   [
    "Regression",
    "Linear regression, regularisation and predicting numbers."
   ],
   [
    "Classification",
    "Logistic regression, decision trees, random forests, k-NN and SVM overview."
   ],
   [
    "Clustering and reduction",
    "k-means clustering and PCA for dimensionality reduction."
   ],
   [
    "scikit-learn workflow",
    "Train and test split, pipelines and reusable model code."
   ]
  ]
 },
 "artificial-intelligence:05": {
  "evidence": "Experiment log showing baseline, changes and results",
  "objective": "Judge whether a model is actually good, and improve it.",
  "practical": [
   "Improve a baseline model and report the change in metrics",
   "Find and fix a deliberate data leakage problem"
  ],
  "tools": "",
  "topics": [
   [
    "Metrics",
    "Accuracy, precision, recall, F1, ROC-AUC, RMSE and R-squared."
   ],
   [
    "Overfitting and underfitting",
    "Bias and variance, learning curves and how to spot each problem."
   ],
   [
    "Validation",
    "Cross-validation and avoiding data leakage."
   ],
   [
    "Feature engineering",
    "Encoding, scaling, feature selection and handling imbalanced data."
   ],
   [
    "Tuning",
    "Grid search, random search and tracking experiments."
   ]
  ]
 },
 "artificial-intelligence:06": {
  "evidence": "Training notebook with curves and a short analysis",
  "objective": "Understand and train neural networks.",
  "practical": [
   "Train a neural network on an image or tabular dataset",
   "Compare two architectures and explain the difference"
  ],
  "tools": "",
  "topics": [
   [
    "Neural network basics",
    "Neurons, layers, activation functions and loss functions."
   ],
   [
    "Training",
    "Backpropagation, optimisers, learning rate, batch size and epochs."
   ],
   [
    "Frameworks",
    "Building models in PyTorch or Keras."
   ],
   [
    "Regularisation",
    "Dropout, early stopping and normalisation."
   ],
   [
    "Architectures overview",
    "CNNs, recurrent networks and the idea of attention."
   ],
   [
    "Practical training",
    "Using a GPU and tracking experiments."
   ]
  ]
 },
 "artificial-intelligence:07": {
  "evidence": "Notebook and a short comparison of classic and transformer approaches",
  "objective": "Work with text data and understand how modern language models are built.",
  "practical": [
   "Build a text classifier",
   "Build a semantic search over a small document set"
  ],
  "tools": "",
  "topics": [
   [
    "Text preprocessing",
    "Tokenisation, cleaning and turning text into numbers."
   ],
   [
    "Classic NLP",
    "Bag of words, TF-IDF and sentiment classification."
   ],
   [
    "Embeddings",
    "Word and sentence embeddings and similarity search."
   ],
   [
    "Transformers",
    "Attention, encoder and decoder models and pretrained models."
   ],
   [
    "Using pretrained models",
    "Hugging Face pipelines and fine-tuning overview."
   ],
   [
    "Evaluating text models",
    "Metrics and human review for language tasks."
   ]
  ]
 },
 "artificial-intelligence:08": {
  "evidence": "Working demo, prompt set and evaluation notes",
  "objective": "Build practical applications with large language models.",
  "practical": [
   "Build a question-answering assistant over your own documents",
   "Write a test set and measure how often it answers correctly"
  ],
  "tools": "",
  "topics": [
   [
    "How LLMs work",
    "Tokens, context window, sampling and limitations such as hallucination."
   ],
   [
    "Prompt engineering",
    "Clear instructions, examples, structured output and system prompts."
   ],
   [
    "Retrieval-augmented generation",
    "Embeddings, vector search, chunking and grounding answers in documents."
   ],
   [
    "Tools and agents",
    "Function calling, simple workflows and guardrails."
   ],
   [
    "Building applications",
    "API calls, a simple chat interface, cost and latency."
   ],
   [
    "Evaluating outputs",
    "Test sets, human review and failure analysis."
   ]
  ]
 },
 "artificial-intelligence:09": {
  "evidence": "Notebook, demo and error analysis",
  "objective": "Teach computers to understand images.",
  "practical": [
   "Fine-tune a pretrained model on a custom image set",
   "Build a simple object detection demo"
  ],
  "tools": "",
  "topics": [
   [
    "Image basics",
    "Pixels, colour channels and preprocessing."
   ],
   [
    "Convolutional networks",
    "Convolution, pooling and transfer learning."
   ],
   [
    "Vision tasks",
    "Classification, object detection and segmentation overview."
   ],
   [
    "Data augmentation",
    "Making small datasets go further."
   ],
   [
    "Practical tools",
    "OpenCV and pretrained models."
   ],
   [
    "Limits and bias",
    "Where vision systems fail and why."
   ]
  ]
 },
 "artificial-intelligence:10": {
  "evidence": "Repository with API, Dockerfile and deployment notes",
  "objective": "Take a model out of the notebook and make it usable.",
  "practical": [
   "Serve a trained model through an API",
   "Containerise the API and run it on another machine"
  ],
  "tools": "",
  "topics": [
   [
    "Packaging",
    "Saving models, managing environments and requirements files."
   ],
   [
    "Serving predictions",
    "Building an API with FastAPI or Flask."
   ],
   [
    "Containers",
    "Docker basics for repeatable deployment."
   ],
   [
    "Versioning",
    "Tracking code, data and model versions."
   ],
   [
    "Monitoring",
    "Latency, errors and data drift."
   ],
   [
    "Cloud deployment overview",
    "Hosting an API and basic automated deployment."
   ]
  ]
 },
 "artificial-intelligence:11": {
  "evidence": "Model card and threat model",
  "objective": "Build AI that is fair, private, secure and accountable.",
  "practical": [
   "Run a bias check on a model and report the results",
   "Threat-model a simple LLM application"
  ],
  "tools": "",
  "topics": [
   [
    "Bias and fairness",
    "How bias enters data and models, and how to test for it."
   ],
   [
    "Privacy",
    "Personal data, data minimisation and awareness of the DPDP Act."
   ],
   [
    "AI security",
    "Prompt injection, data poisoning, model theft and adversarial examples."
   ],
   [
    "Explainability",
    "Making model decisions understandable to users."
   ],
   [
    "Governance",
    "Model cards, documentation, human oversight and acceptable use policies."
   ]
  ]
 },
 "artificial-intelligence:12": {
  "evidence": "Final project repository, report and presentation",
  "objective": "Bring everything together in one portfolio project.",
  "practical": [
   "Complete an end-to-end AI project from data to deployed demo"
  ],
  "tools": "",
  "topics": [
   [
    "Problem and data plan",
    "Choose a real problem and plan the data you need."
   ],
   [
    "Build and evaluate",
    "Train, test and improve your solution."
   ],
   [
    "Deploy a demo",
    "Make the project usable by someone else."
   ],
   [
    "Documentation",
    "README, model card and a short report."
   ],
   [
    "Present and defend",
    "Demo, panel questions and a viva."
   ],
   [
    "Career readiness",
    "Portfolio, CV and mock interview practice."
   ]
  ]
 },
 "cloud-computing:01": {
  "evidence": "Glossary and three diagrams",
  "objective": "Understand what cloud computing is, why businesses use it and how responsibility is shared.",
  "practical": [
   "Create a cloud vocabulary glossary and draw a simple on-premises, cloud-only and hybrid architecture"
  ],
  "tools": "",
  "topics": [
   [
    "Core concepts",
    "On-premises vs cloud; public, private, hybrid and multi-cloud; IaaS, PaaS, SaaS and serverless; elasticity, scalability, measured service, resource pooling and on-demand self-service."
   ],
   [
    "Business and technical drivers",
    "Capital expenditure vs operational expenditure; speed to provision; global reach; resilience; experimentation; governance; vendor lock-in; latency, compliance and data residency."
   ],
   [
    "Shared responsibility",
    "The provider secures the cloud infrastructure; the customer remains responsible for responsibilities that vary by service, including identities, data, configurations, endpoints and application security."
   ],
   [
    "Provider overview",
    "AWS, Microsoft Azure and Google Cloud: compare global infrastructure, identity, compute, storage, networking, databases, monitoring, security and pricing concepts without assuming services are identical."
   ]
  ]
 },
 "cloud-computing:02": {
  "evidence": "Service troubleshooting note",
  "objective": "Build the server and operating system foundation you need before using cloud resources.",
  "practical": [
   "Create a Linux VM locally or in a sandbox, configure a non-root user, install a web server, inspect logs, use SSH, and document resource usage"
  ],
  "tools": "",
  "topics": [
   [
    "Server fundamentals",
    "CPU, RAM, storage, NICs, RAID concepts, firmware, rack servers, hypervisors, capacity and performance bottlenecks."
   ],
   [
    "Operating systems",
    "Processes, services, filesystems, permissions, logs, package managers, patching, users/groups and resource monitoring."
   ],
   [
    "Linux essentials",
    "Filesystem navigation, grep/find, pipes, redirection, permissions, sudo, systemctl, journalctl, SSH, environment variables, cron and shell scripting basics."
   ],
   [
    "Windows Server awareness",
    "RDP, services, Event Viewer, local users/groups, updates, firewall and PowerShell introduction."
   ],
   [
    "Virtualization",
    "Type 1 vs Type 2 hypervisors, virtual machines, virtual CPUs, memory allocation, virtual disks, snapshots, templates, images and the difference between snapshots and backups."
   ],
   [
    "Containers preview",
    "Images, containers, registries, isolation, portability and why containers are not the same as virtual machines."
   ]
  ]
 },
 "cloud-computing:03": {
  "evidence": "Subnet table and troubleshooting log",
  "objective": "Learn the networking concepts every cloud engineer relies on, from addressing to DNS.",
  "practical": [
   "Design a CIDR plan for a two-tier application, identify allowed ports, test DNS, and troubleshoot a deliberately incorrect route or firewall rule"
  ],
  "tools": "",
  "topics": [
   [
    "Models and addressing",
    "OSI and TCP/IP models; Ethernet; IPv4/IPv6; public/private addresses; CIDR and subnet masks; default gateways; ARP and ICMP."
   ],
   [
    "Subnetting",
    "Network/broadcast addresses, usable ranges, route summarization, VLSM concepts and planning non-overlapping subnets."
   ],
   [
    "Protocols and ports",
    "DNS 53, DHCP 67/68, HTTP 80, HTTPS 443, SSH 22, RDP 3389, SMTP 25/587, NTP 123, database ports only when required."
   ],
   [
    "Routing and switching",
    "MAC vs IP, VLAN concepts, switching, routing tables, static/dynamic routing overview, NAT, PAT, default route and asymmetric routing."
   ],
   [
    "Name resolution and delivery",
    "DNS records, TTL, recursive resolution, DHCP leases, TLS certificates, HTTP request flow and troubleshooting with ping, traceroute, nslookup/dig, curl and netstat/ss."
   ],
   [
    "Security fundamentals",
    "Firewalls, security groups, network ACLs, VPN, bastion/jump host, segmentation, least exposure and zero-trust principles."
   ]
  ]
 },
 "cloud-computing:04": {
  "evidence": "Resilient architecture diagrams",
  "objective": "Learn to design a cloud solution instead of only clicking through a portal.",
  "practical": [
   "Design a resilient web application across two availability zones with public entry, private application tier, database tier, monitoring and backups"
  ],
  "tools": "",
  "topics": [
   [
    "Global infrastructure",
    "Regions, availability zones/zones, edge locations/points of presence, data centres and regional service availability. Names and capabilities differ by provider."
   ],
   [
    "Architecture principles",
    "Loose coupling, statelessness, horizontal scaling, automation, managed services, design for failure, observability, security by design and cost awareness."
   ],
   [
    "Reliability concepts",
    "High availability vs disaster recovery; RTO, RPO, fault domains, recovery strategies, backup vs replication, active-active vs active-passive."
   ],
   [
    "Well-Architected thinking",
    "Operational excellence, security, reliability, performance efficiency, cost optimization and sustainability; compare the provider frameworks as they evolve."
   ],
   [
    "Design documentation",
    "Context diagram, logical architecture, data flow, network diagram, trust boundaries, assumptions, risks, service selection and bill-of-materials estimate."
   ]
  ]
 },
 "cloud-computing:05": {
  "evidence": "Secure account checklist",
  "objective": "Set up accounts safely and build good administrative habits before any lab.",
  "practical": [
   "Create a sandbox resource group/project, apply tags and a budget alert, review IAM policy examples, and document a joiner-mover-leaver process"
  ],
  "tools": "",
  "topics": [
   [
    "Account structure",
    "AWS accounts/organizations, Azure tenants/subscriptions/resource groups, Google Cloud organizations/folders/projects; understand scopes and isolation."
   ],
   [
    "Identity basics",
    "Users, groups, roles, service identities, federation, single sign-on, MFA, temporary credentials and lifecycle management."
   ],
   [
    "Access control",
    "RBAC, policy-based permissions, least privilege, role assumption, privileged access, access reviews and separation of duties."
   ],
   [
    "Governance",
    "Naming standards, tags/labels, resource hierarchy, allowed regions, policy enforcement, quotas, budgets, audit trails and change management."
   ],
   [
    "Secure onboarding",
    "Use individual accounts, enable MFA, avoid root/global administrator use for daily work, never share keys, and remove lab resources after class."
   ]
  ]
 },
 "cloud-computing:06": {
  "evidence": "Deployed and removed web server",
  "objective": "Compare virtual machines, autoscaling and serverless, and know when to choose each.",
  "practical": [
   "Deploy a small web server on a VM or approved lab sandbox; restrict inbound access, monitor CPU, create a health-check plan and remove resources"
  ],
  "tools": "",
  "topics": [
   [
    "Virtual machines",
    "Instance families/sizes, CPU and memory selection, images, boot disks, metadata, SSH/RDP, initialization scripts, lifecycle and pricing models."
   ],
   [
    "Autoscaling and load balancing",
    "Health checks, scaling signals, horizontal vs vertical scaling, target groups/backends, session persistence and capacity limits."
   ],
   [
    "Serverless",
    "Functions, event triggers, execution limits, cold starts, stateless design, retries, idempotency and dead-letter handling."
   ],
   [
    "Application hosting",
    "Web servers, application runtimes, managed app platforms, containers and when Kubernetes is or is not necessary."
   ],
   [
    "Operations",
    "Patching, golden images, configuration drift, backups, monitoring, access paths and shutdown schedules."
   ]
  ]
 },
 "cloud-computing:07": {
  "evidence": "Private storage lab and restore proof",
  "objective": "Compare storage and database types and protect data throughout its lifecycle.",
  "practical": [
   "Create a private object-storage bucket, upload sample files, apply lifecycle/versioning settings where available, and test access without making data public"
  ],
  "tools": "",
  "topics": [
   [
    "Object storage",
    "Buckets/containers, objects, keys, metadata, versioning, lifecycle policies, replication, static website hosting and public-access safeguards."
   ],
   [
    "Block and file storage",
    "Persistent VM disks, snapshots, shared file systems, performance tiers, IOPS, throughput and attachment constraints."
   ],
   [
    "Database choices",
    "Relational SQL vs NoSQL; managed relational databases; key-value/document stores; caches; analytics warehouses and search indexes."
   ],
   [
    "Data protection",
    "Encryption at rest/in transit, key management, access policy, retention, immutability, deletion controls, backup testing and data classification."
   ],
   [
    "Durability and availability",
    "Replication options, regional constraints, consistency models, recovery point, recovery time and restore validation."
   ]
  ]
 },
 "cloud-computing:08": {
  "evidence": "Three-tier network plan and fault report",
  "objective": "Turn your networking knowledge into a cloud network design.",
  "practical": [
   "Design a three-tier network with only the web tier exposed; document routes and allowed flows; troubleshoot a simulated blocked application port"
  ],
  "tools": "",
  "topics": [
   [
    "Virtual networks",
    "VPC/VNet, address planning, public/private subnets, route tables, internet gateways, NAT gateways and cloud-native routing."
   ],
   [
    "Network security",
    "Security groups/NSGs, network ACLs, firewall rules, flow logs, private endpoints and service endpoints."
   ],
   [
    "Hybrid connectivity",
    "Site-to-site VPN, client VPN, dedicated private circuits, BGP concept, DNS forwarding, IP overlap and latency considerations."
   ],
   [
    "Load balancing and edge",
    "Layer 4 vs Layer 7 load balancers, reverse proxies, CDN, WAF, DNS routing and health checks."
   ],
   [
    "Troubleshooting flow",
    "Confirm DNS, address, route, security policy, listener, target health, OS firewall and application process in order."
   ]
  ]
 },
 "cloud-computing:09": {
  "evidence": "Threat model and remediation plan",
  "objective": "Make security part of every design decision, not an afterthought.",
  "practical": [
   "Review an intentionally unsafe architecture and create a prioritized remediation plan; build a simple incident-response tabletop scenario"
  ],
  "tools": "",
  "topics": [
   [
    "Threats and controls",
    "Misconfiguration, exposed storage, credential theft, vulnerable images, insecure APIs, ransomware, phishing, supply-chain risk and accidental deletion."
   ],
   [
    "Identity-first security",
    "MFA, least privilege, short-lived credentials, workload identity, secrets management, key rotation and privileged access monitoring."
   ],
   [
    "Network and workload security",
    "Segmentation, host hardening, patching, vulnerability scanning, endpoint protection, WAF, DDoS protection and private service access."
   ],
   [
    "Data security",
    "Classification, encryption, KMS/HSM concepts, TLS, tokenization/masking, retention, data residency, backups and secure deletion."
   ],
   [
    "Detection and response",
    "Audit logs, alerting, incident severity, containment, evidence preservation, escalation, post-incident review and recovery validation."
   ],
   [
    "Compliance awareness",
    "Understand applicable laws, contractual obligations, sector requirements and provider attestations; a cloud service does not automatically make a customer compliant."
   ]
  ]
 },
 "cloud-computing:10": {
  "evidence": "Dashboard, alerts and runbooks",
  "objective": "Learn day-to-day operations: knowing what is happening and responding safely.",
  "practical": [
   "Create a dashboard/alert in a provider sandbox or use local Linux logs; write a runbook for high CPU, unavailable web service and full disk"
  ],
  "tools": "",
  "topics": [
   [
    "Observability",
    "Metrics, logs, traces, events, dashboards, health checks, synthetic monitoring and service-level indicators/objectives."
   ],
   [
    "Operational alerts",
    "Threshold vs anomaly alerts, actionable alerts, severity, runbooks, escalation paths, alert fatigue and maintenance windows."
   ],
   [
    "Troubleshooting method",
    "Define impact, reproduce, inspect recent changes, collect evidence, isolate layers, test one hypothesis at a time and verify recovery."
   ],
   [
    "Operations routines",
    "Patching, capacity reviews, backup checks, access reviews, cost review, certificate expiry checks, incident drills and documentation."
   ],
   [
    "Reliability management",
    "SLA vs SLO vs SLI, error budgets concept, availability measurement and incident postmortems without blame."
   ]
  ]
 },
 "cloud-computing:11": {
  "evidence": "Wave plan and risk register",
  "objective": "Plan the safe movement of systems and data from local infrastructure to the cloud.",
  "practical": [
   "Create a migration assessment for a small business web app and produce a wave plan, risk register, rollback criteria and estimated dependencies"
  ],
  "tools": "",
  "topics": [
   [
    "Discovery and assessment",
    "Inventory servers, applications, dependencies, licences, network links, data size, compliance, downtime tolerance and technical debt."
   ],
   [
    "Migration strategies",
    "Rehost, replatform, refactor/re-architect, repurchase, retain, retire and relocate; choose based on business value, risk and effort."
   ],
   [
    "Migration planning",
    "Landing zone, identity, network connectivity, data transfer, pilot, cutover, rollback, validation, communication and ownership."
   ],
   [
    "Data migration",
    "Transfer methods, bandwidth calculation, encryption, integrity checks, database replication, change freeze and reconciliation."
   ],
   [
    "Hybrid architecture",
    "Identity integration, DNS, routing, monitoring, backup policy, operational responsibility and avoiding overlapping IP ranges."
   ]
  ]
 },
 "cloud-computing:12": {
  "evidence": "Validated template and pull request",
  "objective": "Learn repeatable, reviewable infrastructure delivery with code.",
  "practical": [
   "Write or inspect a small IaC template that creates a network or storage resource; run plan/validation, review changes and destroy lab resources"
  ],
  "tools": "",
  "topics": [
   [
    "Infrastructure as Code",
    "Declarative vs imperative approaches, templates, state, variables, outputs, modules, drift detection, idempotency and version control."
   ],
   [
    "Tools",
    "Terraform fundamentals, AWS CloudFormation, Azure Bicep/ARM and Google Cloud deployment tooling; teach one primary tool deeply and others conceptually."
   ],
   [
    "Automation",
    "CLI basics, scripts, cloud SDKs, configuration management, scheduled jobs, reusable templates and safe secrets handling."
   ],
   [
    "Git workflow",
    "Repository, commits, branches, pull requests, code review, README, environment variables, release tags and rollback."
   ],
   [
    "CI/CD introduction",
    "Build, test, scan, approve, deploy, verify and rollback; separate development/test/production and protect production credentials."
   ]
  ]
 },
 "cloud-computing:13": {
  "evidence": "Container demo and scan summary",
  "objective": "Get a practical foundation in containers and modern deployment.",
  "practical": [
   "Build and run a small container locally; optionally deploy to a managed sandbox only if instructor budget and permissions allow"
  ],
  "tools": "",
  "topics": [
   [
    "Containers",
    "Dockerfile, image layers, registry, ports, volumes, environment variables, health checks and image scanning."
   ],
   [
    "Orchestration",
    "Pods, deployments, replicas, services, ingress, config maps, secrets, namespaces, resource requests/limits and probes."
   ],
   [
    "Managed Kubernetes",
    "Control plane vs worker nodes, managed responsibility boundaries, cluster access, network policies, upgrades and cost."
   ],
   [
    "Cloud-native patterns",
    "Externalized configuration, stateless services, queues, retries, API gateways, caching and graceful shutdown."
   ],
   [
    "Security and operations",
    "Non-root containers, minimal images, image provenance, secret handling, least privilege, logs, metrics and deployment rollback."
   ]
  ]
 },
 "cloud-computing:14": {
  "evidence": "Application data-flow diagram",
  "objective": "Connect infrastructure to the applications and data that businesses actually run.",
  "practical": [
   "Design an API-to-database flow with a queue for background work; identify secrets, failure points, retries and monitoring"
  ],
  "tools": "",
  "topics": [
   [
    "Database operations",
    "Backups, restore tests, replication, read replicas, connection limits, performance basics, patch windows and access separation."
   ],
   [
    "APIs and integration",
    "REST, HTTP methods/status codes, JSON, authentication tokens, API gateway, rate limiting, retries, timeouts and idempotency."
   ],
   [
    "Messaging",
    "Queues, pub/sub, event buses, dead-letter queues, ordering, duplicate delivery and eventual consistency."
   ],
   [
    "Analytics foundations",
    "ETL/ELT, data lake vs warehouse, batch vs streaming, cataloguing, governance and lifecycle cost."
   ],
   [
    "AI service awareness",
    "Managed AI/ML services, model endpoints, data privacy, access controls, usage cost and the difference between calling a hosted model and training one."
   ]
  ]
 },
 "cloud-computing:15": {
  "evidence": "Recovery runbook and restore timing",
  "objective": "Learn to recover services and data, not just deploy them.",
  "practical": [
   "Create a recovery runbook for a sample business application with stated RTO/RPO; conduct a tabletop exercise and identify untested assumptions"
  ],
  "tools": "",
  "topics": [
   [
    "Terminology",
    "Backup, snapshot, replication, archive, high availability, disaster recovery, business continuity, RTO and RPO."
   ],
   [
    "Recovery patterns",
    "Restore from backup, pilot light, warm standby, active-passive and active-active; cost and complexity trade-offs."
   ],
   [
    "Backup design",
    "Scope, frequency, retention, encryption, immutable copies, separate accounts, access control, cross-region copies where appropriate and restore testing."
   ],
   [
    "Failure scenarios",
    "Accidental deletion, ransomware, region outage, corrupted database, credential compromise and failed deployment."
   ],
   [
    "Testing",
    "Tabletop exercises, restore drills, application consistency, dependency order, evidence collection and lessons learned."
   ]
  ]
 },
 "cloud-computing:16": {
  "evidence": "Cost estimate and comparison",
  "objective": "Make cloud costs visible and avoid unexpected bills.",
  "practical": [
   "Create a sample monthly cost estimate and identify five optimization actions; compare two architecture options by cost and operational effort"
  ],
  "tools": "",
  "topics": [
   [
    "Pricing dimensions",
    "Compute time, storage capacity, requests, data transfer/egress, managed-service tiers, licences, support plans and regional pricing."
   ],
   [
    "Cost controls",
    "Budgets, alerts, tags/labels, cost allocation, rightsizing, autoscaling, reserved/committed use options, spot/preemptible capacity and shutdown schedules."
   ],
   [
    "Cost trade-offs",
    "Availability vs cost, managed services vs self-managed, data locality, overprovisioning, idle resources, storage lifecycle and egress."
   ],
   [
    "FinOps workflow",
    "Inform, optimize and operate; forecast, measure, assign ownership, review anomalies and track savings without compromising reliability/security."
   ],
   [
    "Estimation",
    "Estimate monthly hours, instance size, storage, requests, backup copies, data transfer and taxes/FX where applicable; use official calculators."
   ]
  ]
 },
 "cloud-computing:17": {
  "evidence": "Pipeline design and rollback plan",
  "objective": "Learn how development and operations teams work together to release reliably.",
  "practical": [
   "Design a CI/CD pipeline for a static site or simple app; define success criteria, approval gates and rollback steps"
  ],
  "tools": "",
  "topics": [
   [
    "DevOps concepts",
    "Shared ownership, small changes, automation, feedback loops, observability, change control and continuous improvement."
   ],
   [
    "Version control",
    "Git status/add/commit/push/pull, branches, merge conflicts, code review and meaningful commit messages."
   ],
   [
    "Pipeline stages",
    "Lint, unit test, dependency scan, build artifact, image scan, approval, deployment, smoke test and rollback."
   ],
   [
    "Release strategies",
    "Rolling, blue-green, canary, feature flags, database migration planning and backwards compatibility."
   ],
   [
    "Secrets and permissions",
    "Use managed secret stores or protected CI variables; never commit passwords, tokens, private keys or cloud credentials."
   ]
  ]
 },
 "cloud-computing:18": {
  "evidence": "Portfolio, viva and certification plan",
  "objective": "Turn your skills into evidence of ability and prepare for an entry-level role.",
  "practical": [
   "Assemble a portfolio entry for the capstone, rehearse a ten-minute presentation and five-minute viva with a peer panel, and produce an individual certification and next-steps plan"
  ],
  "tools": "",
  "topics": [
   [
    "Role pathways",
    "Cloud support/operations, cloud administrator, cloud network engineer, cloud security analyst, solutions architect (longer-term), DevOps/cloud engineer and data/AI platform roles."
   ],
   [
    "Portfolio standards",
    "Architecture diagram, README, bill of materials, deployment steps, security checklist, screenshots, test evidence, teardown proof and lessons learned."
   ],
   [
    "Capstone brief",
    "Design a secure small-business application environment: public entry, private app tier, managed database or data store, identity controls, monitoring, backup, budget alert and recovery plan."
   ],
   [
    "Review and viva",
    "Learner explains architecture choices, threat model, network paths, cost assumptions, failure handling and what they would improve."
   ],
   [
    "Exam preparation",
    "Use the current official exam guide, objective mapping, timed practice, error log, spaced review and hands-on reinforcement. Never teach leaked questions."
   ]
  ]
 },
 "cybersecurity:01": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Build an asset inventory, fix three planted faults, write a helpdesk ticket"
  ],
  "tools": "VirtualBox or VMware, Windows and Ubuntu images.",
  "topics": [
   [
    "Computer hardware and the boot process",
    ""
   ],
   [
    "Operating system basics and troubleshooting",
    ""
   ],
   [
    "Virtual machines",
    ""
   ],
   [
    "Common threats (phishing, ransomware, fraud, deepfakes)",
    ""
   ],
   [
    "Safe habits (MFA, backups, password managers)",
    ""
   ],
   [
    "Helpdesk tickets and ITIL ideas",
    ""
   ]
  ]
 },
 "cybersecurity:02": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Build a three-site network, subnet a /22, annotate a packet capture; produce a network diagram"
  ],
  "tools": "Packet Tracer, GNS3, Wireshark. Prepares for CCNA (optional).",
  "topics": [
   [
    "OSI and TCP/IP",
    ""
   ],
   [
    "IPv4 and IPv6",
    ""
   ],
   [
    "Subnetting and CIDR",
    ""
   ],
   [
    "VLANs",
    ""
   ],
   [
    "Routing (static, RIP, OSPF)",
    ""
   ],
   [
    "NAT",
    ""
   ],
   [
    "DHCP",
    ""
   ],
   [
    "DNS",
    ""
   ],
   [
    "ACLs",
    ""
   ],
   [
    "Common protocols",
    ""
   ],
   [
    "Wi-Fi security",
    ""
   ],
   [
    "Troubleshooting",
    ""
   ],
   [
    "First use of Nmap and Wireshark",
    ""
   ]
  ]
 },
 "cybersecurity:03": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Harden an Ubuntu VM, write a failed-login report script; hardening checklist"
  ],
  "tools": "Ubuntu Server, Kali Linux, OverTheWire Bandit.",
  "topics": [
   [
    "File system",
    ""
   ],
   [
    "Pipes and text tools",
    ""
   ],
   [
    "Users",
    ""
   ],
   [
    "Groups and permissions",
    ""
   ],
   [
    "Sudo",
    ""
   ],
   [
    "Processes and services",
    ""
   ],
   [
    "Cron",
    ""
   ],
   [
    "Packages",
    ""
   ],
   [
    "SSH",
    ""
   ],
   [
    "Logs",
    ""
   ],
   [
    "Ufw and iptables",
    ""
   ],
   [
    "Bash scripting",
    ""
   ],
   [
    "A tour of Kali Linux",
    ""
   ]
  ]
 },
 "cybersecurity:04": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Build a domain with three workstations and apply a group policy baseline; analyse failed sign-in events"
  ],
  "tools": "Windows Server 2022 evaluation, PowerShell, Sysmon.",
  "topics": [
   [
    "Windows architecture",
    ""
   ],
   [
    "Services",
    ""
   ],
   [
    "Event Viewer",
    ""
   ],
   [
    "PowerShell",
    ""
   ],
   [
    "NTFS permissions",
    ""
   ],
   [
    "UAC",
    ""
   ],
   [
    "BitLocker",
    ""
   ],
   [
    "Firewall",
    ""
   ],
   [
    "Windows Server roles",
    ""
   ],
   [
    "Active Directory and group policy",
    ""
   ],
   [
    "Kerberos and LDAP basics",
    ""
   ],
   [
    "Entra ID",
    ""
   ],
   [
    "MFA and single sign-on",
    ""
   ]
  ]
 },
 "cybersecurity:05": {
  "evidence": "",
  "objective": "",
  "practical": [
   "A log parser, an IP validator, a multi-threaded port scanner for the lab, and a password checker, all on GitHub"
  ],
  "tools": "Python 3, VS Code, Git, SQLite.",
  "topics": [
   [
    "Python (data types, functions, files, JSON, exceptions)",
    ""
   ],
   [
    "Regular expressions",
    ""
   ],
   [
    "Sockets and HTTP requests",
    ""
   ],
   [
    "Bash and PowerShell",
    ""
   ],
   [
    "Git",
    ""
   ],
   [
    "SQL basics",
    ""
   ],
   [
    "Secret management",
    ""
   ],
   [
    "C basics (memory and why overflows happen)",
    ""
   ]
  ]
 },
 "cybersecurity:06": {
  "evidence": "",
  "objective": "",
  "practical": [
   "A risk register for a fictional business, a login portal threat model, rules of engagement for a lab test"
  ],
  "tools": "MITRE ATT&CK, diagrams.net. Matches the ISC2 CC exam topics.",
  "topics": [
   [
    "The CIA triad and related ideas",
    ""
   ],
   [
    "Risk terms",
    ""
   ],
   [
    "Defence in depth",
    ""
   ],
   [
    "Least privilege",
    ""
   ],
   [
    "Zero trust basics",
    ""
   ],
   [
    "Threat actors and the kill chain",
    ""
   ],
   [
    "Cyber crime and malware types",
    ""
   ],
   [
    "Asset classification",
    ""
   ],
   [
    "Threat modelling",
    ""
   ],
   [
    "Ethics and consent",
    ""
   ]
  ]
 },
 "cybersecurity:07": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Draft a test authorisation letter, an acceptable-use policy and an escalation matrix; sign the ethical-use agreement. Teach this as awareness, not legal advice, from current official sources"
  ],
  "tools": "",
  "topics": [
   [
    "The IT Act",
    ""
   ],
   [
    "Cyber crime offences",
    ""
   ],
   [
    "Electronic evidence",
    ""
   ],
   [
    "The DPDP Act",
    ""
   ],
   [
    "Reporting through cybercrime.gov.in",
    ""
   ],
   [
    "Helpline 1930 and CERT-In",
    ""
   ],
   [
    "Authorisation",
    ""
   ],
   [
    "Responsible disclosure and bug bounty rules",
    ""
   ]
  ]
 },
 "cybersecurity:08": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Build a private certificate authority and set up HTTPS, inspect a TLS handshake, crack weak hashes in the lab"
  ],
  "tools": "OpenSSL, GnuPG, Hashcat, CyberChef.",
  "topics": [
   [
    "Symmetric and asymmetric encryption",
    ""
   ],
   [
    "AES modes",
    ""
   ],
   [
    "RSA and Diffie-Hellman",
    ""
   ],
   [
    "Hashing and password storage",
    ""
   ],
   [
    "Digital signatures",
    ""
   ],
   [
    "Certificates",
    ""
   ],
   [
    "TLS",
    ""
   ],
   [
    "Disk and email encryption",
    ""
   ],
   [
    "Common mistakes",
    ""
   ]
  ]
 },
 "cybersecurity:09": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Build a DMZ and a site-to-site VPN, write IDS rules, harden a server and score it; hardening checklist with before and after proof"
  ],
  "tools": "FortiGate or pfSense, Snort, Wireshark, Lynis, Wazuh. Prepares for Fortinet NSE 1 to 3 and Security+.",
  "topics": [
   [
    "Network attacks and defences",
    ""
   ],
   [
    "Firewalls and DMZ design",
    ""
   ],
   [
    "VPNs",
    ""
   ],
   [
    "IDS and IPS with Snort and Suricata",
    ""
   ],
   [
    "Network access control",
    ""
   ],
   [
    "Windows and Linux hardening with CIS benchmarks",
    ""
   ],
   [
    "Patching",
    ""
   ],
   [
    "Antivirus versus EDR",
    ""
   ],
   [
    "Email security (SPF, DKIM, DMARC)",
    ""
   ],
   [
    "Backups",
    ""
   ]
  ]
 },
 "cybersecurity:10": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Set up single sign-on with MFA in Keycloak, trace a Kerberos login, run an access review"
  ],
  "tools": "Keycloak, Entra ID free tier, Wireshark.",
  "topics": [
   [
    "Authentication factors",
    ""
   ],
   [
    "DAC",
    ""
   ],
   [
    "MAC",
    ""
   ],
   [
    "RBAC and ABAC",
    ""
   ],
   [
    "Kerberos",
    ""
   ],
   [
    "SAML",
    ""
   ],
   [
    "OAuth and OpenID Connect",
    ""
   ],
   [
    "Single sign-on",
    ""
   ],
   [
    "Conditional access",
    ""
   ],
   [
    "Privileged and service accounts",
    ""
   ],
   [
    "Just-in-time access",
    ""
   ]
  ]
 },
 "cybersecurity:11": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Scan lab targets, validate findings by hand, rank them, write a plan and retest"
  ],
  "tools": "Nmap, Nessus Essentials, OpenVAS, Lynis.",
  "topics": [
   [
    "Asset discovery",
    ""
   ],
   [
    "Authenticated and unauthenticated scans",
    ""
   ],
   [
    "CVE",
    ""
   ],
   [
    "CWE and CVSS",
    ""
   ],
   [
    "Prioritisation by risk",
    ""
   ],
   [
    "False positives",
    ""
   ],
   [
    "Configuration review",
    ""
   ],
   [
    "Remediation tracking",
    ""
   ],
   [
    "Retesting",
    ""
   ],
   [
    "Report writing",
    ""
   ]
  ]
 },
 "cybersecurity:12": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Reproduce and fix five flaws in a local vulnerable app, review an API specification; a developer-ready assessment report"
  ],
  "tools": "Juice Shop, DVWA, Burp Suite Community, OWASP ZAP, Semgrep.",
  "topics": [
   [
    "HTTP",
    ""
   ],
   [
    "Cookies and sessions",
    ""
   ],
   [
    "The OWASP Top 10",
    ""
   ],
   [
    "SQL injection",
    ""
   ],
   [
    "XSS",
    ""
   ],
   [
    "CSRF",
    ""
   ],
   [
    "Access control flaws",
    ""
   ],
   [
    "API security and tokens",
    ""
   ],
   [
    "Secure coding",
    ""
   ],
   [
    "Code review",
    ""
   ],
   [
    "Dependency and secret scanning",
    ""
   ],
   [
    "Security headers and WAFs",
    ""
   ]
  ]
 },
 "cybersecurity:13": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Trace a sample UPI fraud and its reporting steps, audit an app's permissions; give a community awareness talk"
  ],
  "tools": "MobSF, Burp proxy.",
  "topics": [
   [
    "UPI",
    ""
   ],
   [
    "Cards and wallets",
    ""
   ],
   [
    "QR and SIM-swap fraud",
    ""
   ],
   [
    "PCI DSS basics",
    ""
   ],
   [
    "Social media privacy",
    ""
   ],
   [
    "Impersonation and deepfakes",
    ""
   ],
   [
    "Android and iOS security",
    ""
   ],
   [
    "Lost-device steps",
    ""
   ],
   [
    "Awareness sessions",
    ""
   ]
  ]
 },
 "cybersecurity:14": {
  "evidence": "",
  "objective": "",
  "practical": [
   "A scoped test of a vulnerable VM, a fix validated with before and after proof, a peer-reviewed report"
  ],
  "tools": "Nmap, Burp Suite Community, ZAP, Metasploit (lab only).",
  "topics": [
   [
    "Rules of engagement",
    ""
   ],
   [
    "Written authorisation",
    ""
   ],
   [
    "Scope and stop conditions",
    ""
   ],
   [
    "Reconnaissance",
    ""
   ],
   [
    "Enumeration",
    ""
   ],
   [
    "Controlled validation",
    ""
   ],
   [
    "Safe proof of concept",
    ""
   ],
   [
    "Risk rating",
    ""
   ],
   [
    "Remediation advice",
    ""
   ],
   [
    "Retesting",
    ""
   ],
   [
    "PTES and NIST SP 800-115",
    ""
   ],
   [
    "Using AI tools without leaking client data",
    ""
   ]
  ]
 },
 "cybersecurity:15": {
  "evidence": "",
  "objective": "",
  "practical": [
   "One lab per topic on a range of 10 or more targets, ending in a timed 6-hour practical and mock exams (125 questions in 4 hours)"
  ],
  "tools": "Kali, Nmap, Metasploit, Hydra, sqlmap, Aircrack-ng, Burp Suite.",
  "topics": [
   [
    "The CEH v13 areas in nine units: footprinting; scanning",
    ""
   ],
   [
    "Enumeration and vulnerability analysis; system hacking and malware; sniffing",
    ""
   ],
   [
    "Social engineering and DoS; session hijacking and evasion of IDS",
    ""
   ],
   [
    "Firewalls and honeypots; web server",
    ""
   ],
   [
    "Web application and SQL injection attacks; wireless",
    ""
   ],
   [
    "Mobile",
    ""
   ],
   [
    "IoT and OT hacking; cloud and cryptography attacks; AI in attack and defence",
    ""
   ]
  ]
 },
 "cybersecurity:16": {
  "evidence": "",
  "objective": "",
  "practical": [
   "A recon profile of a practice company and an enumerated Windows domain"
  ],
  "tools": "Nmap, Maltego, theHarvester, Recon-ng.",
  "topics": [
   [
    "Search operators",
    ""
   ],
   [
    "WHOIS",
    ""
   ],
   [
    "DNS and certificate transparency",
    ""
   ],
   [
    "Shodan and Censys",
    ""
   ],
   [
    "Host discovery",
    ""
   ],
   [
    "Port",
    ""
   ],
   [
    "Service and OS detection",
    ""
   ],
   [
    "Enumeration of SMB",
    ""
   ],
   [
    "SNMP",
    ""
   ],
   [
    "LDAP",
    ""
   ],
   [
    "NFS",
    ""
   ],
   [
    "SMTP and DNS",
    ""
   ],
   [
    "Attack surface mapping",
    ""
   ]
  ]
 },
 "cybersecurity:17": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Thirty PortSwigger labs, a full Juice Shop test, and one authorised disclosure programme; a bug report graded like a real submission"
  ],
  "tools": "Burp Suite, sqlmap, ffuf, Nuclei, Postman.",
  "topics": [
   [
    "Burp Suite in depth",
    ""
   ],
   [
    "Authentication and session attacks",
    ""
   ],
   [
    "JWT and OAuth flaws",
    ""
   ],
   [
    "SQL",
    ""
   ],
   [
    "NoSQL",
    ""
   ],
   [
    "Command and template injection",
    ""
   ],
   [
    "XXE",
    ""
   ],
   [
    "XSS",
    ""
   ],
   [
    "CSRF",
    ""
   ],
   [
    "CORS",
    ""
   ],
   [
    "IDOR",
    ""
   ],
   [
    "Race conditions",
    ""
   ],
   [
    "SSRF",
    ""
   ],
   [
    "File upload flaws",
    ""
   ],
   [
    "REST and GraphQL testing",
    ""
   ],
   [
    "Bounty scope and report writing",
    ""
   ]
  ]
 },
 "cybersecurity:18": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Audit a lab wireless set-up, test a vulnerable Android app, unpack router firmware, exploit a misconfigured AWS lab"
  ],
  "tools": "Aircrack-ng, MobSF, Frida, Binwalk, CloudGoat, ScoutSuite. Wireless attacks need instructor approval each time.",
  "topics": [
   [
    "WPA2 and WPA3 weaknesses",
    ""
   ],
   [
    "Rogue access points",
    ""
   ],
   [
    "Android and iOS testing",
    ""
   ],
   [
    "Firmware extraction",
    ""
   ],
   [
    "MQTT and Zigbee",
    ""
   ],
   [
    "Cloud attacks (leaked keys, public storage, over-permissive IAM, metadata abuse, container escape)",
    ""
   ]
  ]
 },
 "cybersecurity:19": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Analyse benign samples and pre-made sandbox reports, write a YARA rule, reverse a simple crackme; no live malware on student machines"
  ],
  "tools": "FLARE VM, Ghidra, x64dbg, Any.Run.",
  "topics": [
   [
    "Analysis lab safety",
    ""
   ],
   [
    "Static analysis (hashes, strings, PE format, packers, YARA)",
    ""
   ],
   [
    "Dynamic analysis in sandboxes",
    ""
   ],
   [
    "X86 assembly basics",
    ""
   ],
   [
    "Ghidra and x64dbg",
    ""
   ],
   [
    "Malware families",
    ""
   ],
   [
    "Indicators of compromise",
    ""
   ],
   [
    "Report writing",
    ""
   ]
  ]
 },
 "cybersecurity:20": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Five multi-machine ranges with Active Directory and segmented networks, then a 24-hour practical (or two 12-hour sessions) and a written report within 7 days"
  ],
  "tools": "Metasploit, Sliver, BloodHound, Impacket, NetExec, Chisel, pwntools. High-risk techniques need instructor approval.",
  "topics": [
   [
    "Engagement management and scoping",
    ""
   ],
   [
    "OSINT and attack planning",
    ""
   ],
   [
    "Social engineering tests",
    ""
   ],
   [
    "Web and API tests",
    ""
   ],
   [
    "Perimeter and defence evasion",
    ""
   ],
   [
    "Windows exploitation and privilege escalation",
    ""
   ],
   [
    "Active Directory attacks, including Kerberoasting, pass the hash and delegation abuse",
    ""
   ],
   [
    "Linux exploitation and container breakout",
    ""
   ],
   [
    "Lateral movement and pivoting",
    ""
   ],
   [
    "Binary exploitation, fuzzing and ROP basics",
    ""
   ],
   [
    "IoT and OT tests",
    ""
   ],
   [
    "Scripting for pentesters",
    ""
   ],
   [
    "Report writing and retest",
    ""
   ]
  ]
 },
 "cybersecurity:21": {
  "evidence": "",
  "objective": "",
  "practical": [
   "A phishing simulation on a lab mail server and a red versus blue exercise"
  ],
  "tools": "GoPhish, Atomic Red Team, Caldera.",
  "topics": [
   [
    "Phishing",
    ""
   ],
   [
    "Vishing",
    ""
   ],
   [
    "Pretexting",
    ""
   ],
   [
    "Campaign building against consenting lab users",
    ""
   ],
   [
    "Email authentication",
    ""
   ],
   [
    "Physical test rules",
    ""
   ],
   [
    "Objectives-based red teaming",
    ""
   ],
   [
    "ATT&CK adversary emulation",
    ""
   ],
   [
    "Working with defenders to close detection gaps",
    ""
   ]
  ]
 },
 "cybersecurity:22": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Investigate a synthetic password-spray case, write three detections, run a mock 8-hour shift"
  ],
  "tools": "One platform for the cohort (Splunk, Elastic or Wazuh), Sysmon, TheHive. Prepares for CySA+ or a Splunk user certification.",
  "topics": [
   [
    "SOC tiers and the alert lifecycle",
    ""
   ],
   [
    "Log sources (Windows, Sysmon, Linux, firewall, DNS, proxy, cloud)",
    ""
   ],
   [
    "SIEM ingestion",
    ""
   ],
   [
    "Correlation and dashboards",
    ""
   ],
   [
    "Sigma rules and ATT&CK mapping",
    ""
   ],
   [
    "Triage of phishing",
    ""
   ],
   [
    "Malware and brute-force alerts",
    ""
   ],
   [
    "AI-assisted SOC work with analyst validation",
    ""
   ],
   [
    "Enrichment and simple automation",
    ""
   ]
  ]
 },
 "cybersecurity:23": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Map a fictional incident to ATT&CK, write a Sigma rule, run two hunts"
  ],
  "tools": "MISP, ATT&CK Navigator, Velociraptor, Splunk.",
  "topics": [
   [
    "Threat actors",
    ""
   ],
   [
    "Tactics and techniques",
    ""
   ],
   [
    "The intelligence lifecycle",
    ""
   ],
   [
    "MITRE ATT&CK",
    ""
   ],
   [
    "STIX and TAXII",
    ""
   ],
   [
    "MISP",
    ""
   ],
   [
    "IOC lifecycle",
    ""
   ],
   [
    "Hypothesis-driven hunting",
    ""
   ],
   [
    "Baselining normal behaviour",
    ""
   ]
  ]
 },
 "cybersecurity:24": {
  "evidence": "",
  "objective": "",
  "practical": [
   "A staged ransomware case from alert to recovery, an incident report and a restore test"
  ],
  "tools": "TheHive, Cortex, Velociraptor, backup tools.",
  "topics": [
   [
    "The response lifecycle and NIST SP 800-61",
    ""
   ],
   [
    "Playbooks for ransomware",
    ""
   ],
   [
    "Account compromise",
    ""
   ],
   [
    "Business email compromise and data theft",
    ""
   ],
   [
    "Evidence preservation",
    ""
   ],
   [
    "CERT-In and regulator reporting",
    ""
   ],
   [
    "Business impact analysis",
    ""
   ],
   [
    "Recovery objectives",
    ""
   ],
   [
    "The 3-2-1 backup rule",
    ""
   ],
   [
    "Immutable backups",
    ""
   ],
   [
    "Restore testing",
    ""
   ],
   [
    "Crisis communication",
    ""
   ],
   [
    "Tabletop exercises",
    ""
   ]
  ]
 },
 "cybersecurity:25": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Examine a prepared drive and memory dump, hash the evidence, present a report to a mock panel"
  ],
  "tools": "FTK Imager, Autopsy, Volatility, ExifTool. Prepares for CHFI.",
  "topics": [
   [
    "Forensic principles",
    ""
   ],
   [
    "Imaging and write blockers",
    ""
   ],
   [
    "Chain of custody",
    ""
   ],
   [
    "Disk",
    ""
   ],
   [
    "Memory",
    ""
   ],
   [
    "Network",
    ""
   ],
   [
    "Email and log analysis",
    ""
   ],
   [
    "Timelines",
    ""
   ],
   [
    "Mobile and cloud evidence limits",
    ""
   ],
   [
    "Steganography",
    ""
   ],
   [
    "Forensic reports and electronic evidence rules",
    ""
   ]
  ]
 },
 "cybersecurity:26": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Deploy a small workload securely in a sandbox account with budget alerts, fix a public storage exposure, enable audit logs and tear everything down"
  ],
  "tools": "AWS or Azure free tier, Terraform, ScoutSuite, Prowler.",
  "topics": [
   [
    "Shared responsibility",
    ""
   ],
   [
    "Accounts and subscriptions",
    ""
   ],
   [
    "IAM",
    ""
   ],
   [
    "MFA and least privilege",
    ""
   ],
   [
    "AWS or Azure administration (one main provider)",
    ""
   ],
   [
    "Cloud networks and storage permissions",
    ""
   ],
   [
    "Encryption and key vaults",
    ""
   ],
   [
    "Logging and posture management",
    ""
   ],
   [
    "Workload protection",
    ""
   ],
   [
    "Containers introduction",
    ""
   ]
  ]
 },
 "cybersecurity:27": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Add scans to a sample pipeline and fail a build on a critical flaw, review a Terraform file"
  ],
  "tools": "GitHub Actions, Semgrep, Trivy, Gitleaks, SonarQube.",
  "topics": [
   [
    "Secure software lifecycle and STRIDE threat modelling",
    ""
   ],
   [
    "CI/CD security",
    ""
   ],
   [
    "SAST",
    ""
   ],
   [
    "DAST",
    ""
   ],
   [
    "Dependency",
    ""
   ],
   [
    "Secret and container scanning",
    ""
   ],
   [
    "Docker and Kubernetes security",
    ""
   ],
   [
    "Infrastructure as code review",
    ""
   ],
   [
    "Software bills of materials",
    ""
   ],
   [
    "Vendor risk",
    ""
   ]
  ]
 },
 "cybersecurity:28": {
  "evidence": "",
  "objective": "",
  "practical": [
   "A risk assessment for a sample hospital, a policy, a mock internal audit and a risk-and-compliance pack"
  ],
  "tools": "Spreadsheet registers, OpenRMF. Leads to CGRC or ISO 27001 training.",
  "topics": [
   [
    "Policies and standards",
    ""
   ],
   [
    "Risk registers and treatment",
    ""
   ],
   [
    "NIST CSF 2.0",
    ""
   ],
   [
    "ISO/IEC 27001",
    ""
   ],
   [
    "CIS Controls",
    ""
   ],
   [
    "PCI DSS",
    ""
   ],
   [
    "SOC 2",
    ""
   ],
   [
    "Control mapping",
    ""
   ],
   [
    "Audit planning and evidence",
    ""
   ],
   [
    "Privacy duties under the DPDP Act",
    ""
   ],
   [
    "CERT-In guidance",
    ""
   ]
  ]
 },
 "cybersecurity:29": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Attack a vulnerable chatbot then add guardrails, threat-model an AI use case, draft a safe-use policy"
  ],
  "tools": "Garak, PyRIT, promptfoo. A base for C|RAGE.",
  "topics": [
   [
    "How models and agents work",
    ""
   ],
   [
    "Prompt injection",
    ""
   ],
   [
    "Data leakage",
    ""
   ],
   [
    "Poisoning",
    ""
   ],
   [
    "Insecure tool use",
    ""
   ],
   [
    "The OWASP Top 10 for LLM applications",
    ""
   ],
   [
    "AI for defence and its limits",
    ""
   ],
   [
    "AI-driven phishing and deepfakes",
    ""
   ],
   [
    "Safe use policy",
    ""
   ],
   [
    "NIST AI RMF",
    ""
   ],
   [
    "ISO/IEC 42001",
    ""
   ],
   [
    "AI risk registers and audit",
    ""
   ]
  ]
 },
 "cybersecurity:30": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Explore a simulated PLC network, threat-model an IoT sensor"
  ],
  "tools": "OpenPLC, Wireshark.",
  "topics": [
   [
    "SCADA",
    ""
   ],
   [
    "PLCs",
    ""
   ],
   [
    "Modbus",
    ""
   ],
   [
    "The Purdue model",
    ""
   ],
   [
    "Safety limits and passive-first assessment",
    ""
   ],
   [
    "IEC 62443",
    ""
   ],
   [
    "IoT identity and updates",
    ""
   ],
   [
    "5G",
    ""
   ],
   [
    "Edge computing",
    ""
   ],
   [
    "Blockchain risks",
    ""
   ],
   [
    "Post-quantum cryptography",
    ""
   ]
  ]
 },
 "cybersecurity:31": {
  "evidence": "",
  "objective": "",
  "practical": [
   "Redesign a flat network as zero trust and prepare an improvement roadmap with owners and cost bands"
  ],
  "tools": "Diagrams.net, Microsoft Threat Modeling Tool.",
  "topics": [
   [
    "Secure-by-design",
    ""
   ],
   [
    "Trust boundaries",
    ""
   ],
   [
    "Zero trust",
    ""
   ],
   [
    "Micro-segmentation",
    ""
   ],
   [
    "SASE",
    ""
   ],
   [
    "Threat modelling a full system",
    ""
   ],
   [
    "High availability and backup design",
    ""
   ],
   [
    "Metrics",
    ""
   ],
   [
    "Vendor evaluation",
    ""
   ]
  ]
 },
 "cybersecurity:32": {
  "evidence": "",
  "objective": "",
  "practical": [
   "A 3-year strategy and budget for a fictional bank and a 10-minute board briefing. The full C|CISO exam needs about 5 years of experience in 3 of its 5 domains, so teach this as preparation, not a credential"
  ],
  "tools": "",
  "topics": [
   [
    "Following the five C|CISO domains: governance and privacy",
    ""
   ],
   [
    "Programme management",
    ""
   ],
   [
    "Board and executive influence",
    ""
   ],
   [
    "Finance and procurement",
    ""
   ],
   [
    "Core competencies; case studies of board-level breach decisions",
    ""
   ]
  ]
 },
 "cybersecurity:33": {
  "evidence": "",
  "objective": "",
  "practical": [
   "A one-page report from raw lab notes, a five-minute incident briefing, two mock interviews"
  ],
  "tools": "",
  "topics": [
   [
    "Technical writing and incident handoffs",
    ""
   ],
   [
    "GitHub portfolio hygiene and redaction",
    ""
   ],
   [
    "Resume and LinkedIn",
    ""
   ],
   [
    "Interview practice",
    ""
   ],
   [
    "Career paths from IT support to security architect",
    ""
   ]
  ]
 },
 "cybersecurity:34": {
  "evidence": "Architecture diagram, asset and risk register, hardening checklist, monitoring plan, incident playbook, test report, recovery plan and executive summary",
  "objective": "Design, build, secure, test and defend a complete security project using only fictional or authorised systems.",
  "practical": [
   "Choose a track: SOC detection, incident response and forensics, cloud hardening, web application security, vulnerability management, or governance"
  ],
  "tools": "",
  "topics": [
   [
    "Charter and design",
    "15 hours"
   ],
   [
    "Build and secure",
    "15 hours"
   ],
   [
    "Test by another team",
    "20 hours"
   ],
   [
    "Detect and respond",
    "15 hours"
   ],
   [
    "Report and defend",
    "Panel and viva, 15 hours"
   ]
  ]
 },
 "networking:01": {
  "evidence": "Annotated small-office diagram and a written HTTPS walk-through using both the OSI and TCP/IP models",
  "objective": "Build a shared vocabulary and mental model before touching any configuration.",
  "practical": [
   "Draw a small-office network and label each device and link",
   "Explain what happens when a PC opens an HTTPS website using OSI/TCP-IP layers",
   "Compare a switch, router, access point, modem/ONT and firewall using real examples"
  ],
  "tools": "",
  "topics": [
   [
    "Network purpose and scope",
    "What a network solves; resource sharing; client/server and peer-to-peer; home, small-office, campus, branch, data-centre and cloud examples."
   ],
   [
    "Network types and topology",
    "PAN, LAN, WLAN, MAN, WAN; star, mesh, bus, ring and hybrid; physical versus logical topology; access, distribution and core layers."
   ],
   [
    "Performance and reliability",
    "Bandwidth versus throughput; latency, jitter, packet loss, availability, congestion, MTU, redundancy and single points of failure."
   ],
   [
    "Network devices",
    "NIC, hub (legacy), switch, router, access point, modem/ONT, firewall, proxy, load balancer, controller, IDS/IPS and server roles."
   ],
   [
    "Traffic and models",
    "OSI layers and TCP/IP model; encapsulation and decapsulation; PDU names; peer-layer communication; client-to-server web request walk-through."
   ],
   [
    "Ethernet and switching basics",
    "MAC addresses; unicast, broadcast, multicast; collision versus broadcast domains; full/half duplex; frame fields and FCS concept."
   ]
  ]
 },
 "networking:02": {
  "evidence": "Completed cable-test log and a Layer 1 link-down diagnosis sheet",
  "objective": "Recognise physical media and isolate Layer 1 faults.",
  "practical": [
   "Identify cables, connectors, ports and transceivers from a lab kit",
   "Diagnose a link-down issue using cable checks, LEDs, interface state and counters",
   "Create a Wi-Fi checklist for interference, signal strength, authentication and IP assignment"
  ],
  "tools": "",
  "topics": [
   [
    "Copper cabling",
    "UTP/STP, Cat5e/Cat6/Cat6A concepts, RJ-45, patch cords, patch panels, structured cabling and cable labels."
   ],
   [
    "Pinouts and testing",
    "T568A/T568B sequence; straight-through/crossover context; cable tester results; opens, shorts, split pairs and poor termination."
   ],
   [
    "Fibre optics",
    "Single-mode versus multimode, LC/SC connectors, transceivers, SFP/SFP+, attenuation, bend radius and cleanliness."
   ],
   [
    "Ethernet negotiation",
    "10/100/1000 Mbps and higher-speed concepts; auto-negotiation, duplex mismatch, interface counters and link LEDs."
   ],
   [
    "Power over Ethernet",
    "PoE use cases, power budgets and standards awareness; access points, IP phones and cameras; safe device compatibility checks."
   ],
   [
    "Wireless fundamentals",
    "2.4/5/6 GHz overview, channel overlap, interference, SSID/BSSID, RSSI, roaming, encryption and guest-network separation."
   ]
  ]
 },
 "networking:03": {
  "evidence": "Twenty worked subnetting problems with the method shown, plus the three-department IP plan",
  "objective": "Become confident with addressing before the routing and VLAN labs.",
  "practical": [
   "Solve at least 20 subnetting problems by hand and explain the method",
   "Create a VLAN-based IP plan for three departments and a server network",
   "Diagnose an incorrect subnet mask and explain why a device thinks a destination is local or remote"
  ],
  "tools": "",
  "topics": [
   [
    "Address structure",
    "32-bit IPv4, dotted decimal, binary conversion, network bits, host bits, subnet mask and CIDR prefix."
   ],
   [
    "Address categories",
    "Private RFC1918 ranges, public addresses, loopback, link-local/APIPA, multicast, limited broadcast and reserved ranges."
   ],
   [
    "Host configuration",
    "Static versus DHCP; IP, mask, default gateway, DNS; duplicate address, wrong mask and wrong gateway symptoms."
   ],
   [
    "Subnet calculations",
    "Network ID, broadcast address, usable host range, host count, prefix length, /24 through /30 and special /31-/32 awareness."
   ],
   [
    "VLSM and planning",
    "Allocate different-sized subnets; avoid overlaps; reserve gateways; plan management, user, server, voice, guest and point-to-point networks."
   ],
   [
    "IPv4 troubleshooting",
    "Read ipconfig/ifconfig/ip addr output; validate local settings; use ping, arp and route-table checks."
   ]
  ]
 },
 "networking:04": {
  "evidence": "Completed IPv6 compression/expansion exercise and a labelled dual-stack path diagram",
  "objective": "Prepare for dual-stack environments and modern network troubleshooting.",
  "practical": [
   "Compress and expand IPv6 addresses correctly",
   "Draw a dual-stack host-to-router path and label IPv4 and IPv6 settings",
   "Use lab tools to check IPv6 addresses, routes and reachability"
  ],
  "tools": "",
  "topics": [
   [
    "Notation and types",
    "128-bit address, hexadecimal groups, zero compression, global unicast, link-local, unique-local, multicast and loopback."
   ],
   [
    "Prefixes and interface IDs",
    "Prefix length, subnetting concept, interface identifiers and why IPv6 has no broadcast."
   ],
   [
    "Address configuration",
    "SLAAC, DHCPv6, router advertisements, default router and DNS configuration concepts."
   ],
   [
    "Neighbour discovery",
    "ICMPv6, neighbour solicitation/advertisement, duplicate address detection and role of link-local addresses."
   ],
   [
    "Transition and troubleshooting",
    "Dual stack, tunnelling awareness, ping/traceroute differences, DNS AAAA records and common IPv6 policy issues."
   ]
  ]
 },
 "networking:05": {
  "evidence": "Packet Tracer file with verified VLANs and trunk, plus a log of the faults found and fixed",
  "objective": "Build segmented LANs and verify how switches behave.",
  "practical": [
   "Build two VLANs in Packet Tracer and prove hosts in separate VLANs cannot communicate without routing",
   "Configure a trunk and verify allowed VLANs and port modes",
   "Troubleshoot an incorrect VLAN, trunk mismatch and missing inter-VLAN gateway"
  ],
  "tools": "",
  "topics": [
   [
    "MAC learning",
    "MAC address table, source learning, known unicast forwarding, unknown unicast flooding, broadcast handling and aging."
   ],
   [
    "VLAN design",
    "Why VLANs exist; broadcast-domain separation; VLAN IDs; user, server, voice, guest and management VLAN examples."
   ],
   [
    "Access and trunk ports",
    "802.1Q tagging, access-port assignment, trunk allowed VLANs, native VLAN concepts and mismatch troubleshooting."
   ],
   [
    "Inter-VLAN routing",
    "Router-on-a-stick, subinterfaces, Layer 3 switch SVIs, default gateways and routing between VLANs."
   ],
   [
    "Loop prevention",
    "Layer 2 loops, broadcast storms, STP/RSTP purpose, root bridge and port roles; safe loop prevention practices."
   ],
   [
    "Link aggregation",
    "EtherChannel/LACP concepts, bundled links, consistency checks and failure resilience."
   ]
  ]
 },
 "networking:06": {
  "evidence": "Routing tables captured from each router, with forward and return-path ping/traceroute results",
  "objective": "Understand packet forwarding and routing choices across vendors.",
  "practical": [
   "Connect two LANs through a router and verify the return path",
   "Configure static/default routes across a three-router lab",
   "Explain when static routing is appropriate and why OSPF/BGP are used in larger environments"
  ],
  "tools": "",
  "topics": [
   [
    "Router operation",
    "Routing table, directly connected routes, static routes, default route, next-hop address and exit interface."
   ],
   [
    "Route selection",
    "Longest-prefix match, administrative distance concept, metric, route preference, recursive lookup and return path."
   ],
   [
    "Static routing",
    "IPv4/IPv6 routes, default routes, floating static route concept, route verification and common syntax errors."
   ],
   [
    "Dynamic routing overview",
    "Purpose and comparison of RIP (legacy awareness), OSPF, EIGRP awareness and BGP; where each is typically used."
   ],
   [
    "OSPF foundation",
    "Neighbour adjacency, router ID, areas, cost, link-state database, route selection and single-area lab."
   ],
   [
    "Enterprise design",
    "Hierarchical design, core/distribution/access, summarisation, redundancy, first-hop redundancy (HSRP/VRRP awareness), failover and documentation."
   ]
  ]
 },
 "networking:07": {
  "evidence": "Annotated Wireshark captures of DHCP DORA and DNS, and a written NAT/PAT explanation",
  "objective": "Understand the services that make an IP network usable.",
  "practical": [
   "Capture DHCP DORA and DNS queries in Wireshark",
   "Troubleshoot a client that can ping an IP address but cannot resolve a domain name",
   "Explain NAT/PAT using an office LAN accessing a public website"
  ],
  "tools": "",
  "topics": [
   [
    "ARP and neighbour discovery",
    "How a host maps local IPv4 destinations to MAC addresses; ARP cache; gratuitous ARP and security awareness."
   ],
   [
    "DHCP",
    "DORA, lease, scope, exclusions, reservation, relay/IP helper, options, DHCP starvation awareness and troubleshooting."
   ],
   [
    "DNS",
    "Recursive resolver versus authoritative server; A, AAAA, CNAME, MX, TXT, PTR; caching, TTL, forwarders and split DNS."
   ],
   [
    "NAT/PAT",
    "Private/public addressing, source NAT, destination NAT, PAT, static/dynamic translation, port forwarding and double NAT."
   ],
   [
    "Time and monitoring",
    "NTP, syslog, SNMP, traps, polling, NetFlow/sFlow awareness and time synchronisation for logs."
   ],
   [
    "Ports and application services",
    "HTTP/HTTPS, DNS, DHCP, SSH, Telnet (legacy/insecure), FTP/SFTP, SMTP, IMAP/POP3, SMB, RDP, LDAP, SNMP, NTP and ICMP."
   ]
  ]
 },
 "networking:08": {
  "evidence": "Workstation-to-website path map and a completed VPN pre-checklist",
  "objective": "Connect a LAN to branch networks and the public internet.",
  "practical": [
   "Map the path from a workstation to a website, showing private IP, NAT and public destination",
   "Create a VPN pre-checklist covering authorisation, addressing, routing, DNS and firewall policy",
   "Use traceroute and route tables to distinguish local, gateway, ISP and remote-service symptoms"
  ],
  "tools": "",
  "topics": [
   [
    "ISP handoff",
    "ONT/GPON, modem, router, public/private IP, dynamic/static address, PPPoE awareness and ISP escalation data."
   ],
   [
    "Internet path",
    "Default gateway, NAT, recursive DNS, ISP routing, traceroute, peering and why a private gateway IP can be reused by many homes."
   ],
   [
    "CGNAT and port forwarding",
    "How carrier-grade NAT affects inbound connections, double NAT symptoms and why a public IP alone does not guarantee reachability."
   ],
   [
    "WAN technologies",
    "Broadband, leased line, MPLS awareness, SD-WAN, cellular failover and business continuity."
   ],
   [
    "VPN basics",
    "Remote-access versus site-to-site; IPsec and TLS VPN concepts; encryption, authentication, split/full tunnel and route/DNS behaviour."
   ],
   [
    "Troubleshooting checklist",
    "Check local link, IP, gateway, DNS, route, firewall, tunnel state, peer settings, ISP status and authorised access requirements."
   ]
  ]
 },
 "networking:09": {
  "evidence": "Least-privilege policy table and a completed firewall change record",
  "objective": "Learn defensive network security and change discipline.",
  "practical": [
   "Write a least-privilege policy for guest Wi-Fi, users and servers",
   "Demonstrate permitted and denied traffic in an authorised simulator",
   "Write a firewall change record with purpose, risk, test plan and rollback steps"
  ],
  "tools": "",
  "topics": [
   [
    "Security principles",
    "Least privilege, segmentation, defence in depth, secure management, hardening, backups, patching and change control."
   ],
   [
    "Firewall policy",
    "Stateful inspection, zones, rule order, objects, services, source/destination, logging, implicit deny and policy review."
   ],
   [
    "ACLs and device access",
    "Standard/extended ACL concepts, management-plane protection, SSH, AAA, RADIUS/TACACS+ awareness and credential hygiene."
   ],
   [
    "Security architecture",
    "DMZ, proxy, WAF, IDS versus IPS, NAC, endpoint firewall, zero-trust concepts and secure remote access."
   ],
   [
    "Common threats",
    "Spoofing, ARP poisoning, rogue DHCP, VLAN hopping, scanning, DoS/DDoS and defensive detection/mitigation."
   ],
   [
    "Operational response",
    "Read logs, identify source/destination/port, collect evidence, escalate safely, document approvals and rollback."
   ]
  ]
 },
 "networking:10": {
  "evidence": "Bundle of Windows command outputs and a support ticket built from them",
  "objective": "Handle support tasks in Windows-heavy offices.",
  "practical": [
   "Use Windows commands to collect evidence for a failed connection",
   "Diagnose a DNS misconfiguration that prevents domain-name access",
   "Create a network support ticket containing symptoms, commands, evidence and next steps"
  ],
  "tools": "",
  "topics": [
   [
    "Client diagnostics",
    "ipconfig /all, ping, tracert, pathping, nslookup, arp, route print, netstat and PowerShell network commands."
   ],
   [
    "Windows services",
    "DHCP, DNS, Active Directory Domain Services overview, Group Policy, file/print sharing and domain join prerequisites."
   ],
   [
    "Name resolution and identity",
    "DNS client settings, records, domain controllers, time synchronisation and common domain-join failures."
   ],
   [
    "Remote access and firewall",
    "RDP security, Windows Defender Firewall rules, listening ports, network profiles and event logs."
   ],
   [
    "Operations",
    "Service status, updates, event viewer, change records, asset inventory and ticket escalation."
   ]
  ]
 },
 "networking:11": {
  "evidence": "Terminal transcript showing interface, route, DNS and listening-socket checks",
  "objective": "Gain basic Linux skills for NOC, server and cloud roles.",
  "practical": [
   "Configure and verify a lab interface and default route",
   "Use dig/curl/ss to isolate DNS versus application-listener issues",
   "Capture a simple ICMP or DNS exchange with tcpdump"
  ],
  "tools": "",
  "topics": [
   [
    "Interfaces and routes",
    "ip link, ip addr, ip route, interface state, default route and persistent configuration concepts."
   ],
   [
    "Name resolution",
    "/etc/hosts, resolver configuration, systemd-resolved/resolvectl, DNS search domains and dig."
   ],
   [
    "Connectivity tools",
    "ping, traceroute/tracepath, ss, curl, wget, nc/netcat and mtr awareness."
   ],
   [
    "Remote administration",
    "SSH keys, secure access, service status, logs, firewall concepts (nftables/ufw/firewalld) and least privilege."
   ],
   [
    "Packet capture",
    "tcpdump filters, interface selection, capture files and safe handling of sensitive traffic."
   ]
  ]
 },
 "networking:12": {
  "evidence": "Ten-fault evidence log and the one-page 'PC cannot access the internet' runbook",
  "objective": "Turn knowledge into a repeatable diagnostic process.",
  "practical": [
   "Complete a 10-fault troubleshooting practical and record evidence for every diagnosis",
   "Use Wireshark to compare successful and failed DNS/TCP exchanges",
   "Create a one-page runbook for 'PC cannot access the internet'"
  ],
  "tools": "",
  "topics": [
   [
    "Troubleshooting method",
    "Define scope and impact, gather symptoms, form a hypothesis, test one change, verify, document and close/escalate."
   ],
   [
    "Layered checks",
    "Physical link, VLAN/MAC, IP/mask/gateway, ARP, route, DNS, TCP/UDP port, firewall and application."
   ],
   [
    "Essential tools",
    "ping, tracert/traceroute, ipconfig, nslookup/dig, arp, route, netstat/ss, show commands, cable tester and Wireshark."
   ],
   [
    "Packet analysis",
    "Ethernet, ARP, ICMP, DHCP, DNS, TCP three-way handshake, retransmissions, resets and display filters."
   ],
   [
    "Monitoring concepts",
    "SNMP, syslog, metrics, thresholds, interface errors, capacity trends, alert noise and incident handover."
   ],
   [
    "Runbooks and tickets",
    "Reproducible steps, expected versus actual results, timestamps, topology, evidence, root cause, fix and prevention."
   ]
  ]
 },
 "networking:13": {
  "evidence": "Saved configurations and show-command output for Labs A-F, plus the root-cause report",
  "objective": "Practise everything together using Cisco Packet Tracer or authorised equipment.",
  "practical": [
   "Lab A: two PCs and one switch; verify MAC learning",
   "Lab B: two LANs connected by one router; configure gateways and ping end to end",
   "Lab C: three-router static routing and return-path troubleshooting",
   "Lab D: VLANs, trunking and inter-VLAN routing",
   "Lab E: DHCP, NAT/PAT, ACL and a single-area OSPF scenario",
   "Lab F: deliberately broken topology with a written root-cause report"
  ],
  "tools": "",
  "topics": [
   [
    "CLI and device setup",
    "User/privileged/configuration modes, help, running/startup config, save/backup, hostname, passwords and interface descriptions."
   ],
   [
    "Interface and management configuration",
    "IPv4/IPv6 addressing, interface activation, SSH management, banners, local users and secure remote administration."
   ],
   [
    "Switching",
    "VLAN creation, access ports, trunks, VLAN verification, MAC table, STP observation and EtherChannel concepts."
   ],
   [
    "Routing",
    "Static/default routes, inter-VLAN routing, OSPF single-area foundation, route verification and return-path analysis."
   ],
   [
    "Services and security",
    "DHCP, NAT/PAT, ACLs, device discovery (CDP/LLDP), NTP, syslog and SNMP concepts."
   ],
   [
    "Verification and recovery",
    "show ip interface brief, show interfaces, show vlan brief, show mac address-table, show ip route, show running-config, show access-lists, ping and traceroute."
   ]
  ]
 },
 "networking:14": {
  "evidence": "Public/private subnet design with traffic-flow notes and proof that management access is restricted",
  "objective": "Learn portable cloud network concepts, then go deeper with one provider.",
  "practical": [
   "Design public/private subnets and document intended traffic flows",
   "Create a sandbox VPC/VNet where permitted and restrict management access",
   "Compare cloud security groups with subnet-level network ACLs"
  ],
  "tools": "",
  "topics": [
   [
    "Cloud network building blocks",
    "VPC/VNet/VCN, CIDR, subnets, route tables, network interfaces, public/private IPs and DNS."
   ],
   [
    "Routing and internet access",
    "Internet gateway, NAT gateway, peering, transit hub, VPN gateway and hybrid connectivity concepts."
   ],
   [
    "Security controls",
    "Security groups/NSGs, network ACLs, route filtering, private endpoints, bastion/jump access and least privilege."
   ],
   [
    "Application delivery",
    "Load balancers, health checks, availability zones, DNS routing and resilience basics."
   ],
   [
    "Operations and cost",
    "Flow logs, monitoring, troubleshooting, IP planning, tagging, quotas and cost awareness."
   ]
  ]
 },
 "networking:15": {
  "evidence": "Git history of configuration backups and the inventory-report script with its output",
  "objective": "Learn to automate network tasks safely after mastering the command line and routing.",
  "practical": [
   "Parse a small JSON inventory and produce a human-readable report",
   "Back up lab configuration files and compare versions using Git",
   "Create an Ansible or mock-data exercise that checks device facts without making production changes"
  ],
  "tools": "",
  "topics": [
   [
    "Python foundations",
    "Variables, loops, functions, files, exceptions, virtual environments and parsing structured data."
   ],
   [
    "APIs and formats",
    "REST, HTTP methods, authentication, JSON, YAML, curl and safe secrets handling."
   ],
   [
    "Version control",
    "Git commits, branches, diffs, reviews, change history and configuration backups."
   ],
   [
    "Automation tools",
    "Ansible inventory, ad hoc commands, playbooks, templates, idempotence, validation and rollback concepts."
   ],
   [
    "Safe workflow",
    "Start with read-only inventory, lab devices, backups, approval, staged rollout and post-change verification."
   ]
  ]
 },
 "networking:16": {
  "evidence": "Specialist-track proposal reviewed and approved by the instructor",
  "objective": "Choose specialist electives based on your target role and local demand.",
  "practical": [
   "Create a specialist-track proposal that states prerequisite skills, lab needs and job roles",
   "Use a vendor-specific lab or simulator only where authorised and available",
   "Keep each specialist module separate from the entry-level core course"
  ],
  "tools": "",
  "topics": [
   [
    "Enterprise routing",
    "Deeper OSPF, BGP concepts, route policy, summarisation, high availability, VRRP/HSRP and multi-site design."
   ],
   [
    "Firewall vendor",
    "Fortinet or another employer-relevant firewall platform; interfaces, policies, NAT, VPN, logging and troubleshooting."
   ],
   [
    "Juniper routing",
    "Junos CLI, routing tables, static routes, routing policy and firewall-filter concepts; JNCIA-Junos preparation."
   ],
   [
    "Load balancing",
    "F5 BIG-IP or Citrix ADC concepts, virtual servers, pools, health monitors, TLS and application-delivery troubleshooting."
   ],
   [
    "Virtual networking",
    "VMware NSX concepts, logical switching/routing, distributed firewall and data-centre virtualisation."
   ],
   [
    "Storage/data centre",
    "SAN fundamentals, Fibre Channel overview, data-centre cabling, redundancy, monitoring and change discipline."
   ],
   [
    "SD-WAN and SASE",
    "Branch connectivity, policy-based routing, central management, cloud security edge and operational trade-offs."
   ]
  ]
 },
 "networking:17": {
  "evidence": "Capstone portfolio containing every item in the submission list in Section 22",
  "objective": "Prove you can design, configure, troubleshoot and communicate.",
  "practical": [
   "Present a working network diagram and justify each subnet/VLAN",
   "Fix two injected faults and show before/after verification evidence",
   "Submit a clear incident report understandable by another technician"
  ],
  "tools": "",
  "topics": [
   [
    "Capstone design",
    "Small office with Admin, Sales and Support; user, server, guest and management segments; internet access."
   ],
   [
    "Implementation",
    "IP/VLAN plan, gateways, DHCP/DNS, routing, NAT/PAT and least-privilege controls in a simulator."
   ],
   [
    "Fault injection",
    "Wrong subnet mask, missing route, VLAN mismatch, DNS issue, DHCP failure, ACL block and physical link issue."
   ],
   [
    "Documentation",
    "Logical/physical diagrams, IP plan, config backups, test matrix, change log, troubleshooting ticket and rollback plan."
   ],
   [
    "Job readiness",
    "NOC alert triage, customer updates, shift handover, escalation, ticket priority, interview scenarios and ethical lab conduct."
   ],
   [
    "Final evaluation",
    "Written test, subnetting practical, CLI practical, troubleshooting viva, capstone demo and documentation review."
   ]
  ]
 }
}

export const getModuleDetail = (slug, no) => moduleDetails[`${slug}:${no}`]
