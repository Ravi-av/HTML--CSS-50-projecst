let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")

console.log(imgItem.length-1)
 
let startSlider = 0
let endSlider = imgItem.length-1

slideBtnLeft.addEventListener("click",()=>{
    alert("left btn")
})

slideBtnRight.addEventListener("click",()=>{
  // if(startSlider >= -endSlider+100){
    startSlider = startSlider +1;
  // }
  
imgItem.forEach(element =>{
  element.style.transform =  'translateX(${startSlider}%)';

})

})



