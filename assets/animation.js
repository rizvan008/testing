import scene from './scene'
import camera from './camera'
import renderer from './renderer'
import controls from './control'
import { Torus, cube1 } from './models'
    let time = 0
function moveB(Fflag, Bflag){
if(Fflag){
   time += .09
    cube1.position.y = Math.sin(time)*4;
    cube1.position.x = Math.cos(time)*.4;
    cube1.position.z = Math.cos(time)*.4;}
if(Bflag){
      Torus.rotation.x += 0.01;} 
}

//flag for moving
 let Fflag = false;
 let Bflag = false;

 // key press
 document.addEventListener("keydown",(event) => {
  event.key == "ArrowUp" ? Fflag = true :
  ( event.key == "ArrowDown" ? Bflag = true : console.log(`Key ${event.key} was pressed.`) )
  })
 document.addEventListener("keyup",(event) => {
  event.key == "ArrowUp" ? Fflag = false : ( event.key == "ArrowDown" ? Bflag = false : console.log(`Key ${event.key} was pressed.`) )
  })


export function animate () {

    requestAnimationFrame(animate);
   
if (Fflag||Bflag){moveB(Fflag, Bflag)};

  // controls.update();
  renderer.render(scene, camera, renderer);
  }