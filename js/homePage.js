$(() => {
  new Swiper('.hero-section-slider', {
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1300,
    pagination: {
      el: '.home-page-hero .slider-dots',
      clickable: true,
    },
  })

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
  const scrollableWrapper = $('.innovation-section .lists-wrapper')

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

        const currentIcon = innovationItems.eq(realIndex)
        const width = currentIcon.width()
        const left = currentIcon.offset().left

        const scrollForward = left + width - window.innerWidth
        const scrollBackward = left + width - scrollableWrapper.scrollLeft()

        let scroll = scrollableWrapper.scrollLeft()

        if (scrollForward > 0) {
          scroll = scroll + Math.abs(scrollForward) + 15
        } else if (scrollBackward < 0) {
          scroll = left
        }

        scrollableWrapper.animate({
          scrollLeft: scroll,
        }, 300)
      },
    },
    pagination: {
      el: '.innovation-slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        pagination: {},
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

  $(window).scroll(() => {
    const { scrollY } = window

    if (scrollY <= $('.home-page-hero').height()) {
      $('.hero-section-slider').css('transform', `translateY(${scrollY}px)`)
    }

  })
})
