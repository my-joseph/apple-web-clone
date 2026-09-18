import { createSwiper } from "./utils/swiper.js";
import { createIcons, icons } from "lucide";
const createCardsShelfSwiper = () => {
  createSwiper(".navbar", {
    slidesPerView: "auto",
    spaceBetween: 24,
    slidesOffsetBefore: 128,
    slidesOffsetAfter: 128,
  });
};
createIcons({ icons });
createCardsShelfSwiper();
