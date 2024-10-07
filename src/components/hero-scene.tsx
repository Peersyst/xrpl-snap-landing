/* eslint-disable */
// @ts-nocheck

"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three-stdlib";

const HeroScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const objectRef = useRef<THREE.Object3D | null>(null);
    const mouse = useRef<THREE.Vector2>(new THREE.Vector2());

    useEffect(() => {
        const container = document.getElementById("heroModel");
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000);

        const minRotationX = -Math.PI / 18;
        const maxRotationX = Math.PI / 18;
        const minRotationY = -Math.PI / 18;
        const maxRotationY = Math.PI / 18;

        camera.position.set(0, 0, 180);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 30).normalize();
        scene.add(directionalLight);

        const loader = new OBJLoader();
        loader.load(
            "xrpl_logo.obj",
            (object) => {
                object.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh) {
                        (child as THREE.Mesh).material = new THREE.MeshPhongMaterial({
                            color: 0xffffff,
                            shininess: 100,
                            reflectivity: 1,
                        });

                        (child as THREE.Mesh).castShadow = true;
                        (child as THREE.Mesh).receiveShadow = true;
                    }
                });

                object.rotation.set(0, 0, 0);
                object.position.set(0, 0, 0);

                const aabb = new THREE.Box3().setFromObject(object);
                const center = aabb.getCenter(new THREE.Vector3());

                object.position.x += object.position.x - center.x;
                object.position.y += object.position.y - center.y;
                object.position.z += object.position.z - center.z;

                objectRef.current = object;
                scene.add(object);
            },
            (xhr) => {},
            (error) => {},
        );

        const onMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", onMouseMove, false);

        const resizeCanvas = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;

            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener("resize", resizeCanvas);

        const animate = () => {
            requestAnimationFrame(animate);

            if (objectRef.current) {
                const raycaster = new THREE.Raycaster();
                raycaster.setFromCamera(mouse.current, camera);

                const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
                const intersectPoint = new THREE.Vector3();

                raycaster.ray.intersectPlane(plane, intersectPoint);

                if (intersectPoint) {
                    objectRef.current.lookAt(intersectPoint);
                }

                objectRef.current.rotation.x = Math.max(minRotationX, Math.min(maxRotationX, objectRef.current.rotation.x));
                objectRef.current.rotation.y = Math.max(minRotationY, Math.min(maxRotationY, objectRef.current.rotation.y));
                objectRef.current.rotation.z = 0;
            }

            renderer.render(scene, camera);
        };

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove, false);
            window.removeEventListener("resize", resizeCanvas);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div id="heroModel" ref={mountRef} className="h-[320px] sm:h-[700px] lg:h-[900px] object-cover w-full" />;
};

export default HeroScene;
