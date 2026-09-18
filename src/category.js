import { createSwiper } from "./utils/swiper.js";
import { createIcons, icons } from "lucide";

const createCardsShelfSwiper = () => {
  createSwiper(".cardsshelf__scroller", {
    slidesPerView: 3,
  });
};
createIcons({ icons });
