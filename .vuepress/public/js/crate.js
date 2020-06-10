var script = document.createElement('script')
script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3')
script.setAttribute('async', 'true')
script.setAttribute('defer', 'true')

script.onload = function() {
  document.body.classList.add('crate-loaded')
  var crate = new Crate({
    server: '299881420891881473',
    channel: '368427726358446110'
  })
  crate.notify('Need a hand? Leave a message!')
}

document.head.appendChild(script)
