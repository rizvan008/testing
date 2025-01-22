import { WebGLRenderer } from "three";

//screen
export const canvas = document.getElementById("app");

//projector
const renderer = new WebGLRenderer({ canvas, antialias: true }); // provide canvas
// document.body.appendChild(renderer.domElement);

// projection size
renderer.setSize(window.innerWidth, window.innerHeight);

// // smoothening edges and render wrt device type
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))


export default renderer;