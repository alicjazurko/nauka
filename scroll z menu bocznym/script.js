
document.addEventListener('scroll', function() {
    let scrollValue = window.scrollY;

    let sectionA = document.querySelector('section div:nth-child(1)');
    let sectionB = document.querySelector('section div:nth-child(2)');
    let sectionC = document.querySelector('section div:nth-child(3)');
    let sectionD = document.querySelector('section div:nth-child(4)');
    let sectionE = document.querySelector('section div:nth-child(5)');

    const navA = document.querySelector('nav ul li:nth-child(1)');
    const navB = document.querySelector('nav ul li:nth-child(2)');
    const navC = document.querySelector('nav ul li:nth-child(3)');
    const navD = document.querySelector('nav ul li:nth-child(4)');
    const navE = document.querySelector('nav ul li:nth-child(5)');

    const sectionAfromTop = sectionA.offsetTop;
    const sectionAheight = sectionA.offsetHeight;
    const sectionBfromTop = sectionB.offsetTop;
    const sectionBheight = sectionB.offsetHeight;
    const sectionCfromTop = sectionC.offsetTop;
    const sectionCheight = sectionC.offsetHeight;
    const sectionDfromTop = sectionD.offsetTop;
    const sectionDheight = sectionD.offsetHeight;
    const sectionEfromTop = sectionE.offsetTop;
    const sectionEheight = sectionE.offsetHeight;

    if(scrollValue >= 0 && scrollValue < sectionBfromTop - 100) {
        navA.classList.add('active');
    } else {
        navA.classList.remove('active');
    }
    if(scrollValue > sectionBfromTop - 100 && scrollValue < sectionCfromTop - 150) {
        navB.classList.add('active');
    } else {
        navB.classList.remove('active');
    }
    if(scrollValue > sectionCfromTop - 150 && scrollValue < sectionDfromTop - 200) {
        navC.classList.add('active');
    } else {
        navC.classList.remove('active');
    }
    if(scrollValue > sectionDfromTop - 200 && scrollValue < sectionEfromTop - 250) {
        navD.classList.add('active');
    } else {
        navD.classList.remove('active');
    }
    if(scrollValue > sectionEfromTop -250) {
        navE.classList.add('active');
    } else {
        navE.classList.remove('active');
    }

})

