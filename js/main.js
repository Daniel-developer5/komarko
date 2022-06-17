$(() => {
  const footerResponsive = () => {
    if (window.innerWidth < 768) {
      $('.page-footer .contacts').appendTo('.page-footer .links')
    } else {
      $('.page-footer .contacts').appendTo('.page-footer .footer-information')
    }
  }

  footerResponsive()
  $(window).on('resize', footerResponsive)

  const slideUp = {
    afterReveal(el) {
      $(el).addClass('animated')
    },
    opacity: null,
  }

  ScrollReveal().reveal('.slide-up', slideUp)
  ScrollReveal().reveal('.innovation-section .lists-wrapper .item', slideUp)
  ScrollReveal().reveal('.innovation-section .icon-buttons-list:last-child', slideUp)
  ScrollReveal().reveal('.encircled-border-animation .before, .encircled-border-animation .after', slideUp)
  ScrollReveal().reveal('.animated-tab', slideUp)

  $('.innovation-section .lists-wrapper .item').each(function (i) {
    $(this).css('transition-delay', `${i / 4}s`)
  })
})