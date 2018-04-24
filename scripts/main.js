let flechegauche = document.getElementsByClassName('flechedroite')[0]
let flechedroite = document.getElementsByClassName('flechegauche')[0]
let imgs = document.getElementsByClassName('w-100')
let index = 0

function goUp() {
  if (index < imgs.length*100-100) {
    index += 100
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.transform=`translateY(-${index}%)`
    }
  }
}

function goDown() {
  if (index > 0) {
    index -= 100
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.transform=`translateY(-${index}%)`
    }
  }
}

flechedroite.addEventListener('click', () => {
      goUp()
})

flechegauche.addEventListener('click', () => {
      goDown()
})

setInterval(function () {
  if (index < imgs.length*100-100)
  {
    goUp()
  }else {
    goDown()
    index -= 200
  }
}, 4000);
