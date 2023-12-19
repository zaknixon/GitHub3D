import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three.meshline';

// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();




/*
    This application intent is to:

    1) Display an interactive 3D user interface of a users GitHub commit history.
    2) Pull data from GitHub to get user statisitics, in particular the users commit history so it may be displayed.

 */

const scene = new THREE.Scene();

const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);



function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
