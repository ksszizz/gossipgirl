const form = document.getElementById('fullForm');

form.addEventListener('submit', function(event) {
    let isValid = true;

    
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    document.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('input-error'));

    
    const scandal = document.getElementById('scandal');
    const who = document.getElementById('who');
    const email = document.getElementById('email');
    const details = document.getElementById('details');
    const dramaLevel = document.getElementById('drama_level');

    
    if (scandal.value.trim().length < 10) {
        showError('error-scandal', 'The scandal must be at least 10 characters long.', scandal);
        isValid = false;
    }

    
    if (who.value.trim().length < 2) {
        showError('error-who', 'Name must be at least 2 characters long.', who);
        isValid = false;
    }

    
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError('error-email', 'Please enter a valid email address.', email);
        isValid = false;
    }

    if (details.value.trim().length < 20) {
        showError('error-details', 'Details must be at least 20 characters long.', details);
        isValid = false;
    }

    if (!dramaLevel.value) {
        showError('error-drama', 'Please select a drama level.', dramaLevel);
        isValid = false;
    }


    if (!isValid) {
        event.preventDefault();
        console.log("Form validation failed!");
    } else {
        event.preventDefault();
        console.log("All data is valid, submitting...");
        alert('Gossip Girl has received your tip! Get ready for the spotlight... XOXO');
        form.reset();
    }
});

function showError(errorId, message, input) {
    const error = document.getElementById(errorId);
    error.textContent = message;
    error.classList.add('show');
    input.classList.add('input-error');
}