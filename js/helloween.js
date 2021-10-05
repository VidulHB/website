var checkbox = document.querySelector('input[name=helloween]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'helloween')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}