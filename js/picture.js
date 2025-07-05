 document.addEventListener('DOMContentLoaded', function() {
            const scrollImages = document.querySelectorAll('.scroll-image');
            
            scrollImages.forEach(image => {
                image.addEventListener('click', function() {
                    const targetId = this.getAttribute('data-target');
                    const targetSection = document.getElementById(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });