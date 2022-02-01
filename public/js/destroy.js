'use strict'

AFRAME.registerComponent('destroy', {
    schema:{
    },
    multiple:true,
    init : function(){
        const Context_AF = this; //this refers to "trash" component

        Context_AF.trashcanEntity = document.querySelector('#trashcan'); //find trashcan entity
        Context_AF.plant = document.querySelector('#plants'); //find plants entity

        Context_AF.trashcanEntity.addEventListener('click', function(){

           // console.log(Context_AF.plant);   //check plant context

            var elem = document.getElementById("plants");  //find plant entity and assing new var
            document.getElementById('camera').removeChild(elem);  // remove entity from camera
        });
        
    }, 
})