const btns = document.querySelectorAll(".acc-btn");

btns.forEach((btn) => {
   btn.addEventListener("click", function (e) {
      e.preventDefault();
      btns.forEach((btn) => {
         btn.nextElementSibling.innerText !== this.nextElementSibling.innerText
            ? btn.nextElementSibling.classList.add("d-none")
            : null;
      });
      this.nextElementSibling.classList.toggle("d-none");
   });
});
