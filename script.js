// Wait for the page to fully load before running animations
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with stat numbers
    const numbers = document.querySelectorAll('.stat-number');
    
    // Function to animate a single number
    function animateNumber(element) {
        const final = parseInt(element.innerText);
        let current = 0;
        
        const duration = 1500; // 1.5 seconds
        const steps = 50; // Update every 50ms
        const increment = final / (duration / steps);
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= final) {
                element.innerText = final;
                clearInterval(timer);
            } else {
                element.innerText = Math.round(current);
            }
        }, steps);
    }
    
    // Animate all number elements
    numbers.forEach(animateNumber);

    // More Info Button Toggle Functionality
    const moreInfoBtn = document.getElementById('more-info-btn');
    const aboutMeSection = document.getElementById('about-me');

    moreInfoBtn.addEventListener('click', function() {
        const isExpanded = moreInfoBtn.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            // Hide About Me section with transition
            aboutMeSection.classList.add('hidden');
            aboutMeSection.classList.remove('show');
            moreInfoBtn.setAttribute('aria-expanded', 'false');
            moreInfoBtn.innerText = 'More Info';
        } else {
            // Show About Me section with transition
            aboutMeSection.classList.remove('hidden');
            setTimeout(() => aboutMeSection.classList.add('show'), 10); // delay to trigger transition
            moreInfoBtn.setAttribute('aria-expanded', 'true');
            moreInfoBtn.innerText = 'Less Info';
        }
    });
});
