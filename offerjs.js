// تفاعل النجوم
const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("active", i <= index);
    });
  });
});

// عداد الزوار
let count = Math.floor(1000 + Math.random() * 500);
const counter = document.getElementById("visitorCount");
counter.textContent = count;

setInterval(() => {
  count++;
  counter.textContent = count;
}, 2000);
