// Mobile menu toggle function
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Feature accordion toggle function
function toggleFeature(featureId) {
    const content = document.getElementById(featureId + '-content');
    const icon = document.getElementById(featureId + '-icon');
    
    if (content && icon) {
        // Toggle the content visibility
        content.classList.toggle('hidden');
        
        // Toggle the icon between + and -
        if (content.classList.contains('hidden')) {
            icon.textContent = '+';
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.textContent = '−'; // Using minus sign instead of dash
            icon.style.transform = 'rotate(180deg)';
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    
    if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Close mobile menu when window is resized to desktop
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth >= 768 && mobileMenu) { // 768px is md breakpoint
        mobileMenu.classList.add('hidden');
    }
});
