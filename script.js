function togglemode() {
  const html = document.documentElement
  //document é a representação do documento em formato JS
  // '.' -> é para aceder a propriedades e funcionalidades
  // body = document.body se a class"light" estivesse no body, mas está no html
  html.classList.toggle("light")

  //if(html.classList.contains('light')) {
  //html.classList.remove('light')
  //} else {
  //html.classList.add('light')

  //pegar na tag image
  const img = document.querySelector('profile img')
  // substituir a imagem
  if(html.classList.contains('light')) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets.avatar.png')
  }
}