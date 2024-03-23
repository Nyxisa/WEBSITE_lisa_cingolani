const cursor = document.querySelector('.custom-cursor');
    
// Custom cursor follow the default cursor
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: '+(e.pageY - 10)+'px; left: ' +(e.pageX - 10)+'px;')
});

const links = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');

// Custom cursor change style on hover links
for(let x of links) {

    x.addEventListener('mouseenter', () => {
     cursor.classList.add('custom-cursor-hover');
    });

    x.addEventListener('mouseleave', () => {
     cursor.classList.remove('custom-cursor-hover');
    });
        
}

// Custom cursor change style on hover links
for(let x of buttons) {

    x.addEventListener('mouseenter', () => {
     cursor.classList.add('custom-cursor-hover');
    });

    x.addEventListener('mouseleave', () => {
     cursor.classList.remove('custom-cursor-hover');
    });
        
}