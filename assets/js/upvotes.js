
document.querySelectorAll('.upvote').forEach(btn => {
  const key = btn.dataset.slug;
  const span = btn.querySelector('span');
  const count = localStorage.getItem(key) || 0;
  span.textContent = count;
  btn.onclick = () => {
    const newCount = Number(span.textContent) + 1;
    span.textContent = newCount;
    localStorage.setItem(key, newCount);
  };
});
