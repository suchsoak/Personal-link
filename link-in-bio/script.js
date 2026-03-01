document.addEventListener('DOMContentLoaded', () => {
    const staggeredItems = document.querySelectorAll('.staggered-item');

    staggeredItems.forEach((item, index) => {
        item.style.animationDelay = `${0.2 + (index * 0.1)}s`;

        item.classList.add('show');
    });

    const parallaxWraps = document.querySelectorAll('.parallax-wrap');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        parallaxWraps.forEach((wrap, index) => {
            const speed = index === 0 ? -30 : 30;
            const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
            const yOffset = (window.innerHeight / 2 - e.pageY) / speed;

            wrap.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    const bgAnimation = document.querySelector('.background-animation');
    if (bgAnimation) {
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
            particle.style.animationDelay = `${Math.random() * -20}s`;

            bgAnimation.appendChild(particle);
        }
    }

    const linkCards = document.querySelectorAll('.link-card');

    linkCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const maxRotate = 4;

            const rotateX = ((y - centerY) / centerY) * -maxRotate;
            const rotateY = ((x - centerX) / centerX) * maxRotate;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {

            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1) translateY(0)';
            card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });

        card.addEventListener('mouseenter', () => {

            card.style.transition = 'none';
        });
    });
});
