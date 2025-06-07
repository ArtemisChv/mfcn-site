console.log("Скрипт подключен, бро! 🚀");

document.addEventListener("DOMContentLoaded", () => {
  // Обновляем год в футере
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Обработка формы (если захочешь потом добавить логику отправки)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const phoneInput = contactForm.querySelector('input[type="tel"]');
      const phone = phoneInput.value.trim();

      if (phone.length < 6) {
        alert("Введите корректный номер телефона");
        phoneInput.focus();
        return;
      }

      // Здесь можно подключить Telegram API, отправку на сервер и т.д.
      alert(`Спасибо! Мы скоро свяжемся с вами по номеру: ${phone}`);
      contactForm.reset();
    });
  }

  // Плавный скролл (если якорные ссылки есть)
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

// 🌟 Анимация появления при прокрутке
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-on-scroll");
      observer.unobserve(entry.target); // убираем наблюдение после появления
    }
  });
}, {
  threshold: 0.1
});

// 🔍 Находим все элементы, которые нужно анимировать
document.querySelectorAll(".animate-on-scroll").forEach(el => {
  observer.observe(el);
});