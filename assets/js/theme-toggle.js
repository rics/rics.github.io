// theme-toggle.js
// Light é o padrão. Dark mode aplica classe "dark-mode" no <body>
// e troca o <link id="theme-skin"> entre default.css e dark.css.

(function () {
  var SKIN_LIGHT = '/assets/css/skins/default.css';
  var SKIN_DARK  = '/assets/css/skins/dark.css';

  function getSkinLink() {
    return document.getElementById('theme-skin');
  }

  function applyTheme(theme) {
    var link = getSkinLink();
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      if (link) link.href = SKIN_DARK;
    } else {
      document.body.classList.remove('dark-mode');
      if (link) link.href = SKIN_LIGHT;
    }
    // Atualiza ícone do botão
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function toggleTheme() {
    var current = localStorage.getItem('theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  }

  // Aplica o tema ao carregar (sem flash — o anti-FOUC no <head> já fez o básico)
  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem('theme') || 'light';
    applyTheme(saved);

    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();