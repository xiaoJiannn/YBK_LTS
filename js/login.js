window.addEventListener('load', function() {
    // switch login
    let login = document.querySelector('.login-switch')
    let span = login.querySelectorAll('span')
    let loginBox = document.querySelector('.login-session')
    let cId = loginBox.children

    // tab-switch function

    tab(span, cId)





    //remember password
    let remember = this.document.querySelector('.troggle')
    let spanPas = remember.querySelector('span')
    let flag = true
    remember.addEventListener('click', function() {
        spanPas.className = ''
        if (flag == true) {
            spanPas.className = 'glyphicon glyphicon-ok-circle'
            flag = false
        } else {
            spanPas.className = 'glyphicon glyphicon-unchecked'
            flag = true
        }
    })

    // Verification code
    let hidden = this.document.querySelector('.hidden-login')
    let user = hidden.querySelector('.user')
    let tele = user.querySelector('input')
    let codeSend = user.querySelectorAll('span')
    tele.addEventListener('blur', function() {
        if (this.value) {
            codeSend[1].style.cursor = 'pointer'
            codeSend[1].style.color = '#323232'
        }
    })
    codeSend[1].addEventListener('click', function() {
        if (tele.value) {
            let i = 5
            let send = null
            codeSend[1].style.cursor = 'not-allow'
            codeSend[1].style.color = '#dddddd'
            send = setInterval(() => {
                if (i >= 0) {
                    codeSend[1].innerHTML = `在${i}秒后再次发送`
                    i--
                } else {
                    codeSend[1].innerHTML = `获取验证码`
                    codeSend[1].style.color = '#323232'

                    clearInterval(send)
                }
            }, 1000)


        }
    })







})