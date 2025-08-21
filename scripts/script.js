document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    console.log({ name, email, subject, message });
    
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('contactForm').reset();
    
    setTimeout(() => {
        document.getElementById('successMessage').classList.add('hidden');
    }, 3000);
});