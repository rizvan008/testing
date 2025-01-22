import * as THREE from 'three'
import scene from './assets/scene'
import camera, {camera_Hlp} from './assets/camera'
import controls from './assets/control'
import renderer from './assets/renderer'
import {animate} from './assets/animation'
import { Torus, cube1, cubeAxis } from './assets/models'
import {DLight, PLight, ALight, PLightHelper, DLightHelper} from './assets/lights'

console.log('this is working')

try {
// Add 3D object
scene.add(camera, DLight, PLight, ALight, PLightHelper, DLightHelper, Torus, cube1, cubeAxis, controls(camera, renderer));

//rendering 
animate ();

} catch (error) {
    console.log(error)
}
