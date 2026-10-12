// All course content lives here. Edit this one file to update the whole website.
// Networking, Cybersecurity and Cloud content comes from the institute curriculum documents.
// The AI course outline is a draft: no AI curriculum file was supplied, so please review it.

export const INSTITUTE = {
  name: 'Vinayak World',
  domain: 'vinayakworld.com',
  tagline: 'Technology education for careers in AI, Cybersecurity, Networking and Cloud',
  email: 'info@vinayakworld.com',
  phone: '+91 00000 00000',
  address: 'Your institute address, City, State, India',
  hours: 'Monday to Saturday, 9:00 am to 7:00 pm',
}

export const courses = [
  {
    slug: 'artificial-intelligence',
    icon: 'ai',
    name: 'Artificial Intelligence',
    short: 'AI',
    summary:
      'From Python and statistics to machine learning, generative AI and responsible deployment, taught through projects.',
    duration: '24 weeks (draft)',
    cardDuration: '24 weeks',
    level: 'Beginner to job-ready foundation',
    guidedHours: 'About 200 guided hours (draft)',
    audience:
      'Students, graduates, working professionals and career switchers who want a practical entry into AI and data roles.',
    outcomes: [
      'Write clean Python and work with data using NumPy and pandas.',
      'Build, evaluate and tune machine learning models.',
      'Explain how neural networks, transformers and large language models work.',
      'Build simple generative AI applications with prompting and retrieval.',
      'Deploy a model as an API and monitor it responsibly.',
      'Apply fairness, privacy and security practices to AI systems.',
    ],
    modules: [
      { no: '01', title: 'Programming Foundations with Python', hours: '16' },
      { no: '02', title: 'Mathematics and Statistics for AI', hours: '14' },
      { no: '03', title: 'Data Handling, Analysis and Visualisation', hours: '16' },
      { no: '04', title: 'Machine Learning Fundamentals', hours: '20' },
      { no: '05', title: 'Model Evaluation, Feature Engineering and Tuning', hours: '12' },
      { no: '06', title: 'Deep Learning and Neural Networks', hours: '20' },
      { no: '07', title: 'Natural Language Processing and Transformers', hours: '16' },
      { no: '08', title: 'Generative AI, Prompting and LLM Applications', hours: '18' },
      { no: '09', title: 'Computer Vision Basics', hours: '14' },
      { no: '10', title: 'Model Deployment, APIs and MLOps Basics', hours: '14' },
      { no: '11', title: 'Responsible AI, Privacy and AI Security', hours: '10' },
      { no: '12', title: 'Capstone Project and Career Readiness', hours: '20' },
    ],
    modulesNote: 'Module list and hours are a draft outline and can be edited in src/data/courses.js.',
    certifications: [
      {
        name: 'Institute Certificate in Artificial Intelligence',
        body: 'Vinayak World',
        note: 'Issued by the institute after assessments and the capstone project.',
      },
    ],
    labs: ['Python and data analysis notebooks', 'Machine learning model lab', 'LLM application build', 'Model deployment as an API'],
  },

  {
    slug: 'cybersecurity',
    icon: 'shield',
    name: 'Cybersecurity',
    short: 'Cybersecurity',
    summary:
      'A 34-module programme across six stages, from IT foundations to ethical hacking, SOC operations, cloud security and governance.',
    duration: 'About 40 weeks core, up to 66 weeks full programme',
    cardDuration: '40+ weeks',
    level: 'Class 12 and college students, IT staff and career switchers',
    guidedHours: '795 hour core, 1,320 hours for the full programme',
    audience:
      'Class 12 and college students, working IT staff, career switchers and public sector staff.',
    outcomes: [
      'Build strong foundations in networking, Linux, Windows and programming for security.',
      'Apply cryptography, identity management, vulnerability management and secure configuration.',
      'Test web, API and application security in an isolated, authorised lab.',
      'Work in a SOC: monitor with SIEM, investigate alerts and respond to incidents.',
      'Understand cloud security, DevSecOps, zero trust and AI security.',
      'Document findings professionally and follow cyber law, ethics and reporting routes.',
    ],
    stages: [
      {
        name: 'Stage 1: Foundations',
        hours: 220,
        modules: [
          ['01', 'Digital literacy, IT support and cyber awareness', 30],
          ['02', 'Networking fundamentals and packet analysis', 50],
          ['03', 'Linux administration and command line', 30],
          ['04', 'Windows administration, Active Directory and identity basics', 30],
          ['05', 'Programming and automation for security', 40],
          ['06', 'Security foundations, risk and professional ethics', 25],
          ['07', 'Cyber law, privacy and Indian reporting routes', 15],
        ],
      },
      {
        name: 'Stage 2: Core security',
        hours: 210,
        modules: [
          ['08', 'Cryptography and PKI', 25],
          ['09', 'Network and endpoint security', 55],
          ['10', 'Identity, access and privileged access management', 25],
          ['11', 'Vulnerability management and secure configuration', 35],
          ['12', 'Web, API and application security', 55],
          ['13', 'Digital payments, social media and mobile security', 15],
        ],
      },
      {
        name: 'Stage 3: Offensive security',
        hours: 380,
        modules: [
          ['14', 'Ethical hacking methodology and authorised VAPT', 40],
          ['15', 'CEH-aligned ethical hacking core', 60],
          ['16', 'Reconnaissance, OSINT and enumeration', 25],
          ['17', 'Advanced web, API and bug bounty hacking', 50],
          ['18', 'Wireless, mobile, IoT and cloud hacking', 40],
          ['19', 'Malware analysis and reverse engineering', 40],
          ['20', 'Advanced penetration testing and red team lab', 100],
          ['21', 'Social engineering, red team and purple team', 25],
        ],
      },
      {
        name: 'Stage 4: Defence, investigation and cloud',
        hours: 260,
        modules: [
          ['22', 'SOC operations, SIEM and detection', 55],
          ['23', 'Threat intelligence, hunting and adversary behaviour', 30],
          ['24', 'Incident response, business continuity and disaster recovery', 45],
          ['25', 'Digital forensics and evidence handling', 40],
          ['26', 'Cloud security and cloud identity', 55],
          ['27', 'Containers, DevSecOps and software supply chain', 35],
        ],
      },
      {
        name: 'Stage 5: Governance, emerging technology and leadership',
        hours: 150,
        modules: [
          ['28', 'Governance, risk, compliance, privacy and audit', 35],
          ['29', 'AI security and responsible AI governance', 35],
          ['30', 'OT, ICS, IoT and emerging technology security', 20],
          ['31', 'Security architecture, zero trust and resilience', 30],
          ['32', 'Security leadership and management', 30],
        ],
      },
      {
        name: 'Stage 6: Career and capstone',
        hours: 100,
        modules: [
          ['33', 'Communication, employability and portfolio', 20],
          ['34', 'Capstone project', 80],
        ],
      },
    ],
    tracks: [
      { name: 'Offensive security', extra: '340 added hours', roles: 'Junior VAPT analyst, security testing trainee' },
      { name: 'SOC and forensics', extra: '110 added hours', roles: 'SOC analyst level 1, DFIR trainee' },
      { name: 'Cloud and infrastructure', extra: '125 added hours', roles: 'Cloud security associate, security engineer trainee' },
      { name: 'Governance and leadership', extra: '80 added hours', roles: 'GRC analyst trainee, AI governance support analyst' },
    ],
    certifications: [
      { name: 'Certified in Cybersecurity (CC) or Security+', body: 'ISC2 / CompTIA', note: 'Foundation credential. Choose one.' },
      { name: 'CCNA 200-301', body: 'Cisco', note: 'Optional, aligned to networking modules.' },
      { name: 'CEH v13 and CEH Practical', body: 'EC-Council', note: 'Ethical hacking track.' },
      { name: 'CySA+ or Splunk user certification', body: 'CompTIA / Splunk', note: 'SOC track.' },
      { name: 'AWS Security Specialty or Microsoft security engineer associate', body: 'AWS / Microsoft', note: 'Cloud track, after cloud administration basics.' },
    ],
    labs: ['Isolated attack and defence lab', 'SIEM and SOC monitoring lab', 'Web application testing lab', 'Forensics and evidence handling lab'],
    safety:
      'All offensive work runs only in an isolated lab or with written permission. Foundations are taught before hacking tools, and defence is given equal weight to offence.',
  },

  {
    slug: 'networking',
    icon: 'network',
    name: 'Networking',
    short: 'Networking',
    summary:
      'Practical network support and junior network engineer training: subnetting, switching, routing, security, Wireshark and Cisco labs.',
    duration: 'About 20 weeks',
    cardDuration: '20 weeks',
    level: 'Beginner, no prior networking knowledge needed',
    guidedHours: 'About 180 to 220 guided hours',
    audience:
      'School leavers, career changers and help-desk staff moving into network support, NOC or junior network engineering roles.',
    outcomes: [
      'Explain how traffic moves through Ethernet, IP, TCP/UDP, DNS and common application services.',
      'Plan IPv4 subnets and understand IPv6 addressing and dual-stack basics.',
      'Configure and verify switch, VLAN, router, static route, DHCP, NAT and ACL scenarios.',
      'Use Windows and Linux command line tools and packet analysis to troubleshoot with evidence.',
      'Apply baseline security, change control, ticketing, documentation and escalation practice.',
      'Build a small office network capstone and choose a next certification path.',
    ],
    modules: [
      { no: '01', title: 'Networking Foundations', hours: '10 to 12' },
      { no: '02', title: 'Physical Layer, Cabling and Wireless', hours: '8 to 10' },
      { no: '03', title: 'IPv4 Addressing and Subnetting', hours: '14 to 16' },
      { no: '04', title: 'IPv6 Fundamentals', hours: '6 to 8' },
      { no: '05', title: 'Switching, VLANs and Layer 2', hours: '14 to 16' },
      { no: '06', title: 'Routing and Network Design', hours: '16 to 18' },
      { no: '07', title: 'Core Network Services and Protocols', hours: '12 to 14' },
      { no: '08', title: 'WAN, ISP, Internet and VPN', hours: '8 to 10' },
      { no: '09', title: 'Network Security and Firewall Operations', hours: '12 to 14' },
      { no: '10', title: 'Windows Networking and Server Essentials', hours: '8 to 10' },
      { no: '11', title: 'Linux Networking Essentials', hours: '8 to 10' },
      { no: '12', title: 'Troubleshooting, Monitoring and Wireshark', hours: '14 to 16' },
      { no: '13', title: 'Cisco IOS and CCNA-Level Practical Track', hours: '18 to 24' },
      { no: '14', title: 'Cloud Networking Foundations (optional)', hours: '8 to 12' },
      { no: '15', title: 'Network Automation and Infrastructure as Code (optional)', hours: '6 to 10' },
      { no: '16', title: 'Enterprise and Specialist Electives', hours: '12 to 40 each' },
      { no: '17', title: 'Capstone, Employability and Final Assessment', hours: '12 to 16' },
    ],
    certifications: [
      { name: 'Cisco CCNA 200-301', body: 'Cisco', note: 'Primary route for a Cisco-oriented networking course. Check the current exam version before booking.' },
      { name: 'CompTIA Network+', body: 'CompTIA', note: 'Vendor-neutral alternative as a first paid exam.' },
      { name: 'Fortinet NSE pathway', body: 'Fortinet', note: 'Firewall and security route.' },
      { name: 'Azure Network Engineer Associate (AZ-700)', body: 'Microsoft', note: 'Cloud networking route, after core networking.' },
    ],
    labs: ['Cisco Packet Tracer labs', 'Windows and Linux client labs', 'Wireshark packet analysis', 'Small office network capstone'],
  },

  {
    slug: 'cloud-computing',
    icon: 'cloud',
    name: 'Cloud Computing',
    short: 'Cloud',
    summary:
      'Hands-on cloud training from foundations and Linux to architecture, security, Infrastructure as Code, containers and FinOps.',
    duration: '24 weeks, flexible',
    cardDuration: '24 weeks',
    level: 'Beginner to job-ready foundation',
    guidedHours: 'About 200 guided hours',
    audience:
      'Beginners, IT support and networking learners, graduates and career switchers. No prior cloud experience is required.',
    outcomes: [
      'Explain cloud service and deployment models, shared responsibility and cost trade-offs.',
      'Use Linux, Windows and networking tools to investigate system behaviour.',
      'Design a simple cloud environment with compute, storage, network, identity and monitoring.',
      'Apply least privilege, MFA, encryption awareness, backups and secure configuration.',
      'Read metrics and logs, follow a runbook and explain an incident response sequence.',
      'Present a documented capstone with a diagram, cost estimate and recovery plan.',
    ],
    modules: [
      { no: '01', title: 'Cloud Foundations and Career Orientation', hours: '8' },
      { no: '02', title: 'Hardware, Operating Systems, Virtualization and Linux', hours: '12' },
      { no: '03', title: 'Networking Fundamentals for Cloud Engineers', hours: '14' },
      { no: '04', title: 'Architecture, Regions, Availability and Design Principles', hours: '10' },
      { no: '05', title: 'Accounts, Identity, Governance and Resource Organization', hours: '10' },
      { no: '06', title: 'Compute: Virtual Machines, Autoscaling and Serverless', hours: '12' },
      { no: '07', title: 'Storage, Databases and Data Lifecycle', hours: '12' },
      { no: '08', title: 'Cloud Networking: VPC/VNet, Subnets, Routing and Connectivity', hours: '12' },
      { no: '09', title: 'Security, Compliance and Data Protection', hours: '12' },
      { no: '10', title: 'Monitoring, Logging, Troubleshooting and Operations', hours: '12' },
      { no: '11', title: 'Migration, Modernization and Hybrid Cloud', hours: '10' },
      { no: '12', title: 'Infrastructure as Code, Automation and Configuration', hours: '12' },
      { no: '13', title: 'Containers, Kubernetes and Cloud-Native Basics', hours: '12' },
      { no: '14', title: 'Databases, APIs, Integration and Data Engineering Overview', hours: '10' },
      { no: '15', title: 'Backup, Disaster Recovery and Resilience', hours: '10' },
      { no: '16', title: 'Cost Management, FinOps and Service Selection', hours: '8' },
      { no: '17', title: 'DevOps, Git, CI/CD and Release Reliability', hours: '12' },
      { no: '18', title: 'Career Readiness, Capstone and Certification Preparation', hours: '14' },
    ],
    certifications: [
      { name: 'AWS Certified Cloud Practitioner', body: 'AWS', note: 'Foundational. Leads to Solutions Architect Associate.' },
      { name: 'Azure Fundamentals (AZ-900) and Azure Administrator (AZ-104)', body: 'Microsoft', note: 'Azure administration route.' },
      { name: 'Cloud Digital Leader or Associate Cloud Engineer', body: 'Google Cloud', note: 'Broad fundamentals or hands-on route.' },
    ],
    labs: [
      'Cloud account safety and budgets',
      'Virtual network and compute deployment',
      'IAM least privilege',
      'Infrastructure as Code and CI/CD pipeline',
    ],
  },
]

export const getCourse = (slug) => courses.find((c) => c.slug === slug)

export const method = [
  {
    title: 'Concepts first',
    text: 'Every topic starts with plain explanation and diagrams before any tool is opened.',
  },
  {
    title: 'Guided practical labs',
    text: 'Most of the programme is hands-on, with instructor demonstrations followed by student labs.',
  },
  {
    title: 'Evidence-based assessment',
    text: 'Learners are judged on practical evidence: lab reports, runbooks, diagrams and a final capstone.',
  },
  {
    title: 'Safe and ethical practice',
    text: 'Sandboxed labs, least privilege and written authorisation are part of every course from day one.',
  },
]

export const honesty =
  'Our certificates are institute certificates. Vendor certifications such as CCNA, AWS, Microsoft or EC-Council are earned by passing the vendor\'s own exam, are paid for separately, and are never guaranteed. Exam versions and fees change, so please confirm current details with the provider.'
