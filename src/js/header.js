// // burger menu

const navMenu = document.getElementById('nav-menu'),
      navToogle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

 // Menu açılır
  navToogle.addEventListener('click', () => {
         navMenu.classList.add('show-menu')
 })
  // Menu bağlanır
  navClose.addEventListener('click', () => {
         navMenu.classList.remove('show-menu')
 })
  // AXTARIŞ İCONU
  const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')
  // AXTARIŞ İCONU AÇILIR

 searchBtn.addEventListener('click', () => {
         search.classList.add('show-search')
 })
  // AXTARIŞ İCONU BAĞLANIR

 searchClose.addEventListener('click', () => {
         search.classList.remove('show-search')
 })

 // LOGİN
  const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')
  // LOGİN BÖLMESİ AÇILIŞI
  loginBtn.addEventListener('click', () => {
         login.classList.add('show-login')
 })

 // LOGİN BÖLMESİ BAĞLANIŞI

 loginClose.addEventListener('click', () => {
         login.classList.remove('show-login')

})


// All tasks should be written as in the following example (you can
//     use variable naming method or adding a comment after the expression):
    
    // 2)
    // expression = true ||  false ||  true && true
    // step_one = true ||  false || true
    // step_two = true || true
    // step_three = true
    // console.log(step_three === expression)
    
    // 1-ci Task : True || False &&  True || ( True && False) && True || False
    // 2-ci Task : True ||  False ||  True && True
    // 3-cu Task : False && False || False || true
    // 4-cu Task :  False && False && (True ||  False && (True || False && True)) or not True && False && ( False ||  True)
    // 5-ci Task : ( True &&  False) && ( True || (not False))

    // 3)
    // expression = false && false || false || true
    // step_one = false || false || true
    // step_two = false || true
    // step_three = true
    // console.log(step_three === expression)
    
    // 4)
    // expression = false && false && true ||  false && true || false && true || !true && false && ( false ||  true)
    //  step_one = false || false || false || false
    //  step_two = false || false || false
    //  step_three = false
    //  console.log(step_three === expression)

    // 5)
    // expression = ( true &&  false) && ( true || (!false))
    // step_one = false && true
    // step_two = 
    // step_three = false
    // console.log(step_three === expression)