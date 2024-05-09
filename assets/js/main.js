const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), 
    nav = document.getElementById(navId);

    if(toggle && nav)
        toggle.addEventListener("click", () => nav.classList.toggle("show-menu"));
}

showMenu("nav-toggle", "nav-menu");


const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach(i => i.addEventListener("click", linkAction));


const sections = document.querySelectorAll("section[id]"); 

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            document.querySelector(".nav__menu a[href*=" + sectionId + "]")
                    .classList.add("active-link");
        else
            document.querySelector(".nav__menu a[href*=" + sectionId + "]")
                    .classList.remove("active-link");
    });
}

window.addEventListener("scroll", scrollActive);

function scrollHeader() {
    const header = document.getElementById("header");
    if(this.scrollY >= 200)
        header.classList.add("scroll-header");
    else
        header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    if(this.scrollY >= 560)
        scrollTop.classList.add("show-scroll");
    else
        scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => tabContent.classList.remove("qualification__active"));
        target.classList.add("qualification__active");

        tabs.forEach((tab) => tab.classList.remove("qualification__active"));
        tab.classList.add("qualification__active");
    });
});


var mixer = mixitup(".portfolio__container", {
    selectors: {
        target: ".portfolio__content"
    },
    animation: {
        duration: 400
    }
});

const linkPortfolio = document.querySelectorAll(".portfolio__item");
linkPortfolio.forEach(i => i.addEventListener("click", activePortfolio));

function activePortfolio() {
    if(linkPortfolio) {
        linkPortfolio.forEach(i => i.classList.remove("active-portfolio"));
        this.classList.add("active-portfolio");
        
        const element = document.querySelectorAll(".portfolio__content");
        element.forEach(i => i.classList.remove("hide-project"));
    }
}

const mySwiper = new Swiper(".skills__container", {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
      alert("Please fill in all fields");
      return false;
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
  alert("Message send successfully!")
   return false;
      
  }


gsap.from(".home__img", {opacity: 0, duration: 2, delay: .5, x: 60});
gsap.from(".home__data", {opacity: 0, duration: 2, delay: .8, y: 25});
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {opacity: 0, duration: 2, delay: 1, y: 25, ease:"expo.out", stagger: .2});

gsap.from(".nav__logo .nav__toggle", {opacity: 0, duration: 2, delay: 1.5, y: 25, ease:"expo.out", stagger: .2});
gsap.from(".nav__item", {opacity: 0, duration: 2, delay: 1.8, y: 25, ease:"expo.out", stagger: .2});
gsap.from(".home__social-icon", {opacity: 0, duration: 2, delay: 2.2, y: 25, ease:"expo.out", stagger: .2});
