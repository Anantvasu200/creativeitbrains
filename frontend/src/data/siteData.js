import {
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Globe2,
  Handshake,
  MonitorSmartphone,
  ShieldCheck,
  UsersRound,
  Workflow,
  Cpu,
  GitBranch,
  Lock,
  Server,
  Activity,
  ArrowUpRight
} from 'lucide-react';

export const navItems = [
  ['Home', '#top'],
  ['Services', '#services'],
  ['Why Choose Us', '#why-choose-us'],
  ['Tech Stack', '#tech-stack'],
  ['Our Works', '#showcase'],
  ['Our Process', '#process'],
  ['Testimonials', '#testimonials'],
  ['Contact Us', '#contact']
];

export const metrics = [
  { value: '99.9%', label: 'Uptime SLA Delivered', description: 'Enterprise stability guaranteed' },
  { value: '45%', label: 'Operational Cost Cut', description: 'Through intelligent automations' },
  { value: '150+', label: 'Successful Deployments', description: 'React, Node, Cloud & Mobile systems' },
  { value: '24/7', label: 'Proactive Engineering', description: 'Cross-timezone dedicated support' }
];

export const showcaseItems = [
  {
    company: 'AI Automation',
    title: 'Intelligent operations platform',
    summary: 'Designed AI-assisted workflows that help teams qualify enquiries, automate follow-ups, and view business signals in one place.',
    image: '/hero-ai-2026.png',
    accent: 'from-[#00a99d]/30 to-[#0f6cff]/20',
    tags: ['OpenAI', 'Node.js', 'React', 'TailwindCSS'],
    stats: [
      ['45%', 'Faster Lead Intake'],
      ['3x', 'Workflow Speed']
    ]
  },
  {
    company: 'Cloud & DevOps',
    title: 'Zero-Downtime Microservices Migration',
    summary: 'Migrated legacy architecture to AWS using Docker & Kubernetes. Optimized CI/CD build speeds and decreased monthly hosting bills.',
    image: '/services-modern.png',
    accent: 'from-[#ff0f7b]/20 to-[#f89b29]/10',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    stats: [
      ['99.99%', 'System Uptime'],
      ['40%', 'Infrastructure Saving']
    ]
  },
  {
    company: 'Enterprise Software',
    title: 'Modern Fintech Analytics Workspace',
    summary: 'Connected real-time campaign strategy, payment API analytics, content planning, and secure reporting into a high-fidelity visual dashboard.',
    image: '/team-modern.png',
    accent: 'from-[#dfff78]/20 to-[#00a99d]/20',
    tags: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    stats: [
      ['24/7', 'Realtime Audits'],
      ['92+', 'Lighthouse UX Score']
    ]
  }
];

export const servicesProvided = [
  {
    icon: CloudCog,
    title: 'Cloud Solutions',
    description: 'Custom cloud architecture design, serverless migrations, auto-scaling, and cost optimization across AWS, GCP, and Azure.'
  },
  {
    icon: GitBranch,
    title: 'DevOps & CI/CD',
    description: 'Automated integration pipelines, Dockerized deployments, infrastructure as code, Kubernetes setup, and continuous telemetry.'
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Zero-trust perimeter security, automated compliance audits, vulnerability scanners, DDoS insulation, and encrypted storage.'
  },
  {
    icon: BrainCircuit,
    title: 'AI Automation',
    description: 'Custom LLM embeddings, natural language workflows, auto-triaged ticketing, AI analytics, and predictive data pipelines.'
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'High-performance React & Next.js environments, interactive web dashboards, premium enterprise portals, and SEO optimization.'
  },
  {
    icon: MonitorSmartphone,
    title: 'App Development',
    description: 'Frictionless cross-platform mobile apps for iOS and Android built on clean React Native architectures with offline support.'
  },
  {
    icon: Server,
    title: 'Infrastructure Management',
    description: 'Proactive virtual server maintenance, database performance tuning, backup automation, and high-availability design.'
  },
  {
    icon: Activity,
    title: 'Managed IT Services',
    description: 'Dedicated operations support, automated SLA reporting, software licensing, system onboarding, and 24/7 issue escalation.'
  }
];

export const aboutHighlights = [
  { icon: BadgeCheck, title: 'Premium Design', text: 'Stunning 3D elements, consistent visual hierarchy, and fluid micro-animations.' },
  { icon: ShieldCheck, title: 'Continuous Quality', text: 'Rigorous visual inspection, automated checks, and thorough functional verification.' },
  { icon: Workflow, title: 'Agile Delivery', text: 'Weekly iterations, live staging environments, and transparent sprint reporting.' },
  { icon: Handshake, title: 'True Collaboration', text: 'Direct developers access, Slack/Teams integration, and structured monthly reviews.' }
];

export const techStackData = {
  Frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'],
  Backend: ['Node.js', 'Express', 'NestJS', 'Python (FastAPI)', 'GraphQL', 'Nodemailer'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Vercel'],
  'AI & Databases': ['OpenAI API', 'PostgreSQL', 'MongoDB', 'Redis', 'PyTorch', 'Vector Databases']
};

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description: 'Deep-dive sessions to capture your business targets, compile product requisites, and form engineering milestones.'
  },
  {
    step: '02',
    title: 'Architecture & Design',
    description: 'Drafting high-fidelity UI/UX layouts, outlining secure API definitions, and modeling scalable database architectures.'
  },
  {
    step: '03',
    title: 'Sprint Development',
    description: 'Agile coding loops with daily git commits, peer-reviewed pull requests, and iterative staging deployments.'
  },
  {
    step: '04',
    title: 'Quality Verification',
    description: 'Rigorous unit testing, speed tuning, cross-browser responsiveness checks, and network vulnerability scans.'
  },
  {
    step: '05',
    title: 'Zero-Downtime Release',
    description: 'Deploying services with load balancers, container orchestration, CDN optimization, and active monitoring dashboards.'
  },
  {
    step: '06',
    title: '24/7 Operations Support',
    description: 'System telemetry updates, regular vulnerability patching, minor feature revisions, and live incident helpdesk.'
  }
];

export const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO, OptimaFin Systems',
    avatar: 'SJ',
    feedback: 'Creative IT Brains migrated our monolithic portfolio to a high-speed React app on AWS, cutting page load times by 65%. Their delivery speed is unparalleled.'
  },
  {
    name: 'David Chen',
    role: 'Head of Cloud Ops, ScaleAI',
    avatar: 'DC',
    feedback: 'Their DevOps team redesigned our CI/CD pipelines and Kubernetes configurations. We now push releases five times a day with complete compliance.'
  },
  {
    name: 'Liam O\'Connor',
    role: 'Founder, VeloPay UK',
    avatar: 'LO',
    feedback: 'Integrating their custom AI customer agent reduced support ticket escalations by 40%. The modern visual style and interface design of our portal wowed our board.'
  }
];

export const executiveTeam = [
  {
    name: 'Pradeep Pandey',
    role: 'Head of Marketing and Sales',
    summary: '12+ years of technology and marketing experience with a strong computer science background.'
  },
  {
    name: 'Raushan Mishra',
    role: 'Business Development Manager',
    summary: '10+ years of experience across business development, customer growth, and operations.'
  },
  {
    name: 'Tchize Matias',
    role: 'Country Head - United Kingdom',
    summary: '12+ years of online marketing and technology experience supporting international growth.'
  }
];

export const footerLinks = [
  ['Home', '#top'],
  ['Services', '#services'],
  ['Why Choose Us', '#why-choose-us'],
  ['Tech Stack', '#tech-stack'],
  ['Our Works', '#showcase'],
  ['Our Process', '#process'],
  ['Testimonials', '#testimonials'],
  ['Contact Us', '#contact']
];

