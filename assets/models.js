import {TorusGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial , BoxGeometry, AxesHelper} from 'three';
// import * as THREE from 'three';

// item 1
const Tgeometry = new TorusGeometry(10, 3, 16, 100);
const Tmaterial = new MeshStandardMaterial({ color: 0xff6347 });
export const Torus = new Mesh(Tgeometry, Tmaterial);
Torus.position.set(0,0,0)

// item 2
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshStandardMaterial({ color : 0x00ff00,});
export const cube1 = new Mesh(geometry, material);

// item 3
export const cubeAxis = new AxesHelper()

// export default Torus