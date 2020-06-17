

window.addEventListener('keypress', (e) => {
    if (event.defaultPrevented) {
        console.log('error')
        return; // Do nothing if the event was already processed
      }

      let audio
      switch(e.key) {
        case 'a': 
            audio = new Audio('sounds/clap.wav')
            audio.play()
            console.log(document.getElementById(e.key))
            break
        case 's': 
            audio = new Audio('sounds/hihat.wav')
            audio.play()
            break
        case 'd': 
            audio = new Audio('sounds/kick.wav')
            audio.play()
            break
        case 'f':
            audio = new Audio('sounds/openhat.wav')
            audio.play()
            break
        case 'g':
            audio = new Audio('sounds/boom.wav')
            audio.play()
            break
        case 'h':
            audio = new Audio('sounds/ride.wav') 
            audio.play()               

            break;
        case 'j':
            audio = new Audio('sounds/snare.wav')
            audio.play()
            break;
        case 'k':
            audio = new Audio('sounds/tom.wav')
            audio.play()
            break
        case 'l':
            audio = new Audio('sounds/tink.wav')
            audio.play()
            break
      }

      const button = document.getElementById(e.key)
      let margin = parseInt(button.style.marginTop.replace('px', ''))
      if(!margin)
      margin = 10
      else 
      margin = (margin += 10) % 100

      button.style.marginTop = margin + 'px'

      audio.onplaying = (event) => {
          console.log('in playing')
          document.getElementById(e.key).classList.add('playing')
      }
     audio.onended = (event) => {
         document.getElementById(e.key).classList.remove('playing')
       }
})