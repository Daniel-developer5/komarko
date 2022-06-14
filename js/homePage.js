$(() => {
  const buildSlides = (slides, sliderElement, changeBorderSize) => {
    const activeSlideCoef = 0.8
    const height = slides[0].offsetWidth / activeSlideCoef
    
    slides.forEach(slide => {
      const isActive = $(slide).hasClass(
        window.innerWidth >= 992 ? 'swiper-slide-next' : 'swiper-slide-active'
      )

      const size = isActive ? 0 : 22

      $(slide).find('.img-box').css({
        height,
        clipPath: `inset(${size}% 0% ${size}% 0% round 20px)`,
      })

      if (sliderElement) {
        $(sliderElement).css('height', $(slide).find('.slide-content').height())
      }
    })

    $('.technology-slider-wrapper .arrow').css('height', height)

    if (changeBorderSize) {
      $('.technology-slider-wrapper .active-slide-border').css({
        width: slides[0].offsetWidth + 20,
        height: height + 20,
      })
    }
  }

  new Swiper('.technology-slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    speed: 1000,
    navigation: {
      prevEl: '.technology-slider-wrapper .arrow-left',
      nextEl: '.technology-slider-wrapper .arrow-right',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 48,
      },
    },
    on: {
      init({ slides, el }) {
        buildSlides(slides, el, true)
      },
      slideChangeTransitionStart({ slides }) {
        buildSlides(slides)
      },
      resize({ slides, el }) {
        buildSlides(slides, el, true)
      },
    },
  })

  const innovationItems = $('.innovation-section .lists-wrapper .item')
  const innovationTexts = $('.innovation-slider .slider-descriptions .slider-text-box')

  const innovationSlider = new Swiper('.innovation-slider .swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    spaceBetween: 0,
    navigation: {
      prevEl: '.innovation-slider .arrow-left',
      nextEl: '.innovation-slider .arrow-right',
    },
    on: {
      activeIndexChange({ realIndex }) {
        innovationItems.each(function (index) {
          $(this).removeClass('active')

          if (index === realIndex) {
            $(this).addClass('active')
          }
        })

        innovationTexts.removeClass('active')
        $(innovationTexts.get(realIndex)).addClass('active')
      },
    },
  })

  innovationItems.each(function (index) {
    $(this).click(() => {
      innovationItems.removeClass('active')
      $(this).addClass('active')
      innovationSlider.slideTo(index + 1)
    })
  })
})