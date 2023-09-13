import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

galleryItems.forEach(function (item, index) {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class='gallery__item'><a class='gallery__link' href='${item.original}'><img src='${item.preview}' alt='${item.description}' class='gallery__image' data-source='${item.original}'></img></a></div>`
  );
});
gallery.addEventListener("click", imageSelect);

function imageSelect(event) {
  if (event.target.tagName === "IMG") {
    event.target.parentNode.href = "javascript:void(0)";
    const modalImage = basicLightbox.create(
      `<img src='${event.target.dataset.source}'/>`
    );
    modalImage.show();
    const imageClose = (event) => {
      if (event.key === "Escape") {
        modalImage.close();
        document.removeEventListener("keydown", imageClose);
      }
    };

    document.addEventListener("keydown", imageClose);
  }
}

console.log(galleryItems);
