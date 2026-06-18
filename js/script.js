document.addEventListener('DOMContentLoaded', () => {

    const openBtn = document.getElementById('openBtn');
    const envelope = document.querySelector('.floating');

    openBtn.addEventListener('click', () => {

        const ripple = document.createElement('div');

        ripple.className =
            'fixed inset-0 pointer-events-none z-[100] bg-white opacity-0 transition-opacity duration-1000';

        document.body.appendChild(ripple);

        requestAnimationFrame(() => {

            ripple.style.opacity = '0.4';

            setTimeout(() => {

                ripple.style.opacity = '0';

                setTimeout(() => {
                    ripple.remove();
                }, 1000);

            }, 100);

        });

        envelope.style.transform = 'scale(1.2) translateY(-200px)';
        envelope.style.opacity = '0';

        envelope.style.transition =
            'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            window.location.href = '../proposta.html';
        }, 1000);
    });

});