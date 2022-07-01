$(() => {
  const trigger = $('.sections-navigation-trigger')
  const nav = $('.sections-navigation')
  const links = nav.find('.links .link')
  let fixedTriggered = false

  const getHeaderHeight = () => Math.ceil($('header.navigation').height() + 32)

  const calcTop = initialTop => initialTop - nav.height() - getHeaderHeight()

  const getSectionsTop = () => (
    [...$('.scroll-detect')].map(el => $(el).offset().top)
  )

  const fixNav = isFix => {
    nav[isFix ? 'addClass' : 'removeClass']('fixed')
    nav.css('top', isFix ? getHeaderHeight() : 0)
    trigger.css('padding-top', isFix ? nav.outerHeight() : 0)
    fixedTriggered = isFix
  }

  $(window).scroll(() => {
    const { scrollY } = window

    getSectionsTop().forEach((top, index) => {
      if (scrollY >= calcTop(top) - 1) {
        links.removeClass('active')
        links.eq(index).addClass('active')
      }
    })

    if (scrollY >= trigger.offset().top - getHeaderHeight()) {
      if (fixedTriggered) {
        return
      }

      fixNav(true)
    } else {
      if (!fixedTriggered) {
        return
      }

      fixNav(false)
    }
  })

  links.click(function (e) {
    e.preventDefault()

    $('html').animate({
      scrollTop: calcTop($($(this).attr('href')).offset().top),
    }, 300)
  })

  $(window).on('load', () => {
    const hash = window.location.hash

    if (hash) {
      window.scroll(0, calcTop($(hash).offset().top))
    }
  })
})
