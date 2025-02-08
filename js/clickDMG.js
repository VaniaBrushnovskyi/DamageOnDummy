const image = document.querySelector('.image');
const clickEffect = document.querySelector('.click-effect');

image.addEventListener('click', function(event) {
  const rect = image.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  clickEffect.style.left = `${clickX - -30}px`;
  clickEffect.style.top = `${clickY - -30}px`;

  clickEffect.style.animation = 'ripple .4s ease-in';

  clickEffect.addEventListener('animationend', function() {
    clickEffect.style.animation = 'none';
  });
});
