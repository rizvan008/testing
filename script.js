console.log("test js worked")


console.log('this is working')

const model = document.querySelector('[gltf-model]');
   model.addEventListener('click', () => {
       const position = model.getAttribute('position');
       localStorage.setItem('modelPosition', JSON.stringify(position));
   });

const savedPosition = JSON.parse(localStorage.getItem('modelPosition'));
   if (savedPosition) {
       model.setAttribute('posi tion', savedPosition);
   }

