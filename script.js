document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('twitter-clone-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        updateIcon(true);
    }

    themeToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Toggle light mode class on body
        const isLightMode = document.body.classList.toggle('light-mode');
        
        // Save preference and update icon
        if (isLightMode) {
            localStorage.setItem('twitter-clone-theme', 'light');
            updateIcon(true);
        } else {
            localStorage.setItem('twitter-clone-theme', 'dark');
            updateIcon(false);
        }
    });

    function updateIcon(isLight) {
        if (isLight) {
            themeIcon.className = 'fa-solid fa-moon';
        } else {
            themeIcon.className = 'fa-solid fa-sun';
        }
    }

    // --- Tweet Modal Logic ---
    const tweetModal = document.getElementById('tweet-modal');
    const closeBtn = document.getElementById('close-modal');
    const postBtns = document.querySelectorAll('.post-btn:not(.small)'); // Assuming small goes elsewhere or we can use all
    
    // Fallback if elements not present on a page (though we added them)
    if (tweetModal && closeBtn) {
        postBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tweetModal.style.display = 'flex';
            });
        });

        closeBtn.addEventListener('click', () => {
            tweetModal.style.display = 'none';
        });

        // Close when clicking outside modal content
        tweetModal.addEventListener('click', (e) => {
            if (e.target === tweetModal) {
                tweetModal.style.display = 'none';
            }
        });
    }
});
