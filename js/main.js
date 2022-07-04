$(() => {
  $(window).scroll(() => {
    if (window.innerWidth < 1440) {
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
    calcMobileNavProperties()

    if (window.innerWidth < 768) {
      $('html, body').toggleClass('overflow')
    }
  })

  const calcMobileNavProperties = () => {
    const navHeight = $('.navigation').outerHeight()
    const sectionsNavHeight = $('.sections-navigation.fixed').outerHeight()
    const value = sectionsNavHeight ? sectionsNavHeight + navHeight : navHeight

    $('.navigation .mobile-navigation').css({
      top: value,
      height: `calc(100% - ${value}px)`,
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

  $('.input-field').click(function (e) {
    if ($(e.target).hasClass('file-input')) {
      return
    }

    if ($(this).hasClass('file')) {
      $(this).find('.input[type=file]').click()
      return
    }

    $(this).find('.input').focus()
  })

  $('.checkbox-label').click(function () {
    const defaultCheck = $(this).find('.default-checkbox')

    defaultCheck.prop('checked', !defaultCheck.prop('checked'))

    $(this).find('.custom-checkbox').toggleClass('checked')
  })

  $('.file-input').on('change', function () {
    const file = $(this).prop('files')[0]

    $(this).parent().find('.input[type=text]').val(file.name)
  })

  const onStateChange = (input, focused) => {
    $(input).closest('.input-field')[focused ? 'addClass' : 'removeClass']('focus')
  }

  $('.input').on('focus', e => onStateChange(e.target, true))
  $('.input').on('blur', e => onStateChange(e.target))

  const tabBtns = $('.job-offer-section .tab-buttons .tab-item')
  const tabContents = $('.job-offer-section .tabs-content .tab')

  tabBtns.click(function () {
    tabBtns.removeClass('active')
    $(this).addClass('active')

    tabContents.removeClass('active')
    const currentTab = tabContents.eq($(this).index())
    currentTab.addClass('active')

    $('.job-offer-section .tabs-content').css('min-height', currentTab.height())
  })
})