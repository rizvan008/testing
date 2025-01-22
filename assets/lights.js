import { DirectionalLight, PointLight, AmbientLight, PointLightHelper, DirectionalLightHelper } from "three";


export const DLight =new  DirectionalLight( 0xffffff, 1); // check the color & name
DLight.position.set(0, 5, 0)
export const PLight = new PointLight(0xffffff);
PLight.position.set(5, 6, 0);
export const PLightHelper = new PointLightHelper(PLight,1,'red')
export const DLightHelper = new DirectionalLightHelper(DLight,1,'yellow')
export   const ALight = new AmbientLight(0xffffff,.1);
    
// export default DLight