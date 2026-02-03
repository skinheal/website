document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".comparison-slider");

  sliders.forEach(slider => {
    const input = slider.querySelector(".slider-input");
    const afterImage = slider.querySelector(".image-after");
    const line = slider.querySelector(".slider-line");
    const handle = slider.querySelector(".slider-handle");

    input.addEventListener("input", (e) => {
      const value = e.target.value;

      afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      line.style.left = value + "%";
      handle.style.left = value + "%";
    });
  });
});
