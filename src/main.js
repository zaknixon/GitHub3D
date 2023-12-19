import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three.meshline';

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

camera.position.z = 25;

const controls = new OrbitControls( camera, renderer.domElement );










function animate(){
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();

drawGrid();


function drawGrid(){
    const numColumns = 52;
    const numRows = 7; // Days of the week

    const cubeHeight = 0.5;
    const cubeWidth =  0.5;
    const margin = 0.2;

    const startingX = 0;
    const startingY = numRows * (cubeHeight * margin);

    let currentX = startingX;
    let currentY = startingY;
    for(let currentColumn = 0; currentColumn < numColumns; currentColumn++){
        currentX = currentX + cubeWidth + margin;
        currentY = startingY;

        for(let currentRow = 0; currentRow < numRows; currentRow++){

            currentY = currentY - cubeHeight - margin;

            const gridBox = new THREE.BoxGeometry( cubeHeight, cubeWidth, 1 );

            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            material.wireframe = true;

            const cube = new THREE.Mesh( gridBox, material );

            cube.material.depthTest = false;
            cube.material.opacity = 0.15;
            cube.material.transparent = true;

            cube.position.set(currentX,currentY,0);

            scene.add( cube );
        }
    }

    camera.position.x = currentX / 2;

    // Making sure the orbit controls work correctly
    // instead of being reset when the user interacts.
    controls.target.x = currentX / 2;
    controls.target.y = currentY / 2;
    controls.target.z = 0;


}
