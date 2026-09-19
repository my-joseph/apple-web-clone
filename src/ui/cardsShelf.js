import { createProductCard } from "./productCard.js";

export function createCardsShelf(cardsShelf) {
  const container = document.createElement("div");
  container.classList.add("cardsshelf");
  container.id = `shelf-${cardsShelf.id}`;
  container.dataset.shelfId = cardsShelf.id;

  container.innerHTML = `
    <h2 class="cardsshelf__title">
      ${cardsShelf.title}
      <span class="cardsshelf__subtitle">${cardsShelf.subtitle || ""}</span>
    </h2>

    <div class="scroller cardsshelf__scroller swiper">
      <ul class="scroller-list cardsshelf__scroller-list swiper-wrapper"></ul>

      <button type="button" class="scroller__btn scroller__btn--next cardsshelf-scroller__btn--next" aria-label="Next slide">
        <i data-lucide="chevron-right" class="scroller-btn__icon"></i>
      </button>
      <button type="button" class="scroller__btn scroller__btn--prev cardsshelf-scroller__btn--prev" aria-label="Previous slide">
        <i data-lucide="chevron-left" class="scroller-btn__icon"></i>
      </button>
    </div>
  `;

  const scrollerList = container.querySelector(".swiper-wrapper");

  (cardsShelf.products || []).forEach((product) => {
    const scrollerItem = document.createElement("li");
    scrollerItem.classList.add(
      "scroller-item",
      "cardsshelf__scroller-item",
      "swiper-slide",
    );

    const productCard = createProductCard(product);
    scrollerItem.append(productCard);

    // ✅ ค้นหาปุ่มปุ่มเฉพาะภายใน scrollerItem ใบนี้เท่านั้น
    const btn = productCard.querySelector(".product-card__cta-secondary");
    if (btn) {
      scrollerItem.addEventListener("mouseenter", () => {
        btn.classList.add("product-card__cta-secondary--hover");
      });

      scrollerItem.addEventListener("mouseleave", () => {
        btn.classList.remove("product-card__cta-secondary--hover");
      });
    }

    scrollerList.append(scrollerItem);
  });

  return container;
}

// import { createProductCard } from "./productCard.js";

// export function createCardsShelf(cardsshelf) {
//   const cardsShelfContainer = document.createElement("article");
//   cardsShelfContainer.classList.add("cardsshelf");
//   cardsShelfContainer.dataset.shelfId = cardsshelf.id;
//   cardsShelfContainer.id = `shelf-${cardsshelf.id}`;

//   const title = document.createElement("h2");
//   title.classList.add("cardsshelf__title");
//   title.textContent = cardsshelf.title;

//   const subTitle = document.createElement("span");
//   title.classList.add("cardsshelf__subtitle");
//   title.textContent = cardsshelf.subtitle;

//   const scroller = document.createElement("div");
//   scroller.classList.add("scroller", "cardsshelf__scroller", "swiper");

//   const scrollerList = document.createElement("ul");
//   scroller.classList.add(
//     "scroller-list",
//     "cardsshelf__scroller-list",
//     "swiper-wrapper",
//   );

//   cardsshelf.products.forEach((product) => {
//     const scrollerItem = document.createElement("li");
//     scrollerItem.classList.add(
//       "scroller-item",
//       "cardsshelf__scroller-item",
//       "swiper-slide",
//     );
//     const productCard = createProductCard(product);
//     scrollerItem.append(productCard);
//     scrollerList.append(scrollerItem);
//   });

//   // Append them //
//   title.append(subTitle);
//   cardsShelfContainer.append(title, scroller);
// }

// export function createProductCard() {}

// // <div class="cardsshelf" id="shelf1">
// //     <h2 class="cardsshelf__title">
// //       All models.
// //       <span class="cardsshelf__subtitle">Take your pick</span>
// //     </h2>

// //     <div class="scroller cardsshelf__scroller swiper">
// //       <ul
// //         class="scroller-list cardsshelf__scroller-list swiper-wrapper"
// //       >

// //         <li
// //           class="scroller-item cardsshelf__scroller-item swiper-slide"
// //         >

// //           <article class="product-card">
// //             <div class="product-card__header">
// //               <h3 class="product-card__title">MacBook Pro</h3>
// //             </div>
// //             <div class="product-card__content">
// //               <div class="product-card__img-wrapper">
// //                 <img
// //                   src="/public/images/products/macbook-neo/main.webp"
// //                   alt=""
// //                   class="product-card__img"
// //                 />
// //               </div>
// //               <button
// //                 type="button"
// //                 class="btn btn--secondary product-card__cta-secondary"
// //               >
// //                 Take a closer look
// //               </button>
// //               <div class="product-card__swatches">
// //                 <ul class="swatches__list">
// //                   <li class="swatches__item">
// //                     <div class="swatches__img-wrapper">
// //                       <img
// //                         src="/public/images/products/macbook-neo/sw001.png"
// //                         alt=""
// //                         class="swatches__img"
// //                       />
// //                     </div>
// //                   </li>
// //                   <li class="swatches__item">
// //                     <div class="swatches__img-wrapper">
// //                       <img
// //                         src="/public/images/products/macbook-neo/sw002.png"
// //                         alt=""
// //                         class="swatches__img"
// //                       />
// //                     </div>
// //                   </li>
// //                   <li class="swatches__item">
// //                     <div class="swatches__img-wrapper">
// //                       <img
// //                         src="/public/images/products/macbook-neo/sw003.png"
// //                         alt=""
// //                         class="swatches__img"
// //                       />
// //                     </div>
// //                   </li>
// //                   <li class="swatches__item">
// //                     <div class="swatches__img-wrapper">
// //                       <img
// //                         src="/public/images/products/macbook-neo/sw004.png"
// //                         alt=""
// //                         class="swatches__img"
// //                       />
// //                     </div>
// //                   </li>
// //                 </ul>
// //               </div>
// //               <div class="product-card__info">
// //                 <span class="product-card__description">
// //                   Buy from $699or $58.25/mo. per month for 12 mo. months
// //                   Footnote
// //                 </span>
// //                 <a
// //                   href=""
// //                   class="btn btn--primary product-card__cta-primary"
// //                   >Buy</a
// //                 >
// //               </div>
// //             </div>
// //           </article>
// //         </li>
// //       </ul>
// //       <button
// //         class="scroller__btn scroller__btn--next cardsshelf-scroller__btn--next"
// //       >
// //         <i data-lucide="chevron-right" class="scroller-btn__icon"></i>
// //       </button>
// //       <button
// //         class="scroller__btn scroller__btn--prev cardsshelf-scroller__btn--prev"
// //       >
// //         <i data-lucide="chevron-left" class="scroller-btn__icon"></i>
// //       </button>
// //     </div>
// //   </div>
