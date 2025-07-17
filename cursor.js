window.addEventListener('DOMContentLoaded', function () {
  const dot = document.createElement('div');
  dot.className = 'cursor-follower';
  Object.assign(dot.style, {
    position: 'fixed',
    width: '16px',
    height: '16px',
    background: 'red',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: '999999',
    transform: 'translate(-50%, -50%)'
  });
  document.body.appendChild(dot);

  document.addEventListener('mousemove', function (e) {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });
});
