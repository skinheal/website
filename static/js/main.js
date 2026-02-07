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


// about page 

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-up-section");

    const observerOptions = {
        threshold: 0.2, // triggers when 20% of section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elements = entry.target.querySelectorAll(".fade-up-element");
                elements.forEach(el => {
                    el.classList.remove("opacity-0");
                    el.classList.add("animate-fadeInUp");
                });
                observer.unobserve(entry.target); // animate only once
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// 3rd file 

// toggle theme switch if user prefers "dark"
let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
if (theme == 'light') {
    const maskEl = document.querySelector("#theme-mask");
    
    // remove transition so user doesn't get flicker  
    maskEl.style.transition ="0ms";
    
    document.querySelector("#theme").checked = false;
  
    // add transition hack after short delay
    setTimeout(() => maskEl.style.transition ="500ms",1000);
  
    
}
