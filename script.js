// O conteúdo e os links continuam acessíveis quando o JavaScript está desativado.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
if (menuButton && menu) {
  document.documentElement.classList.add('js');
  menuButton.hidden = false;
  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.lastElementChild.textContent = open ? '−' : '+';
    menu.classList.toggle('is-open', open);
  };
  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 960px)').addEventListener('change', () => setMenu(false));
}

// A fileira também pode ser percorrida por toque, trackpad ou teclado.
const teamTrack = document.querySelector('.team-grid');
const teamControls = document.querySelector('.team-controls');
if (teamTrack && teamControls) {
  teamControls.hidden = false;
  const previous = teamControls.querySelector('[data-direction="-1"]');
  const next = teamControls.querySelector('[data-direction="1"]');
  const updateControls = () => {
    previous.disabled = teamTrack.scrollLeft <= 2;
    next.disabled = teamTrack.scrollLeft + teamTrack.clientWidth >= teamTrack.scrollWidth - 2;
  };
  teamControls.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const card = teamTrack.querySelector('.member-card');
    teamTrack.scrollBy({
      left: Number(button.dataset.direction) * (card.getBoundingClientRect().width + 16),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  });
  teamTrack.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
}
