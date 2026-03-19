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

function scrollToHashTarget() {
  const hash = window.location.hash.slice(1);

  if (!hash) {
    return;
  }

  const target = document.getElementById(hash);

  if (!target) {
    return;
  }

  target.classList.add('active');
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

window.addEventListener('hashchange', scrollToHashTarget);
window.addEventListener('load', scrollToHashTarget);

const endlessHoardCopyButton = document.getElementById('eh-copy-btn');
const endlessHoardStatus = document.getElementById('eh-status');

if (endlessHoardCopyButton && endlessHoardStatus) {
  endlessHoardCopyButton.addEventListener('click', async () => {
    endlessHoardStatus.textContent = 'Copying...';

    try {
      const response = await fetch('prompts/endless-hoard.txt');

      if (!response.ok) {
        throw new Error(`Failed to load prompt: ${response.status}`);
      }

      const text = await response.text();
      await navigator.clipboard.writeText(text);

      endlessHoardStatus.textContent = 'Copied!';
    } catch (error) {
      console.error(error);
      endlessHoardStatus.textContent = 'Unable to copy prompt.';
    }

    setTimeout(() => {
      endlessHoardStatus.textContent = '';
    }, 2000);
  });
}
