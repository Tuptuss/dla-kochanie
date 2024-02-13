document.getElementById('noBtn').addEventListener('mouseover', function() {
  // Przesuwa przycisk "Nie" do losowej pozycji na ekranie
  this.style.position = 'absolute';
  this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
  this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
});

document.getElementById('yesBtn').addEventListener('click', function() {
  alert('Wiedziałem, że tak powiesz! ❤️');
});