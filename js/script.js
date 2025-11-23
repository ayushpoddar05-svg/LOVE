document.addEventListener('DOMContentLoaded', function(){
  const proposalModalEl = document.getElementById('proposalModal')
  const proposalModal = new bootstrap.Modal(proposalModalEl)
  const openProposal = document.getElementById('openProposal')
  const btnYes = document.getElementById('btnYes')
  const btnNo = document.getElementById('btnNo')
  const modalBody = document.getElementById('modalBody')
  const confettiHolder = document.getElementById('confetti-holder')

  if(openProposal) openProposal.addEventListener('click', ()=> proposalModal.show())

  if(btnYes){
    btnYes.addEventListener('click', ()=>{
      // show celebratory content
      modalBody.innerHTML = `
        <h2 class="mb-3">Yes! 💖</h2>
        <p class="mb-3">You've made me the happiest person alive.</p>
        <a href="gallery.html" class="btn btn-primary">See our memories</a>
      `;
      launchConfetti();
      // keep modal open for a few seconds before closing
      setTimeout(()=>{
        try{ bootstrap.Modal.getInstance(proposalModalEl).hide(); }catch(e){}
      },5000)
    })
  }

  if(btnNo){
    btnNo.addEventListener('click', ()=>{
      modalBody.innerHTML = `
        <h3 class="mb-3">That's okay 💙</h3>
        <p class="mb-2">Whenever you're ready, I'll be here.</p>
      `;
      setTimeout(()=>{ try{ bootstrap.Modal.getInstance(proposalModalEl).hide(); }catch(e){} },2000)
    })
  }

  function launchConfetti(){
    const colors = ['#ff6b6b','#ffd166','#06d6a0','#4d96ff','#c77dff']
    const count = 90
    for(let i=0;i<count;i++){
      const el = document.createElement('div')
      el.className = 'confetti'
      const size = Math.floor(Math.random()*12)+6
      el.style.width = size+'px'
      el.style.height = Math.floor(size*1.4)+'px'
      el.style.background = colors[Math.floor(Math.random()*colors.length)]
      el.style.left = Math.random()*100 + '%'
      el.style.top = '-10%'
      el.style.opacity = 0.95
      el.style.transform = `rotate(${Math.random()*360}deg)`
      const duration = 4 + Math.random()*3
      el.style.animation = `confettiFall ${duration}s linear ${Math.random()*0.5}s forwards`
      confettiHolder.appendChild(el)
    }
    // cleanup after animation
    setTimeout(()=>{ confettiHolder.innerHTML = '' },9000)
  }
})
