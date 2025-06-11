const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  threshold: 0.5 // Adjust to trigger when the image is roughly centered
});

document.querySelectorAll('.reveal-container').forEach(container => {
  observer.observe(container);
});

