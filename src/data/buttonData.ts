
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
  }
];
