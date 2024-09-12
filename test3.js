document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript geladen');
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('pulse');
        setTimeout(() => {
            cursor.classList.remove('pulse');
        }, 600); // Die Zeit entspricht der Dauer der CSS-Animation
    });
});
