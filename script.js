/*const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
});

document.querySelectorAll('.fly-in').forEach(el => observer.observe(el));*/

const reveal_observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  threshold: 0.6 // Adjust based on how centered you want it to be
});

document.querySelectorAll('.reveal-container').forEach(container => {
  reveal_observer.observe(container);
});

