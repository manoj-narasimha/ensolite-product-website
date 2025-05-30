"use client";

import { useEffect } from "react";
import * as THREE from "three";

export function ThreeSphere() {
  useEffect(() => {
    const canvas = document.getElementById("sphere-canvas");

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    let renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
      color: 0x00f5d0,
      transparent: true,
      opacity: 0.8,
      linewidth: 1.5
    });

    const sphere = new THREE.LineSegments(edges, material);
    scene.add(sphere);

    camera.position.z = 12;

    const animate = () => {
      requestAnimationFrame(animate);
      if (sphere) {
        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Mouse parallax effect
    function initParallaxEffect() {
        document.addEventListener('mousemove', (e) => {
            const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

            if (sphere) {
                sphere.rotation.x = mouseY * 0.3;
                sphere.rotation.y = mouseX * 0.3;
            }
        });
    }

    // Control sphere visibility based on scroll
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // Calculate fade based on scroll position
        // Start fading as soon as user scrolls, complete fade by 50% of viewport height
        const fadeThreshold = viewportHeight * 0.5;
        
        if (scrollPosition <= 0) {
            // Fully visible at the top of the page
            canvas.style.opacity = '0.8';
            canvas.style.display = 'block';
        } else if (scrollPosition > 0 && scrollPosition < fadeThreshold) {
            // Gradually fade out as user scrolls down
            const fadeProgress = scrollPosition / fadeThreshold;
            const newOpacity = 0.8 * (1 - fadeProgress);
            canvas.style.opacity = newOpacity.toString();
            canvas.style.display = 'block';
        } else {
            // Completely hidden when scrolled past the threshold
            canvas.style.opacity = '0';
            canvas.style.display = 'none';
        }
    }
    initParallaxEffect();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      id="sphere-canvas"
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
}
