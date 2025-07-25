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
      header: 'Academic Projects',
      projects: [
        {
          title: 'Automated Forensics with Autopsy & Flipper Zero',
          description: 'Forensic analysis using Autopsy and automated Python tooling for Flipper Zero evidence collection. Applied autopsy for performing host-based forensics on multiple disk image files to identify the source of incidents. Performed forensic investigation of Flipper Zero device, developing an automated Python program for evidence collection.',
        
        },
        {
          title: 'Cloud Security Attack Simulation on AWS',
          description: 'Deployed VPC, EC2, WAF, and simulated attacks on ELB with automation scripts. Deployed a VPC configuration for attack simulation, developing scripts to automate the VPC Peering and ModSecurity WAF misconfigurations. Gained thorough understanding of ELB configurations on AWS. Simulated attacks on a ELB setup, crafting scripts for attack execution.',
        },
        {
          title: 'Binary Exploitation and Fuzzing C Codebases',
          description: 'Solved CTF challenges on binary exploitations and reverse engineering, fuzzed C applications to identify vulnerabilities. Utilizing fuzzing tools like AFL++ for crashing C programs, finding security vulnerabilities, and identifying potential fixes. Developed secure file system in C to store files, safeguard the file contents and implement acceess controls. Performed in depth security analysis of the secure file system to identify vulnerabilities and provide fixes.',

        },
        {
          title: 'Hack The Box Machines',
          description: 'Participated in numerous Hack The Box challenges to sharpen offensive security skills and simulate real-world penetration testing scenarios. Solved Active Directory, web application, and Linux/Windows privilege escalation boxes. Practiced manual exploitation of vulnerabilities such as SQL Injection, Command Injection, LFI/RFI, Kerberoasting, SMB enumeration, and buffer overflows. Applied tools like Burp Suite, Nmap, Gobuster, Impacket, and Hydra.',

        },
      ],
    },
  },

  seo: {
    title: 'Portfolio of Aditya Sudhansu',
    description: 'Security Engineer with expertise in red teaming, blue teaming, forensics, binary exploitation, and cloud security.',
    imageURL: 'https://github.com/adityaps6/adityaps6.github.io/blob/main/me2.jpeg',
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
    fileUrl: 'https://drive.google.com/file/d/1ss7OH6YenXBrRtqxFvv7qeHIduA5fgQ3/view',
    imageURL: 'https://github.com/adityaps6/adityaps6.github.io/blob/main/me2.jpeg',
  },
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
    'MITRE ATTACK Framework',
    'AFL++',
  ],

  experiences: [
    {
      company: 'Amazon Web Services',
      position: 'Cloud Support Associate',
      from: 'October 2022',
      to: 'December 2022',
    },
    {
      company: 'Tata Consultancy Services',
      position: 'Security Operations Analyst',
      from: 'August 2020',
      to: 'October 2022',
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

  footer: `Made with ❤️`,
  enablePWA: true,
};

export default CONFIG;
