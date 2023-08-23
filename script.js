const nav = document.querySelector('nav')
const home = document.getElementById('home')
const about = document.getElementById('about')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact')
const btn_home = document.getElementById('btn-home')
const btn_about = document.getElementById('btn-about')
const btn_portfolio = document.getElementById('btn-portfolio')
const btn_contact = document.getElementById('btn-contact')
const init_about = about.getBoundingClientRect().top
const we_do = document.getElementById('we-do')
const init_we_do = we_do.getBoundingClientRect().top
const before_port = document.getElementById('before-port')
let sw = true
document.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const innerHeight = window.innerHeight
    if (window.scrollY > 10) {
        nav.classList.replace('nav', 'show-nav')
    } else {
        nav.classList.replace('show-nav', 'nav')
    }
    nav_active()
    parallax()

    if (portfolio.offsetTop - scrollY - innerHeight < 200 && sw) {
        const items = document.getElementById('port-container').children
        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            element.style.animationDelay = `${i * 0.3}s`
            element.classList.add('display')
        }
        sw = false
    }
})
const nav_active = () => {
    const navHeight = nav.getBoundingClientRect().height
    if (home.getBoundingClientRect().top < 0) {
        btn_home.classList.add('active')
    } else {
        btn_home.classList.remove('active')
    }
    if (about.getBoundingClientRect().top < navHeight) {
        btn_home.classList.remove('active')
        btn_about.classList.add('active')
    }
    else {
        btn_about.classList.remove('active')

    }
    if (portfolio.getBoundingClientRect().top < navHeight) {
        btn_about.classList.remove('active')
        btn_portfolio.classList.add('active')
    }
    else {
        btn_portfolio.classList.remove('active')
    }
    if (contact.getBoundingClientRect().top < contact.getBoundingClientRect().height / 2) {
        btn_portfolio.classList.remove('active')
        btn_contact.classList.add('active')
    } else {
        btn_contact.classList.remove('active')
    }
}
const parallax = () => {
    document.getElementById('left-zone').style.translate = `${home.getBoundingClientRect().top}px ${home.getBoundingClientRect().top}px`
    document.querySelector('#right-zone>p').style.translate = `${-home.getBoundingClientRect().top}px`
    document.getElementById('c1').style.top = `${-0.6 * window.scrollY}px`
    document.getElementById('c2').style.top = `${-0.3 * window.scrollY - 20}px`
    document.getElementById('c3').style.top = `${-0.5 * window.scrollY}px`
    document.getElementById('img-about-1').style.translate = `0px ${(about.offsetTop - scrollY - innerHeight) * 0.1}px`
    document.getElementById('img-about-2').style.translate = `0px ${(about.offsetTop - scrollY - innerHeight) * 0.2}px`
    document.getElementById('img-we-do-1').style.translate = `0px ${(about.offsetTop - scrollY - innerHeight) * 0.1}px`
    document.getElementById('img-we-do-2').style.translate = `0px ${(about.offsetTop - scrollY - innerHeight) * 0.2}px`
    document.getElementById('card-2').style.translate = `${-(before_port.offsetTop - scrollY - innerHeight) * 0.2}px 0px`
    document.querySelector('#contact>div').style.translate = `${(contact.offsetTop - scrollY - innerHeight)*0.7}px 0px`
}
const ham = document.getElementById('nav-ham')
const ham_on = () =>{
    ham.classList.toggle('ham-on')
}