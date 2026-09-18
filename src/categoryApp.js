import { createSwiper } from "./utils/swiper.js";
import { createIcons, icons } from "lucide";
const createNavbarSwiper = () => {
  createSwiper(".navbar", {
    slidesPerView: "auto",
    spaceBetween: 24,
    slidesOffsetBefore: 128,
    slidesOffsetAfter: 128,
  });
};
const createCardsShelfSwiper = () => {
  createSwiper(".cardsshelf-scroller__btn--next", {
    navigation: {
      nextEl: ".cardsshelf-scroller__btn--next",
      prevEl: ".cardsshelf-scroller__btn--prev",
    },
    slidesPerView: 3,
    slidesOffsetBefore: 128,
    slidesOffsetAfter: 128,
    grabCursor: true,
  });
};
createIcons({ icons });
createNavbarSwiper();
createCardsShelfSwiper();
