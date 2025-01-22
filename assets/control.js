import { OrbitControls } from 'three/examples/jsm/Addons.js'

const controls = (camera, renderer) => {new  OrbitControls( camera, renderer.domElement )}

export default controls