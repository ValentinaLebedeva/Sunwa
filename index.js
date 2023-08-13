/* open item page from main page */

const productRow = document.querySelector(".section-products--main-page-row");
const productItemsMainLinks = document.querySelectorAll(".product-item-link");

productRow.addEventListener("click", openItem);

function openItem() {
    for (i = 0; i < productItemsMainLinks.length; i++) {
        productItemsMainLinks[i].setAttribute(
            "href",
            `item${i}.html`);
    };
};


/* items slider on main page */

const productItemsMain = document.querySelectorAll(".product-item--main-page");
const productItem = document.querySelector(".product-item--main-page");
const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");

productRow.setAttribute('data-target', 'product-row');

productItemsMain.forEach(function (item) {
    item.dataset.product = "item";
})

const productRowWidth = productRow.offsetWidth;
const itemStyle = productItem.currentStyle || window.getComputedStyle(productItem);
const itemMarginRight = Number(itemStyle.marginRight.match(/\d+/g)[0]);
const itemWidth = Number(itemStyle.width.match(/\d+/g)[0]);

const itemCount = productRow.querySelectorAll("[data-product=item]").length;
const itemWidthT = productRow.querySelector("[data-product=item]").offsetWidth;


let offset = 0;

const check = Math.round(productRowWidth / (itemWidthT + itemMarginRight)); // how many items in a row

const maxX = -((itemCount / check) * productRowWidth + (itemMarginRight * (itemCount / check)) - productRowWidth - itemMarginRight);

btnLeft.addEventListener("click", function () {
    if (offset !== 0) {
        offset += productRowWidth + itemMarginRight;
        productRow.style.transform = `translateX(${offset}px)`;
    }
});

btnRight.addEventListener("click", function () {
    if (offset >= maxX) {
        offset -= productRowWidth + itemMarginRight;
        productRow.style.transform = `translateX(${offset}px)`;
    }
})

/* opening news pages */

const newsRow = document.querySelector(".section-news-row");
const newsItemLinks = document.querySelectorAll(".news-item-link");

newsRow.addEventListener("click", openNews);

function openNews() {
    for (i = 0; i < newsItemLinks.length; i++) {
        newsItemLinks[i].setAttribute("href", `events${i}.html`);
    }
};