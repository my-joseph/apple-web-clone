import { createSwiper } from "./utils/swiper.js";
import { createIcons, icons } from "lucide";
import { getProducts } from "./data/products.js";
import {
  getCardsShelfData,
  groupedProductsByCardsShelf,
  getCardsShelf,
} from "./data/cardsshelf.js";

import { createCardsShelf } from "./ui/cardsShelf.js";

const products = getProducts();
const cardsShelfData = getCardsShelfData();

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
    slidesPerView: "auto",
    slidesOffsetBefore: 128,
    slidesOffsetAfter: 128,
    spaceBetween: 20,
    allowSlideNext: true,
    allowSlidePrev: true,

    mousewheel: {
      forceToAxis: true, // บังคับให้การปัด Trackpad แนวนอนทำงานเฉพาะแถบสไลด์
    },
    grabCursor: true, // เปลี่ยน Cursor เป็นรูปมือจับให้ลากเมาส์ได้ด้วย

    // 💡 Option เสริม (ถ้าอยากได้ฟีลไหลตามแรงเหวี่ยงแบบ Apple Store)
    freeMode: true,
  });
};

const handleDOMLoaded = () => {
  const shelf1 = getCardsShelf(cardsShelfData[0], products);
  const shelf1Node = createCardsShelf(shelf1);
  const oldShelf = document.querySelector(".cardsshelf");
  oldShelf.replaceWith(shelf1Node);

  createIcons({ icons });
  createNavbarSwiper();
  createCardsShelfSwiper();
};

document.addEventListener("DOMContentLoaded", handleDOMLoaded);
