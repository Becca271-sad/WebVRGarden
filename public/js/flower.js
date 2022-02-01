'use strict';

//this component will basically just toggle off/on the spinning of the walls
AFRAME.registerComponent('flower-spawn', {
  schema: {
  },
  
  init: function() {
    
    //get a local reference to our entities and set some property variables
    const Context_AF = this;
    
    Context_AF.signpost1     = document.querySelector('#flowers');

   Context_AF.signpost1.setAttribute('visible', false);
   
   //listen on click
    Context_AF.el.addEventListener('click', function() {
        console.log('sign');
       Context_AF.signpost1.setAttribute('visible', true);
    });
  },
 
});
