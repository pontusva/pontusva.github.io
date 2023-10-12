const image = document.querySelector('#left-photo')

image.addEventListener('click', () => imageHandler())

function imageHandler() {
  startConfetti()

  setTimeout(() => {
    stopConfetti()
  }, 1500)
}
