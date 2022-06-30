$(() => {
  const trigger = $('.sections-navigation-trigger')
  const nav = $('.sections-navigation')
  let fixedTriggered = false

  const getHeaderHeight = () => Math.ceil($('header.navigation').height() + 32)

  $(window).scroll(() => {
    const { scrollY } = window

    if (scrollY >= trigger.offset().top - getHeaderHeight()) {
      if (fixedTriggered) {
        return
      }

      nav.addClass('fixed')
      nav.css('top',  getHeaderHeight())
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
