document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang === 'en') {
                window.location.href = 'rejoice_en.html';
            } else {
                window.location.href = 'index.html';
            }
        });
    });