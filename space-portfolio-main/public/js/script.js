// Hamburger Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links a");

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close menu when a nav link is clicked
  navLinksItems.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !hamburger.contains(e.target) &&
      !navLinks.contains(e.target) &&
      navLinks.classList.contains("active")
    ) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
});

// Add keyframes for navigation animation
const style = document.createElement("style");
style.textContent = `
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}`;
document.head.appendChild(style);

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Reveal elements on scroll
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const steps = document.querySelectorAll(".step");
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  // Get in Touch CTA reveal
  const ctaSection = document.getElementById("get-in-touch-cta");
  if (ctaSection) {
    const ctaTop = ctaSection.getBoundingClientRect().top;
    if (ctaTop < windowHeight - 100) {
      ctaSection.classList.add("visible");
    }
  }

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });

  // Handle roadmap steps animation
  steps.forEach((step, index) => {
    const stepTop = step.getBoundingClientRect().top;
    const stepBottom = step.getBoundingClientRect().bottom;
    const stepVisible = windowHeight - (elementVisible - 50);

    // Check if step is in viewport
    if (stepTop < stepVisible && stepBottom > 0) {
      // Add active class with delay based on index
      setTimeout(() => {
        step.classList.add("active");
      }, index * 200); // 200ms delay between each step
    } else {
      step.classList.remove("active");
    }
  });
}

// Add scroll event listener
window.addEventListener("scroll", reveal);

// Trigger reveal on page load
reveal();

// Handle service section scrolling
const serviceGrid = document.querySelector(".service-grid");
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");
const scrollAmount = 300; // Width of one card

if (scrollLeftBtn && scrollRightBtn && serviceGrid) {
  // Initially hide left scroll button
  scrollLeftBtn.style.display = "none";

  // Show/hide scroll buttons based on scroll position
  serviceGrid.addEventListener("scroll", () => {
    scrollLeftBtn.style.display = serviceGrid.scrollLeft > 0 ? "flex" : "none";
    scrollRightBtn.style.display =
      serviceGrid.scrollLeft <
      serviceGrid.scrollWidth - serviceGrid.clientWidth - 10
        ? "flex"
        : "none";
  });

  // Scroll left
  scrollLeftBtn.addEventListener("click", () => {
    serviceGrid.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  // Scroll right
  scrollRightBtn.addEventListener("click", () => {
    serviceGrid.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
}

// Initialize Three.js Scene
function initThreeJS() {
  const canvas = document.getElementById("sphere-canvas");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  // Create sphere geometry
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const edges = new THREE.EdgesGeometry(geometry);
  const material = new THREE.LineBasicMaterial({
    color: 0x7928ca,
    transparent: true,
    opacity: 0.1,
    linewidth: 1,
  });

  const wireframe = new THREE.LineSegments(edges, material);
  scene.add(wireframe);

  camera.position.z = 10;

  // Animation
  function animate() {
    requestAnimationFrame(animate);
    wireframe.rotation.x += 0.001;
    wireframe.rotation.y += 0.002;
    renderer.render(scene, camera);
  }

  // Handle window resize
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  // Start animation
  animate();

  return { wireframe, camera };
}

// Initialize background elements
function initBackgroundEffects() {
  // Initialize Three.js
  const { wireframe, camera } = initThreeJS();

  // Background Grid Animation
  const gridPattern = document.querySelector(".grid-pattern");
  let gridOffset = 0;

  function animateGrid() {
    gridOffset = (gridOffset + 0.5) % 40;
    if (gridPattern) {
      gridPattern.style.backgroundPosition = `0 ${gridOffset}px`;
    }
    requestAnimationFrame(animateGrid);
  }

  // Gradient Orbs Animation
  const orbs = document.querySelectorAll(".gradient-orb");
  orbs.forEach((orb, index) => {
    const x = Math.random() * 30 - 15;
    const y = Math.random() * 30 - 15;

    orb.style.animation = `floatOrb ${10 + index * 2}s ease-in-out infinite`;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Animated Lines
  const lines = document.querySelectorAll(".line");
  lines.forEach((line, index) => {
    line.style.left = `${(index + 1) * 25}%`;
    line.style.animationDelay = `-${index * 2}s`;
  });

  // Start animations
  animateGrid();

  // Performance optimization for mobile
  let isMobile = window.innerWidth < 768;

  function updatePerformance() {
    isMobile = window.innerWidth < 768;

    if (isMobile) {
      wireframe.material.opacity = 0.05;
      orbs.forEach((orb) => {
        orb.style.filter = "blur(30px)";
      });
    } else {
      wireframe.material.opacity = 0.1;
      orbs.forEach((orb) => {
        orb.style.filter = "blur(60px)";
      });
    }
  }

  // Mouse parallax effect
  document.addEventListener("mousemove", (e) => {
    if (isMobile) return;

    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    wireframe.rotation.y = mouseX * 0.5;
    wireframe.rotation.x = mouseY * 0.5;

    orbs.forEach((orb, index) => {
      const depth = index + 1;
      const translateX = mouseX * 20 * depth;
      const translateY = mouseY * 20 * depth;
      orb.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
  });

  window.addEventListener("resize", updatePerformance);
  updatePerformance();
}

// Initialize all components
document.addEventListener("DOMContentLoaded", function () {
  initRevealOnScroll();
  initMobileMenu();
  initBackgroundEffects();
  initProjectCarousel();
});

// Handle project carousel
function initProjectCarousel() {
  const projectGrid = document.querySelector(".project-grid");
  const projectCards = document.querySelectorAll(".project-card");

  // Clone the first card and append it to the end
  const firstCard = projectCards[0];
  const clone = firstCard.cloneNode(true);
  projectGrid.appendChild(clone);

  // Handle touch events for mobile (pause animation on touch)
  let touchStartX = 0;

  projectGrid.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    projectGrid.style.animationPlayState = "paused";
  });

  projectGrid.addEventListener("touchend", () => {
    projectGrid.style.animationPlayState = "running";
  });
}
