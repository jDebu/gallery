import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
 connect() {
   console.log("Connected to carousel controller");
 }

 selectCard(event) {
   const card = event.currentTarget;
   const index = card.dataset.index;
  
   this.activateCarouselItem(index);
 }

 activateCarouselItem(index) {
   const carouselItems = document.querySelectorAll(".carousel-item");
  
   carouselItems.forEach((item, i) => {
     if (i == index) {
       item.classList.add("active");
     } else {
       item.classList.remove("active");
     }
   });
 }
}
