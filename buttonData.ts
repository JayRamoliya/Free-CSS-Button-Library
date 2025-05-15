
export interface ButtonCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ButtonStyle {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  cssClass: string;
  htmlCode: string;
  cssCode: string;
  popularityScore: number;
  isNew: boolean;
  isFeatured: boolean;
}

export const buttonCategories: ButtonCategory[] = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean, simple button styles with minimal effects',
    icon: '🔲'
  },
  {
    id: '3d',
    name: '3D',
    description: 'Buttons with depth and dimensional effects',
    icon: '📦'
  },
  {
    id: 'gradient',
    name: 'Gradient',
    description: 'Beautiful color gradients and transitions',
    icon: '🌈'
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Glowing, vibrant buttons with light effects',
    icon: '✨'
  },
  {
    id: 'animated',
    name: 'Animated',
    description: 'Buttons with engaging animations and effects',
    icon: '🔄'
  },
  {
    id: 'loader',
    name: 'Loading',
    description: 'Loading state buttons with spinners and animations',
    icon: '⏳'
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    description: 'Modern frosted glass effect buttons',
    icon: '🪟'
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    description: 'Soft UI buttons with subtle shadows',
    icon: '🔘'
  },
];

export const buttonStyles: ButtonStyle[] = [
  {
    id: 'simple-primary',
    name: 'Simple Primary',
    description: 'A clean, minimal primary button with hover effect',
    category: 'minimal',
    tags: ['primary', 'minimal', 'simple'],
    cssClass: 'btn-primary',
    htmlCode: '<button class="btn-primary">Button Text</button>',
    cssCode: `.btn-primary {
  background-color: #6366f1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #4f46e5;
}`,
    popularityScore: 98,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'outline-button',
    name: 'Outline Button',
    description: 'A bordered button with transparent background',
    category: 'minimal',
    tags: ['outline', 'bordered', 'minimal'],
    cssClass: 'btn-outline',
    htmlCode: '<button class="btn-outline">Button Text</button>',
    cssCode: `.btn-outline {
  background-color: transparent;
  color: #6366f1;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid #6366f1;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: #6366f1;
  color: white;
}`,
    popularityScore: 92,
    isNew: false,
    isFeatured: true
  },
  {
    id: '3d-button',
    name: '3D Push Button',
    description: 'A button with 3D push down effect',
    category: '3d',
    tags: ['3d', 'push', 'effect'],
    cssClass: 'btn-3d',
    htmlCode: '<button class="btn-3d">Button Text</button>',
    cssCode: `.btn-3d {
  background-color: #6366f1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  box-shadow: 0 6px 0 #4338ca;
  transform: translateY(0);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.btn-3d:hover {
  transform: translateY(2px);
  box-shadow: 0 4px 0 #4338ca;
}

.btn-3d:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #4338ca;
}`,
    popularityScore: 89,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'gradient-button',
    name: 'Gradient Fade',
    description: 'A button with smooth gradient background',
    category: 'gradient',
    tags: ['gradient', 'colorful', 'smooth'],
    cssClass: 'btn-gradient',
    htmlCode: '<button class="btn-gradient">Button Text</button>',
    cssCode: `.btn-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}`,
    popularityScore: 95,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'neon-button',
    name: 'Neon Glow',
    description: 'A button with neon glow effect',
    category: 'neon',
    tags: ['neon', 'glow', 'light'],
    cssClass: 'btn-neon',
    htmlCode: '<button class="btn-neon">Button Text</button>',
    cssCode: `.btn-neon {
  background-color: transparent;
  color: #6366f1;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 2px solid #6366f1;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-shadow: 0 0 5px #6366f1;
  transition: all 0.3s ease;
  box-shadow: 0 0 5px #6366f1, 0 0 15px #6366f1 inset;
}

.btn-neon:hover {
  color: white;
  background-color: #6366f1;
  box-shadow: 0 0 10px #6366f1, 0 0 30px #6366f1, 0 0 5px #6366f1 inset;
  text-shadow: 0 0 5px white;
}`,
    popularityScore: 88,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'pulse-button',
    name: 'Pulse Animation',
    description: 'A button with pulsing animation effect',
    category: 'animated',
    tags: ['animated', 'pulse', 'effect'],
    cssClass: 'btn-pulse',
    htmlCode: '<button class="btn-pulse">Button Text</button>',
    cssCode: `.btn-pulse {
  background-color: #6366f1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}

.btn-pulse::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.25rem;
  background-color: #6366f1;
  z-index: -1;
  animation: pulse 1.5s ease-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}`,
    popularityScore: 82,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'loading-button',
    name: 'Loading Spinner',
    description: 'A button with loading spinner animation',
    category: 'loader',
    tags: ['loading', 'spinner', 'animation'],
    cssClass: 'btn-loading',
    htmlCode: '<button class="btn-loading"><span class="spinner"></span><span class="text">Loading...</span></button>',
    cssCode: `.btn-loading {
  background-color: #6366f1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`,
    popularityScore: 80,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'glass-button',
    name: 'Glass Effect',
    description: 'A modern glassmorphic button with blur',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'transparency', 'modern'],
    cssClass: 'btn-glass',
    htmlCode: '<button class="btn-glass">Button Text</button>',
    cssCode: `.btn-glass {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}`,
    popularityScore: 96,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'neomorphic-button',
    name: 'Neumorphic Style',
    description: 'A soft UI neumorphic button',
    category: 'neumorphism',
    tags: ['neumorphism', 'soft', 'shadow'],
    cssClass: 'btn-neumorphic',
    htmlCode: '<button class="btn-neumorphic">Button Text</button>',
    cssCode: `.btn-neumorphic {
  background-color: #f0f0f0;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;
  transition: all 0.2s ease;
}

.btn-neumorphic:hover {
  box-shadow: 3px 3px 6px #d1d1d1, -3px -3px 6px #ffffff;
}

.btn-neumorphic:active {
  box-shadow: inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff;
}`,
    popularityScore: 85,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'wiggle-button',
    name: 'Wiggle Animation',
    description: 'A button that wiggles slightly on hover',
    category: 'animated',
    tags: ['wiggle', 'animation', 'hover'],
    cssClass: 'btn-wiggle',
    htmlCode: '<button class="btn-wiggle">Button Text</button>',
    cssCode: `.btn-wiggle {
  background-color: #f39c12;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.btn-wiggle:hover {
  animation: wiggle 0.3s infinite alternate;
}

@keyframes wiggle {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}`,
    popularityScore: 75,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'blob-button',
    name: 'Blobby Shape',
    description: 'A button with a fluid, blob-like shape',
    category: 'shape',
    tags: ['blob', 'fluid', 'shape'],
    cssClass: 'btn-blob',
    htmlCode: '<button class="btn-blob">Button Text</button>',
    cssCode: `.btn-blob {
  background-color: #3498db;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.btn-blob::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: #2980b9;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.3s ease-in-out;
}

.btn-blob:hover::before {
  width: 150%;
  height: 150%;
  transform: translate(-50%, -50%) scale(1);
}

.btn-blob span {
  position: relative;
  z-index: 1;
}`,
    popularityScore: 84,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'rounded-arrow-button',
    name: 'Rounded Arrow',
    description: 'A button with a rounded arrow shape',
    category: 'shape',
    tags: ['rounded', 'arrow', 'shape'],
    cssClass: 'btn-rounded-arrow',
    htmlCode: '<button class="btn-rounded-arrow"><span>Next</span><svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 12l1.41 1.41L11 17V7l-5.59 5.59L4 12m14 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/></svg></button>',
    cssCode: `.btn-rounded-arrow {
  background-color: #27ae60;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
}

.btn-rounded-arrow svg {
  width: 20px;
  height: 20px;
}

.btn-rounded-arrow:hover {
  background-color: #219653;
}`,
    popularityScore: 79,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'split-button',
    name: 'Split Action',
    description: 'A button with a split action on the right',
    category: 'layout',
    tags: ['split', 'action', 'layout'],
    cssClass: 'btn-split',
    htmlCode: '<div class="btn-split"><button>Main Action</button><button class="action">+</button></div>',
    cssCode: `.btn-split {
  display: inline-flex;
  border-radius: 0.3rem;
  overflow: hidden;
}

.btn-split > button {
  background-color: #8e44ad;
  color: white;
  padding: 0.75rem 1rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-split > button.action {
  background-color: #9b59b6;
  padding: 0.75rem 0.75rem;
}

.btn-split > button:hover {
  background-color: #7d3c98;
}

.btn-split > button.action:hover {
  background-color: #8e44ad;
}`,
    popularityScore: 76,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'icon-button',
    name: 'Icon with Text',
    description: 'A button with an icon and text',
    category: 'layout',
    tags: ['icon', 'text', 'layout'],
    cssClass: 'btn-icon',
    htmlCode: '<button class="btn-icon"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg><span>Home</span></button>',
    cssCode: `.btn-icon {
  background-color: #34495e;
  color: white;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 0.3rem;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: background-color 0.3s ease;
}

.btn-icon svg {
  width: 20px;
  height: 20px;
}

.btn-icon:hover {
  background-color: #2c3e50;
}`,
    popularityScore: 83,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'pill-button',
    name: 'Pill Shape',
    description: 'A button with a rounded pill shape',
    category: 'shape',
    tags: ['pill', 'rounded', 'shape'],
    cssClass: 'btn-pill',
    htmlCode: '<button class="btn-pill">Learn More</button>',
    cssCode: `.btn-pill {
  background-color: #e67e22;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out;
}

.btn-pill:hover {
  background-color: #d35400;
  transform: scale(1.05);
}`,
    popularityScore: 91,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'border-pulse-button',
    name: 'Border Pulse',
    description: 'A button with a pulsing border animation',
    category: 'animated',
    tags: ['border', 'pulse', 'animation'],
    cssClass: 'btn-border-pulse',
    htmlCode: '<button class="btn-border-pulse">Press</button>',
    cssCode: `
.btn-border-pulse {
  background-color: transparent;
  color: #f5f5f5;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #4ab5ff;
  animation: border-pulse 2s infinite;
  transition: background-color 0.3s ease;
}

.btn-border-pulse:hover {
  background-color: rgba(74, 181, 255, 0.2);
}


@keyframes border-pulse {
  0% {
    border-color: #4ab5ff;
    box-shadow: 0 0 0 0 rgba(74, 181, 255, 0.4);
  }
  50% {
    border-color: #4ab5ff;
    box-shadow: 0 0 20px 5px rgba(74, 181, 255, 0);
  }
  100% {
    border-color: #4ab5ff;
    box-shadow: 0 0 0 0 rgba(74, 181, 255, 0.4);
  }
}
`,
    popularityScore: 77,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'rotate-3d-button',
    name: '3D Rotate',
    description: 'A button with a 3D rotation effect on hover.',
    category: '3d',
    tags: ['3d', 'rotate', 'effect'],
    cssClass: 'btn-rotate-3d',
    htmlCode: '<button class="btn-rotate-3d">Hover Me</button>',
    cssCode: `
.btn-rotate-3d {
  background-color: #e07a5f;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}

.btn-rotate-3d:hover {
  transform: rotateX(-30deg) rotateY(20deg) translateZ(20px);
}
`,
    popularityScore: 90,
    isNew: true,
    isFeatured: true
  },
  {
    "id": "gradient-btn-16",
    "name": "Neon Burst",
    "category": "gradient",
    "tags": ["gradient", "neon", "bright", "glow"],
    "cssClass": "gradient-btn-16",
    "htmlCode": "<button class=\"gradient-btn-16\">Neon</button>",
    "cssCode": ".gradient-btn-16 {\n  background: linear-gradient(to right, #4361ee, #80ed99);\n  color: white;\n  padding: 0.8rem 1.8rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 0 0 20px rgba(99, 110, 250, 0.7);\n  transition: box-shadow 0.3s ease;\n}\n\n.gradient-btn-16:hover {\n  box-shadow: 0 0 30px rgba(99, 110, 250, 0.9);\n}",
    "popularityScore": 94,
    "isNew": true,
    "isFeatured": true,
    "description": "A vibrant button with a glowing neon effect, inspired by retro arcade aesthetics."
  },
  {
    "id": "gradient-btn-17",
    "name": "Diamond Cut",
    "category": "gradient",
    "tags": ["gradient", "diamond", "geometric"],
    "cssClass": "gradient-btn-17",
    "htmlCode": "<button class=\"gradient-btn-17\">Cut</button>",
    "cssCode": ".gradient-btn-17 {\n  background: linear-gradient(135deg, #616161, #37474f);\n  color: white;\n  padding: 0.7rem 1.4rem;\n  border: none;\n  clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%);\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n\n.gradient-btn-17:hover {\n  transform: scale(1.1);\n}",
    "popularityScore": 87,
    "isNew": true,
    "isFeatured": false,
    "description": "A button with a sharp, geometric shape and a subtle gradient, resembling a cut diamond."
  },
  {
    "id": "gradient-btn-18",
    "name": "Layered Waves",
    "category": "gradient",
    "tags": ["gradient", "layered", "wave"],
    "cssClass": "gradient-btn-18",
    "htmlCode": "<button class=\"gradient-btn-18\">Waves</button>",
    "cssCode": ".gradient-btn-18 {\n  background: linear-gradient(to right, #4fc3f7, #03a9f4);\n  color: white;\n  padding: 0.9rem 2rem;\n  border: none;\n  border-radius: 1.5rem;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n\n.gradient-btn-18::before, .gradient-btn-18::after {\n  content: '';\n  position: absolute;\n  width: 120%;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  top: -30px;\n  left: -10%;\n  animation: wave 3s linear infinite;\n  opacity: 0.5;\n}\n\n.gradient-btn-18::after {\n  animation-delay: 1.5s;\n  opacity: 0.4;\n}\n\n@keyframes wave {\n  from { transform: translateX(0); }\n  to { transform: translateX(-40px); }\n}",
    "popularityScore": 91,
    "isNew": true,
    "isFeatured": true,
    "description": "A dynamic button with animated, layered waves, creating a sense of depth and movement."
  },
  {
    "id": "gradient-btn-19",
    "name": "Blooming Flower",
    "category": "gradient",
    "tags": ["gradient", "flower", "soft"],
    "cssClass": "gradient-btn-19",
    "htmlCode": "<button class=\"gradient-btn-19\">Bloom</button>",
    "cssCode": ".gradient-btn-19 {\n    background: linear-gradient(to bottom, #f06292, #e53935);\n    color: white;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.3s ease;\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n}\n\n.gradient-btn-19:hover {\n    transform: scale(1.1);\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n}\n\n.gradient-btn-19:before {\n    content: '';\n    position: absolute;\n    width: 120%;\n    height: 120%;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 50%;\n    animation: pulse 2s infinite;\n    opacity: 0;\n}\n\n@keyframes pulse {\n    0% { transform: scale(0.8); opacity: 0; }\n    50% { transform: scale(1.2); opacity: 0.3; }\n    100% { transform: scale(0.8); opacity: 0; }\n}",
    "popularityScore": 89,
    "isNew": true,
    "isFeatured": true,
    "description": "A circular button with a pulsating gradient effect, resembling a blooming flower."
  },
  {
    "id": "gradient-btn-20",
    "name": "Retro Wave",
    "category": "gradient",
    "tags": ["gradient", "retro", "wave", "eighties"],
    "cssClass": "gradient-btn-20",
    "htmlCode": "<button class=\"gradient-btn-20\">Retro</button>",
    "cssCode": ".gradient-btn-20 {\n    background: linear-gradient(to right, #ff006e, #8e2de2);\n    color: white;\n    padding: 0.8rem 1.6rem;\n    border: none;\n    border-radius: 0.5rem;\n    font-weight: bold;\n    cursor: pointer;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n    transition: all 0.3s ease;\n    position: relative;\n    overflow: hidden;\n}\n\n.gradient-btn-20:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);\n}\n\n.gradient-btn-20::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.3) 70%, transparent 90%);\n    animation: stripe 2s linear infinite;\n    background-size: 200% 200%;\n}\n\n@keyframes stripe {\n    0% { background-position: 0 0; }\n    100% { background-position: 100% 0; }\n}",
    "popularityScore": 93,
    "isNew": true,
    "isFeatured": true,
    "description": "A retro-inspired button with a striped, animated overlay, reminiscent of 80s aesthetics."
  },
  {
    "id": "gradient-btn-21",
    "name": "Morning Dew",
    "category": "gradient",
    "tags": ["gradient", "soft", "pastel"],
    "cssClass": "gradient-btn-21",
    "htmlCode": "<button class=\"gradient-btn-21\">Dew</button>",
    "cssCode": ".gradient-btn-21 {\n  background: linear-gradient(to bottom, #e0f7fa, #a5f1e6);\n  color: #006064;\n  padding: 0.7rem 1.5rem;\n  border: none;\n  border-radius: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.gradient-btn-21:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}",
    "popularityScore": 82,
    "isNew": true,
    "isFeatured": false,
    "description": "A soft, pastel-colored button with a gentle gradient, evoking the freshness of morning dew."
  },
  {
    "id": "gradient-btn-22",
    "name": "Citrus Burst",
    "category": "gradient",
    "tags": ["gradient", "bright", "citrus"],
    "cssClass": "gradient-btn-22",
    "htmlCode": "<button class=\"gradient-btn-22\">Citrus</button>",
    "cssCode": ".gradient-btn-22 {\n  background: linear-gradient(to right, #ffc107, #ff6f00);\n  color: #212121;\n  padding: 0.8rem 1.8rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.gradient-btn-22:hover {\n  transform: scale(1.05);\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\n}",
    "popularityScore": 88,
    "isNew": true,
    "isFeatured": true,
    "description": "A vibrant button with a gradient of citrus colors, radiating energy and freshness."
  },
  {
    "id": "gradient-btn-23",
    "name": "Mystic River",
    "category": "gradient",
    "tags": ["gradient", "dark", "deep"],
    "cssClass": "gradient-btn-23",
    "htmlCode": "<button class=\"gradient-btn-23\">River</button>",
    "cssCode": ".gradient-btn-23 {\n  background: linear-gradient(to bottom, #0d47a1, #1a237e);\n  color: white;\n  padding: 0.7rem 1.4rem;\n  border: none;\n  border-radius: 0.3rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.gradient-btn-23:hover {\n  transform: translateY(-2px);\n}\n\n.gradient-btn-23::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: all 0.5s linear;\n}\n\n.gradient-btn-23:hover::before {\n  left: 100%;\n}",
    "popularityScore": 90,
    "isNew": true,
    "isFeatured": true,
    "description": "A deep, dark button with a subtle animated effect, evoking the mystery of a flowing river."
  },
  {
    "id": "gradient-btn-24",
    "name": "Vintage Rose",
    "category": "gradient",
    "tags": ["gradient", "vintage", "soft"],
    "cssClass": "gradient-btn-24",
    "htmlCode": "<button class=\"gradient-btn-24\">Rose</button>",
    "cssCode": ".gradient-btn-24 {\n  background: linear-gradient(to bottom, #f8bbd0, #d81b60);\n  color: white;\n  padding: 0.6rem 1.2rem;\n  border: 2px solid #d81b60;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.gradient-btn-24:hover {\n  background-color: #d81b60;\n  border-color: #d81b60;\n  transform: scale(1.05);\n}",
    "popularityScore": 84,
    "isNew": true,
    "isFeatured": false,
    "description": "A soft, vintage-style button with a gradient of rose hues, reminiscent of classic beauty."
  },
  {
    "id": "gradient-btn-25",
    "name": "Aurora Borealis",
    "category": "gradient",
    "tags": ["gradient", "aurora", "vibrant"],
    "cssClass": "gradient-btn-25",
    "htmlCode": "<button class=\"gradient-btn-25\">Aurora</button>",
    "cssCode": ".gradient-btn-25 {\n  background: linear-gradient(to right, #48b685, #6366f1, #d946ef);\n  color: white;\n  padding: 0.8rem 1.6rem;\n  border: none;\n  border-radius: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n  background-size: 200% 200%;\n  animation: aurora 5s ease infinite;\n  transition: all 0.3s ease;\n}\n\n.gradient-btn-25:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);\n}\n\n@keyframes aurora {\n  0% { background-position: 0% 50%; }\n  50% { background-position: 100% 50%; }\n  100% { background-position: 0% 50%; }\n}",
    "popularityScore": 96,
    "isNew": true,
    "isFeatured": true,
    "description": "A mesmerizing button with a vibrant, shifting gradient inspired by the Aurora Borealis."
  },
  {
    "id": "gradient-btn-26",
    "name": "Molten Core",
    "category": "gradient",
    "tags": ["gradient", "molten", "dark"],
    "cssClass": "gradient-btn-26",
    "htmlCode": "<button class=\"gradient-btn-26\">Molten</button>",
    "cssCode": ".gradient-btn-26 {\n  background: linear-gradient(to bottom, #d43d1c, #1a1a1a);\n  color: white;\n  padding: 0.9rem 2rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.gradient-btn-26:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);\n}\n\n.gradient-btn-26::before {\n  content: '';\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 40%;\n  animation: rotate 6s linear infinite;\n  opacity: 0;\n}\n\n.gradient-btn-26:hover::before {\n  opacity: 0.8;\n}\n\n@keyframes rotate {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}",
    "popularityScore": 92,
    "isNew": true,
    "isFeatured": true,
    "description": "A dark, intense button with a subtle animated glow, reminiscent of a molten core."
  },
  {
    "id": "gradient-btn-27",
    "name": "Seafoam Serenity",
    "category": "gradient",
    "tags": ["gradient", "seafoam", "pastel", "soft"],
    "cssClass": "gradient-btn-27",
    "htmlCode": "<button class=\"gradient-btn-27\">Seafoam</button>",
    "cssCode": ".gradient-btn-27 {\n            background: linear-gradient(to right, #b2f5ef, #81c784);\n            color: #004d40;\n            padding: 0.7rem 1.5rem;\n            border: none;\n            border-radius: 0.75rem;\n            font-weight: 500;\n            cursor: pointer;\n            transition: all 0.3s ease;\n        }\n\n        .gradient-btn-27:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n        }",
    "popularityScore": 85,
    "isNew": true,
    "isFeatured": false,
    "description": "A soft, calming button with a gradient of seafoam green hues, evoking a sense of serenity."
  },
  {
    "id": "gradient-btn-28",
    "name": "Electric Dreams",
    "category": "gradient",
    "tags": ["gradient", "electric", "bright", "futuristic"],
    "cssClass": "gradient-btn-28",
    "htmlCode": "<button class=\"gradient-btn-28\">Electric</button>",
    "cssCode": ".gradient-btn-28 {\n            background: linear-gradient(to right, #bf360c, #f57f17, #ffeb3b);\n            color: #212121;\n            padding: 0.9rem 2rem;\n            border: none;\n            border-radius: 0.5rem;\n            font-weight: bold;\n            cursor: pointer;\n            animation: pulse 2s infinite alternate;\n            transition: all 0.3s ease;\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n        }\n\n        .gradient-btn-28:hover {\n            transform: scale(1.05);\n            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\n        }\n\n        @keyframes pulse {\n            from { opacity: 0.8; }\n            to { opacity: 1; }\n        }",
    "popularityScore": 94,
    "isNew": true,
    "isFeatured": true,
    "description": "A bright, energetic button with a pulsing gradient, inspired by electric dreams and futuristic aesthetics."
  },
  {
    "id": "gradient-btn-29",
    "name": "Nebula Sky",
    "category": "gradient",
    "tags": ["gradient", "nebula", "space", "vibrant"],
    "cssClass": "gradient-btn-29",
    "htmlCode": "<button class=\"gradient-btn-29\">Nebula</button>",
    "cssCode": ".gradient-btn-29 {\n            background: linear-gradient(to bottom, #6a1b9a, #4a148c, #311b92);\n            color: white;\n            padding: 0.7rem 1.4rem;\n            border: none;\n            border-radius: 0.3rem;\n            font-weight: 600;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            position: relative;\n            overflow: hidden;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n\n        .gradient-btn-29:hover {\n            transform: translateY(-2px);\n        }\n\n        .gradient-btn-29::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent);\n            background-size: 400% 400%;\n            animation: move 2s linear infinite;\n        }\n\n        @keyframes move {\n            0% { background-position: 0 0; }\n            100% { background-position: 100% 100%; }\n        }",
    "popularityScore": 95,
    "isNew": true,
    "isFeatured": true,
    "description": "A vibrant, celestial button with an animated, shifting gradient, inspired by the colors of a nebula."
  },
  {
    "id": "gradient-btn-30",
    "name": "Rustic Earth",
    "category": "gradient",
    "tags": ["gradient", "rustic", "earthy", "natural"],
    "cssClass": "gradient-btn-30",
    "htmlCode": "<button class=\"gradient-btn-30\">Earth</button>",
    "cssCode": ".gradient-btn-30 {\n            background: linear-gradient(to bottom, #a1887f, #795548);\n            color: white;\n            padding: 0.6rem 1.2rem;\n            border: 2px solid #795548;\n            border-radius: 0.5rem;\n            font-weight: 500;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            box-shadow: none;\n            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n        }\n\n        .gradient-btn-30:hover {\n            background-color: #795548;\n            border-color: #795548;\n            transform: scale(1.05);\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n        }",
    "popularityScore": 80,
    "isNew": true,
    "isFeatured": false,
    "description": "A button with a warm, earthy gradient and a rustic feel, inspired by natural tones."
  },
  {
    "id": "pulse-button",
    "name": "Pulse",
    "description": "A button that gently pulses with color.",
    "category": "effect",
    "tags": ["pulse", "color", "animation"],
    "cssClass": "btn-pulse",
    "htmlCode": "<button class=\"btn-pulse\">Pulse</button>",
    "cssCode": `
.btn-pulse {
  background-color: #d64161;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  animation: pulse 1.5s infinite alternate;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

@keyframes pulse {
  from { opacity: 0.8; }
  to   { opacity: 1; }
}
`,
    "popularityScore": 75,
    "isNew": false,
    "isFeatured": false
  },
  {
    "id": "slide-in-button",
    "name": "Slide In",
    "description": "A button that slides in from the side on hover.",
    "category": "effect",
    "tags": ["slide", "hover", "animation"],
    "cssClass": "btn-slide-in",
    "htmlCode": "<button class=\"btn-slide-in\">Slide In</button>",
    "cssCode": `
.btn-slide-in {
  background-color: #29adb2;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-slide-in::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transition: left 0.3s ease-in-out;
}

.btn-slide-in:hover::before {
  left: 0;
}
`,
    "popularityScore": 68,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "zoom-out-button",
    "name": "Zoom Out",
    "description": "A button that slightly zooms out on hover.",
    "category": "effect",
    "tags": ["zoom", "hover", "transform"],
    "cssClass": "btn-zoom-out",
    "htmlCode": "<button class=\"btn-zoom-out\">Zoom Out</button>",
    "cssCode": `
.btn-zoom-out {
  background-color: #f08a5d;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.btn-zoom-out:hover {
  transform: scale(0.95);
}
`,
    "popularityScore": 78,
    "isNew": false,
    "isFeatured": false
  },
  {
    "id": "fade-in-button",
    "name": "Fade In",
    "description": "A button that fades in on hover.",
    "category": "effect",
    "tags": ["fade", "hover", "opacity"],
    "cssClass": "btn-fade-in",
    "htmlCode": "<button class=\"btn-fade-in\">Fade In</button>",
    "cssCode": `
.btn-fade-in {
  background-color: #456990;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

.btn-fade-in:hover {
  opacity: 1;
}
`,
    "popularityScore": 62,
    "isNew": false,
    "isFeatured": false
  },
  {
    "id": "rotate-button",
    "name": "Rotate",
    "description": "A button that slightly rotates on hover.",
    "category": "effect",
    "tags": ["rotate", "hover", "transform"],
    "cssClass": "btn-rotate",
    "htmlCode": "<button class=\"btn-rotate\">Rotate</button>",
    "cssCode": `
.btn-rotate {
  background-color: #e0fbfc;
  color: #1d3557;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.btn-rotate:hover {
  transform: rotate(5deg);
}
`,
    "popularityScore": 70,
    "isNew": false,
    "isFeatured": false
  },
  {
    "id": "bounce-button",
    "name": "Bounce",
    "description": "A button that bounces slightly.",
    "category": "effect",
    "tags": ["bounce", "animation"],
    "cssClass": "btn-bounce",
    "htmlCode": "<button class=\"btn-bounce\">Bounce</button>",
    "cssCode": `
.btn-bounce {
  background-color: #ffbe0b;
  color: #343a40;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  animation: bounce 1s infinite alternate;
  transform-origin: bottom center;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
}
`,
    "popularityScore": 82,
    "isNew": true,
    "isFeatured": true
  },
  {
    "id": "skew-button",
    "name": "Skew",
    "description": "A button that skews on hover.",
    "category": "effect",
    "tags": ["skew", "hover", "transform"],
    "cssClass": "btn-skew",
    "htmlCode": "<button class=\"btn-skew\">Skew</button>",
    "cssCode": `
.btn-skew {
  background-color: #3a86ff;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.btn-skew:hover {
  transform: skewX(-10deg);
}
`,
    "popularityScore": 65,
    "isNew": false,
    "isFeatured": false
  },
  {
    "id": "expand-button",
    "name": "Expand",
    "description": "A button that expands slightly on hover.",
    "category": "effect",
    "tags": ["expand", "hover", "transform"],
    "cssClass": "btn-expand",
    "htmlCode": "<button class=\"btn-expand\">Expand</button>",
    "cssCode": `
.btn-expand {
  background-color: #8ac926;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.btn-expand:hover {
  transform: scale(1.1);
}
`,
    "popularityScore": 72,
    "isNew": false,
    "isFeatured": false
  },
  {
    "id": "drop-shadow-button",
    "name": "Drop Shadow",
    "description": "A button with a more pronounced drop shadow on hover.",
    "category": "effect",
    "tags": ["shadow", "hover"],
    "cssClass": "btn-drop-shadow",
    "htmlCode": "<button class=\"btn-drop-shadow\">Drop Shadow</button>",
    "cssCode": `
.btn-drop-shadow {
  background-color: #ff70a6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

.btn-drop-shadow:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}
`,
    "popularityScore": 80,
    "isNew": false,
    "isFeatured": true
  },
  {
    "id": "wiggle-button",
    "name": "Wiggle",
    "description": "A button that wiggles slightly.",
    "category": "effect",
    "tags": ["wiggle", "animation", "rotate"],
    "cssClass": "btn-wiggle",
    "htmlCode": "<button class=\"btn-wiggle\">Wiggle</button>",
    "cssCode": `
.btn-wiggle {
  background-color: #f94144;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  animation: wiggle 0.8s infinite alternate;
  transform-origin: center center;
}

@keyframes wiggle {
  0% { transform: rotate(-3deg); }
  100% { transform: rotate(3deg); }
}
`,
    "popularityScore": 73,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "border-pulse-button",
    "name": "Border Pulse",
    "description": "A button with a border that pulses.",
    "category": "effect",
    "tags": ["border", "pulse", "animation"],
    "cssClass": "btn-border-pulse",
    "htmlCode": "<button class=\"btn-border-pulse\">Border Pulse</button>",
    "cssCode": `
.btn-border-pulse {
  background-color: #90be6d;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #90be6d;
  animation: borderPulse 1.5s infinite alternate;
}

@keyframes borderPulse {
  from { border-color: #90be6d; }
  to   { border-color: #43aa8b; }
}
`,
    "popularityScore": 69,
    "isNew": false,
    "isFeatured": false
  },
  {
    "id": "shadow-inset-button",
    "name": "Shadow Inset",
    "description": "A button with an inset shadow on hover.",
    "category": "effect",
    "tags": ["shadow", "inset", "hover"],
    "cssClass": "btn-shadow-inset",
    "htmlCode": "<button class=\"btn-shadow-inset\">Shadow Inset</button>",
    "cssCode": `
.btn-shadow-inset {
  background-color: #f8961e;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
}

.btn-shadow-inset:hover {
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
}
`,
    "popularityScore": 71,
    "isNew": false,
    "isFeatured": false
  },
  {
    "id": "slide-up-button",
    "name": "Slide Up",
    "description": "A button that slides up slightly on hover.",
    "category": "effect",
    "tags": ["slide", "hover", "transform"],
    "cssClass": "btn-slide-up",
    "htmlCode": "<button class=\"btn-slide-up\">Slide Up</button>",
    "cssCode": `
.btn-slide-up {
  background-color: #577590;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.btn-slide-up:hover {
  transform: translateY(-3px);
}
`,
    "popularityScore": 67,
    "isNew": false,
    "isFeatured": false
  },
  {
    "id": "flicker-button",
    "name": "Flicker",
    "description": "A button that flickers slightly.",
    "category": "effect",
    "tags": ["flicker", "animation", "opacity"],
    "cssClass": "btn-flicker",
    "htmlCode": "<button class=\"btn-flicker\">Flicker</button>",
    "cssCode": `
.btn-flicker {
  background-color: #4cc9f0;
  color: #2b2d42;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  animation: flicker 0.5s infinite;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
`,
    "popularityScore": 76,
    "isNew": true,
    "isFeatured": false
  },
  {
    id: 'neomorphic-button-blue',
    name: 'Neumorphic Blue',
    description: 'A cool blue neumorphic button',
    category: 'neumorphism',
    tags: ['neumorphism', 'blue', 'shadow'],
    cssClass: 'btn-neumorphic-blue',
    htmlCode: '<button class="btn-neumorphic-blue">Click Me</button>',
    cssCode: `.btn-neumorphic-blue {
  background-color: #e0f0ff;
  color: #0d3b66;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 6px 6px 12px #bfd7ea, -6px -6px 12px #ffffff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-neumorphic-blue:hover {
  transform: translateY(-2px);
  box-shadow: 3px 3px 6px #bfd7ea, -3px -3px 6px #ffffff;
}
.btn-neumorphic-blue:active {
  box-shadow: inset 4px 4px 8px #bfd7ea, inset -4px -4px 8px #ffffff;
}`,
    popularityScore: 81,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'neomorphic-button-pink',
    name: 'Neumorphic Pink',
    description: 'A soft pink neumorphic button with a glow effect',
    category: 'neumorphism',
    tags: ['neumorphism', 'pink', 'glow'],
    cssClass: 'btn-neumorphic-pink',
    htmlCode: '<button class="btn-neumorphic-pink">Submit</button>',
    cssCode: `.btn-neumorphic-pink {
  background-color: #ffe0f0;
  color: #c2185b;
  padding: 0.5rem 1.2rem;
  border-radius: 16px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 5px 5px 15px #dcb3c8, -5px -5px 15px #ffffff;
  transition: all 0.3s ease;
}
.btn-neumorphic-pink:hover {
  box-shadow: 0 0 10px #ffc0cb, 0 0 20px #ffc0cb;
}
.btn-neumorphic-pink:active {
  box-shadow: inset 5px 5px 10px #dcb3c8, inset -5px -5px 10px #ffffff;
}`,
    popularityScore: 79,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'neomorphic-button-green',
    name: 'Neumorphic Mint',
    description: 'A fresh mint green neumorphic button with subtle scaling',
    category: 'neumorphism',
    tags: ['neumorphism', 'mint', 'scale'],
    cssClass: 'btn-neumorphic-green',
    htmlCode: '<button class="btn-neumorphic-green">Go</button>',
    cssCode: `.btn-neumorphic-green {
  background-color: #e6fff5;
  color: #00897b;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 4px 4px 10px #cceee0, -4px -4px 10px #ffffff;
  transition: transform 0.2s ease;
}
.btn-neumorphic-green:hover {
  transform: scale(1.05);
}
.btn-neumorphic-green:active {
  box-shadow: inset 4px 4px 10px #cceee0, inset -4px -4px 10px #ffffff;
}`,
    popularityScore: 83,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'neomorphic-button-purple',
    name: 'Neumorphic Purple Pulse',
    description: 'A neumorphic button with a pulsating purple effect',
    category: 'neumorphism',
    tags: ['neumorphism', 'purple', 'pulse'],
    cssClass: 'btn-neumorphic-purple',
    htmlCode: '<button class="btn-neumorphic-purple">Pulse</button>',
    cssCode: `.btn-neumorphic-purple {
  background-color: #f3e6ff;
  color: #6a1b9a;
  padding: 0.6rem 1.3rem;
  border-radius: 14px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 6px 6px 14px #d9c2ea, -6px -6px 14px #ffffff;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% {
    box-shadow: 6px 6px 14px #d9c2ea, -6px -6px 14px #ffffff;
  }
  50% {
    box-shadow: 0 0 20px #ce93d8;
  }
}
.btn-neumorphic-purple:active {
  box-shadow: inset 6px 6px 10px #d9c2ea, inset -6px -6px 10px #ffffff;
}`,
    popularityScore: 86,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'neomorphic-button-yellow',
    name: 'Neumorphic Sun',
    description: 'A bright yellow neumorphic button with flicker glow',
    category: 'neumorphism',
    tags: ['neumorphism', 'yellow', 'flicker'],
    cssClass: 'btn-neumorphic-yellow',
    htmlCode: '<button class="btn-neumorphic-yellow">Sunlight</button>',
    cssCode: `.btn-neumorphic-yellow {
  background-color: #fff9c4;
  color: #f57f17;
  padding: 0.5rem 1.2rem;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 4px 4px 10px #e6e0a3, -4px -4px 10px #ffffff;
  transition: all 0.2s ease;
}
.btn-neumorphic-yellow:hover {
  animation: flicker 1s infinite;
}
@keyframes flicker {
  0%, 100% { box-shadow: 4px 4px 10px #e6e0a3, -4px -4px 10px #ffffff; }
  50% { box-shadow: 0 0 12px #fff176; }
}
.btn-neumorphic-yellow:active {
  box-shadow: inset 4px 4px 10px #e6e0a3, inset -4px -4px 10px #ffffff;
}`,
    popularityScore: 82,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'neomorphic-button-red',
    name: 'Neumorphic Danger',
    description: 'A sharp red neumorphic button for alerts',
    category: 'neumorphism',
    tags: ['neumorphism', 'red', 'alert'],
    cssClass: 'btn-neumorphic-red',
    htmlCode: '<button class="btn-neumorphic-red">Delete</button>',
    cssCode: `.btn-neumorphic-red {
  background-color: #ffe6e6;
  color: #d32f2f;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 5px 5px 10px #e5b4b4, -5px -5px 10px #ffffff;
  transition: all 0.2s ease;
}
.btn-neumorphic-red:hover {
  background-color: #ffcccc;
}
.btn-neumorphic-red:active {
  box-shadow: inset 5px 5px 10px #e5b4b4, inset -5px -5px 10px #ffffff;
}`,
    popularityScore: 88,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'neomorphic-button-aqua',
    name: 'Neumorphic Aqua',
    description: 'A refreshing aqua-themed neumorphic button',
    category: 'neumorphism',
    tags: ['neumorphism', 'aqua', 'clean'],
    cssClass: 'btn-neumorphic-aqua',
    htmlCode: '<button class="btn-neumorphic-aqua">Refresh</button>',
    cssCode: `.btn-neumorphic-aqua {
  background-color: #e0f7fa;
  color: #006064;
  padding: 0.5rem 1.3rem;
  border-radius: 14px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 6px 6px 12px #b2ebf2, -6px -6px 12px #ffffff;
  transition: all 0.2s ease;
}
.btn-neumorphic-aqua:hover {
  transform: scale(1.02);
}
.btn-neumorphic-aqua:active {
  box-shadow: inset 6px 6px 12px #b2ebf2, inset -6px -6px 12px #ffffff;
}`,
    popularityScore: 84,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'neomorphic-button-orange',
    name: 'Neumorphic Orange Pop',
    description: 'A vibrant orange button with pop animation',
    category: 'neumorphism',
    tags: ['neumorphism', 'orange', 'pop'],
    cssClass: 'btn-neumorphic-orange',
    htmlCode: '<button class="btn-neumorphic-orange">Pop!</button>',
    cssCode: `.btn-neumorphic-orange {
  background-color: #fff3e0;
  color: #ef6c00;
  padding: 0.6rem 1.4rem;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 4px 4px 10px #ffcc80, -4px -4px 10px #ffffff;
  transition: all 0.2s ease-in-out;
}
.btn-neumorphic-orange:hover {
  transform: scale(1.1);
}
.btn-neumorphic-orange:active {
  box-shadow: inset 4px 4px 8px #ffcc80, inset -4px -4px 8px #ffffff;
}`,
    popularityScore: 87,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'neomorphic-button-lime',
    name: 'Neumorphic Lime Glow',
    description: 'A bright lime neumorphic button with glow effect',
    category: 'neumorphism',
    tags: ['neumorphism', 'lime', 'glow'],
    cssClass: 'btn-neumorphic-lime',
    htmlCode: '<button class="btn-neumorphic-lime">Glow</button>',
    cssCode: `.btn-neumorphic-lime {
  background-color: #f9ffe0;
  color: #827717;
  padding: 0.5rem 1.2rem;
  border-radius: 18px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 5px 5px 12px #e0e8c0, -5px -5px 12px #ffffff;
  transition: box-shadow 0.3s ease;
}
.btn-neumorphic-lime:hover {
  box-shadow: 0 0 15px #d4e157;
}
.btn-neumorphic-lime:active {
  box-shadow: inset 5px 5px 10px #e0e8c0, inset -5px -5px 10px #ffffff;
}`,
    popularityScore: 80,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'neomorphic-button-gray',
    name: 'Neumorphic Steel',
    description: 'A clean steel-gray neumorphic button',
    category: 'neumorphism',
    tags: ['neumorphism', 'gray', 'clean'],
    cssClass: 'btn-neumorphic-gray',
    htmlCode: '<button class="btn-neumorphic-gray">Neutral</button>',
    cssCode: `.btn-neumorphic-gray {
  background-color: #eaeaea;
  color: #424242;
  padding: 0.6rem 1.3rem;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 6px 6px 10px #c7c7c7, -6px -6px 10px #ffffff;
  transition: all 0.2s ease-in-out;
}
.btn-neumorphic-gray:hover {
  transform: translateY(-1px);
}
.btn-neumorphic-gray:active {
  box-shadow: inset 6px 6px 10px #c7c7c7, inset -6px -6px 10px #ffffff;
}`,
    popularityScore: 77,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'neomorphic-button-cyan',
    name: 'Neumorphic Cyan Splash',
    description: 'Cyan neumorphic button with splash animation',
    category: 'neumorphism',
    tags: ['neumorphism', 'cyan', 'splash'],
    cssClass: 'btn-neumorphic-cyan',
    htmlCode: '<button class="btn-neumorphic-cyan">Splash</button>',
    cssCode: `.btn-neumorphic-cyan {
  background-color: #e0fafa;
  color: #00838f;
  padding: 0.5rem 1.4rem;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 5px 5px 14px #b2dfdb, -5px -5px 14px #ffffff;
  transition: transform 0.3s ease-in-out;
}
.btn-neumorphic-cyan:hover {
  transform: scale(1.08);
}
.btn-neumorphic-cyan:active {
  box-shadow: inset 5px 5px 12px #b2dfdb, inset -5px -5px 12px #ffffff;
}`,
    popularityScore: 83,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'neomorphic-button-indigo',
    name: 'Neumorphic Indigo',
    description: 'A modern indigo neumorphic button',
    category: 'neumorphism',
    tags: ['neumorphism', 'indigo', 'modern'],
    cssClass: 'btn-neumorphic-indigo',
    htmlCode: '<button class="btn-neumorphic-indigo">Modern</button>',
    cssCode: `.btn-neumorphic-indigo {
  background-color: #e8eaf6;
  color: #283593;
  padding: 0.6rem 1.5rem;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 5px 5px 12px #c5cae9, -5px -5px 12px #ffffff;
  transition: transform 0.25s ease;
}
.btn-neumorphic-indigo:hover {
  transform: translateY(-3px);
}
.btn-neumorphic-indigo:active {
  box-shadow: inset 5px 5px 12px #c5cae9, inset -5px -5px 12px #ffffff;
}`,
    popularityScore: 85,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'neomorphic-button-brown',
    name: 'Neumorphic Earth',
    description: 'An earthy brown-themed soft neumorphic button',
    category: 'neumorphism',
    tags: ['neumorphism', 'brown', 'earthy'],
    cssClass: 'btn-neumorphic-brown',
    htmlCode: '<button class="btn-neumorphic-brown">Earth</button>',
    cssCode: `.btn-neumorphic-brown {
  background-color: #f5e6da;
  color: #5d4037;
  padding: 0.6rem 1.3rem;
  border-radius: 14px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 4px 4px 10px #d7c5ba, -4px -4px 10px #ffffff;
  transition: all 0.3s ease;
}
.btn-neumorphic-brown:hover {
  transform: scale(1.05);
}
.btn-neumorphic-brown:active {
  box-shadow: inset 4px 4px 10px #d7c5ba, inset -4px -4px 10px #ffffff;
}`,
    popularityScore: 78,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'neomorphic-button-teal',
    name: 'Neumorphic Teal Wave',
    description: 'A teal neumorphic button with wave hover effect',
    category: 'neumorphism',
    tags: ['neumorphism', 'teal', 'wave'],
    cssClass: 'btn-neumorphic-teal',
    htmlCode: '<button class="btn-neumorphic-teal">Wave</button>',
    cssCode: `.btn-neumorphic-teal {
  background-color: #e0f2f1;
  color: #004d40;
  padding: 0.5rem 1.4rem;
  border-radius: 16px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 5px 5px 13px #b2dfdb, -5px -5px 13px #ffffff;
  transition: transform 0.3s ease;
}
.btn-neumorphic-teal:hover {
  transform: scale(1.07) rotate(-1deg);
}
.btn-neumorphic-teal:active {
  box-shadow: inset 5px 5px 10px #b2dfdb, inset -5px -5px 10px #ffffff;
}`,
    popularityScore: 84,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'glass-button-1',
    name: 'Frosted Blue',
    description: 'Glass button with soft blue tint and subtle scale on hover',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'blue', 'scale', 'modern'],
    cssClass: 'btn-glass-blue',
    htmlCode: '<button class="btn-glass-blue">Button Text</button>',
    cssCode: `.btn-glass-blue {
  background: rgba(173, 216, 230, 0.2);
  color: #e0f7fa;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(173, 216, 230, 0.4);
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.btn-glass-blue:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(173, 216, 230, 0.5);
}`,
    popularityScore: 90,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'glass-button-2',
    name: 'Sunset Glow',
    description: 'Warm orange glass button with glowing shadow animation',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'orange', 'glow', 'warm'],
    cssClass: 'btn-glass-sunset',
    htmlCode: '<button class="btn-glass-sunset">Button Text</button>',
    cssCode: `.btn-glass-sunset {
  background: rgba(255, 140, 0, 0.2);
  color: #fff3e0;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 140, 0, 0.5);
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
}
.btn-glass-sunset:hover {
  box-shadow: 0 0 15px 5px rgba(255, 140, 0, 0.7);
}`,
    popularityScore: 88,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'glass-button-3',
    name: 'Mint Breeze',
    description: 'Refreshing green glass button with slight rotate animation',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'green', 'rotate', 'fresh'],
    cssClass: 'btn-glass-mint',
    htmlCode: '<button class="btn-glass-mint">Button Text</button>',
    cssCode: `.btn-glass-mint {
  background: rgba(144, 238, 144, 0.25);
  color: #d0f0c0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(144, 238, 144, 0.5);
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.btn-glass-mint:hover {
  transform: rotate(5deg);
  box-shadow: 0 4px 15px rgba(144, 238, 144, 0.4);
}`,
    popularityScore: 85,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'glass-button-4',
    name: 'Purple Haze',
    description: 'Violet tinted glass button with pulse animation on hover',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'purple', 'pulse', 'vibrant'],
    cssClass: 'btn-glass-purple',
    htmlCode: '<button class="btn-glass-purple">Button Text</button>',
    cssCode: `.btn-glass-purple {
  background: rgba(147, 112, 219, 0.2);
  color: #e6e6fa;
  padding: 0.5rem 1rem;
  border-radius: 0.35rem;
  backdrop-filter: blur(9px);
  border: 1px solid rgba(147, 112, 219, 0.4);
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
}
.btn-glass-purple:hover {
  animation: pulse 1.2s infinite;
  box-shadow: 0 0 18px rgba(147, 112, 219, 0.7);
}
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 18px rgba(147, 112, 219, 0.7);
  }
  50% {
    box-shadow: 0 0 28px rgba(147, 112, 219, 1);
  }
}`,
    popularityScore: 92,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'glass-button-5',
    name: 'Rose Frost',
    description: 'Pink glass button with gentle slide up effect on hover',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'pink', 'slide', 'soft'],
    cssClass: 'btn-glass-rose',
    htmlCode: '<button class="btn-glass-rose">Button Text</button>',
    cssCode: `.btn-glass-rose {
  background: rgba(255, 182, 193, 0.25);
  color: #ffe4e1;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 182, 193, 0.5);
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.btn-glass-rose:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(255, 182, 193, 0.5);
}`,
    popularityScore: 80,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'glass-button-6',
    name: 'Aqua Ripple',
    description: 'Light cyan button with ripple shadow animation',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'cyan', 'ripple', 'fresh'],
    cssClass: 'btn-glass-aqua',
    htmlCode: '<button class="btn-glass-aqua">Button Text</button>',
    cssCode: `.btn-glass-aqua {
  background: rgba(0, 255, 255, 0.15);
  color: #e0ffff;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.4);
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.5s ease;
}
.btn-glass-aqua:hover {
  animation: ripple 1s ease-in-out;
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.7);
}
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7);
  }
  100% {
    box-shadow: 0 0 25px 15px rgba(0, 255, 255, 0);
  }
}`,
    popularityScore: 87,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'glass-button-7',
    name: 'Gold Gleam',
    description: 'Elegant gold-tinted glass button with shine animation',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'gold', 'shine', 'luxury'],
    cssClass: 'btn-glass-gold',
    htmlCode: '<button class="btn-glass-gold">Button Text</button>',
    cssCode: `.btn-glass-gold {
  background: rgba(255, 215, 0, 0.25);
  color: #fffacd;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  backdrop-filter: blur(11px);
  border: 1px solid rgba(255, 215, 0, 0.5);
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}
.btn-glass-gold::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(120deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.3) 100%);
  transform: rotate(25deg);
  transition: all 0.5s ease;
}
.btn-glass-gold:hover::before {
  left: 100%;
  top: 100%;
}`,
    popularityScore: 93,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'glass-button-8',
    name: 'Lavender Mist',
    description: 'Soft lavender glass button with subtle shadow pop',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'lavender', 'shadow', 'soft'],
    cssClass: 'btn-glass-lavender',
    htmlCode: '<button class="btn-glass-lavender">Button Text</button>',
    cssCode: `.btn-glass-lavender {
  background: rgba(230, 230, 250, 0.2);
  color: #f3e5f5;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  backdrop-filter: blur(7px);
  border: 1px solid rgba(230, 230, 250, 0.4);
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}
.btn-glass-lavender:hover {
  box-shadow: 0 6px 20px rgba(230, 230, 250, 0.7);
}`,
    popularityScore: 84,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'glass-button-9',
    name: 'Crimson Frost',
    description: 'Deep red glass button with shake animation on hover',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'red', 'shake', 'intense'],
    cssClass: 'btn-glass-crimson',
    htmlCode: '<button class="btn-glass-crimson">Button Text</button>',
    cssCode: `.btn-glass-crimson {
  background: rgba(220, 20, 60, 0.25);
  color: #ffccd5;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  backdrop-filter: blur(9px);
  border: 1px solid rgba(220, 20, 60, 0.5);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s ease;
}
.btn-glass-crimson:hover {
  animation: shake 0.3s;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}`,
    popularityScore: 89,
    isNew: false,
    isFeatured: true
  },
  {
    id: 'glass-button-10',
    name: 'Teal Whisper',
    description: 'Muted teal glass button with slow fade shadow on hover',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'teal', 'fade', 'calm'],
    cssClass: 'btn-glass-teal',
    htmlCode: '<button class="btn-glass-teal">Button Text</button>',
    cssCode: `.btn-glass-teal {
  background: rgba(54, 117, 136, 0.2);
  color: #cce7e8;
  padding: 0.5rem 1rem;
  border-radius: 0.35rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(54, 117, 136, 0.4);
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.8s ease;
}
.btn-glass-teal:hover {
  box-shadow: 0 8px 30px rgba(54, 117, 136, 0.6);
}`,
    popularityScore: 83,
    isNew: false,
    isFeatured: false
  },
  {
    id: 'glass-button-11',
    name: 'Coral Shine',
    description: 'Vibrant coral glass button with quick shine sweep on hover',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'coral', 'shine', 'vibrant'],
    cssClass: 'btn-glass-coral',
    htmlCode: '<button class="btn-glass-coral">Button Text</button>',
    cssCode: `.btn-glass-coral {
  background: rgba(255, 127, 80, 0.25);
  color: #fff0e1;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 127, 80, 0.5);
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}
.btn-glass-coral::before {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
  transform: skewX(-25deg);
  transition: left 0.5s ease;
}
.btn-glass-coral:hover::before {
  left: 125%;
}`,
    popularityScore: 86,
    isNew: true,
    isFeatured: false
  },
  {
    id: 'glass-button-12',
    name: 'Ice Crystal',
    description: 'Cool icy glass button with fade and grow effect',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'ice', 'fade', 'grow'],
    cssClass: 'btn-glass-ice',
    htmlCode: '<button class="btn-glass-ice">Button Text</button>',
    cssCode: `.btn-glass-ice {
  background: rgba(176, 224, 230, 0.2);
  color: #d9f0fb;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(176, 224, 230, 0.4);
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.btn-glass-ice:hover {
  transform: scale(1.1);
  opacity: 0.9;
  box-shadow: 0 10px 30px rgba(176, 224, 230, 0.6);
}`,
    popularityScore: 91,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'glass-button-13',
    name: 'Smoky Gray',
    description: 'Neutral gray glass button with subtle opacity flicker',
    category: 'glassmorphism',
    tags: ['glassmorphism', 'gray', 'opacity', 'neutral'],
    cssClass: 'btn-glass-smoky',
    htmlCode: '<button class="btn-glass-smoky">Button Text</button>',
    cssCode: `.btn-glass-smoky {
  background: rgba(128, 128, 128, 0.15);
  color: #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  backdrop-filter: blur(9px);
  border: 1px solid rgba(128, 128, 128, 0.4);
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.4s ease;
}
.btn-glass-smoky:hover {
  animation: flicker 1.5s infinite;
}
@keyframes flicker {
  0%, 100% {opacity: 1;}
  50% {opacity: 0.7;}
}`,
    popularityScore: 79,
    isNew: false,
    isFeatured: false
  },
  {
    "id": "dashed-spinner-button",
    "name": "Dashed Circle Spinner",
    "description": "A button with a rotating dashed circle.",
    "category": "loader",
    "tags": ["loading", "spinner", "dashed", "circle", "animation"],
    "cssClass": "btn-dashed-spinner",
    "htmlCode": "<button class=\"btn-dashed-spinner\"><div class=\"dashed-circle\"></div><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-dashed-spinner {\n  background-color: #3b82f6;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.375rem;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.btn-dashed-spinner .dashed-circle {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: white;\n  border-style: dashed;\n  animation: rotate 1.2s linear infinite;\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}",
    "popularityScore": 77,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "gradient-bar-button",
    "name": "Gradient Progress Bar",
    "description": "A button with a gradient progress bar.",
    "category": "loader",
    "tags": ["loading", "progress", "bar", "gradient", "animation"],
    "cssClass": "btn-gradient-bar",
    "htmlCode": "<button class=\"btn-gradient-bar\"><span class=\"gradient-bar\"></span><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-gradient-bar {\n  background-color: #4f46e5;\n  color: white;\n  padding: 0.6rem 1.2rem;\n  border-radius: 0.3rem;\n  border: none;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-gradient-bar .gradient-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  background: linear-gradient(to right, #8b5cf6, #d946ef);\n  transform-origin: left;\n  animation: load-bar 2.5s linear infinite;\n}\n\n@keyframes load-bar {\n  0% {\n    transform: scaleX(0);\n  }\n  50% {\n    transform: scaleX(0.7);  }\n  100% {\n    transform: scaleX(0);\n  }\n}",
    "popularityScore": 74,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "multi-color-spinner-button",
    "name": "Multi-Color Spinner",
    "description": "A button with a spinner with multiple colors.",
    "category": "loader",
    "tags": ["loading", "spinner", "multi-color", "animation"],
    "cssClass": "btn-multi-color-spinner",
    "htmlCode": "<button class=\"btn-multi-color-spinner\"><div class=\"multi-spinner\"></div><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-multi-color-spinner {\n  background-color: #22c55e;\n  color: white;\n  padding: 0.7rem 1.4rem;\n  border-radius: 0.35rem;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n\n.btn-multi-color-spinner .multi-spinner {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  border-top-color: #f472b6;\n  border-right-color: #8b5cf6;\n  border-bottom-color: #3b82f6;\n  border-left-color: #22c55e;\n  animation: spin 1.2s linear infinite;\n}\n",
    "popularityScore": 81,
    "isNew": true,
    "isFeatured": true
  },
  {
    "id": "growing-circle-button",
    "name": "Growing Circle",
    "description": "A button with a circle that grows and shrinks.",
    "category": "loader",
    "tags": ["loading", "circle", "grow", "animation"],
    "cssClass": "btn-growing-circle",
    "htmlCode": "<button class=\"btn-growing-circle\"><div class=\"growing-circle\"></div><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-growing-circle {\n  background-color: #ec4899;\n  color: white;\n  padding: 0.65rem 1.3rem;\n  border-radius: 0.325rem;\n  border: none;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  overflow: hidden;\n}\n\n.btn-growing-circle .growing-circle {\n  width: 16px;\n  height: 16px;\n  background-color: white;\n  border-radius: 50%;\n  animation: grow-circle 1.2s ease-in-out infinite;\n}\n\n@keyframes grow-circle {\n  0%, 100% {\n    transform: scale(0.8);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}",
    "popularityScore": 73,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "horizontal-line-button",
    "name": "Horizontal Line",
    "description": "A button with a moving horizontal line.",
    "category": "loader",
    "tags": ["loading", "line", "horizontal", "animation"],
    "cssClass": "btn-horizontal-line",
    "htmlCode": "<button class=\"btn-horizontal-line\"><span class=\"line\"></span><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-horizontal-line {\n  background-color: #6b7280;\n  color: white;\n  padding: 0.7rem 1.4rem;\n  border-radius: 0.35rem;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-horizontal-line .line {\n  position: absolute;\n  top: 50%;\n  left: -50%;\n  width: 50%;\n  height: 4px;\n  background-color: white;\n  transform: translateY(-50%);\n  animation: move-line 1.5s linear infinite;\n}\n\n@keyframes move-line {\n  0% {\n    left: -50%;\n  }\n  100% {\n    left: 100%;\n  }\n}",
    "popularityScore": 69,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "text-reveal-button",
    "name": "Text Reveal",
    "description": "A button where the text is revealed with an animation.",
    "category": "loader",
    "tags": ["loading", "text", "reveal", "animation"],
    "cssClass": "btn-text-reveal",
    "htmlCode": "<button class=\"btn-text-reveal\"><span class=\"text\">Loading...</span><span class=\"reveal-box\"></span></button>",
    "cssCode": ".btn-text-reveal {\n  background-color: #1e40af;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.375rem;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-text-reveal .text {\n  position: relative;\n  z-index: 2;\n}\n\n.btn-text-reveal .reveal-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #1e40af;\n  transform: scaleX(0);\n  transform-origin: left;\n  animation: reveal-text 0.8s ease-in-out forwards;\n}\n\n@keyframes reveal-text {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}",
    "popularityScore": 78,
    "isNew": true,
    "isFeatured": true
  },
  {
    "id": "blinking-cursor-button",
    "name": "Blinking Cursor",
    "description": "A button with a blinking cursor, simulating typing.",
    "category": "loader",
    "tags": ["loading", "cursor", "blink", "typing", "animation"],
    "cssClass": "btn-blinking-cursor",
    "htmlCode": "<button class=\"btn-blinking-cursor\"><span class=\"text\">Loading</span><span class=\"cursor\">|</span></button>",
    "cssCode": ".btn-blinking-cursor {\n  background-color: #dc2626;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.375rem;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n.btn-blinking-cursor .cursor {\n  animation: blink-cursor 0.8s steps(2, start) infinite;\n}\n\n@keyframes blink-cursor {\n  from, to { color: transparent; }\n  50% { color: white; }\n}",
    "popularityScore": 71,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "gradient-circle-button",
    "name": "Gradient Circle",
    "description": "A button with a gradient animated circle.",
    "category": "loader",
    "tags": ["loading", "circle", "gradient", "animation"],
    "cssClass": "btn-gradient-circle",
    "htmlCode": "<button class=\"btn-gradient-circle\"><div class=\"gradient-circle\"></div><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-gradient-circle {\n  background-color: #86efac;\n  color: #134e4a;\n  padding: 0.7rem 1.4rem;\n  border-radius: 0.35rem;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-gradient-circle .gradient-circle {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: linear-gradient(to right, #f9a8d4, #b9f3fc);\n  animation: rotate 1.5s linear infinite;\n}\n",
    "popularityScore": 80,
    "isNew": true,
    "isFeatured": true
  },
  {
    "id": "expanding-bar-button",
    "name": "Expanding Bar",
    "description": "A button with a bar that expands to fill the button.",
    "category": "loader",
    "tags": ["loading", "bar", "expand", "animation"],
    "cssClass": "btn-expanding-bar",
    "htmlCode": "<button class=\"btn-expanding-bar\"><span class=\"expand-bar\"></span><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-expanding-bar {\n            background-color: #a7f3d0;\n            color: #065f46;\n            padding: 0.75rem 1.5rem;\n            border-radius: 0.375rem;\n            border: none;\n            font-weight: 600;\n            cursor: pointer;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .btn-expanding-bar .expand-bar {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 0%;\n            height: 100%;\n            background-color: #065f46;\n            animation: expand-bar 1s ease-in-out forwards;\n        }\n\n        @keyframes expand-bar {\n            from { width: 0%; }\n            to { width: 100%; }\n        }",
    "popularityScore": 76,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "dots-circle-button",
    "name": "Dots Circle",
    "description": "A button with dots rotating in a circle.",
    "category": "loader",
    "tags": ["loading", "dots", "circle", "rotate", "animation"],
    "cssClass": "btn-dots-circle",
    "htmlCode": "<button class=\"btn-dots-circle\"><span class=\"dot\"></span><span class=\"dot\"></span><span class=\"dot\"></span><span class=\"dot\"></span><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-dots-circle {\n            background-color: #fde68a;\n            color: #78350f;\n            padding: 0.7rem 1.4rem;\n            border-radius: 0.35rem;\n            border: none;\n            font-weight: 600;\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            gap: 0.7rem;\n            position: relative;\n        }\n\n        .btn-dots-circle .dot {\n            width: 8px;\n            height: 8px;\n            background-color: #78350f;\n            border-radius: 50%;\n            position: absolute;\n            animation: rotate-dots 1.5s linear infinite;\n        }\n\n        .btn-dots-circle .dot:nth-child(1) {\n            top: 0;\n            left: 50%;\n            transform: translateX(-50%);\n        }\n        .btn-dots-circle .dot:nth-child(2) {\n            top: 50%;\n            right: 0;\n            transform: translateY(-50%);\n        }\n        .btn-dots-circle .dot:nth-child(3) {\n            bottom: 0;\n            left: 50%;\n            transform: translateX(-50%);\n        }\n        .btn-dots-circle .dot:nth-child(4) {\n            top: 50%;\n            left: 0;\n            transform: translateY(-50%);\n        }\n\n        @keyframes rotate-dots {\n            from { transform: rotate(0deg); }\n            to { transform: rotate(360deg); }\n        }",
    "popularityScore": 79,
    "isNew": true,
    "isFeatured": true
  },
  {
    "id": "pulse-outline-button",
    "name": "Pulsing Outline",
    "description": "A button with a pulsing outline.",
    "category": "loader",
    "tags": ["loading", "outline", "pulse", "animation"],
    "cssClass": "btn-pulse-outline",
    "htmlCode": "<button class=\"btn-pulse-outline\"><span class=\"pulse-outline\"></span><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-pulse-outline {\n            background-color: transparent;\n            color: white;\n            padding: 0.75rem 1.5rem;\n            border-radius: 0.375rem;\n            border: 2px solid white;\n            font-weight: 600;\n            cursor: pointer;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .btn-pulse-outline .pulse-outline {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            border: 2px solid white;\n            border-radius: 0.375rem;\n            animation: pulse-outline 2s infinite;\n        }\n\n        @keyframes pulse-outline {\n            0% { transform: scale(1); opacity: 1; }\n            50% { transform: scale(1.1); opacity: 0; }\n            100% { transform: scale(1); opacity: 1; }\n        }",
    "popularityScore": 72,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "snake-effect-button",
    "name": "Snake Effect",
    "description": "A button with a snake like animation.",
    "category": "loader",
    "tags": ["loading", "snake", "effect", "animation"],
    "cssClass": "btn-snake-effect",
    "htmlCode": "<button class=\"btn-snake-effect\"><span class=\"snake-line\"></span><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-snake-effect {\n  background-color: #4338ca;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.375rem;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-snake-effect .snake-line {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 4px;\n  background: linear-gradient(to right, transparent, white, transparent);\n  animation: snake 1.5s linear infinite;\n}\n\n@keyframes snake {\n  0% { left: -100%; }\n  50% { left: 0%; }\n  100% { left: 100%; }\n}",
    "popularityScore": 75,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "loading-button",
    "name": "Loading Spinner",
    "description": "A button with loading spinner animation",
    "category": "loader",
    "tags": ["loading", "spinner", "animation"],
    "cssClass": "btn-loading",
    "htmlCode": "<button class=\"btn-loading\"><span class=\"spinner\"></span><span class=\"text\">Loading...</span></button>",
    "cssCode": ".btn-loading { background-color: #6366f1; color: white; padding: 0.5rem 1rem; border-radius: 0.25rem; border: none; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; } .spinner { width: 16px; height: 16px; border: 2px solid rgba(255, 255, 255, 0.3); border-radius: 50%; border-top-color: white; animation: spin 1s ease-in-out infinite; } @keyframes spin { to { transform: rotate(360deg); } }",
    "popularityScore": 80,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "pulsing-dot-button",
    "name": "Pulsing Dot Loader",
    "description": "Button with a pulsing dot animation",
    "category": "loader",
    "tags": ["pulsing", "dot", "animation"],
    "cssClass": "btn-pulsing-dot",
    "htmlCode": "<button class='btn-pulsing-dot'><span class='dot'></span><span class='text'>Loading</span></button>",
    "cssCode": ".btn-pulsing-dot { background: #10b981; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; display: flex; gap: 0.5rem; align-items: center; border: none; cursor: pointer; font-weight: 500; } .dot { width: 10px; height: 10px; border-radius: 50%; background: white; animation: pulse 1s infinite ease-in-out; } @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.6; } }",
    "popularityScore": 74,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "rotating-dots-button",
    "name": "Rotating Dots",
    "description": "Button with three rotating dots",
    "category": "loader",
    "tags": ["dots", "rotate", "animation"],
    "cssClass": "btn-rotating-dots",
    "htmlCode": "<button class='btn-rotating-dots'><span class='dots'><span></span><span></span><span></span></span>Loading</button>",
    "cssCode": ".btn-rotating-dots { background: #ef4444; color: white; padding: 0.5rem 1.5rem; border: none; border-radius: 0.25rem; display: flex; align-items: center; gap: 0.5rem; font-weight: 500; cursor: pointer; } .dots { display: flex; gap: 0.2rem; } .dots span { width: 6px; height: 6px; background: white; border-radius: 50%; animation: rotate-dots 1s infinite linear; } .dots span:nth-child(2) { animation-delay: 0.2s; } .dots span:nth-child(3) { animation-delay: 0.4s; } @keyframes rotate-dots { 0% { transform: translateY(0); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0); } }",
    "popularityScore": 70,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "bar-loader-button",
    "name": "Flickering Bar",
    "description": "Button with animated loading bar",
    "category": "loader",
    "tags": ["bar", "flicker", "animation"],
    "cssClass": "btn-bar-loader",
    "htmlCode": "<button class='btn-bar-loader'><span class='bar'></span>Loading...</button>",
    "cssCode": ".btn-bar-loader { background: #f59e0b; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.375rem; font-weight: 500; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; position: relative; overflow: hidden; } .bar { height: 4px; width: 20px; background: white; animation: bar-flicker 1s linear infinite; } @keyframes bar-flicker { 0%, 100% { transform: scaleX(1); opacity: 1; } 50% { transform: scaleX(2); opacity: 0.5; } }",
    "popularityScore": 72,
    "isNew": true,
    "isFeatured": false
  },
  {
    "id": "ellipsis-loader",
    "name": "Ellipsis Bounce",
    "description": "Loading button with animated ellipsis",
    "category": "loader",
    "tags": ["ellipsis", "bounce", "loading"],
    "cssClass": "btn-ellipsis-loader",
    "htmlCode": "<button class='btn-ellipsis-loader'>Loading<span class='ellipsis'><span>.</span><span>.</span><span>.</span></span></button>",
    "cssCode": ".btn-ellipsis-loader { background: #8b5cf6; color: white; padding: 0.5rem 1rem; font-weight: 500; border: none; border-radius: 0.375rem; display: flex; align-items: center; gap: 0.25rem; cursor: pointer; } .ellipsis span { animation: bounce 1.2s infinite; font-weight: bold; } .ellipsis span:nth-child(1) { animation-delay: 0s; } .ellipsis span:nth-child(2) { animation-delay: 0.2s; } .ellipsis span:nth-child(3) { animation-delay: 0.4s; } @keyframes bounce { 0%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-6px); } }",
    "popularityScore": 78,
    "isNew": true,
    "isFeatured": false
  },

];