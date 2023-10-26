let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

<<<<<<< HEAD
console.log(imgItem.length-1);
// console.log(imgItem.length-1)
=======
// console.log(imgItem.length-1)
 
let startSlider = 0
let endSlider = imgItem.length-1

slideBtnLeft.addEventListener("click",()=>{
    alert("left btn")
})
>>>>>>> 7b5500fc178b431882f5b60091a4a535778d28b4

let startSlider = 0;
let endSlider = imgItem.length-1;
slideBtnRight.addEventListener("click",()=>{
startSlider=startSlider-100;
slideBtnLeft.addEventListener("click"())
  

imgItem.forEach(element =>{
<<<<<<< HEAD
 // Here i gonna change some single qoute   
=======
 // Here i gonna change some single qoute 
>>>>>>> 7b5500fc178b431882f5b60091a4a535778d28b4
  element.style.transform = `translateX(${startSlider}%)`;

})
})