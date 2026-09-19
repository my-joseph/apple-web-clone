import { createSwiper } from "./utils/swiper.js";
import { createIcons, icons } from "lucide";
import { createCategoryScroller } from "./ui/indexCategory.js";
import { getCategory } from "./data/category.js";
import { Mousewheel } from "swiper/modules";

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
    mousewheel: {
      forceToAxis: true,
    },
    freeMode: true,
  });
};

const handleDOMLoaded = () => {
  const store = document.querySelector(".store");

  // Append Category Scroller //
  const categoryScroller = createCategoryScroller(categories);
  store.append(categoryScroller);

  createIcons({ icons });
  createCategorySwiper();
};

document.addEventListener("DOMContentLoaded", handleDOMLoaded);
