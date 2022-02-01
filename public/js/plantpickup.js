'use strict';

AFRAME.registerComponent('plant-pickup', {
  schema: {
  },
  multiple:true,
  init: function() {
    
    const Context_AF = this;

    //listen on click
    Context_AF.el.addEventListener('click', function() {
       console.log('plant pickup');

      //creating eneity and appending to the scene
      var sceneEl = document.querySelector('a-scene');
      Context_AF.plant = document.createElement('a-entity');
      Context_AF.plant.setAttribute('id', 'plants');    
       
       sceneEl.appendChild(Context_AF.plant);

      //duplicate object attributes
       //https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes 
       var plantAttr = Context_AF.el.attributes;
       for (var i = 0; i < plantAttr.length; i++) {
        var attrib  = plantAttr[i];
        if (attrib.specified) {
          Context_AF.plant.setAttribute(attrib.name, attrib.value);
        }
    } 

       Context_AF.plant.setAttribute('position', { x: 1.2, y: -0.8, z: -1 } ); //MOVE TO RIGHT HAND
       Context_AF.plant.setAttribute("sound" , "src:" + Context_AF.plant.getAttribute("sound-eff") + "; autoplay: true") //play on click sound effect
       document.getElementById('camera').appendChild(Context_AF.plant); //APPEND TO CAMERA
      
      Context_AF.el.parentNode.removeChild(Context_AF.el); //DELETE CLICKED PLANT
    });
  },
 
});
