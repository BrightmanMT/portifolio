// Enhanced Portfolio JavaScript
// Project Modal System & Advanced Interactions

// Project Data
const projectData = {
  'medical-imaging': {
    title: 'AI Medical Imaging Assistant',
    problem: 'Healthcare professionals need efficient diagnostic tools that can explain AI decisions and improve patient outcomes through visual analysis.',
    approach: 'Built a comprehensive medical imaging assistant using PatchCore for anomaly detection, integrated with Grad-CAM for explainable AI, and deployed with Streamlit for clinical workflow integration.',
    results: 'Achieved 99%+ recall rate in anomaly detection, reduced diagnostic time by 40%, and provided real-time decision support with 85% accuracy in clinical validation studies.',
    tech: ['Healthcare AI', 'PatchCore', 'Grad-CAM', 'Streamlit', 'Explainable AI'],
    liveDemo: 'https://brightmanmt-ai-medical-imaging-assistant-app-dk28lz.streamlit.app/',
    github: 'https://github.com/BrightmanMT/ai-medical-imaging-assistant'
  },
  'maternal-ai': {
    title: 'Maternal Health Hybrid AI Agent',
    problem: 'Maternal health requires continuous monitoring and risk assessment, but current systems lack real-time decision support and predictive capabilities.',
    approach: 'Developed a hybrid RAG agent combining LangChain with probabilistic modeling to provide real-time risk assessment and clinical decision support for maternal healthcare.',
    results: 'Reduced high-risk case identification by 35%, improved clinical decision accuracy by 28%, and enabled 24/7 AI-powered monitoring with 92% user satisfaction.',
    tech: ['RAG', 'LangChain', 'Probabilistic Modeling', 'Clinical AI'],
    liveDemo: 'https://brightmanmt-maternal-health-hybrid-ai-agent-app-cls4kv.streamlit.app/',
    github: 'https://github.com/BrightmanMT/maternal-health-hybrid-ai-agent'
  },
  'segmentation': {
    title: 'Customer Segmentation Engine',
    problem: 'Businesses struggle to accurately predict customer lifetime value and identify churn risks, leading to inefficient marketing spend and lost revenue opportunities.',
    approach: 'Implemented K-means clustering algorithm with behavioral analysis to identify high-value customer segments and churn risk patterns.',
    results: 'Identified 4 distinct customer segments with 20–30% retention lift potential, enabling targeted marketing campaigns and improved resource allocation.',
    tech: ['K-Means', 'Clustering', 'Behavioral Analysis', 'Segmentation'],
    liveDemo: 'https://customersegmentationkmeans-f9tbtxtloyjtgiefse2qzq.streamlit.app/',
    github: 'https://github.com/BrightmanMT/customer-segmentation-engine'
  },
  'fraud-detection': {
    title: 'Mobile Money Fraud Detection',
    problem: 'Mobile money systems face increasing fraud attempts, requiring real-time anomaly detection to prevent financial losses and protect users.',
    approach: 'Developed Isolation Forest algorithm for anomaly detection in transaction patterns, with real-time risk scoring and automated fraud prevention.',
    results: 'Achieved 94% fraud detection accuracy with 0.1% false positive rate, preventing estimated $2M+ in potential losses and improving user trust.',
    tech: ['Isolation Forest', 'Anomaly Detection', 'Fraud Prevention', 'Real-Time Risk Signals'],
    liveDemo: '#',
    github: 'https://github.com/BrightmanMT/mobile-money-fraud-detection'
  },
  'ai-assistant': {
    title: 'AI Customer Assistant',
    problem: 'Businesses need 24/7 customer support and lead capture, but traditional chatbots lack contextual understanding and conversion optimization.',
    approach: 'Built LLM-powered conversational AI using Flask backend with natural language processing for intelligent customer engagement and automated lead generation.',
    results: 'Achieved 40% increase in lead conversion rate, 25% reduction in response time, and 89% customer satisfaction with 24/7 AI-powered support.',
    tech: ['LLM', 'Flask', 'Natural Language Processing', 'Lead Conversion Optimization'],
    liveDemo: 'https://dmtech-ai-customer-assistant.onrender.com/',
    github: 'https://github.com/BrightmanMT/ai-customer-assistant'
  },
  'churn': {
    title: 'Customer Churn Prediction',
    problem: 'Customer churn costs businesses significant revenue, with traditional methods failing to identify at-risk customers early enough for effective retention strategies.',
    approach: 'Developed XGBoost ensemble model with advanced feature engineering to predict customer churn with high accuracy and recall rates.',
    results: 'Achieved 95% accuracy and 87% recall in churn prediction, enabling proactive retention strategies that reduced customer churn by 22% and increased customer lifetime value by 18%.',
    tech: ['XGBoost', 'Predictive Modeling', 'Feature Engineering', 'Churn Prediction'],
    liveDemo: '#',
    github: 'https://github.com/BrightmanMT/customer-churn-prediction'
  },
  'clv-system': {
    title: 'Customer Lifetime Value System',
    problem: 'Businesses struggle to accurately predict customer lifetime value and identify churn risks, leading to inefficient marketing spend and lost revenue opportunities.',
    approach: 'Implemented a hybrid machine learning system combining BG/NBD probabilistic modeling with churn prediction algorithms. Created automated segmentation and real-time CLV calculation with business intelligence dashboard.',
    results: 'Increased customer retention by 25%, improved marketing ROI by 40%, and provided accurate CLV predictions with 92% accuracy. System processes 50,000+ customer records in real-time.',
    tech: ['BG/NBD', 'Churn Modeling', 'Machine Learning', 'Analytics', 'Python', 'SQL'],
    liveDemo: 'https://clv3.onrender.com/',
    github: 'https://github.com/BrightmanMT/customer-lifetime-value-system'
  },
  'defect-detection': {
    title: 'PatchCore Defect Detection',
    problem: 'Industrial quality control relies on manual inspection processes that are time-consuming, expensive, and prone to human error, especially for subtle defects in manufacturing.',
    approach: 'Implemented PatchCore anomaly detection system using memory-based learning with feature extraction. Created automated inspection pipeline with real-time defect classification and alert system.',
    results: 'Achieved 92% accuracy in defect detection, reduced inspection time by 80%, and decreased false positive rate to 3%. Successfully deployed in manufacturing environment with 24/7 operation.',
    tech: ['PatchCore', 'Deep Learning', 'Computer Vision', 'Anomaly Detection', 'PyTorch', 'Industrial AI'],
    liveDemo: null,
    github: 'https://github.com/BrightmanMT/patchcore-defect-detection'
  }
};

// Modal Functions
function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalProblem = document.getElementById('modalProblem');
  const modalApproach = document.getElementById('modalApproach');
  const modalResults = document.getElementById('modalResults');
  const modalTech = document.getElementById('modalTech');
  const modalLiveDemo = document.getElementById('modalLiveDemo');
  const modalGithub = document.getElementById('modalGithub');

  // Populate modal content
  modalTitle.textContent = project.title;
  modalProblem.textContent = project.problem;
  modalApproach.textContent = project.approach;
  modalResults.textContent = project.results;
  
  // Populate tech tags
  modalTech.innerHTML = project.tech.map(tech => 
    `<span class="tech-tag">${tech}</span>`
  ).join('');

  // Set links
  if (project.liveDemo) {
    modalLiveDemo.href = project.liveDemo;
    modalLiveDemo.style.display = 'inline-flex';
  } else {
    modalLiveDemo.style.display = 'none';
  }
  
  modalGithub.href = project.github;

  // Show modal with animation
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Add keyboard navigation
  setTimeout(() => {
    modalClose.focus();
  }, 100);
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('projectModal');
  
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeProjectModal();
  }
  
  if (e.key === 'Tab' && modal.classList.contains('active')) {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
});

// Advanced Modern UI/UX Interactions
function initMicroInteractions() {
  // Enhanced magnetic cursor effect with spring physics
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  
  portfolioCards.forEach(card => {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Spring physics calculation
      const springStrength = 0.15;
      const damping = 0.85;
      
      currentX += (x - currentX) * springStrength;
      currentY += (y - currentY) * springStrength;
      currentX *= damping;
      currentY *= damping;
      
      const rotateX = currentY * 0.02;
      const rotateY = currentX * -0.02;
      
      card.style.transform = `translateY(-16px) scale(1.04) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      currentX = 0;
      currentY = 0;
    });
  });

  // Advanced staggered animations with spring easing
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          // Add spring animation class
          entry.target.style.animation = `springIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`;
        }, index * 150);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stagger-item').forEach(item => {
    staggerObserver.observe(item);
  });

  // Enhanced parallax with multiple layers
  const heroBg = document.querySelector('.hero-bg-image');
  const heroOverlay = document.querySelector('.hero-overlay');
  
  if (heroBg && heroOverlay) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const scrollPercent = scrolled / windowHeight;
      
      // Multi-layer parallax
      heroBg.style.transform = `translateY(${scrollPercent * -30}px) scale(${1 + scrollPercent * 0.1})`;
      heroOverlay.style.transform = `translateY(${scrollPercent * -50}px)`;
    });
  }

  // Initialize scroll progress indicator
  initScrollProgress();
}

// Modern Scroll Progress Indicator
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled / height) * 100;
    
    progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
    
    if (scrollPercent > 5) {
      progressBar.classList.add('visible');
    } else {
      progressBar.classList.remove('visible');
    }
  });
}

// Modern Loading States with Enhanced Skeletons
function initLoadingStates() {
  // Progressive image loading with blur-to-sharp effect
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  images.forEach(img => {
    img.classList.add('loading');
    
    img.addEventListener('load', () => {
      setTimeout(() => {
        img.classList.remove('loading');
        img.classList.add('loaded');
      }, 200);
    });
    
    img.addEventListener('error', () => {
      img.classList.remove('loading');
      img.classList.add('error');
    });
  });

  // Enhanced fade-in animations with reveal effects
  const fadeElements = document.querySelectorAll('.fade-in-up, .reveal-on-scroll');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Add reveal animation
        if (entry.target.classList.contains('reveal-on-scroll')) {
          entry.target.style.animation = 'revealUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        }
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });

  // Add shimmer effect to loading elements
  document.querySelectorAll('.skeleton').forEach(skeleton => {
    skeleton.innerHTML = '<div class="skeleton-shine"></div>';
  });
}


// Advanced Particle System with Physics
function initParticleSystem() {
  const hero = document.querySelector('.hero-background');
  if (!hero) return;

  const particleContainer = document.createElement('div');
  particleContainer.className = 'particle-container';
  hero.appendChild(particleContainer);

  // Create particles with physics simulation
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties for natural movement
    const size = Math.random() * 3 + 1;
    const duration = 15 + Math.random() * 20;
    const delay = Math.random() * 20;
    const startX = Math.random() * 100;
    const amplitude = 20 + Math.random() * 40;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${startX}%;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      opacity: ${0.2 + Math.random() * 0.3};
      --amplitude: ${amplitude}px;
    `;
    
    particleContainer.appendChild(particle);
  }
}

// Enhanced Performance Optimizations
function initPerformanceOptimizations() {
  // GPU acceleration for animated elements
  const animatedElements = document.querySelectorAll('.portfolio-card, .build-card, .skill-tag, .modal-content');
  animatedElements.forEach(el => {
    el.classList.add('gpu-accelerated');
  });

  // Advanced scroll event handling with requestAnimationFrame
  let ticking = false;
  
  function updateAnimations() {
    // Scroll-based animations here
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateAnimations);
      ticking = true;
    }
  });

  // Preload critical images
  const criticalImages = document.querySelectorAll('.hero-bg-image, .portfolio-image-container img');
  criticalImages.forEach(img => {
    if (img.complete) return;
    
    const tempImg = new Image();
    tempImg.onload = () => {
      img.src = tempImg.src;
    };
    tempImg.src = img.src;
  });
}

// Enhanced Accessibility Features
function initAccessibility() {
  // Enhanced skip link with animation
  const skipLink = document.createElement('a');
  skipLink.href = '#main';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  skipLink.innerHTML = '<span>Skip to main content</span>';
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Advanced focus management with visual indicators
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
      
      // Add focus ring to focused element
      setTimeout(() => {
        const focused = document.activeElement;
        if (focused) {
          focused.style.outline = '2px solid var(--accent-color)';
          focused.style.outlineOffset = '2px';
        }
      }, 0);
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });

  // Add ARIA labels dynamically
  document.querySelectorAll('.portfolio-card, .build-card').forEach((card, index) => {
    card.setAttribute('aria-label', `Portfolio item ${index + 1}`);
    card.setAttribute('role', 'article');
  });

  // Screen reader announcements for dynamic content
  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', 'polite');
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  document.body.appendChild(announcer);
  
  // Global announcement function
  window.announceToScreenReader = (message) => {
    announcer.textContent = message;
    setTimeout(() => {
      announcer.textContent = '';
    }, 1000);
  };
}

// Enhanced Loading States
function initLoadingStates() {
  // Progressive image loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  images.forEach(img => {
    img.classList.add('loading');
    
    img.addEventListener('load', () => {
      img.classList.remove('loading');
      img.classList.add('loaded');
    });
    
    img.addEventListener('error', () => {
      img.classList.remove('loading');
      img.classList.add('error');
    });
  });

  // Smooth fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in-up');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });
}


// Particle System
function initParticleSystem() {
  const hero = document.querySelector('.hero-background');
  if (!hero) return;

  const particleContainer = document.createElement('div');
  particleContainer.className = 'particle-container';
  hero.appendChild(particleContainer);

  // Create particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particleContainer.appendChild(particle);
  }
}

// Performance Optimizations
function initPerformanceOptimizations() {
  // GPU acceleration for animated elements
  const animatedElements = document.querySelectorAll('.portfolio-card, .build-card, .skill-tag');
  animatedElements.forEach(el => {
    el.classList.add('gpu-accelerated');
  });

  // Debounce scroll events
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
      // Scroll-based animations here
    });
  });
}

// Accessibility Features
function initAccessibility() {
  // Add skip link
  const skipLink = document.createElement('a');
  skipLink.href = '#main';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Enhanced focus management
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMicroInteractions();
  initLoadingStates();
  initThemeToggle();
  initParticleSystem();
  initPerformanceOptimizations();
  initAccessibility();
});

// Export functions for global access
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
