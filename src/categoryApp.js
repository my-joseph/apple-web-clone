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
  createSwiper(".cardsshelf__scroller", {
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

const swiperItem = document.querySelector(".cardsshelf__scroller-item");

swiperItem.addEventListener("mouseenter", (e) => {
  const btn = document.querySelector(".product-card__cta-secondary");
  btn.classList.add("product-card__cta-secondary--hover");
});

swiperItem.addEventListener("mouseleave", (e) => {
  const btn = document.querySelector(".product-card__cta-secondary");
  btn.classList.remove("product-card__cta-secondary--hover");
});
