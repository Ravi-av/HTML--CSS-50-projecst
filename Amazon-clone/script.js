let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

console.log(imgItem.length-1);
// console.log(imgItem.length-1)

let startSlider = 0;
let endSlider = imgItem.length-1;
slideBtnRight.addEventListener("click",()=>{
startSlider=startSlider-100;
slideBtnLeft.addEventListener("click"())
  

imgItem.forEach(element =>{
 // Here i gonna change some single qoute   
  element.style.transform = `translateX(${startSlider}%)`;

})
})