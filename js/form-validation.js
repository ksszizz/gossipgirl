
    const form = document.getElementById('fullForm');
    
    const scandal = document.getElementById('scandal');
    const who = document.getElementById('who');
    const email = document.getElementById('email');
    const details = document.getElementById('details');
    const dramaLevel = document.getElementById('drama_level');

    const errorScandal = document.getElementById('error-scandal');
    const errorWho = document.getElementById('error-who');
    const errorEmail = document.getElementById('error-email');
    const errorDrama = document.getElementById('error-drama');
    const errorDetails = document.getElementById('error-details');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(el => {
            el.textContent = '';
            el.classList.remove('show');
        });
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(el => el.classList.remove('input-error'));

        if (scandal.value.trim().length < 10) {
            errorScandal.textContent = "The scandal must be at least 10 characters long.";
            errorScandal.classList.add('show');
            scandal.classList.add('input-error');
            isValid = false;
        }

        if (who.value.trim().length < 2) {
            errorWho.textContent = "Name must be at least 2 characters long.";
            errorWho.classList.add('show');
            who.classList.add('input-error');
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
            errorEmail.textContent = "Please enter a valid email address.";
            errorEmail.classList.add('show');
            email.classList.add('input-error');
            isValid = false;
        }

        if (details.value.trim().length < 20) {
            errorDetails.textContent = 'Details must be at least 20 characters long.';
            errorDetails.classList.add('show');
            details.classList.add('input-error');
            isValid = false;
        }

        if (dramaLevel.value === "") {
            errorDrama.textContent = "Please select a drama level.";
            errorDrama.classList.add('show');
            dramaLevel.classList.add('input-error');
            isValid = false;
        }

        if (!isValid) {
        event.preventDefault();
        console.log("Form validation failed!");
        } 
        else {
        event.preventDefault();
        console.log("All data is valid, submitting...");
        alert('Gossip Girl has received your tip! Get ready for the spotlight... XOXO');
        form.reset();
        }
    });
