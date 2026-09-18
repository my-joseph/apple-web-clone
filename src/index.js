import { createSwiper } from "./utils/swiper.js";
import { createIcons, icons } from "lucide";
import { renderCategoryCard } from "./ui/indexCategory.js";
import { getCategory } from "./data/category.js";

const categories = getCategory();

let swiperInstance = {};
const createCategorySwiper = () => {
  createSwiper(".category-srcoller", {
    navigation: {
      nextEl: ".category-scroller__btn--next",
      prevEl: ".category-scroller__btn--prev",
    },
    slidesPerView: 7,
    slidesOffsetBefore: 128,
    slidesOffsetAfter: 128,
    grabCursor: true,
  });
};

const handleDOMLoaded = () => {
  renderCategoryCard(categories);
  createIcons({ icons });
  createCategorySwiper();
};

document.addEventListener("DOMContentLoaded", handleDOMLoaded);
