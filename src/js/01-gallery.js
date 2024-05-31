import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallery = document.querySelector(".gallery");

function createGallery(arr) {
  return arr.map(({ preview, original, description}) => `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      width="360"
      height="200"
    />
  </a>
</li>`).join("");
}

gallery.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

new SimpleLightbox('.gallery a');

gallery.addEventListener("click", handlerClick);

function handlerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}
