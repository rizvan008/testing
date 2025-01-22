import { Vector3, PerspectiveCamera, CameraHelper } from 'three'


const camera = new PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100);
// camera.position.set(2,2,5)
camera.position.setZ(10);

// camera.lookAt(Vector3());
export const camera_Hlp =new  CameraHelper(camera)

export default camera   