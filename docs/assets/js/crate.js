var script = document.createElement('script')
script.setAttribute('src', 'https://crate.widgetbot.io/v2')
script.setAttribute('async', true)
script.setAttribute('defer', true)

script.innerHTML = 'new Crate({server:"299881420891881473",colors:{toggle:"#7E57C2"},channel:"368427726358446110",options:"0102",delay:!0,logo:"widgetbot",beta:!0});'

window.addEventListener('crate', function() {
  document.body.classList.add('crate-loaded')
})
document.head.appendChild(script)
