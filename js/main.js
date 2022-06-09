$(() => {
  const buildSlides = (slides, sliderElement, changeBorderSize) => {
    const activeSlideCoef = 0.8
    const height = slides[0].offsetWidth / activeSlideCoef
    
    slides.forEach(slide => {
      const isActive = $(slide).hasClass('swiper-slide-next')
      const size = isActive ? 0 : 22

      $(slide).find('.img-box').css({
        height,
        clipPath: `inset(${size}% 0% ${size}% 0% round 20px)`,
      })

      if (sliderElement) {
        $(sliderElement).css('min-height', $(slide).find('.slide-content').height())
      }
    })

    if (changeBorderSize) {
      $('.technology-slider-wrapper .active-slide-border').css({
        width: slides[0].offsetWidth + 20,
        height: height + 20,
      })
    }
  }

  new Swiper('.technology-slider', {
    slidesPerView: 3,
    spaceBetween: 48,
    loop: true,
    speed: 1000,
    navigation: {
      prevEl: '.technology-slider-wrapper .arrow-left',
      nextEl: '.technology-slider-wrapper .arrow-right',
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
})
