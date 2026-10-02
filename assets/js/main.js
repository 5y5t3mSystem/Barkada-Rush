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
