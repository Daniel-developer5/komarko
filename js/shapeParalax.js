$(() => {
  $(window).scroll(() => {
    $('.shape-paralax-item').each(function () {
      const { top } = this.getBoundingClientRect()
      const { scrollY, innerHeight } = window
      const height = $(this).height()

      const center = top - scrollY - ((innerHeight - height) /2)
      const translate = center / innerHeight * (0.6 * height)
      $('.shape-paralax-item').css('transform', `translateY(${translate}px)`)
    })
  })
})
