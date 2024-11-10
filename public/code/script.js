// Select all dropdown toggles
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Toggle the active state on click
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (event) {
        // Prevent default anchor behavior
        event.preventDefault();

        // Toggle 'active' class for clicked dropdown
        this.classList.toggle('active');

        // Close other dropdowns (optional: if you want only one open at a time)
        dropdownToggles.forEach(otherToggle => {
            if (otherToggle !== this) {
                otherToggle.classList.remove('active');
            }
        });
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('nav')) {
        dropdownToggles.forEach(toggle => toggle.classList.remove('active'));
    }
});
