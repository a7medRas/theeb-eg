document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggleLang')?.addEventListener('click', () => {
    alert('تبديل اللغة سيتم تفعيله لاحقًا.');
  });

  document.getElementById('toggleMode')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});

function toggleSideNav() {
  document.getElementById("sideNav").classList.toggle("open");
  document.getElementById("sideNavOverlay").classList.toggle("show");
}