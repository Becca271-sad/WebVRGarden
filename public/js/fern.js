'use strict';

//this component will basically just toggle off/on the spinning of the walls
AFRAME.registerComponent('fern-spawn', {
  schema: {
  },
  
  init: function() {
    
    //get a local reference to our entities and set some property variables
    const Context_AF = this;
    
    Context_AF.signpost2      = document.querySelector('#ferns');

    //Context_AF.isSpinning = false;
    
    //let's add the basic animation to teh walls entity
    //note that it is not enabled initially
   Context_AF.signpost2.setAttribute('visible', false);

    //listen on click
    Context_AF.el.addEventListener('click', function() {
        console.log('sign');
       Context_AF.signpost2.setAttribute('visible', true);
    });
  },
 
});
