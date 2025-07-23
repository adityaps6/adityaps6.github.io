// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'adityaps6',
  },
  base: '/',

  projects: {
    github: {
      display: true,
      header: 'My GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Academic & Security Projects',
      projects: [
        {
          title: 'Automated Forensics with Autopsy & Flipper Zero',
          description: 'Forensic analysis using Autopsy and automated Python tooling for Flipper Zero evidence collection.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/adityaps6/forensics-flipper-autopsy',
        },
        {
          title: 'Cloud Security Attack Simulation on AWS',
          description: 'Deployed VPC, EC2, WAF, and simulated attacks on ELB with automation scripts.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/adityaps6/aws-cloud-security',
        },
        {
          title: 'Binary Exploitation and Fuzzing C Codebases',
          description: 'Solved CTFs on binary exploitation, fuzzed C applications to identify vulnerabilities.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/adityaps6/binary-exploitation-lab',
        },
      ],
    },
  },

  seo: {
    title: 'Portfolio of Aditya Sudhansu',
    description: 'Security Engineer with expertise in red teaming, forensics, binary exploitation, and cloud security.',
    imageURL: '',
  },

  social: {
    linkedin: 'aditya-sudhansu',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '7812309285',
    email: 'apsakngwc@gmail.com',
  },

  resume: {
    fileUrl: 'https://yourdomain.com/Aditya_Sudhansu_Resume.pdf',
  },

  skills: [
    'Python',
    'C/C++',
    'Splunk SPL',
    'Security Operations',
    'Incident Response',
    'SIEM',
    'EDR',
    'Nmap',
    'Wireshark',
    'AWS',
    'Cloud Security',
    'OWASP Top 10',
    'Threat Hunting',
    'TheHive',
    'Network Security',
    'IDS/IPS',
    'Malware Analysis',
    'SQL',
    'Secure Coding',
    'Sysmon',
    'Security Automation',
    'Vulnerability Management',
    'Bash',
  ],

  experiences: [
    {
      company: 'Tata Consultancy Services',
      position: 'Security Operations Analyst',
      from: 'August 2020',
      to: 'October 2022',
      companyLink: 'https://www.tcs.com',
    },
  ],

  certifications: [
    {
      name: '(ISC)² Certified in Cybersecurity',
      body: '(ISC)²',
      year: '2023',
      link: 'https://www.isc2.org/certifications/cc',
    },
    {
      name: 'Introduction to Malware Analysis',
      body: 'HackTheBox Academy',
      year: '2023',
      link: 'https://academy.hackthebox.com',
    },
    {
      name: 'pwnable.kr Challenges',
      body: 'CTF Platform',
      year: '2023',
      link: 'https://pwnable.kr',
    },
  ],

  educations: [
    {
      institution: 'Carnegie Mellon University',
      degree: 'MS in Information Security',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Uttar Pradesh Technical University',
      degree: 'B.Tech in Computer Science and Engineering',
      from: '2016',
      to: '2020',
    },
  ],

  publications: [],

  blog: {
    source: '', // You can add medium or dev later
    username: '',
    limit: 2,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'dracula',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: [
      'dark',
      'dracula',
      'night',
      'luxury',
      'dim',
      'cyberpunk',
      'forest',
      'nord',
    ],
  },

  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
