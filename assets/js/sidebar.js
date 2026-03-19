/* ============================================================
   SIDEBAR JS — Portfolio+ | Toggle & Behavior
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const sidebar  = document.querySelector('.sidebar');
  const toggle   = document.querySelector('.sidebar-toggle');
  const overlay  = document.querySelector('.sidebar-overlay');

  if (!sidebar || !toggle || !overlay) return;

  const openSidebar = () => {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    toggle.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    toggle.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener('click', closeSidebar);

  /* Close on nav link click (mobile) */
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 992) closeSidebar();
    });
  });

  /* Keyboard: Escape closes sidebar */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) closeSidebar();
  });
});
