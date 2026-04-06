"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const W = window.innerWidth;
    const H = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Mesh torus knot — a geometric ribbon that slowly rotates
    const knotGeo = new THREE.TorusKnotGeometry(18, 4, 256, 32, 2, 3);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0xc9a44e,
      wireframe: true,
      transparent: true,
      opacity: 0.03,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    scene.add(knot);

    // Particle ring
    const ringData: { positions: Float32Array; originalY: Float32Array; phases: Float32Array } = (() => {
      const count = 1200;
      const positions = new Float32Array(count * 3);
      const originalY = new Float32Array(count);
      const phases = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const radius = 25 + Math.random() * 15;
        const i3 = i * 3;
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = (Math.random() - 0.5) * 40;
        positions[i3 + 2] = Math.sin(angle) * radius;

        originalY[i] = positions[i3 + 1];
        phases[i] = Math.random() * Math.PI * 2;
      }

      // Ring points
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.PointsMaterial({
        size: 0.12,
        color: new THREE.Color("#c9a44e"),
        transparent: true,
        opacity: 0.4,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);
      return { positions, originalY, phases, geo };
    })();

    // Floating spheres — small glowing orbs
    const sphereData: { positions: { x: number; y: number; z: number }[]; meshes: THREE.Mesh[] } = { positions: [], meshes: [] };

    const sphereColor = [
      new THREE.Color("#c9a44e"),
      new THREE.Color("#6c8ce5"),
      new THREE.Color("#c9a44e80"),
    ];

    for (let i = 0; i < 12; i++) {
      const radius = 0.15 + Math.random() * 0.3;
      const geo = new THREE.SphereGeometry(radius, 8, 8);
      const mat = new THREE.MeshBasicMaterial({
        color: sphereColor[i % sphereColor.length],
        transparent: true,
        opacity: 0.08 + Math.random() * 0.12,
      });
      const sphere = new THREE.Mesh(geo, mat);
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 20;
      sphere.position.set(x, y, z);
      scene.add(sphere);
      sphereData.meshes.push(sphere);
      sphereData.positions.push({ x, y, z });
    }

    // Mouse
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animate
    let frame = 0;
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      frame += 0.002;

      // Rotate torus knot
      knot.rotation.y = frame * 0.15;
      knot.rotation.x = Math.sin(frame * 0.3) * 0.1;

      // Ring particles — gentle wave
      const ringPos = ringData.positions;
      for (let i = 0; i < ringData.originalY.length; i++) {
        const i3 = i * 3;
        ringPos[i3 + 1] = ringData.originalY[i] + Math.sin(frame * 2 + ringData.phases[i]) * 3;
        ringPos[i3] += Math.cos(frame * 0.5 + ringData.phases[i]) * 0.001;
      }

      if (knot.geometry) {
        // Only the points need updating
      }

      // Float spheres
      sphereData.meshes.forEach((s, i) => {
        const orig = sphereData.positions[i];
        s.position.y = orig.y + Math.sin(frame * 3 + i * 1.5) * 3;
        s.position.x = orig.x + Math.cos(frame * 1.5 + i) * 1.5;
      });

      // Camera parallax
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.01;
      camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.01;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      try { mount.removeChild(renderer.domElement); } catch { /* already removed */ }
      knotGeo.dispose();
      knotMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}