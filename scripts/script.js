$(function () {
  $('.menu').click(function () {
    $('aside').toggleClass('slider')
    $('footer>.container').toggleClass('slider')
    $('div.menu').toggleClass('sliderMenu')

    setTimeout(() => {
      $('.logo, .avatar, a>h4, .avatarDesc').toggleClass('hide')
    }, 240)
  })

  $('.search').click(function () {
    $('aside').removeClass('slider')
    $('footer>.container').removeClass('slider')
    $('div.menu').removeClass('sliderMenu')

    setTimeout(() => {
      $('.logo, .avatar, a>h4, .avatarDesc').removeClass('hide')
    }, 240)
  })
})
