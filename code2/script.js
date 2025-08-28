
// behance grid functionality
const behanceGrid = document.querySelector('.behance-grid');
const behanceLink = document.querySelector('.icon-grid a:nth-child(2)');
behanceLink.addEventListener('mouseenter', () => {
  behanceGrid.style.display = 'flex';
});

behanceLink.addEventListener('mouseleave', () => {
  setTimeout(() => {
    behanceGrid.style.display = 'none';
  }, 5000); // tempo aumentado para 5 segundos
});

const pinterestGrid = document.querySelector('.pinterest-grid');
const pinterestLink = document.querySelector('.icon-grid a:nth-child(3)');
pinterestLink.addEventListener('mouseenter', () => {
  pinterestGrid.style.display = 'flex';
});

pinterestLink.addEventListener('mouseleave', () => {
  setTimeout(() => {
    pinterestGrid.style.display = 'none';
  }, 5000); // tempo aumentado para 5 segundos
});

// linkedin grid functionality
const linkedinGrid = document.querySelector('.linkedin-grid');
const linkedinLink = document.querySelector('.icon-grid a:nth-child(1)');
linkedinLink.addEventListener('mouseenter', () => {
  linkedinGrid.style.display = 'flex';
});

linkedinLink.addEventListener('mouseleave', () => {
  setTimeout(() => {
    linkedinGrid.style.display = 'none';
  }, 5000); // tempo aumentado para 5 segundos
});