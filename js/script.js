document.addEventListener('DOMContentLoaded', () => {

    const openBtn = document.getElementById('openBtn');
    const envelope = document.querySelector('.floating');

    window.addEventListener('pageshow', () => {

        if (envelope) {
            envelope.classList.remove('opening');
        }

        const ripple = document.getElementById('ripple-effect');

        if (ripple) {
            ripple.remove();
        }

    });

    if (openBtn && envelope) {

        openBtn.addEventListener('click', () => {

            const ripple = document.createElement('div');
            ripple.id = 'ripple-effect';

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

            envelope.classList.add('opening');

            setTimeout(() => {
                window.location.href = 'proposta.html';
            }, 1000);

        });

    }

});