document.addEventListener('DOMContentLoaded', function () {
  const homeSection = document.querySelector('.home');
  const parallaxElements = {
    '.home__main-image': { speed: 0.03, autoSpeed: 0.4, amplitude: 5 },
    '.home__frame-1': { speed: 0.05, autoSpeed: 0.6, amplitude: 8 },
    '.home__frame-2': { speed: 0.08, autoSpeed: 0.8, amplitude: 10 },
    '.home__bg': { speed: 0.01, autoSpeed: 0.2, amplitude: 2 },
    '.home__sparkles': { speed: 0.08, autoSpeed: 0.5, amplitude: 12, diagonalMovement: true },
  };

  let mouseX = 0;
  let mouseY = 0;
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let time = 0;
  let isMouseInHomeSection = false;
  let isParallaxActive = false;

  const animationElements = [
    { selector: '.home__bg', delay: 100, duration: 700 },
    { selector: '.home__main-image', delay: 200, duration: 800 },
    { selector: '.home__sparkles', delay: 300, duration: 500 },
    { selector: '.home__frame-1', delay: 400, duration: 600 },
    { selector: '.home__frame-2', delay: 600, duration: 600 },
  ];

  window.addEventListener('resize', function () {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  });

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX - windowWidth / 2;
    mouseY = e.clientY - windowHeight / 2;
    const target = e.target;
    const isOverIgnoredElement = target.closest('.header') || target.closest('.contacts');
    if (!isOverIgnoredElement) isMouseInHomeSection = true;
  });

  homeSection.addEventListener('mouseenter', function () {
    isMouseInHomeSection = true;
  });

  homeSection.addEventListener('mouseleave', function (e) {
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && (relatedTarget.closest('.header') || relatedTarget.closest('.contacts')))
      return;
    isMouseInHomeSection = false;
    mouseX = 0;
    mouseY = 0;
  });

  function animateScaleIn(element, duration) {
    return new Promise((resolve) => {
      const startTime = performance.now();
      const startScale = 0;
      const endScale = 1;
      const startOpacity = 0;
      const endOpacity = 1;

      function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const currentScale = startScale + (endScale - startScale) * easeProgress;
        const currentOpacity = startOpacity + (endOpacity - startOpacity) * easeProgress;

        element.style.transform = `scale(${currentScale})`;
        element.style.opacity = currentOpacity;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      }

      requestAnimationFrame(animate);
    });
  }

  function initScaleAnimations() {
    const promises = animationElements.map((config) => {
      const element = document.querySelector(config.selector);
      if (!element) return Promise.resolve();

      return new Promise((resolve) => {
        setTimeout(() => {
          animateScaleIn(element, config.duration).then(resolve);
        }, config.delay);
      });
    });

    Promise.all(promises).then(() => {
      isParallaxActive = true;
      animateParallax();
    });
  }

  function updateParallax() {
    if (!isParallaxActive) return;

    time += 0.008;
    Object.keys(parallaxElements).forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        const config = parallaxElements[selector];
        let mouseMoveX = 0;
        let mouseMoveY = 0;
        if (isMouseInHomeSection) {
          mouseMoveX = mouseX * config.speed;
          mouseMoveY = mouseY * config.speed;
        }
        let autoMoveX, autoMoveY;
        if (config.diagonalMovement) {
          autoMoveX = Math.sin(time * config.autoSpeed) * config.amplitude;
          autoMoveY = Math.sin(time * config.autoSpeed) * config.amplitude;
        } else {
          autoMoveX = Math.sin(time * config.autoSpeed) * config.amplitude;
          autoMoveY = Math.cos(time * config.autoSpeed * 0.8) * config.amplitude;
        }
        const totalX = mouseMoveX + autoMoveX;
        const totalY = mouseMoveY + autoMoveY;

        // Сохраняем scale(1) и добавляем трансформацию параллакса
        element.style.transform = `translate(${totalX}px, ${totalY}px) scale(1)`;
        element.style.opacity = '1';
      }
    });
  }

  function animateParallax() {
    if (!isParallaxActive) return;
    requestAnimationFrame(animateParallax);
    updateParallax();
  }

  initScaleAnimations();

  const shineElement = document.querySelector('.home__title-gif');
  if (shineElement) {
    setInterval(() => {
      shineElement.style.transform = 'scale(1.1) rotate(3deg)';
      setTimeout(() => {
        shineElement.style.transform = 'scale(1) rotate(0deg)';
      }, 600);
    }, 4000);
  }

  const homeButton = document.querySelector('.home__button');
  if (homeButton) {
    homeButton.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.08)';
    });
    homeButton.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
    homeButton.addEventListener('click', function () {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  }
});
