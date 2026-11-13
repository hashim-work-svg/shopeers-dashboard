// Shopeers B2B eCommerce Dashboard Interactivity
function switchMetric(type) {
  document.querySelectorAll('.chart-tab-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  const revEl = document.getElementById('kpiRevenue');
  if (type === 'revenue') {
    revEl.textContent = '$148,220.00';
  } else if (type === 'orders') {
    revEl.textContent = '1,842 Orders';
  } else if (type === 'margin') {
    revEl.textContent = '64.2% Gross Margin';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const rows = document.querySelectorAll('#ordersTable tbody tr');
      rows.forEach(r => {
        r.style.display = r.innerText.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }

  // Global ⌘K focus
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });
});
