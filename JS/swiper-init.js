import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  Pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  Navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export default swiper;
