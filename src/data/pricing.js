// Fees and plans for every course. Edit everything in this file.
//
// IMPORTANT: the prices below are SAMPLE FIGURES so you can see the layout.
// Replace them with your real fees before launch.
//   - Set a price to null to show "Contact us" instead of a number.
//   - Set SHOW_PRICES to false to hide ALL numbers site-wide and show "Contact us".
//   - Set highlight: true on the plan you want shown as "Most chosen".

export const SHOW_PRICES = true
export const CURRENCY = '₹'

export const pricingNotes = [
  'Fees shown are course fees only. Vendor exam fees (for example Cisco, AWS, Microsoft or EC-Council) are paid to the vendor and are not included.',
  'Instalment options and batch discounts can be discussed at enquiry. Fees and batch dates may change, so please confirm before enrolling.',
  'No job, salary or exam result is guaranteed. Career support means portfolio, CV and mock interview guidance.',
]

export const pricing = {
  'artificial-intelligence': [
    {
      name: 'AI Foundation',
      tagline: 'Python, data and first models',
      price: 12000,
      scope: 'Modules 01 to 05, about 78 guided hours',
      duration: 'About 10 weeks',
      features: [
        'Python, maths, data analysis and machine learning basics',
        'Guided practical labs in every module',
        'Module assessments',
        'Institute certificate of completion for these modules',
      ],
    },
    {
      name: 'AI Professional',
      tagline: 'Deep learning, NLP and generative AI',
      price: 28000,
      scope: 'Modules 01 to 10, about 160 guided hours',
      duration: 'About 20 weeks',
      highlight: true,
      features: [
        'Everything in AI Foundation',
        'Deep learning, NLP, LLM applications and computer vision',
        'Model deployment as an API',
        'Practical lab portfolio',
        'Mock interview session',
      ],
    },
    {
      name: 'AI Complete',
      tagline: 'Full programme with capstone',
      price: 40000,
      scope: 'All 12 modules, about 190 guided hours',
      duration: 'About 24 weeks',
      features: [
        'Everything in AI Professional',
        'Responsible AI and AI security module',
        'Capstone project with panel review',
        'Portfolio and CV review',
        'Institute certificate in Artificial Intelligence',
      ],
    },
  ],

  cybersecurity: [
    {
      name: 'Foundation Certificate',
      tagline: 'IT, networking and security basics',
      price: 15000,
      scope: 'Modules 01 to 07, 220 guided hours',
      duration: 'About 11 weeks',
      features: [
        'Digital literacy, networking, Linux, Windows and programming',
        'Security foundations, ethics and cyber law',
        'Guided practical labs',
        'Institute Foundation Certificate',
      ],
    },
    {
      name: 'Professional Diploma',
      tagline: 'Core security and ethical hacking method',
      price: 45000,
      scope: 'Modules 01 to 14, 470 guided hours',
      duration: 'About 24 weeks',
      features: [
        'Everything in Foundation Certificate',
        'Cryptography, network, identity and application security',
        'Vulnerability management and authorised VAPT method',
        'Isolated attack and defence lab',
        'Institute Professional Diploma',
      ],
    },
    {
      name: 'Core Program',
      tagline: 'Complete job-ready core',
      price: 85000,
      scope: 'Mandatory core, 795 guided hours',
      duration: 'About 40 weeks',
      highlight: true,
      features: [
        'Everything in Professional Diploma',
        'SOC operations, incident response and cloud security',
        'Governance, privacy and AI security',
        'Capstone project with panel and viva',
        'Mock interviews and portfolio review',
      ],
    },
    {
      name: 'Full Master',
      tagline: 'Core plus all specialist tracks',
      price: 140000,
      scope: 'All 34 modules, 1,320 guided hours',
      duration: 'About 66 weeks',
      features: [
        'Everything in Core Program',
        'Offensive, SOC and forensics, cloud and governance tracks',
        'Advanced penetration testing and red team lab',
        'Certification pathway guidance',
        'Institute Master Certificate',
      ],
    },
  ],

  networking: [
    {
      name: 'Networking Foundation',
      tagline: 'Concepts, cabling and addressing',
      price: 6000,
      scope: 'Modules 01 to 04, about 38 to 46 guided hours',
      duration: 'About 4 to 5 weeks',
      features: [
        'Networking foundations, physical layer and wireless',
        'IPv4 subnetting and IPv6 fundamentals',
        'Hand-solved subnetting practice',
        'Institute certificate of completion for these modules',
      ],
    },
    {
      name: 'Networking Core',
      tagline: 'Job-ready network support skills',
      price: 24000,
      scope: 'Modules 01 to 13 and 17, about 160 to 194 guided hours',
      duration: 'About 20 weeks',
      highlight: true,
      features: [
        'Everything in Networking Foundation',
        'Switching, VLANs, routing, WAN, VPN and firewalls',
        'Windows and Linux networking, Wireshark troubleshooting',
        'Cisco IOS and CCNA-level practical labs',
        'Small office network capstone',
      ],
    },
    {
      name: 'Networking Plus',
      tagline: 'Core with cloud and automation',
      price: 30000,
      scope: 'Core plus Modules 14 and 15, about 174 to 216 guided hours',
      duration: 'About 22 weeks',
      features: [
        'Everything in Networking Core',
        'Cloud networking foundations',
        'Network automation and Infrastructure as Code',
        'Mock interview session',
        'Certification pathway guidance',
      ],
    },
  ],

  'cloud-computing': [
    {
      name: 'Cloud Foundation',
      tagline: 'Cloud basics, Linux and networking',
      price: 10000,
      scope: 'Modules 01 to 05, about 54 guided hours',
      duration: 'About 6 weeks',
      features: [
        'Cloud concepts, Linux, networking and architecture',
        'Accounts, identity and governance',
        'Safe sandbox labs with budget alerts',
        'Institute certificate of completion for these modules',
      ],
    },
    {
      name: 'Cloud Professional',
      tagline: 'Build, secure and operate',
      price: 25000,
      scope: 'Modules 01 to 12, about 136 guided hours',
      duration: 'About 14 weeks',
      highlight: true,
      features: [
        'Everything in Cloud Foundation',
        'Compute, storage, cloud networking and security',
        'Monitoring, migration and Infrastructure as Code',
        'Guided labs with runbooks and reports',
        'Mock interview session',
      ],
    },
    {
      name: 'Cloud Complete',
      tagline: 'Full programme with capstone',
      price: 38000,
      scope: 'All 18 modules, about 200 guided hours',
      duration: 'About 24 weeks',
      features: [
        'Everything in Cloud Professional',
        'Containers, DevOps, CI/CD, disaster recovery and FinOps',
        'Capstone with diagram, cost estimate and recovery plan',
        'Portfolio review and certification plan',
        'Institute Cloud Computing Certificate',
      ],
    },
  ],
}
