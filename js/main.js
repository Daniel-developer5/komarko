$(() => {
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

  const footerResponsive = () => {
    if (window.innerWidth < 768) {
      $('.page-footer .contacts').appendTo('.page-footer .links')
    } else {
      $('.page-footer .contacts').appendTo('.page-footer .footer-information')
    }
  }

  footerResponsive()
  $(window).on('resize', footerResponsive)

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
})