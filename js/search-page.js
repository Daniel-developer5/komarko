$(() => {
  const pages = $('.search-page .page-numbers .page-number')
  let activePage = 0

  const changePage = page => {
    if (page > pages.length - 1 || page < 0) {
      return
    }

    pages.removeClass('active')
    pages.eq(page).addClass('active')
    activePage = page

    // API Request here...
  }

  pages.click(function () {
    changePage($(this).index())
  })

  $('.search-page .search-navigation .arrow-left').click(() => {
    changePage(activePage - 1)
  })

  $('.search-page .search-navigation .arrow-right').click(() => {
    changePage(activePage + 1)
  })
})
