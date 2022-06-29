$(() => {
  $(window).scroll(() => {
    if (window.innerWidth <= 1440) {
      return
    }

    if (window.scrollY > 0) {
      $('header.navigation').addClass('fixed')
    } else {
      $('header.navigation').removeClass('fixed')
    }
  })

  $('.navigation .navigation-link.accordion').accordion({
    collapsible: true,
    active: false,
  })

  $('.navigation .burger-menu-btn').click(function () {
    $('.navigation .mobile-navigation').toggleClass('show')
    $(this).toggleClass('is-active')

    if (window.innerWidth < 768) {
      $('html, body').toggleClass('overflow')
    }
  })

  const calcMobileNavProperties = () => {
    const navHeight = $('.navigation').outerHeight()

    $('.navigation .mobile-navigation').css({
      top: navHeight,
      height: `calc(100% - ${navHeight}px)`,
    })
  }

  calcMobileNavProperties()

  const calcPaddingTop = () => {
    $('.secondary-page-hero').css('padding-top', $('header.navigation').outerHeight())
  }

  calcPaddingTop()

  const footerResponsive = () => {
    if (window.innerWidth < 768) {
      $('.page-footer .contacts').appendTo('.page-footer .links')
    } else {
      $('.page-footer .contacts').appendTo('.page-footer .footer-information')
    }
  }

  footerResponsive()

  const scrollAnimation = {
    afterReveal(el) {
      $(el).addClass('animated')
    },
    opacity: null,
  }

  ScrollReveal().reveal('.slide-up', scrollAnimation)
  ScrollReveal().reveal('.innovation-section .lists-wrapper .item', scrollAnimation)
  ScrollReveal().reveal('.innovation-section .icon-buttons-list:last-child', scrollAnimation)
  ScrollReveal().reveal('.encircled-border-animation .before, .encircled-border-animation .after', scrollAnimation)
  ScrollReveal().reveal('.animated-tab', scrollAnimation)
  ScrollReveal().reveal('.scroll-animation', scrollAnimation)

  $('.innovation-section .lists-wrapper .item').each(function (i) {
    $(this).css('transition-delay', `${i / 4}s`)
  })

  const initOffersSliderBorder = slides => {
    $('.offers-slider .active-slide-border').css({
      width: slides[0].offsetWidth + 20,
      height: $(slides[0]).find('.img-box').height() + 20,
    })
  }

  const initOffersSlider = () => {
    if (!$('.offers-slider .swiper').length) {
      return
    }

    let offersSlider = new Swiper('.offers-slider .swiper', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: true,
      speed: 1000,
      navigation: {
        prevEl: '.offers-slider .arrow-left',
        nextEl: '.offers-slider .arrow-right',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
      },
      on: {
        init({ slides }) {
          initOffersSliderBorder(slides)
        },
        resize(slider) {
          if (window.innerWidth >= 992) {
            slider.destroy()
            return
          }

          initOffersSliderBorder(slider.slides)
        },
      }
    })

    if (window.innerWidth >= 992) {
      offersSlider.destroy(true)
    }
  }

  initOffersSlider()

  $(window).on('resize', () => {
    footerResponsive()
    initOffersSlider()
    calcMobileNavProperties()
    calcPaddingTop()
  })
})