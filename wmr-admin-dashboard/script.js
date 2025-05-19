function showPanel(panelId) {
  const panels = document.querySelectorAll('.content-panel');
  panels.forEach(panel => panel.style.display = 'none');
  document.getElementById(panelId).style.display = 'block';
}

// Load external HTML components
window.onload = () => {
  // Show requests panel by default
  showPanel('requests');
  
  // Load all components
  fetch('header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header-container').innerHTML = data)
    .catch(err => console.error('Error loading header:', err));

  fetch('menu.html')
    .then(res => res.text())
    .then(data => document.getElementById('menu-container').innerHTML = data)
    .catch(err => console.error('Error loading menu:', err));

  fetch('requests.html')
    .then(res => res.text())
    .then(data => document.getElementById('requests').innerHTML = data)
    .catch(err => console.error('Error loading requests:', err));

  fetch('status.html')
    .then(res => res.text())
    .then(data => document.getElementById('status').innerHTML = data)
    .catch(err => console.error('Error loading status:', err));

  fetch('inquiries.html')
    .then(res => res.text())
    .then(data => document.getElementById('inquiries').innerHTML = data)
    .catch(err => console.error('Error loading inquiries:', err));

  fetch('clients.html')
    .then(res => res.text())
    .then(data => document.getElementById('clients').innerHTML = data)
    .catch(err => console.error('Error loading clients:', err));
};