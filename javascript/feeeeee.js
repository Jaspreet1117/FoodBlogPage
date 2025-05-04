document.getElementById('btn').addEventListener('click', function() {
    const feedbackIcons = document.querySelectorAll('.child');
    let selectedFeedback = '';

    feedbackIcons.forEach(function(icon) {
        if (icon.classList.contains('selected')) {
            selectedFeedback = icon.querySelector('h3').textContent;
        }
    });

    if (selectedFeedback) {
        alert('Thank you for your feedback! You selected: ' + selectedFeedback);
    } else {
        alert('Please select a feedback option before submitting.');
    }
});

document.querySelectorAll('.child').forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Remove the 'selected' class from all
        document.querySelectorAll('.child').forEach(function(child) {
            child.classList.remove('selected');
        });
        
        // Add the 'selected' class to the clicked icon
        icon.classList.add('selected');
    });
});
