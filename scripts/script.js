$(function () {
  $('.menu').click(function () {
    $('aside').toggleClass('slider')
    $('footer>.container').toggleClass('slider')
    $('div.menu').toggleClass('sliderMenu')

    $('.logo').toggleClass('hide')
    $('.avatar').toggleClass('hide')
    setTimeout(() => {
      $('a>h4, .avatarDesc').toggleClass('hide')
    }, 240)
    setTimeout(() => {
      $('.aba>img').toggleClass('center')
    }, 250)
  })

  $('.search').click(function () {
    $('aside').removeClass('slider')
    $('footer>.container').removeClass('slider')
    $('div.menu').removeClass('sliderMenu')
    $('.logo').removeClass('hide')
    $('.avatar').removeClass('hide')
    setTimeout(() => {
      $('a>h4, .avatarDesc').removeClass('hide')
    }, 240)
    setTimeout(() => {
      $('.aba>img').removeClass('center')
    }, 250)
  })
})
