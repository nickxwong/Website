const tabs = document.querySelectorAll('#tabs .algorithm')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(cur => {
            if (cur == tab) {
                cur.classList.add('selected')
            } else {
                cur.classList.remove('selected')
            }
        })
    })
})

function showContent(algorithm) {
    console.log(algorithm)
    document.querySelectorAll('.description').forEach(cur => {
        cur.style.display = 'none'
    })
    document.getElementById(algorithm).style.display = 'block'
}