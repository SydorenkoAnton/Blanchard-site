<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <title>Blanchard</title>
  <link rel="icon" href="img/favicon.ico" />
  <link rel="stylesheet" href="css/normalize.css" />
  <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
  <link rel="stylesheet" href="css/choices.min.css" />
  <link rel="stylesheet" href="css/swiper-bundle.min.css" />
  <link rel="stylesheet" href="css/jquery-ui.min.css" />
  <link rel="stylesheet" href="css/tippy.css">
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>
  <header class="header">
    <div class="header-top">
      <div class="header-top__block container flex">
        <button class="header-top__burger-button btn-reset burger-icon" id="burger" aria-label="Войти в меню">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
        <img class="header-top__logo" src="img/logo.svg" alt="логотип Бланчард" />
        <button class="header-top__search-top btn-reset" type="submit" aria-label="Найти">
        <svg class="header-top__search" width="23" height="22" viewBox="0 0 23 22" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect class="header-top__search-hover" width="6.8678" height="1.71695"
            transform="matrix(-0.718931 0.695081 0.718931 0.695081 4.9375 15.6534)" fill="white" />
          <path class="header-top__search-hover" fill-rule="evenodd" clip-rule="evenodd"
            d="M12.0969 18C7.53041 18 3.99692 14.3229 3.99692 10C3.99692 5.67715 7.53041 2 12.0969 2C16.6634 2 20.1969 5.67715 20.1969 10C20.1969 14.3229 16.6634 18 12.0969 18ZM12.0969 20C6.57408 20 2.09692 15.5228 2.09692 10C2.09692 4.47715 6.57408 0 12.0969 0C17.6198 0 22.0969 4.47715 22.0969 10C22.0969 15.5228 17.6198 20 12.0969 20Z"
            fill="white" />
        </svg>
        </button>
        <form class="search">
        <button class="header-top__btn-search-modal btn-reset" aria-label="Найти" tabindex="-1">
          <svg class="header-top__search-modal" width="23" height="22" viewBox="0 0 23 22" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="6.8678" height="1.71695"
              transform="matrix(-0.718931 0.695081 0.718931 0.695081 4.9375 15.6534)" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.0969 18C7.53041 18 3.99692 14.3229 3.99692 10C3.99692 5.67715 7.53041 2 12.0969 2C16.6634 2 20.1969 5.67715 20.1969 10C20.1969 14.3229 16.6634 18 12.0969 18ZM12.0969 20C6.57408 20 2.09692 15.5228 2.09692 10C2.09692 4.47715 6.57408 0 12.0969 0C17.6198 0 22.0969 4.47715 22.0969 10C22.0969 15.5228 17.6198 20 12.0969 20Z"
              fill="white" />
          </svg>
        </button>
        <span>
          <button class="header-top__btn-search-min btn-reset" tabindex="-1">
            <svg class="header-top__search-modal" width="23" height="22" viewBox="0 0 23 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="6.8678" height="1.71695"
                transform="matrix(-0.718931 0.695081 0.718931 0.695081 4.9375 15.6534)" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.0969 18C7.53041 18 3.99692 14.3229 3.99692 10C3.99692 5.67715 7.53041 2 12.0969 2C16.6634 2 20.1969 5.67715 20.1969 10C20.1969 14.3229 16.6634 18 12.0969 18ZM12.0969 20C6.57408 20 2.09692 15.5228 2.09692 10C2.09692 4.47715 6.57408 0 12.0969 0C17.6198 0 22.0969 4.47715 22.0969 10C22.0969 15.5228 17.6198 20 12.0969 20Z"
                fill="white" />
            </svg>
          </button>
          <input class="header-top__form-input form-input" type="text" placeholder="Поиск по сайту" />
        </span>
        <button class="btn-close btn-reset" id="btn-search-close" type="button"></button>
        </form>
        <nav class="header-top__nav">
          <ul class="header-top__list flex list-reset">
            <li class="header-top__item">
              <a class="header-top__link" href="#about-us"> О&nbsp;нас </a>
            </li>
            <li class="header-top__item">
              <a class="header-top__link" href="#gallery"> Галерея </a>
            </li>
            <li class="header-top__item">
              <a class="header-top__link" href="#catalog"> Каталог </a>
            </li>
            <li class="header-top__item">
              <a class="header-top__link" href="#events"> События </a>
            </li>
            <li class="header-top__item">
              <a class="header-top__link" href="#project"> Проекты </a>
            </li>
            <li class="header-top__item">
              <a class="header-top__link" href="#contacts"> Контакты </a>
            </li>
          </ul>
        </nav>
        <a class="header-top__come-link flex" href="#">
          <svg class="header-top__come-img" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.12056 9.09278L6.13889 10.1111L9.75 6.5L6.13889 2.88889L5.12056 3.90722L6.98389 5.77778H0V7.22222H6.98389L5.12056 9.09278ZM11.5556 0H1.44444C0.642778 0 0 0.65 0 1.44444V4.33333H1.44444V1.44444H11.5556V11.5556H1.44444V8.66667H0V11.5556C0 12.35 0.642778 13 1.44444 13H11.5556C12.35 13 13 12.35 13 11.5556V1.44444C13 0.65 12.35 0 11.5556 0Z" fill="white"/>
          </svg>
          <span class="header-top__come-descr">Войти</span>
        </a>
      </div>      
    </div>
    <div class="header-bottom">
      <div class="header-bottom__block container flex">
        <ul class="header-bottom__list list-reset flex">
        <li class="header-bottom__item">
          <button class="header-bottom__btn btn-reset" aria-label="список художников Реализм">
            Реализм
            <svg id="arrow1" class="header-bottom__arrow" width="12" height="7" viewBox="0 0 12 7" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1L6 6L1 1" stroke="white" />
            </svg>
          </button>
          <div class="header-bottom__hidden">
            <div class="header-bottom__hidden-block" data-simplebar>
              <a class="header-bottom__hidden-link header-bottom__real-first" href="#">
                <span class="header-bottom__card-descr">Тинторетто</span></a>
              <a class="header-bottom__hidden-link header-bottom__real-second" href="#">
                <span class="header-bottom__card-descr">Фридрих</span></a>
              <a class="header-bottom__hidden-link header-bottom__real-third" href="#">
                <span class="header-bottom__card-descr">Леонардо</span></a>
              <a class="header-bottom__hidden-link header-bottom__real-forth" href="#">
                <span class="header-bottom__card-descr">Верроккьо</span></a>
            </div>
          </div>
        </li>
        <li class="header-bottom__item">
          <button class="header-bottom__btn btn-reset" aria-label="список художников Импрессионизм">
            Импрессионизм
            <svg id="arrow2" class="header-bottom__arrow" width="12" height="7" viewBox="0 0 12 7" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1L6 6L1 1" stroke="white" />
            </svg>
          </button>
          <div class="header-bottom__hidden">
            <div class="header-bottom__hidden-block" data-simplebar>
              <a class="header-bottom__hidden-link header-bottom__impr-first" href="#">
                <span class="header-bottom__card-descr">Моне</span></a>
              <a class="header-bottom__hidden-link header-bottom__impr-second" href="#">
                <span class="header-bottom__card-descr">Сислей</span></a>
              <a class="header-bottom__hidden-link header-bottom__impr-third" href="#">
                <span class="header-bottom__card-descr">Мане</span></a>
              <a class="header-bottom__hidden-link header-bottom__impr-forth" href="#">
                <span class="header-bottom__card-descr">Ренуар</span></a>
            </div>
          </div>
        </li>
        <li class="header-bottom__item">
          <button class="header-bottom__btn btn-reset" aria-label="список художников Постимпрессионизм">
            Постимпрессионизм
            <svg class="header-bottom__arrow" id="arrow3" width="12" height="7" viewBox="0 0 12 7" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1L6 6L1 1" stroke="white" />
            </svg>
          </button>
          <div class="header-bottom__hidden">
            <div class="header-bottom__hidden-block" data-simplebar>
              <a class="header-bottom__hidden-link header-bottom__post-first" href="#">
                <span class="header-bottom__card-descr">Ван Гог</span></a>
              <a class="header-bottom__hidden-link header-bottom__post-second" href="#">
                <span class="header-bottom__card-descr">Сезанн</span></a>
              <a class="header-bottom__hidden-link header-bottom__post-third" href="#">
                <span class="header-bottom__card-descr">Гоген</span></a>
              <a class="header-bottom__hidden-link header-bottom__post-forth" href="#">
                <span class="header-bottom__card-descr">Сёра</span></a>
            </div>
          </div>
        </li>
        <li class="header-bottom__item">
          <button class="header-bottom__btn btn-reset" aria-label="список художников Авангард">
            Авангард
            <svg class="header-bottom__arrow" id="arrow4" width="12" height="7" viewBox="0 0 12 7" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1L6 6L1 1" stroke="white" />
            </svg>
          </button>
          <div class="header-bottom__hidden">
            <div class="header-bottom__hidden-block" data-simplebar>
              <a class="header-bottom__hidden-link header-bottom__avan-first" href="#">
                <span class="header-bottom__card-descr">Кандинский</span></a>
              <a class="header-bottom__hidden-link header-bottom__avan-second" href="#">
                <span class="header-bottom__card-descr">Маринетти</span></a>
              <a class="header-bottom__hidden-link header-bottom__avan-third" href="#">
                <span class="header-bottom__card-descr">Малевич</span></a>
              <a class="header-bottom__hidden-link header-bottom__avan-forth" href="#">
                <span class="header-bottom__card-descr">Пикассо</span></a>
            </div>
          </div>
        </li>
        <li class="header-bottom__item">
          <button class="header-bottom__btn btn-reset" aria-label="список художников Футуризм">
            Футуризм
            <svg class="header-bottom__arrow" id="arrow5" width="12" height="7" viewBox="0 0 12 7" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1L6 6L1 1" stroke="white" />
            </svg>
          </button>
          <div class="header-bottom__hidden">
            <div class="header-bottom__hidden-block" data-simplebar>
              <a class="header-bottom__hidden-link header-bottom__futu-first" href="#">
                <span class="header-bottom__card-descr">Карра</span></a>
              <a class="header-bottom__hidden-link header-bottom__futu-second" href="#">
                <span class="header-bottom__card-descr">Прателла</span></a>
              <a class="header-bottom__hidden-link header-bottom__futu-third" href="#">
                <span class="header-bottom__card-descr">Северини</span></a>
              <a class="header-bottom__hidden-link header-bottom__futu-forth" href="#">
                <span class="header-bottom__card-descr">Балла</span></a>
              <a class="header-bottom__hidden-link header-bottom__futu-first" href="#">
                <span class="header-bottom__card-descr">Карра</span></a>
              <a class="header-bottom__hidden-link header-bottom__futu-second" href="#">
                <span class="header-bottom__card-descr">Прателла</span></a>
              <a class="header-bottom__hidden-link header-bottom__futu-third" href="#">
                <span class="header-bottom__card-descr">Северини</span></a>
              <a class="header-bottom__hidden-link header-bottom__futu-forth" href="#">
                <span class="header-bottom__card-descr">Балла</span></a>
            </div>
          </div>
        </li>
        </ul>
        <form class="header-bottom__form flex">
        <button class="header-bottom__form-btn btn-reset" type="submit">
          <svg class="header-bottom__searech-img" aria-hidden="true" width="23" height="22" viewbox="0 0 23 22" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="6.8678" height="1.71695"
              transform="matrix(-0.718931 0.695081 0.718931 0.695081 4.9375 15.6534)" fill="white"></rect>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.0969 18C7.53041 18 3.99692 14.3229 3.99692 10C3.99692 5.67715 7.53041 2 12.0969 2C16.6634 2 20.1969 5.67715 20.1969 10C20.1969 14.3229 16.6634 18 12.0969 18ZM12.0969 20C6.57408 20 2.09692 15.5228 2.09692 10C2.09692 4.47715 6.57408 0 12.0969 0C17.6198 0 22.0969 4.47715 22.0969 10C22.0969 15.5228 17.6198 20 12.0969 20Z"
              fill="white"></path>
          </svg>
        </button>
        <input class="header-bottom__form form-input" type="text" placeholder="Поиск по сайту"/>
        </form>
      </div>
    </div>
    <nav class="burger">
      <div class="burger__block flex">
        <ul class="burger__list list-reset flex">
          <li class="burger__item">
            <a class="burger__link link main-bigtext" href="#about-us">О нас</a>
          </li>
          <li class="burger__item">
            <a class="burger__link link main-bigtext" href="#gallery">Галерея</a>
          </li>
          <li class="burger__item">
            <a class="burger__link link main-bigtext" href="#catalog">Каталог</a>
          </li>
          <li class="burger__item">
            <a class="burger__link link main-bigtext" href="#events">События</a>
          </li>
          <li class="burger__item">
            <a class="burger__link link main-bigtext" href="#project">Проекты</a>
          </li>
          <li class="burger__item">
            <a class="burger__link link main-bigtext" href="#contacts">Контакты</a>
          </li>
        </ul>
        <div class="burger__btn">
          <button class="burger__btn-bottom btn-reset">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.12056 9.09278L6.13889 10.1111L9.75 6.5L6.13889 2.88889L5.12056 3.90722L6.98389 5.77778H0V7.22222H6.98389L5.12056 9.09278ZM11.5556 0H1.44444C0.642778 0 0 0.65 0 1.44444V4.33333H1.44444V1.44444H11.5556V11.5556H1.44444V8.66667H0V11.5556C0 12.35 0.642778 13 1.44444 13H11.5556C12.35 13 13 12.35 13 11.5556V1.44444C13 0.65 12.35 0 11.5556 0Z"
                fill="white" />
            </svg>
            Войти
          </button>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <h1 class="visually-hidden">Blanchard-художественная галерея</h1>
    <section class="hero" id="hero">
      <div class="hero__block flex container">
        <h2 class="hero__title">Прикоснитесь к прекрасному</h2>
        <p class="hero__descr">
          Мы&nbsp;вынуждены отталкиваться от&nbsp;того, что реализация
          намеченных плановых заданий создаёт предпосылки для новых
          предложений.
        </p>
        <a class="hero__link" href=""> Подписаться на рассылку </a>
      </div>
      <div class="swiper hero__slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide hero__slide hero__slide--1"></div>
          <div class="swiper-slide hero__slide hero__slide--2"></div>
          <div class="swiper-slide hero__slide hero__slide--3"></div>
        </div>
      </div>
    </section>
    <section class="about-us container" id="about-us">
      <h2 class="about-us__title">О нас</h2>
      <p class="about-us__descr main-text">
          Ясность нашей позиции очевидна: семантический разбор внешних
          противодействий однозначно определяет каждого участника как
          способного принимать собственные решения касаемо распределения
          внутренних резервов и ресурсов. Не следует, однако,
          забывать, что высококачественный прототип будущего проекта влечет
          за&nbsp;собой процесс внедрения и&nbsp;модернизации модели развития.
          Повседневная практика показывает, что высокое качество позиционных
          исследований создаёт необходимость включения в производственный
          план целого ряда внеочередных мероприятий с&nbsp;учётом комплекса
          распределения внутренних резервов и&nbsp;ресурсов. В&nbsp;рамках
          спецификации современных стандартов, действия представителей
          оппозиции набирают популярность среди определенных слоев населения,
          а&nbsp;значит, должны быть разоблачены.
      </p>
    </section>
    <section class="gallery" id="gallery">
      <div class="gallery__block container flex">
        <div class="gallery__left-part">
          <h3 class="gallery__title">Галерея</h3>
          <div class="gallery__left-block flex">
            <div class="gallery__select-block">
              <label class="gallery__selekt-label main-text" for="stale">Фильтр:</label>
              <select class="gallery__select" name="style" id="stale">
                <option class="gallery__option" value="Живопись" selected>
                  Живопись
                </option>
                <option class="gallery__option" value="Рисунок">
                  Рисунок
                </option>
                <option class="gallery__option" value="Скульптура">
                  Скульптура
                </option>
              </select>
            </div>
            <ul class="gallery__checkbox-list flex list-reset">
              <label class="gallery__check-label">
                <input class="gallery__check check" aria-label="фильтр 19 век" type="checkbox" name="девятнадцатый век">
                <span class="gallery__check-text descr" aria-hidden="true">XIX век</span>
              </label>
              <label class="gallery__check-label">
                <input class="gallery__check check" aria-label="фильтр 20 век" type="checkbox" name="двадцатый век" checked>
                <span class="gallery__check-text descr" aria-hidden="true">XX&nbsp;век</span>
              </label>
              <label class="gallery__check-label">
                <input class="gallery__check check" aria-label="фильтр современность" type="checkbox" name="современность">
                <span class="gallery__check-text descr" aria-hidden="true">Современность</span>
              </label>
            </ul>
          </div>
        </div>
        <div class="gallery__right-part flex">
          <div class="gallery__navigation flex">
            <button class="nav-btn gallery__prev" aria-label="К предыдущему слайду"></button>
            <div class="gallery__pagination main-text"></div>
            <button class="nav-btn gallery__next" aria-label="К следующему слайду"></button>
          </div>
          <div class="swiper-container slides-container">
            <div class="swiper-wrapper">
              <a class="swiper-slide gallery__slide" href="#popup">
                <picture>
                  <source srcset="
                    img/Torso-320.jpg
                    "media="(max-width: 650px)" />
                  <source srcset="
                    img/Torso-768.jpg
                    "media="(max-width: 950px)" />
                  <source srcset="
                    img/Torso-1024.jpg
                    "media="(max-width: 1400px)" />
                  <img class="gallery__image" src="img/Torso.jpg" alt="нарисована женщина картина Малевича Торс (Фигура с розовым лицом)" />
                </picture>
              </a>
              <a class="swiper-slide gallery__slide" href="#popup__2">
                <picture>
                  <source srcset="
                    img/woman-320.jpg
                    "media="(max-width: 650px)" />
                  <source srcset="
                    img/woman-768.png
                    "media="(max-width: 950px)" />
                  <source srcset="
                    img/woman-1024.jpg
                    "media="(max-width: 1400px)" />
                  <img class="gallery__image" src="img/woman.jpg" alt="женщина с граблями картина Малевича" />
                </picture>
              </a>
              <a class="swiper-slide gallery__slide" href="popup__3">
                <picture>
                  <source srcset="
                    img/pasta-320.jpg
                    "media="(max-width: 650px)" />
                  <source srcset="
                    img/pasta-768.jpg
                    "media="(max-width: 950px)" />
                  <source srcset="
                    img/pasta-1024.jpg
                    "media="(max-width: 1400px)" />
                  <img class="gallery__image" src="img/pasta.jpg" alt="картина Малевича уборка макарон" />
                </picture>
              </a>
              <a class="swiper-slide gallery__slide" data-path="modul4" href="#">
                <picture>
                  <source srcset="
                    img/supermathiks-320.jpg
                    "media="(max-width: 650px)" />
                  <source srcset="
                    img/supermathiks-768.jpg
                    "media="(max-width: 950px)" />
                  <source srcset="
                    img/supermathiks-1024.jpg
                    "media="(max-width: 1400px)" />
                  <img class="gallery__image" src="img/supermathiks.jpg" alt="картина Малевича суперматика" />
                </picture>
              </a>
              <a class="swiper-slide gallery__slide" data-path="modul5" href="#">
                <picture>
                  <source srcset="
                    img/bucket-320.jpg
                    "media="(max-width: 650px)" />
                  <source srcset="
                    img/bucket-768.jpg
                    "media="(max-width: 950px)" />
                  <source srcset="
                    img/bucket-1024.jpg
                    "media="(max-width: 1400px)" />
                  <img class="gallery__image" src="img/bucket.jpg" alt="картина Малевича крестьянки с ведрами" />
                </picture>
              </a>
              <a class="swiper-slide gallery__slide" data-path="modul6" href="#">
                <picture class="gallery__slade-6">
                  <source srcset="
                    img/super-1024.jpg
                    "media="(max-width: 650px)" />
                  <source srcset="
                    img/super-768.jpg
                    "media="(max-width: 950px)" />
                  <source srcset="
                    img/super-1024.jpg
                    "media="(max-width: 1400px)" />
                  <img class="gallery__image" src="img/super.jpg" alt="картина Малевича суперматизм 38" />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="popup" id="popup">
        <div class="popup__body">
          <div class="popup__content flex">
            <div class="popup__left-block">
              <img class="popup__img" src="img/Torso-1024.jpg" alt="Торс (Фигура с розовым лицом)">
            </div>
            <div class="popup__right-block">
              <button class="popup__close-btn btn-reset">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666641 15.3044L15.3333 0.000153846L16 0.695801L1.33331 16L0.666641 15.3044Z" fill="black"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666695 -0.000125032L15.3334 15.3041L14.6667 15.9998L2.70967e-05 0.695522L0.666695 -0.000125032Z" fill="black"></path>
                </svg>
              </button>
              <div class="popup__text flex">
                <h3 class="popup__title main-bigtext">Казимир Малевич</h3>
                <h4 class="popup__subtitle">"Торс (Фигура с розовым лицом)"</h4>
                <span class="popup__date">1929</span>
                <p class="popup__descr main-text">Эти странные безликие «полуобразы» (так называл подобные работы сам художник), зашифрованные в женских фигурах и торсах, существуют по мысли К.Малевича, в параллельном мире, в пределах вымышленного художником Космоса, в пространстве без времени.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="popup" id="popup__2">
        <div class="popup__body">
          <div class="popup__content flex">
            <div class="popup__left-block">
              <img class="popup__img" src="img/woman-1024.jpg" alt="Женщина с граблями">
            </div>
            <div class="popup__right-block">
              <button class="popup__close-btn btn-reset">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666641 15.3044L15.3333 0.000153846L16 0.695801L1.33331 16L0.666641 15.3044Z" fill="black"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666695 -0.000125032L15.3334 15.3041L14.6667 15.9998L2.70967e-05 0.695522L0.666695 -0.000125032Z" fill="black"></path>
                </svg>
              </button>
              <div class="popup__text flex">
                <h3 class="popup__title main-bigtext">Казимир Малевич</h3>
                <h4 class="popup__subtitle">"Женщина с граблями"</h4>
                <span class="popup__date">1931-1932</span>
                <p class="popup__descr main-text">Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник
                  принялся
                  за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской
                  выставок в 1927 году.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="popup" id="popup__3">
        <div class="popup__body">
          <div class="popup__content flex">
            <div class="popup__left-block">
              <img class="popup__img" src="img/pasta-1024.jpg" alt="Уборка макарон">
            </div>
            <div class="popup__right-block">
              <button class="popup__close-btn btn-reset">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666641 15.3044L15.3333 0.000153846L16 0.695801L1.33331 16L0.666641 15.3044Z" fill="black"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666695 -0.000125032L15.3334 15.3041L14.6667 15.9998L2.70967e-05 0.695522L0.666695 -0.000125032Z" fill="black"></path>
                </svg>
              </button>
              <div class="popup__text flex">
                <h3 class="popup__title main-bigtext">Казимир Малевич</h3>
                <h4 class="popup__subtitle">"Уборка ржи"</h4>
                <span class="popup__date">1911</span>
                <p class="popup__descr main-text">"Уборка ржи" одна из первых картин, явившая признаки кубофутуристической живописи. Стога сена в виде цилиндров и четкие формы человеческих фигур составляют довольно сильную и устойчивую композицию.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="catalog" id="catalog">
      <div class="catalog__container container ">
        <h2 class="catalog__title">Каталог</h2>
        <p class="catalog__descr">Акционеры крупнейших компаний, которые представляют собой яркий пример
          континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы
          этики и&nbsp;морали. Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство,
          нанотехнологии и&nbsp;по&nbsp;сей день остаются уделом либералов, которые жаждут быть функционально разнесены
          на&nbsp;независимые элементы.</p>
        <div class="catalog__content flex">
          <div class="catalog__tabs-wrapper tab" id="catalog-tabs">
            <div class="catalog__tab tab__content tab__content--active" data-target="domeniko-girlandaio">
              <div class="tab__image">
                <img src="img/Girlandajo.jpg" alt="Доменико Гирландайо">
              </div>
              <div class="tab__content">
                <h3 class="tab__title subtitle">Доменико Гирландайо</h3>
                <span class="tab__date">2&nbsp;июня 1448&nbsp;&mdash; 11&nbsp;января 1494.</span>
                <p class="tab__descr">Один из&nbsp;ведущих флорентийских художников Кватроченто, основатель
                  художественной династии, которую продолжили его брат Давид и&nbsp;сын Ридольфо. Глава художественной
                  мастерской, где юный Микеланджело в&nbsp;течение года овладевал профессиональными навыками. Автор
                  фресковых циклов, в&nbsp;которых выпукло, со&nbsp;всевозможными подробностями показана домашняя жизнь
                  библейских персонажей (в их роли выступают знатные граждане Флоренции в&nbsp;костюмах того
                  времени).</p>
              </div>
            </div>
            <div class="tab__plug catalog__tab plug" data-target="plug">
              <div class="tab__image">
                <img src="img/catalog-emply.png" alt="заглушка">
              </div>
              <div class="tab__content">
                <h3 class="tab__title subtitle">Что мы&nbsp;о&nbsp;нём знаем?</h3>
                <p class="tab__descr plug__descr">Пока ничего... Зато мы&nbsp;точно знаем, что в&nbsp;галерее есть&nbsp;на&nbsp;что посмотреть!</p>
                <a class="tab__link plug-link more-link" href="#gallery">
                  <span class="more-link__inner">В&nbsp;галерею</span>
                </a>
              </div>
            </div>
          </div>
          <div class="catalog__period-wrapper period">
            <ul class="period__list accordion list-reset">
              <li class="period__item">
                <button class="period__btn btn-reset accordion__control">
                  <span class="period__btn-inner">
                    <span class="period__title">C&nbsp;1400 по&nbsp;1499&nbsp;гг.</span>
                  </span>
                  <svg class="accordion__icon" width="50" height="50" viewbox="0 0 50 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="accordion__icon-circle"
                      d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z"
                      fill="#ECECEC" stroke="#ECECEC" stroke-width="2"></path>
                    <path class="arrow" d="M16.6667 27.3334L25 19.0001L33.3333 27.3334" stroke="#000"></path>
                  </svg>
                </button>
                <ul class="period__artist-list artist list-reset tab">
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Бенедетто ди Биндо</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Бергоньоне, Амброджо</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Биссоло, Франческо</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Больтраффио, Джованни</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Бонсиньори, Франческо</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Боттичини, Рафаэлло</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Брамантино</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Бреа, Людовико</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Бьяджо д’Антонио Туччи</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Веккьетта</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Андреа Верроккьо</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset tab__btn tab__btn--active" href="#catalog-tabs"
                      data-path="domeniko-girlandaio">
                      <span class="artist__btn-inner">Доменико Гирландайо</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Беноццо Гоццоли</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Граначчи, Франческо</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Грегорио ди Чекко</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Джованни да Удине</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Джованни ди Паоло</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Джорджоне</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Парентино, Бернардо</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Пезеллино</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Пьетро Перуджино</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Перуцци, Бальдассаре</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Пизанелло</span>
                    </a>
                  </li>
                  <li class="artist__item">
                    <a class="artist__btn btn-reset" href="#catalog-tabs" data-path="plug">
                      <span class="artist__btn-inner">Пинтуриккьо</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="period__item">
                <button class="period__btn flex btn-reset accordion__control">
                  <span class="period__btn-inner">
                    <span class="period__title">C&nbsp;1500 по&nbsp;1599&nbsp;гг.</span>
                  </span>
                  <svg class="accordion__icon" width="50" height="50" viewbox="0 0 50 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="accordion__icon-circle"
                      d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z"
                      fill="#ECECEC" stroke="#ECECEC" stroke-width="2"></path>
                    <path class="arrow" d="M16.6667 27.3334L25 19.0001L33.3333 27.3334" stroke="#000"></path>
                  </svg>
                </button>
                <div class="period__plug flex">
                  <div class="period__plug-image"></div>
                  <div class="period__plug-content flex">
                    <h3 class="period__plug-title">Здесь пока пусто</h3>
                    <p class="period__plug-descr">А&nbsp;в&nbsp;галерее вы&nbsp;всегда можете найти что-то интересное
                      для себя</p>
                    <a class="period__plug-link plug-link more-link" href="#gallery">
                      <span class="more-link__inner">В&nbsp;галерею</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="period__item">
                <button class="period__btn flex btn-reset accordion__control">
                  <span class="period__btn-inner">
                    <span class="period__title">C&nbsp;1600 по&nbsp;1699&nbsp;гг.</span>
                  </span>
                  <svg class="accordion__icon" width="50" height="50" viewbox="0 0 50 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="accordion__icon-circle"
                      d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z"
                      fill="#ECECEC" stroke="#ECECEC" stroke-width="2"></path>
                    <path class="arrow" d="M16.6667 27.3334L25 19.0001L33.3333 27.3334" stroke="#000"></path>
                  </svg>
                </button>
                <div class="period__plug flex">
                  <div class="period__plug-image"></div>
                  <div class="period__plug-content flex">
                    <h3 class="period__plug-title">Здесь пока пусто</h3>
                    <p class="period__plug-descr">А&nbsp;в&nbsp;галерее вы&nbsp;всегда можете найти что-то интересное
                      для себя</p>
                    <a class="period__plug-link plug-link more-link" href="#gallery">
                      <span class="more-link__inner">В&nbsp;галерею</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="period__item">
                <button class="period__btn flex btn-reset accordion__control">
                  <span class="period__btn-inner">
                    <span class="period__title">C&nbsp;1700 по&nbsp;1799&nbsp;гг.</span>
                  </span>
                  <svg class="accordion__icon" width="50" height="50" viewbox="0 0 50 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="accordion__icon-circle"
                      d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z"
                      fill="#ECECEC" stroke="#ECECEC" stroke-width="2"></path>
                    <path class="arrow" d="M16.6667 27.3334L25 19.0001L33.3333 27.3334" stroke="#000"></path>
                  </svg>
                </button>
                <div class="period__plug flex">
                  <div class="period__plug-image"></div>
                  <div class="period__plug-content flex">
                    <h3 class="period__plug-title">Здесь пока пусто</h3>
                    <p class="period__plug-descr">А&nbsp;в&nbsp;галерее вы&nbsp;всегда можете найти что-то интересное
                      для себя</p>
                    <a class="period__plug-link plug-link more-link" href="#gallery">
                      <span class="more-link__inner">В&nbsp;галерею</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="period__item">
                <button class="period__btn flex btn-reset accordion__control">
                  <span class="period__btn-inner">
                    <span class="period__title">C&nbsp;1800 по&nbsp;1899&nbsp;гг.</span>
                  </span>
                  <svg class="accordion__icon" width="50" height="50" viewbox="0 0 50 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="accordion__icon-circle"
                      d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z"
                      fill="#ECECEC" stroke="#ECECEC" stroke-width="2"></path>
                    <path class="arrow" d="M16.6667 27.3334L25 19.0001L33.3333 27.3334" stroke="#000"></path>
                  </svg>
                </button>
                <div class="period__plug flex">
                  <div class="period__plug-image"></div>
                  <div class="period__plug-content flex">
                    <h3 class="period__plug-title">Здесь пока пусто</h3>
                    <p class="period__plug-descr">А&nbsp;в&nbsp;галерее вы&nbsp;всегда можете найти что-то интересное
                      для себя</p>
                    <a class="period__plug-link plug-link more-link" href="#gallery">
                      <span class="more-link__inner">В&nbsp;галерею</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="period__item">
                <button class="period__btn flex btn-reset accordion__control">
                  <span class="period__btn-inner">
                    <span class="period__title">C&nbsp;1900 по&nbsp;1999&nbsp;гг.</span>
                  </span>
                  <svg class="accordion__icon" width="50" height="50" viewbox="0 0 50 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="accordion__icon-circle"
                      d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z"
                      fill="#ECECEC" stroke="#ECECEC" stroke-width="2"></path>
                    <path class="arrow" d="M16.6667 27.3334L25 19.0001L33.3333 27.3334" stroke="#000"></path>
                  </svg>
                </button>
                <div class="period__plug flex">
                  <div class="period__plug-image"></div>
                  <div class="period__plug-content flex">
                    <h3 class="period__plug-title">Здесь пока пусто</h3>
                    <p class="period__plug-descr">А&nbsp;в&nbsp;галерее вы&nbsp;всегда можете найти что-то интересное
                      для себя</p>
                    <a class="period__plug-link plug-link more-link" href="#gallery">
                      <span class="more-link__inner">В&nbsp;галерею</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="period__item">
                <button class="period__btn flex btn-reset accordion__control">
                  <span class="period__btn-inner">
                    <span class="period__title">C&nbsp;2000&nbsp;г.</span>
                  </span>
                  <svg class="accordion__icon" width="50" height="50" viewbox="0 0 50 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="accordion__icon-circle"
                      d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z"
                      fill="#ECECEC" stroke="#ECECEC" stroke-width="2"></path>
                    <path class="arrow" d="M16.6667 27.3334L25 19.0001L33.3333 27.3334" stroke="#000"></path>
                  </svg>
                </button>
                <div class="period__plug flex">
                  <div class="period__plug-image"></div>
                  <div class="period__plug-content flex">
                    <h3 class="period__plug-title">Здесь пока пусто</h3>
                    <p class="period__plug-descr">А&nbsp;в&nbsp;галерее вы&nbsp;всегда можете найти что-то интересное
                      для себя</p>
                    <a class="period__plug-link plug-link more-link" href="#gallery">
                      <span class="more-link__inner">В&nbsp;галерею</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="events" id="events">
      <div class="events__container container">
        <h2 class="events__title">События</h2>
        <div class="events__slider">
          <button class="swiper-button-next swiper-button-next--events" aria-label="К следущему слайду"></button>
          <button class="swiper-button-prev swiper-button-prev--events" aria-label="К предыдущему слайду"></button>
          <div class="swiper swiper--events">
            <div class="events__list swiper-wrapper">
              <div class="events-card swiper-slide">
                <div class="events-card__top">
                  <picture>
                    <source srcset="img/engraving-320.jpg" media="(max-width: 650px)" />
                    <source srcset="img/engraving-768.jpg" media="(max-width: 950px)" />
                    <source srcset="img/engraving-1024.jpg" media="(max-width: 1400px)" />
                    <img class="events-card__img" src="img/engraving.png" alt="Книжная гравюра"/>
                  </picture>
                  <div class="events-card__figcaption">
                    <p class="events-card__figcaption-text">Музей им. Щусева</p>
                    <p class="events-card__figcaption-text">
                      с 20 марта по 30 апреля</p>
                    </div>
                </div>
                <div class="events-card__bottom">
                  <h3 class="events-card__title main-bigtext">
                    Книжная гравюра в живом восприятии
                  </h3>
                  <p class="events-card__text main-text">
                    Один из ведущих флорентийских художников Кватроченто,
                    основатель художественной династии, которую продолжили его
                    брат Давид и сын Ридольфо.
                  </p>
                  <a class="events-card__link main-text" href="#">Подробнее</a>
                </div>
              </div>
              <div class="events-card swiper-slide">
                <div class="events-card__top">
                  <picture>
                    <source srcset="img/meeting-320.jpg" media="(max-width: 650px)" />
                    <source srcset="img/meeting-768.jpg" media="(max-width: 950px)" />
                    <source srcset="img/meeting-1024.jpg" media="(max-width: 1400px)" />
                    <img class="events-card__img" src="img/meeting.png"  alt="дискуссия"/>
                  </picture>
                  <div class="events-card__figcaption">
                    <p class="events-card__figcaption-text">ММОМА</p>
                    <p class="events-card__figcaption-text">
                      24 марта 19:00</p>
                  </div>
                </div>
                <div class="events-card__bottom">
                  <h3 class="events-card__title main-bigtext">
                    «Открытая дискуссия». Дмитрий Петров и&nbsp;Сергей Ильин.
                  </h3>
                  <p class="events-card__text main-text">
                    Высокий уровень вовлечения представителей целевой
                    аудитории является четким доказательством простого факта.
                  </p>
                  <a class="events-card__link main-text" href="#">Подробнее</a>
                </div>
              </div>
              <div class="events-card swiper-slide">
                <div class="events-card__top">
                  <picture>
                    <source srcset="img/gallery-320.jpg" media="(max-width: 650px)" />
                    <source srcset="img/gallery-768.jpg" media="(max-width: 950px)" />
                    <source srcset="img/gallery-1024.jpg" media="(max-width: 1400px)" />
                    <img class="events-card__img" src="img/gallery.png" alt="музей"/>
                  </picture>
                  <div class="events-card__figcaption">
                    <p class="events-card__figcaption-text">Еврейский музей</p>
                    <p class="events-card__figcaption-text">
                      с 31 марта по 21 апреля</p>
                  </div>
                </div>
                <div class="events-card__bottom">
                  <h3 class="events-card__title main-bigtext">
                    Выставка «Формация 2020»
                  </h3>
                  <p class="events-card__text main-text">
                    Идейные соображения высшего порядка, а также современная
                    методология разработки играет важную роль в формировании
                    глубокомысленных рассуждений.
                  </p>
                  <a class="events-card__link main-text" href="#">Подробнее</a>
                </div>
              </div>
              <div class="events-card swiper-slide">
                <div class="events-card__top">
                  <picture>
                    <source srcset="img/foil-320.jpg" media="(max-width: 650px)" />
                    <source srcset="img/foil-768.jpg" media="(max-width: 950px)" />
                    <source srcset="img/foil-1024.jpg" media="(max-width: 1400px)" />
                    <img class="events-card__img" src="img/foil.png" alt="Третьяковка"/>
                  </picture>
                  <div class="events-card__figcaption">
                    <p class="events-card__figcaption-text">Третьяковка на Крымском валу</p>
                    <p class="events-card__figcaption-text">с 30 марта по 30 апреля</p>
                  </div>
                </div>
                <div class="events-card__bottom  events-card__bottom-1024">
                  <h3 class="events-card__title main-bigtext">
                    XXIV Международная биеннале молодого искусства
                  </h3>
                  <p class="events-card__text main-text">
                    Внезапно, реплицированные с зарубежных источников,
                    современные исследования.
                  </p>
                  <a class="events-card__link main-text" href="#">Подробнее</a>
                </div>
              </div>
              <div class="events-card swiper-slide">
                <div class="events-card__top">
                  <picture>
                    <source srcset="img/metaphor-320.jpg" media="(max-width: 650px)" />
                    <source srcset="img/metaphor-768.jpg" media="(max-width: 950px)" />
                    <source srcset="img/metaphor-1024.jpg" media="(max-width: 1400px)" />
                    <img class="events-card__img" src="img/metaphor.png"  alt="серия «Метафора серебра»"/>
                  </picture>
                  <div class="events-card__figcaption">
                    <p class="events-card__figcaption-text">ММАМ</p>
                    <p class="events-card__figcaption-text">с 8 апреля по 20 мая</p>
                  </div>
                </div>
                <div class="events-card__bottom events-card__bottom-1024">
                  <h3 class="events-card__title main-bigtext">
                    Джон Винзор. Фотографии из серии «Метафора серебра»
                  </h3>
                  <p class="events-card__text main-text">
                    Один из ведущих флорентийских художников Кватроченто,
                    основатель художественной династии, которую продолжили его
                    брат Давид и сын Ридольфо.
                  </p>
                  <a class="events-card__link main-text" href="#">Подробнее</a>
                </div>
              </div>
            </div>
          </div>
          <div class="events__pagination">
            <div class="swiper-pagination events__swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="project" id="project">
      <div class="project__container container">
        <h2 class="project__title">Проекты</h2>
        <p class="project__descr main-text">
          Предварительные выводы: постоянное информационно-пропагандистское
          обеспечение нашей деятельности однозначно фиксирует необходимость
          своевременного выполнения сверхзадачи. А&nbsp;ещё независимые
          государства смешаны с не уникальными данными
          до&nbsp;степени совершенной неузнаваемости, из-за чего возрастает
          их&nbsp;статус бесполезности. Прежде всего, постоянное
          информационно-пропагандистское
          <button class="project__btn btn-tooltip btn-reset"
            data-tippy-content="Пример современных тенденций — современная методология разработки">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="tooltip-ellipse"
                d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
                stroke="#9D5CD0" />
              <path class="tooltip-i"
                d="M7.26154 6.4551H8.73846V13H7.26154V6.4551ZM8 4.90259C7.71282 4.90259 7.4718 4.81126 7.27692 4.62861C7.09231 4.44597 7 4.22273 7 3.9589C7 3.69508 7.09231 3.47184 7.27692 3.28919C7.4718 3.0964 7.71282 3 8 3C8.28718 3 8.52308 3.09132 8.70769 3.27397C8.90256 3.44647 9 3.66464 9 3.92846C9 4.20243 8.90256 4.43582 8.70769 4.62861C8.52308 4.81126 8.28718 4.90259 8 4.90259Z"
                fill="black" />
            </svg>
          </button>
          обеспечение нашей деятельности
          однозначно фиксирует необходимость экономической целесообразности
          принимаемых решений. И&nbsp;нет сомнений, что действия
          представителей оппозиции могут быть рассмотрены
          <button class="project__btn btn-tooltip btn-reset"
            data-tippy-content="Приятно, граждане, наблюдать, как&nbsp;сделанные на базе аналитики выводы вызывают у вас эмоции ">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="tooltip-ellipse"
                d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
                stroke="#9D5CD0" />
              <path class=" "
                d="M7.26154 6.4551H8.73846V13H7.26154V6.4551ZM8 4.90259C7.71282 4.90259 7.4718 4.81126 7.27692 4.62861C7.09231 4.44597 7 4.22273 7 3.9589C7 3.69508 7.09231 3.47184 7.27692 3.28919C7.4718 3.0964 7.71282 3 8 3C8.28718 3 8.52308 3.09132 8.70769 3.27397C8.90256 3.44647 9 3.66464 9 3.92846C9 4.20243 8.90256 4.43582 8.70769 4.62861C8.52308 4.81126 8.28718 4.90259 8 4.90259Z"
                fill="black" />
            </svg>
          </button>
          исключительно
          в&nbsp;разрезе маркетинговых и&nbsp;финансовых
          <button class="project__btn btn-tooltip btn-reset" data-tippy-content="В стремлении повысить качество">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="tooltip-ellipse"
                d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
                stroke="#9D5CD0" />
              <path class="tooltip-i"
                d="M7.26154 6.4551H8.73846V13H7.26154V6.4551ZM8 4.90259C7.71282 4.90259 7.4718 4.81126 7.27692 4.62861C7.09231 4.44597 7 4.22273 7 3.9589C7 3.69508 7.09231 3.47184 7.27692 3.28919C7.4718 3.0964 7.71282 3 8 3C8.28718 3 8.52308 3.09132 8.70769 3.27397C8.90256 3.44647 9 3.66464 9 3.92846C9 4.20243 8.90256 4.43582 8.70769 4.62861C8.52308 4.81126 8.28718 4.90259 8 4.90259Z"
                fill="black" />
            </svg>
          </button>
          предпосылок. Банальные, но неопровержимые выводы, а&nbsp;также представители
          современных социальных резервов призывают нас к&nbsp;новым
          свершениям, которые, в&nbsp;свою очередь, должны быть смешаны
          с&nbsp;не&nbsp;уникальными данными до&nbsp;степени совершенной
          неузнаваемости. Подробнее:
          <a class="project__link" href="#"> blanchard-art.ru<span
              class="project__descr__link-det">/projects</span><span class="project__descr__link-detmin">/about</span>
          </a>
        </p>
        <h3 class="project__subtitle main-bigtext">
          Партнёры проектов:
        </h3>
        <div class="project__slider">
          <div class="swiper-button-prev swiper-button-prev--project"></div>
          <div class="swiper project__swiper">
            <div class="swiper-wrapper">
              <a class="swiper-slide project__item" href="#">
                <img class="project__img" src="img/project2.png" alt="Логотип freelands foudation">
              </a>
              <a class="swiper-slide project__item" href="#">
                <img class="project__img" src="img/project3.png" alt="Логотип institute for contemporary art">
              </a>
              <a class="swiper-slide project__item" href="#">
                <img class="project__img" src="img/project1.png" alt="Логотип workhouse arts center">
              </a>
              <a class="swiper-slide project__item" href="#">
                <img class="project__img" src="img/project4.png" alt="Логотип 1849 wine co">
              </a>
              <a class="swiper-slide project__item" href="#">
                <img class="project__img" src="img/project5.png" alt="Логотип hiscox">
              </a>
              <a class="swiper-slide project__item" href="#">
                <img class="project__img" src="img/project6.png" alt="Логотип camden arts centre">
              </a>
              <a class="swiper-slide project__item" href="#">
                <img class="project__img" src="img/project7.png" alt="Логотип stassen premium belgian cider">
              </a>
              <a class="swiper-slide project__item" href="#">
                <img class="project__img" src="img/project8.png" alt="Логотип watts gallery artists village">
              </a>
              <a class="swiper-slide project__item" href="#">
                <img class="project__img" src="img/project9.png" alt="Логотип ESAD">
              </a>
            </div>
          </div>
          <div class="swiper-button-next swiper-button-next--project"></div>
        </div>
      </div>
    </section>
    <section class="contacts" id="contacts">
      <div class="contacts__container container">
        <div class="contacts__top-block flex">
          <div class="contacts__adress">
            <h3 class="contacts__title main-bigtext">
              Шоурум &#8470;4
            </h3>
            <p class="contacts__adress-descr main-text">
              Леонтьевский переулок, дом 5/1
            </p>
          </div>
          <form class="contacts__form flex" id="form" action="#">
            <div class="contacts__form-inputs flex">
              <div class="contacts__form-card">
                <input class="contacts__input main-text" id="text" type="text" name="text" placeholder="Имя*"
                  data-validate-field="name">
              </div>
              <div class="contacts__form-card">
                <input class="contacts__input main-text" id="tel" type="tel" name="tel" placeholder="Телефон*"
                  data-validate-field="tel">
              </div>
            </div>
            <div class="contacts__form-card contacts__form-btn">
              <button class="contacts__btn">Заказать<span class="contacts__btn-desable"> обратный звонок</span></button>
            </div>
          </form>
          <div class="contacts__messendjer">
            <h3 class="contacts__messendjer-descr main-bigtext">
              Связаться в&nbsp;один клик
            </h3>
            <div class="contacts__list flex">
              <a class="contacts__item" href="https://www.whatsapp.com/" aria-label="связаться с нами в вацап">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 39.375C30.7005 39.375 39.375 30.7005 39.375 20C39.375 9.29948 30.7005 0.625 20 0.625C9.29948 0.625 0.625 9.29948 0.625 20C0.625 30.7005 9.29948 39.375 20 39.375Z"
                    fill="#30BF39" />
                  <path
                    d="M25.8749 21.751C25.6249 21.626 24.3124 20.876 24.0624 20.8135C23.8124 20.6885 23.6249 20.6885 23.4374 20.9385C23.2499 21.1885 22.6874 21.8135 22.5624 21.9385C22.3749 22.126 22.2499 22.126 21.9999 22.001C21.7499 21.876 20.8749 21.5635 19.8749 20.5635C19.1249 19.8135 18.5624 18.9385 18.4374 18.626C18.3124 18.376 18.4374 18.1885 18.5624 18.0635C18.6874 17.9385 18.8124 17.751 18.9999 17.626C19.1874 17.501 19.1874 17.376 19.3124 17.1885C19.4374 17.001 19.3749 16.876 19.3124 16.6885C19.2499 16.501 18.7499 15.1885 18.5624 14.626C18.3749 14.0635 18.1249 14.1885 17.9999 14.126C17.8124 14.126 17.6874 14.0635 17.4999 14.0635C17.2499 14.0635 16.9374 14.1885 16.7499 14.376C16.4999 14.626 15.7499 15.251 15.7499 16.5635C15.7499 17.876 16.6249 19.251 16.7499 19.376C16.8749 19.5635 18.4999 22.4385 21.1874 23.626C23.8749 24.8135 23.8749 24.4385 24.3749 24.4385C24.8749 24.4385 25.9999 23.8135 26.2499 23.251C26.4999 22.626 26.4999 22.0635 26.4374 22.001C26.3124 22.001 26.1249 21.9385 25.8749 21.751ZM20.8749 28.1885C19.1249 28.1885 17.4999 27.6885 16.0624 26.751L12.6874 27.8135L13.8124 24.5635C12.7499 23.0635 12.1249 21.251 12.1249 19.376C12.1249 14.501 16.0624 10.5635 20.9374 10.5635C25.8124 10.5635 29.6874 14.501 29.6874 19.376C29.6874 24.251 25.7499 28.1885 20.8749 28.1885ZM20.8749 8.81348C15.0624 8.81348 10.3124 13.5635 10.3124 19.376C10.3124 21.3135 10.8124 23.1885 11.8124 24.8135L9.87489 30.501L15.7499 28.626C17.3124 29.501 19.0624 29.9385 20.8749 29.9385C26.6874 29.9385 31.4374 25.1885 31.4374 19.376C31.4374 13.5635 26.7499 8.81348 20.8749 8.81348Z"
                    fill="white" />
                </svg>
              </a>
              <a class="contacts__item" href="https://web.telegram.org/" aria-label="связаться с нами в телеграм">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
                    fill="url(#paint0_linear_136320_63)" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.05312 19.7889L20.7167 14.7649C26.271 12.4547 27.425 12.0534 28.1773 12.0402C28.3428 12.0373 28.7127 12.0783 28.9523 12.2727C29.1547 12.4369 29.2103 12.6587 29.237 12.8143C29.2636 12.9699 29.2968 13.3246 29.2704 13.6017C28.9694 16.7641 27.667 24.4386 27.0045 27.9806C26.7241 29.4794 26.1725 29.9819 25.6377 30.0311C24.4762 30.138 23.5943 29.2635 22.4694 28.5261L18.006 25.528C16.0314 24.2268 17.3114 23.5116 18.4368 22.3428C18.7313 22.0368 23.8486 17.3823 23.9476 16.96C23.9596 16.9072 23.9715 16.7104 23.8546 16.6064C23.7376 16.5024 23.565 16.5384 23.4404 16.5663C23.2639 16.6064 20.4519 18.465 15.0044 22.1423C14.2062 22.6904 13.4832 22.9575 12.8354 22.9435C12.1213 22.9281 10.7477 22.5397 9.72652 22.2078C8.474 21.8007 7.47852 21.5854 7.56524 20.8939C7.61036 20.5338 8.10632 20.1655 9.05308 19.789L9.05312 19.7889Z"
                    fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear_136320_63" x1="20" y1="0" x2="20" y2="39.7033"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="1" stop-color="#2AABEE"></stop>
                      <stop offset="1" stop-color="#229ED9"></stop>
                    </lineargradient>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section class="map">
        <h2 class="map__title visually-hidden">Карта</h2>
        <div class="map__wrapper" id="map"></div>
      </section>
    </section>
  </main>
  <footer>
    <div class="footer">
      <div class="footer__block container flex">
        <img class="footer__logo" src="img/logo.svg" alt="logotip">
        <ul class="footer__list list-reset flex">
          <li class="footer__item">
            <a class="footer__messenger" href="#" aria-label="мы в вк">
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.5 0C10.074 0 0 10.0736 0 22.5C0 34.9264 10.074 45 22.5 45C34.926 45 45 34.9264 45 22.5C45 10.0736 34.926 0 22.5 0ZM33.9132 24.9335C34.9619 25.9577 36.0714 26.9217 37.0128 28.0519C37.4299 28.5519 37.823 29.0688 38.1222 29.6503C38.5495 30.4794 38.1637 31.3886 37.4216 31.4379L32.812 31.4369C31.6215 31.5354 30.6741 31.0553 29.8754 30.2414C29.2378 29.5927 28.6462 28.8999 28.0321 28.2292C27.7812 27.9539 27.517 27.6947 27.2021 27.4907C26.5737 27.0819 26.0277 27.2072 25.6677 27.8636C25.3008 28.5316 25.217 29.2719 25.182 30.0153C25.1319 31.1022 24.8041 31.3863 23.7135 31.4374C21.3832 31.5465 19.1721 31.1929 17.117 30.0181C15.3041 28.9818 13.901 27.5193 12.6783 25.8634C10.2973 22.6353 8.47381 19.0924 6.8354 15.4478C6.46665 14.627 6.73642 14.1878 7.64194 14.1707C9.14639 14.1417 10.6508 14.1454 12.1553 14.1694C12.7676 14.179 13.1727 14.5294 13.4079 15.1071C14.2209 17.1074 15.2176 19.0105 16.4665 20.7755C16.7994 21.2455 17.1391 21.7142 17.623 22.0461C18.157 22.4125 18.5639 22.2915 18.8158 21.6953C18.9769 21.3164 19.0464 20.9113 19.0814 20.5053C19.2011 19.1145 19.2153 17.7242 19.0082 16.339C18.8793 15.4722 18.3918 14.9124 17.5277 14.7485C17.0876 14.6652 17.152 14.5022 17.3661 14.2508C17.7376 13.8163 18.0856 13.5474 18.7812 13.5474L23.9893 13.5465C24.8101 13.7076 24.9942 14.0759 25.1056 14.9027L25.1102 20.6903C25.1006 21.0103 25.2709 21.9586 25.8454 22.1681C26.3058 22.32 26.6096 21.9508 26.8849 21.6594C28.1339 20.334 29.0237 18.7697 29.8206 17.1506C30.1723 16.4366 30.4757 15.6978 30.7703 14.9575C30.9895 14.4101 31.3301 14.1408 31.9479 14.15L36.9631 14.156C37.1108 14.156 37.2609 14.1574 37.4073 14.1827C38.2525 14.3273 38.4841 14.6909 38.2226 15.5154C37.811 16.8109 37.0114 17.89 36.2297 18.9718C35.3919 20.1301 34.4983 21.2478 33.6687 22.4111C32.9064 23.4746 32.9667 24.01 33.9132 24.9335Z"
                  fill="#CACACA" />
              </svg>
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__messenger" href="#" aria-label="мы в инстаграме">
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.1172 22.5C18.1172 24.8785 20.0453 26.8066 22.4238 26.8066C24.8024 26.8066 26.7305 24.8785 26.7305 22.5C26.7305 20.1215 24.8024 18.1934 22.4238 18.1934C20.0453 18.1934 18.1172 20.1215 18.1172 22.5Z"
                  fill="#CACACA" />
                <path
                  d="M12.3521 14.8803C12.5591 14.3194 12.8894 13.8116 13.3186 13.3948C13.7354 12.9656 14.2428 12.6354 14.8041 12.4283C15.2594 12.2515 15.9433 12.0411 17.2029 11.9837C18.5656 11.9216 18.9741 11.9082 22.4238 11.9082C25.8739 11.9082 26.2824 11.9212 27.6447 11.9834C28.9044 12.0411 29.5886 12.2515 30.0435 12.4283C30.6049 12.6354 31.1126 12.9656 31.5291 13.3948C31.9582 13.8116 32.2885 14.319 32.4959 14.8803C32.6727 15.3356 32.8832 16.0198 32.9405 17.2795C33.0026 18.6418 33.016 19.0503 33.016 22.5004C33.016 25.9501 33.0026 26.3587 32.9405 27.7213C32.8832 28.981 32.6727 29.6649 32.4959 30.1201C32.2885 30.6814 31.9586 31.1889 31.5294 31.6057C31.1126 32.0348 30.6052 32.3651 30.0439 32.5721C29.5886 32.7493 28.9044 32.9597 27.6447 33.0171C26.2824 33.0792 25.8742 33.0922 22.4242 33.0922C18.9738 33.0922 18.5652 33.0792 17.2033 33.0171C15.9436 32.9597 15.2594 32.7493 14.8041 32.5721C13.6773 32.1375 12.7868 31.2469 12.3521 30.1201C12.1753 29.6649 11.9648 28.981 11.9072 27.7213C11.845 26.3587 11.832 25.9501 11.832 22.5004C11.832 19.0503 11.845 18.6418 11.9072 17.2795C11.9645 16.0198 12.175 15.3356 12.3521 14.8803ZM22.4238 29.1344C26.0881 29.1344 29.0585 26.1643 29.0585 22.5001C29.0585 18.8358 26.0881 15.8657 22.4238 15.8657C18.7599 15.8657 15.7895 18.8358 15.7895 22.5001C15.7895 26.1643 18.7599 29.1344 22.4238 29.1344ZM15.5272 17.1538C16.3834 17.1538 17.0776 16.4596 17.0776 15.6034C17.0776 14.7471 16.3834 14.0529 15.5272 14.0529C14.6709 14.0529 13.9767 14.7471 13.9767 15.6034C13.9771 16.4596 14.6709 17.1538 15.5272 17.1538Z"
                  fill="#CACACA" />
                <path
                  d="M22.6204 0C34.9364 0 44.9238 9.98747 44.9238 22.3034C44.9238 34.6194 34.9364 44.6069 22.6204 44.6069C10.3044 44.6069 0.316959 34.6194 0.316959 22.3034C0.316959 9.98747 10.3044 0 22.6204 0ZM9.89059 27.5836C9.95253 28.9469 10.1693 29.8777 10.4858 30.6924C11.1512 32.4127 12.5111 33.7727 14.2314 34.438C15.0458 34.7545 15.9769 34.971 17.3399 35.0332C18.7057 35.0955 19.1419 35.1105 22.6201 35.1105C26.0985 35.1105 26.5345 35.0955 27.9005 35.0332C29.2635 34.971 30.1946 34.7545 31.009 34.438C31.8639 34.1164 32.6378 33.6124 33.2776 32.9607C33.929 32.3212 34.433 31.547 34.7546 30.6924C35.0711 29.878 35.2879 28.9469 35.3498 27.5839C35.4128 26.2178 35.4274 25.7815 35.4274 22.3034C35.4274 18.8253 35.4128 18.389 35.3502 17.0233C35.2883 15.66 35.0718 14.7292 34.7553 13.9145C34.4337 13.0599 33.9293 12.2857 33.2776 11.6462C32.6382 10.9945 31.8639 10.4905 31.0094 10.1689C30.1946 9.85236 29.2638 9.63592 27.9005 9.57364C26.5348 9.51136 26.0985 9.49638 22.6204 9.49638C19.1423 9.49638 18.706 9.51136 17.3403 9.57398C15.9769 9.63592 15.0462 9.85236 14.2314 10.1685C13.3769 10.4901 12.6026 10.9945 11.9628 11.6462C11.3114 12.286 10.8071 13.0599 10.4858 13.9145C10.169 14.7292 9.95253 15.66 9.89025 17.0233C9.82798 18.389 9.81334 18.8253 9.81334 22.3034C9.81334 25.7815 9.82798 26.2178 9.89059 27.5836Z"
                  fill="#CACACA" />
              </svg>
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__messenger" href="#" aria-label="мы в фейсбуке">
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.5 0C10.125 0 0 10.1431 0 22.6355C0 33.9307 8.23499 43.3057 18.99 45V29.1867H13.275V22.6355H18.99V17.6431C18.99 11.9729 22.3425 8.85542 27.495 8.85542C29.9475 8.85542 32.5125 9.28464 32.5125 9.28464V14.8645H29.6775C26.8875 14.8645 26.01 16.6039 26.01 18.3886V22.6355H32.265L31.2525 29.1867H26.01V45C31.312 44.1593 36.1399 41.4432 39.6223 37.342C43.1047 33.2408 45.012 28.0248 44.9999 22.6355C44.9999 10.1431 34.875 0 22.5 0Z"
                  fill="#CACACA" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
  <script src="js/jquery-3.6.0.min.js"></script>
  <script src="js/choices.min.js"></script>
  <script src="js/jquery-ui.min.js"></script>
  <script src="js/swiper-bundle.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/tippy-bundle.umd.min.js"></script>
  <script src="js/inputmask.min.js"></script>
  <script src="js/just-validate.min.js"></script>
  <script src="https://api-maps.yandex.ru/2.1/?e19e074e-c886-4cf8-9c20-ef3ddd518b21&lang=ru_RU"></script>
  <script src="js/script.js"></script>
</body>

</html>
