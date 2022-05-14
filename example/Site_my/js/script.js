var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

window.addEventListener('DOMContentLoaded', function () {

  let navbar = document.querySelector('.navbar'),
      navBtn = document.querySelectorAll('.nav-btn'),
      tabContent = document.querySelectorAll('.tab-content'),
      tabContentBlock = document.querySelector('.tab-content-block');

  function hideContent(indHide) {
    for (let i = indHide; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show')
      tabContent[i].classList.add('hide')
    }
  }

  hideContent(1)

  function showContent(indShow) {
      tabContent[indShow].classList.remove('hide')
      tabContent[indShow].classList.add('show')
      tabContent[indShow].classList.add('fade')
  }
 
  navbar.addEventListener('click', function(event) {
    target = event.target
    for (let i = 0; i < navBtn.length-1; i++) {
      if(target === navBtn[i]) {
        for( let k = 0; k < tabContent.length; k++) {
          hideContent(0)
          showContent(i)
        }
      }
    }
  })

})
