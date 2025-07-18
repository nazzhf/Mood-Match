document.addEventListener('DOMContentLoaded', function() {
    const bgAnimation = document.getElementById('bg-animation');

    // Create background animation particles
    function createBgAnimation() {
        if (!bgAnimation) return;
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('span');
            const size = Math.random() * 5 + 1;
            const posX = Math.random() * 100;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.opacity = Math.random() * 0.5;
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            bgAnimation.appendChild(particle);
        }
    }

    if (bgAnimation) createBgAnimation();
});

//spline//

