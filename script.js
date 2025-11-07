// Populate product sections dynamically
products.forEach((product, index) => {
  // Set image
  const imageElement = document.getElementById(`product-image-${index}`);
  if (imageElement) {
    imageElement.src = product.image;
    imageElement.alt = product.header;
  }

  // Set header
  const headerElement = document.getElementById(`product-header-${index}`);
  if (headerElement) {
    headerElement.textContent = product.header;
  }

  // Set subheader
  const subheaderElement = document.getElementById(`product-subheader-${index}`);
  if (subheaderElement) {
    subheaderElement.textContent = product.subheader;
  }

  // Set title
  const titleElement = document.getElementById(`product-title-${index}`);
  if (titleElement) {
    titleElement.textContent = product.title;
  }

  // Set paragraph
  const paragraphElement = document.getElementById(`product-paragraph-${index}`);
  if (paragraphElement) {
    paragraphElement.innerHTML = product.paragraph;
  }


});
