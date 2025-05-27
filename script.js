let c = 45;

function draw(){
  document.documentElement.style.setProperty('--direction', c++ + 'deg');
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

document.addEventListener('DOMContentLoaded', () => {
  const background = document.querySelector('.background');
  const foreground = document.querySelector('.foreground');

  // Cambia l'immagine di sfondo dopo 5 secondi
  setTimeout(() => {
    background.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?city')";
    foreground.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?forest')";
  }, 5000);
});


