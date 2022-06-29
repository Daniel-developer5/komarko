$(() => {
  const trigger = $('.sections-navigation-trigger')
  const nav = $('.sections-navigation')
  const headerHeight = $('header.navigation').height() + 32
  let fixedTriggered = false

  $(window).scroll(() => {
    const { scrollY } = window

    if (scrollY >= trigger.offset().top - headerHeight) {
      if (fixedTriggered) {
        return
      }

      nav.addClass('fixed')
      nav.css('top',  headerHeight)
      trigger.css('padding-top', nav.outerHeight())
      fixedTriggered = true
    } else {
      if (!fixedTriggered) {
        return
      }

      nav.removeClass('fixed')
      nav.css('top',  0)
      trigger.css('padding-top', 0)
      fixedTriggered = false
    }
  })
})
