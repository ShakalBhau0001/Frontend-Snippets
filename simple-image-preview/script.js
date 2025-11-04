const imageInput = document.getElementById('ImageInput');
const imagePreview = document.getElementById('ImagePreview');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (file) {
    imagePreview.src = URL.createObjectURL(file);
    imagePreview.style.display = 'block';
  }
});
