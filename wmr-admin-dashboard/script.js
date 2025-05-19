function showPanel(panelId) {
  const panels = document.querySelectorAll('.content-panel');
  panels.forEach(panel => panel.style.display = 'none');
  document.getElementById(panelId).style.display = 'block';
}

// Load external HTML components
window.onload = () => {
  fetch('header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header-container').innerHTML = data);

  fetch('menu.html')
    .then(res => res.text())
    .then(data => document.getElementById('menu-container').innerHTML = data);

  fetch('requests.html')
    .then(res => res.text())
    .then(data => document.getElementById('requests').innerHTML = data);

  fetch('status.html')
    .then(res => res.text())
    .then(data => document.getElementById('status').innerHTML = data);

  fetch('inquiries.html')
    .then(res => res.text())
    .then(data => document.getElementById('inquiries').innerHTML = data);

  fetch('clients.html')
    .then(res => res.text())
    .then(data => document.getElementById('clients').innerHTML = data);
};
