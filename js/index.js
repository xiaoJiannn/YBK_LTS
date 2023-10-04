window.addEventListener('load', function() {
    let classItem = document.querySelector('.classItem')
    let hiddenSession = document.querySelector('.Mcreated')
    let selectClass = document.querySelector('.selectItem')
    let span = selectClass.querySelectorAll('span')
    let classList = classItem.children

    // tab switch function
    for (let i = 0; i < span.length; i++) {
        span[i].index = i

        span[i].addEventListener('click', function() {
            for (let i = 0; i < span.length; i++) {
                span[i].className = ''
            }
            this.className = 'switchLOGIN'

            if (this.index == 0) {
                classList[1].style.display = 'none'
                classList[2].style.display = 'flex'

            } else if (this.index == 1) {
                classList[1].style.display = 'flex'
                classList[2].style.display = 'none'

            }
        })
    }
    // show class
    let showClass = this.document.querySelector('.joinClass')
    let addBtn = this.document.querySelector('.glyphicon-plus-sign')
    let leave = this.document.querySelector('.show')
    addBtn.addEventListener('mouseover', function() {
        showClass.style.display = 'block'
        showClass.className = 'showClass joinClass'
        leave.addEventListener('mouseleave', function() {
            showClass.style.display = 'none'
        })
        showClass.addEventListener('mouseleave', function() {
            showClass.style.display = 'none'
        })
    })




})