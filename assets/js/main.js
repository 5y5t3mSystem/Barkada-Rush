// ---- Create Lobby: player count selector ----
(function () {
  var MIN_PLAYERS = 3;
  var MAX_PLAYERS = 6;
  var countEl = document.getElementById('playerCount');
  var minusBtn = document.getElementById('playerMinus');
  var plusBtn = document.getElementById('playerPlus');
  var cluster = document.getElementById('playerCluster');
  if (!countEl || !cluster) return;

  var icons = Array.prototype.slice.call(cluster.querySelectorAll('img'));

  function render(count) {
    countEl.textContent = count;
    icons.forEach(function (img) {
      var min = parseInt(img.getAttribute('data-min'), 10);
      img.classList.toggle('is-visible', min <= count);
    });
    if (minusBtn) minusBtn.disabled = count <= MIN_PLAYERS;
    if (plusBtn) plusBtn.disabled = count >= MAX_PLAYERS;
  }

  var current = parseInt(countEl.textContent, 10) || MIN_PLAYERS;
  render(current);

  if (minusBtn) {
    minusBtn.addEventListener('click', function () {
      if (current > MIN_PLAYERS) { current--; render(current); }
    });
  }
  if (plusBtn) {
    plusBtn.addEventListener('click', function () {
      if (current < MAX_PLAYERS) { current++; render(current); }
    });
  }
})();

// ---- Join Lobby: code field is typable, submission is a no-op (feature coming soon) ----
(function () {
  var form = document.getElementById('joinForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Joining a lobby is not implemented yet — intentionally does nothing.
  });
})();

function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}
document.querySelectorAll('.overlay').forEach(function (ov) {
  ov.addEventListener('click', function (e) {
    if (e.target === ov) ov.classList.add('hidden');
  });
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.overlay').forEach(function (ov) {
      ov.classList.add('hidden');
    });
  }
});
