import * as basicLightbox from 'basiclightbox';

function showModal(item) {
  const image = item.target.dataset.modal;
  const instance = basicLightbox.create(`
    <img src="${image}" width="800" height="600">
`);
  instance.show();
}
export default showModal;
