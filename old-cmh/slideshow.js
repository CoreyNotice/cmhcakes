const imgArray=[
    'assets/cake.jpeg',
    'assets/cakes2.jpeg',
   'assets/ca3.jpeg'
]
 curIndex=0;
 imgDuration=5000;

function slideshow() {
  document.getElementById('image1').src=imgArray[curIndex];
  curIndex ++;
  if(curIndex===imgArray.length){curIndex=0;}
  setTimeout(slideshow,imgDuration);
}
slideshow()

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
