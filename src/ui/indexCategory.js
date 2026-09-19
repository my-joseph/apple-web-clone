import { createIconNode } from "../utils/icon";

export function createCategoryScroller(categories) {
  // Remove Old existing html //
  const oldSwiperContainer = document.querySelector(".category-srcoller");
  if (oldSwiperContainer) {
    oldSwiperContainer.remove();
  }

  // Create Swiper //
  const swiperContainer = document.createElement("div");
  swiperContainer.classList.add("srcoller", "category-srcoller", "swiper");

  const swiperList = document.createElement("ul");
  swiperList.classList.add(
    "scroller__list",
    "category-scroller__list",
    "swiper-wrapper",
  );

  // Create each Swiper items //
  categories.forEach((category) => {
    const swiperItem = document.createElement("li");
    swiperItem.classList.add(
      "srcoller__item",
      "category-scroller__item",
      "swiper-slide",
    );

    // Create Category Card //
    const categoryCard = document.createElement("a");
    categoryCard.classList.add("category-card");
    categoryCard.href = `/category.html?slug=${category.categorySlug}`;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("category-card__img-wrapper");

    const image = document.createElement("img");
    image.classList.add("category-card__img");
    image.src = `${category.image}`;
    image.alt = `${category.name}`;

    const text = document.createElement("span");
    text.classList.add("category-card__text");
    text.textContent = `${category.name}`;

    // Append them //
    imageWrapper.append(image);
    categoryCard.append(imageWrapper, text);
    swiperItem.append(categoryCard);
    swiperList.append(swiperItem);
  });

  // Create prev & next button //
  const prevBtn = document.createElement("button");
  prevBtn.classList.add(
    "scroller__btn",
    "scroller__btn--prev",
    "category-scroller__btn--prev",
  );

  const prevIcon = createIconNode("chevron-left", "scroller-btn__icon");
  prevIcon.classList.add("scroller-btn__icon");

  const nextBtn = document.createElement("button");
  nextBtn.classList.add(
    "scroller__btn",
    "scroller__btn--next",
    "category-scroller__btn--next",
  );

  const nextIcon = createIconNode("chevron-right", "scroller-btn__icon");
  nextIcon.classList.add("scroller-btn__icon");

  // Append them //
  prevBtn.append(prevIcon);
  nextBtn.append(nextIcon);
  swiperContainer.append(swiperList, prevBtn, nextBtn);
  return swiperContainer;
}

// <div class="category-srcoller swiper">
//   <ul class="category-scroller__list swiper-wrapper">
//     <li class="category-scroller__item swiper-slide">
//       <a href="" class="category-card">
//         <div class="category-card__img-wrapper">
//           <img
//             src="/public/images/category/mac.webp"
//             alt=""
//             class="category-card__img"
//           />
//         </div>
//         <span class="category-card__text">Mac</span>
//       </a>
//     </li>
//   </ul>

//   <button class="category-scroller__btn category-scroller__btn--next">
//     <i data-lucide="chevron-right" class="scroller-btn__icon"></i>
//   </button>
//   <button class="category-scroller__btn category-scroller__btn--prev">
//     <i data-lucide="chevron-left" class="scroller-btn__icon"></i>
//   </button>
// </div>
