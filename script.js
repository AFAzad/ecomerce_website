const bar = document.getElementById('bar');
const nav = document.getElementById('navabr');

if (bar){
    bar.addEventListener('click',  () => {
        nav.classList.add('active');
    })
}
