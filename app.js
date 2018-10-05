$(function() {
  $('.resultSection').hide()
  var add_option = function() {
    $('.inputs').append('<input></input>')
  }
  $('.addOption').click(add_option)

  var options = []
  var submit = function() {
    $('.inputSection').hide()
    $('.resultSection').css('display', 'flex')

    var option = [];
    $('input').each(function() {
      option.push($(this).val())
    })
    var winner = option[Math.floor(Math.random() * option.length)]
    $('.resultSection').text(winner)
  }
    $('.submit').click(submit)
})
