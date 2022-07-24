
/*header__cards*/

  document.querySelectorAll(".header-bottom__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header-bottom__hidden");

    document.querySelectorAll(".header-bottom__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("is-active");
      }
    });

    document.querySelectorAll(".header-bottom__hidden").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("is-active");
      }
    });
    dropdown.classList.toggle("is-active");
    btn.classList.toggle("is-active");
  });
});

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header-bottom__list")) {
    document.querySelectorAll(".header-bottom__hidden").forEach(el => {
        el.classList.remove("is-active");
    })
    document.querySelectorAll(".header-bottom__btn").forEach(el => {
        el.classList.remove("is-active");
    });
  };
});

/*burger*/

window.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('#burger');
  const burger = document.querySelector('.burger');
  burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger-icon-active');
    if (burgerBtn.classList.contains('burger-icon-active')) {
      burger.classList.add('burger-active');
    } else {
      burger.classList.remove('burger-active');
    };
  });
});

/*---search---*/
const btnSearch = document.querySelector('.header-top__search-top');
const btnCloseSearch = document.querySelector('.btn-close');
const menuSearch = document.querySelector('.search');

btnSearch.addEventListener('click', () => {
  menuSearch.classList.add('search--active');
});

btnCloseSearch.addEventListener('click', () => {
  menuSearch.classList.remove('search--active');
});

/*heroSlider*/


document.addEventListener("DOMContentLoaded", () => {
  let heroSlider = new Swiper(".hero__slider", {

    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    }
  });
});

/*Select*/

document.addEventListener('DOMContentLoaded', function () {
  const selector = document.querySelector('.gallery__select');
  const choices1 = new Choices(selector, {
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
    position: 'bottom',
    classNames: {
      containerOuter: 'choices choices1',
    },
  });
});

/*Slader*/

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev"
    },

    breakpoints: {
      578: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 36,
      },

      1441: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

// Модальное окно
const popupLinks = document.querySelectorAll('.gallery__slide');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
      document.body.classList.add('lock');
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.popup__close-btn');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
      document.body.classList.remove('lock');
    });
  };
};

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup')) {
        popupClose(e.target.closest('.popup'));
      };
    });
  };
};

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
  };
};

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  };
});

// accordion

document.addEventListener('DOMContentLoaded', function() {
  $( function() {
    $(".accordion").accordion({
      heightStyle: "content",
      collapsible: true
    });
  });
});

// tabs

document.querySelectorAll('.artist__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(a){
    const path = a.currentTarget.dataset.path;

    document.querySelectorAll('.artist__btn').forEach(function(btn) {
      btn.classList.remove('tab__btn--active')});
      a.currentTarget.classList.add('tab__btn--active');

    document.querySelectorAll('.catalog__tab').forEach(function(tabsBtn) {
      tabsBtn.classList.remove('tab__content--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tab__content--active');
  });
});

// скролл мобильный

(() => {
	const MOBILE_WIDTH = 961;

	function getWindowWidth () {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.body.clientWidth,
	    document.documentElement.clientWidth
	  );
	};

	function scrollToContent (link, isMobile) {
		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
			return;
		};

	  const href = link.getAttribute('href').substring(1);
	  const scrollTarget = document.getElementById(href);
	  const elementPosition = scrollTarget.getBoundingClientRect().top;

	  window.scrollBy({
	      top: elementPosition,
	      behavior: 'smooth'
	  });
	};

	document.querySelectorAll('.artist__btn').forEach(link => {
	  link.addEventListener('click', function(e) {
	      e.preventDefault();

	      scrollToContent(this, true);
	  });
	});
})();

/*event--Slader*/

new Swiper(".swiper--events", {
  keyboard: {
    enabled: true,
  },

  speed: 800,

  navigation: {
    nextEl: ".swiper-button-next--events",
    prevEl: ".swiper-button-prev--events",
    disabledClass: 'swiper-button-disabled--events',
  },

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: {
      boolean: true,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    578: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    993: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 27,
    },
    1441: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

/*project__tooltip*/

tippy('.btn-tooltip', {
  theme: 'tooltip',
  trigger: 'click',
});

/*project__swiper*/

let swiperProject = new Swiper('.project__swiper', {

  slidesPerView: 3,
  spaceBetween: 50,

  breakpoints: {
      0: {
        slidesPerView: 1,
      },

      578: {
          slidesPerView: 2,
          spaceBetween: 34,
      },
      993: {
          slidesPerView: 2,
          spaceBetween: 50,
      },
      1441: {
          slidesPerView: 3,
          spaceBetween: 50,
      }
  },

  navigation: {
      nextEl: '.swiper-button-next--project',
      prevEl: '.swiper-button-prev--project',
  },
});

/*Mask*/

document.addEventListener("DOMContentLoaded", function() {
  let selector = document.querySelector("input[type='tel']");
  let e = new Inputmask("+7 (999) 999-99-99");

  e.mask(selector);
});

/*validate*/

const validation = new JustValidate(
  '.contacts__form',
  {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#d11616',
    },
  },
);

new JustValidate('#form', {
  rules: {
    text: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const tel = selector.inputmask.unmaskedvalue()
        return Number(tel) && tel.length === 10
      }
    },
  },

  messages: {
    text: {
      remote: 'Подходит',
      required: 'Требуется ввести имя',
      minLength: 'Нужно минимум два символа',
      maxLength: 'Слишком много букв!',

    },
    tel: {
      remote: 'Подходит',
      required: 'Требуется ввести телефон',
      minLength: 'Нужно 10 цифр',
      maxLength: 'Нужно не более 10 цифр',
      function: 'Введите только 10 цифр'
    },
  },
})

// map

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.76033534577601,37.61479241699063],
            zoom: 14,
            controls: ['geolocationControl', 'zoomControl']
        },{
          geolocationControlFloat: 'none',
          geolocationControlPosition: {
            bottom: '310px',
            right: '18px'
          },
          zoomControlSize: 'medium',
          zoomControlPosition: {
            bottom: '370px',
            right: '18px'
          }
        });

        var myPlacemark = new ymaps.Placemark([55.75896732335444,37.614334655064994], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-5, -37]
      });

      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable('scrollZoom');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');

    }