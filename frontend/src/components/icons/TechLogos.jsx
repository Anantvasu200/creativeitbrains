import React from 'react';

export const ReactLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="React">
    <title>React</title>
    <ellipse cx="50" cy="50" rx="45" ry="17.5" fill="none" stroke="#61DAFB" strokeWidth="6"/>
    <ellipse cx="50" cy="50" rx="45" ry="17.5" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 50 50)"/>
    <ellipse cx="50" cy="50" rx="45" ry="17.5" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 50 50)"/>
    <circle cx="50" cy="50" r="7" fill="#61DAFB"/>
  </svg>
);

export const NodeLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Node.js">
    <title>Node.js</title>
    <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" fill="#339933"/>
    <text x="50" y="62" fontFamily="sans-serif" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle">JS</text>
  </svg>
);

export const AWSLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Amazon Web Services">
    <title>Amazon Web Services</title>
    <rect width="100" height="100" rx="12" fill="#232F3E"/>
    <text x="50" y="44" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#FF9900" textAnchor="middle">AWS</text>
    <path d="M20 58 Q50 72 80 58" fill="none" stroke="#FF9900" strokeWidth="5" strokeLinecap="round"/>
    <polygon points="76,52 82,60 88,54" fill="#FF9900"/>
  </svg>
);

export const DockerLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Docker">
    <title>Docker</title>
    <rect x="10" y="55" width="80" height="22" rx="6" fill="#2496ED"/>
    <rect x="14" y="38" width="14" height="12" rx="2" fill="none" stroke="#2496ED" strokeWidth="4"/>
    <rect x="32" y="38" width="14" height="12" rx="2" fill="none" stroke="#2496ED" strokeWidth="4"/>
    <rect x="50" y="38" width="14" height="12" rx="2" fill="none" stroke="#2496ED" strokeWidth="4"/>
    <rect x="32" y="22" width="14" height="12" rx="2" fill="none" stroke="#2496ED" strokeWidth="4"/>
    <path d="M90 58 Q96 50 84 46" fill="none" stroke="#2496ED" strokeWidth="3"/>
    <circle cx="84" cy="46" r="3" fill="#2496ED"/>
  </svg>
);

export const KubernetesLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Kubernetes">
    <title>Kubernetes</title>
    <circle cx="50" cy="50" r="42" fill="none" stroke="#326CE5" strokeWidth="5"/>
    <circle cx="50" cy="50" r="8" fill="#326CE5"/>
    <line x1="50" y1="8" x2="50" y2="28" stroke="#326CE5" strokeWidth="4"/>
    <line x1="50" y1="72" x2="50" y2="92" stroke="#326CE5" strokeWidth="4"/>
    <line x1="8" y1="50" x2="28" y2="50" stroke="#326CE5" strokeWidth="4"/>
    <line x1="72" y1="50" x2="92" y2="50" stroke="#326CE5" strokeWidth="4"/>
    <line x1="21" y1="21" x2="35" y2="35" stroke="#326CE5" strokeWidth="4"/>
    <line x1="65" y1="65" x2="79" y2="79" stroke="#326CE5" strokeWidth="4"/>
    <line x1="79" y1="21" x2="65" y2="35" stroke="#326CE5" strokeWidth="4"/>
    <line x1="35" y1="65" x2="21" y2="79" stroke="#326CE5" strokeWidth="4"/>
  </svg>
);

export const PythonLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Python">
    <title>Python</title>
    <path d="M50 10 C25 10 20 22 20 35 L20 45 L50 45 L50 50 L15 50 C8 50 5 58 5 65 L5 72 C5 85 15 90 35 90 L50 90 L50 80 L35 80 C28 80 25 77 25 72 L25 65 L75 65 L75 72 C75 77 72 80 65 80 L50 80 L50 90 L65 90 C85 90 95 85 95 72 L95 65 C95 58 92 50 85 50 L50 50 L50 45 L80 45 L80 35 C80 22 75 10 50 10Z" fill="#3776AB"/>
    <circle cx="35" cy="30" r="5" fill="white"/>
    <circle cx="65" cy="70" r="5" fill="#FFD43B"/>
  </svg>
);

export const TerraformLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Terraform">
    <title>Terraform</title>
    <polygon points="10,70 35,56 35,28 10,42" fill="#7B42BC"/>
    <polygon points="40,28 65,14 65,42 40,56" fill="#7B42BC" opacity="0.85"/>
    <polygon points="40,62 65,48 65,76 40,90" fill="#7B42BC" opacity="0.7"/>
    <polygon points="70,42 95,28 95,56 70,70" fill="#7B42BC"/>
  </svg>
);

export const ElasticsearchLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Elasticsearch">
    <title>Elasticsearch</title>
    <ellipse cx="50" cy="35" rx="38" ry="18" fill="#F04E98"/>
    <ellipse cx="50" cy="50" rx="42" ry="15" fill="#00BFB3"/>
    <ellipse cx="50" cy="65" rx="38" ry="18" fill="#F04E98" opacity="0.8"/>
  </svg>
);

export const TypeScriptLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="TypeScript">
    <title>TypeScript</title>
    <rect width="100" height="100" rx="10" fill="#3178C6"/>
    <text x="50" y="68" fontFamily="sans-serif" fontSize="52" fontWeight="bold" fill="white" textAnchor="middle">TS</text>
  </svg>
);

export const RedisLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Redis">
    <title>Redis</title>
    <ellipse cx="50" cy="62" rx="42" ry="14" fill="#DC382D" opacity="0.6"/>
    <ellipse cx="50" cy="50" rx="42" ry="14" fill="#DC382D" opacity="0.8"/>
    <ellipse cx="50" cy="38" rx="42" ry="14" fill="#DC382D"/>
    <text x="50" y="44" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">REDIS</text>
  </svg>
);

export const MongoLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="MongoDB">
    <title>MongoDB</title>
    <path d="M50 8 C50 8 28 35 28 58 C28 75 38 88 50 92 C62 88 72 75 72 58 C72 35 50 8 50 8Z" fill="#47A248"/>
    <line x1="50" y1="92" x2="50" y2="60" stroke="#B8CFB0" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

export const GitHubLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="GitHub">
    <title>GitHub</title>
    <circle cx="50" cy="50" r="45" fill="#181717"/>
    <path d="M50 15 C30 15 14 31 14 51 C14 67 24 81 38 86 C40 86.4 40.7 85 40.7 83.8 L40.7 77 C31 79 28.7 73 28.3 71.5 C27.8 70 25.5 66 23.5 64.5 C21.8 63.5 19.5 61.5 23.4 61.4 C27 61.3 29.5 64.8 30 66.3 C34.2 73.3 40.8 71.3 41 71 C41.4 68.3 42.5 66.5 43.7 65.5 C36 64.5 28 61.7 28 49 C28 45.2 29.4 42 31.7 39.6 C31.3 38.6 30 35 32 30 C32 30 35.5 29 41 33 C43.8 32.2 46.9 31.8 50 31.8 C53.1 31.8 56.2 32.2 59 33 C64.5 29 68 30 68 30 C70 35 68.7 38.6 68.3 39.6 C70.6 42 72 45.2 72 49 C72 61.8 64 64.5 56.3 65.5 C57.8 66.8 59.1 69.3 59.1 73.2 L59.1 83.8 C59.1 85 59.8 86.5 62 86 C76 81 86 67 86 51 C86 31 70 15 50 15Z" fill="white"/>
  </svg>
);

export const JenkinsLogo = ({ size = 32 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Jenkins">
    <title>Jenkins</title>
    <circle cx="50" cy="42" r="30" fill="#D33833"/>
    <circle cx="50" cy="42" r="22" fill="#F5C6C4"/>
    <circle cx="42" cy="38" r="4" fill="#333"/>
    <circle cx="58" cy="38" r="4" fill="#333"/>
    <path d="M38 50 Q50 60 62 50" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
    <rect x="38" y="68" width="24" height="20" rx="4" fill="#D33833"/>
    <line x1="50" y1="72" x2="50" y2="88" stroke="white" strokeWidth="3"/>
    <line x1="42" y1="80" x2="58" y2="80" stroke="white" stroke-width="3"/>
  </svg>
);

export const TailwindLogo = ({ size = 36 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Tailwind CSS">
    <title>Tailwind CSS</title>
    <path d="M20 40 C26 26 38 20 50 26 C44 40 46 50 56 50 C68 50 74 38 74 38 C68 52 56 58 44 52 C50 38 48 28 38 28 C26 28 22 40 20 40Z" fill="#06B6D4"/>
    <path d="M46 60 C52 46 64 40 76 46 C70 60 72 70 82 70 C62 70 56 62 46 60Z" fill="#06B6D4" opacity=".7"/>
  </svg>
);

export const GPULogo = ({ size = 36 }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    role="img"
    aria-label="GPU Core"
    fill="none"
    stroke="#76B900"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>GPU Core</title>
    <rect x="20" y="20" width="60" height="60" rx="10" />
    <rect x="35" y="35" width="30" height="30" rx="4" fill="#76B900" fillOpacity="0.2" />
    <circle cx="43" cy="43" r="3" fill="#76B900" />
    <circle cx="57" cy="43" r="3" fill="#76B900" />
    <circle cx="43" cy="57" r="3" fill="#76B900" />
    <circle cx="57" cy="57" r="3" fill="#76B900" />
    <line x1="20" y1="35" x2="10" y2="35" />
    <line x1="20" y1="50" x2="10" y2="50" />
    <line x1="20" y1="65" x2="10" y2="65" />
    <line x1="80" y1="35" x2="90" y2="35" />
    <line x1="80" y1="50" x2="90" y2="50" />
    <line x1="80" y1="65" x2="90" y2="65" />
    <line x1="35" y1="20" x2="35" y2="10" />
    <line x1="50" y1="20" x2="50" y2="10" />
    <line x1="65" y1="20" x2="65" y2="10" />
    <line x1="35" y1="80" x2="35" y2="90" />
    <line x1="50" y1="80" x2="50" y2="90" />
    <line x1="65" y1="80" x2="65" y2="90" />
  </svg>
);
