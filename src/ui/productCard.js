export function createProductCard(product) {
  const card = document.createElement("article");
  card.classList.add("product-card");
  card.dataset.productId = product.id;

  // แปลงรายการ Swatches เป็น HTML String
  const swatchesHTML = (product.swatch || [])
    .filter(Boolean)
    .map(
      (urlImage) => `
      <li class="swatches__item">
        <div class="swatches__img-wrapper">
          <img src="${urlImage}" alt="" class="swatches__img" />
        </div>
      </li>
    `,
    )
    .join("");

  const badgeHTML = product.badge
    ? `<span class="product-card__badge">${product.badge}</span>`
    : `<span class="product-card__badge product-card__badge--empty" aria-hidden="true"></span>`;
  // วาด HTML ทั้งหมดทีเดียว
  card.innerHTML = `
    <div class="product-card__header">
      ${badgeHTML}
      <h3 class="product-card__title">${product.name}</h3>
    </div>
    <div class="product-card__content">
      <div class="product-card__img-wrapper">
        <img class="product-card__img" src="${product.image}" alt="${product.name}" />
      </div>

      <button type="button" class="btn btn--secondary product-card__cta-secondary">
        Take a closer look
      </button>

      <div class="product-card__swatches">
        <ul class="swatches__list">
          ${swatchesHTML}
        </ul>
      </div>

      <div class="product-card__info">
        <span class="product-card__description">${product.info}</span>
        <a href="${product.link || ""}" class="btn btn--primary product-card__cta-primary">Buy</a>
      </div>
    </div>
  `;

  return card;
}

// export function createProductCard(product) {

//     const card = document.createElement("article");
//     card.classList.add("product-card");
//     card.dataset.productId = product.id;

//     const cardHeader = document.createElement("div");
//     cardHeader.classList.add("product-card__header");

//     const cardTitle = document.createElement("h3");
//     cardTitle.classList.add("product-card__title");
//     cardTitle.textContent = product.name;

//     const cardContent = document.createElement("div");
//     cardContent.classList.add("product-card__content");

//     const cardImgWrap = document.createElement("div");
//     cardImgWrap.classList.add("product-card__img-wrapper");

//     const cardImg = document.createElement("img");
//     cardImg.classList.add("product-card__img");
//     cardImg.src = product.image;
//     cardImg.alt = product.name;

//     const cardHoverBtn = document.createElement("button");
//     cardHoverBtn.type = "button";
//     cardHoverBtn.classList.add(
//       "btn",
//       "btn--secondary",
//       "product-card__cta-secondary",
//     );

//     cardHoverBtn.textContent = "Take a closer look";

//     // Create Swatches //
//     const swatchContainer = document.createElement("div");
//     swatchContainer.classList.add("product-card__swatches");

//     const swatchList = document.createElement("ul");
//     swatchList.classList.add("swatches__list");

//     product.swatch.forEach((urlImage) => {
//       if (!urlImage) {
//         return document.createElement("span");
//       }
//       const swatchItem = document.createElement("li");
//       swatchItem.classList.add("swatches__item");

//       const swatchImgWrap = document.createElement("div");
//       swatchImgWrap.classList.add("swatches__img-wrapper");

//       const swatchImg = document.createElement("div");
//       swatchImg.classList.add("swatches__img");
//       swatchImg.src = urlImage;

//       // Append Swatch //
//       swatchImgWrap.append(swatchImg);
//       swatchItem.append(swatchImgWrap);
//       swatchList.append(swatchItem);
//     });

//     // Append Swatch //
//     swatchContainer.append(swatchList)

//     const cardInfo = document.createElement("div");
//     cardInfo.classList.add("product-card__info");

//     const cardDescription = document.createElement("p");
//     cardDescription.classList.add("product-card__description");
//     cardDescription.textContent = product.info;

//     const cardCTA = document.createElement("a");
//     cardCTA.classList.add("btn", "btn--primary", "product-card__cta-primary");
//     cardCTA.href = "";
//     cardCTA.textContent = "Buy";

//     // Append Product Card //

//     cardHeader.append(cardTitle)
//     cardImgWrap.append(cardImg)
//     cardInfo.append(cardDescription, cardCTA)
//     cardContent.append(cardImgWrap, cardHoverBtn, swatchContainer, cardInfo)

//     card.append(cardHeader, cardContent)
// }
