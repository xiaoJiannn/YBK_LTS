function tab(item, session) {
    for (let i = 0; i < item.length; i++) {
        item[i].index = i
        item[i].addEventListener('click', function() {
            for (let i = 0; i < item.length; i++) {
                item[i].className = ''
                session[i].style.display = 'none'
            }
            this.className = 'switchLogin'
            session[this.index].style.display = 'block'
        })

    }
}