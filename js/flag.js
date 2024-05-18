
function animateKrFlag() {
    var width = window.innerWidth
    if (width>991) {
        var container = document.querySelector('#krFlagContainer')
        var overlay = document.querySelector('#krOverlay')
        container.addEventListener('mousemove', function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -4/45 * x + 20
            var rotateX = -2/15 * y + 20
            overlay.style = `background-position : ${x/5 + y/5}%`
            container.style = `transform : perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        })
        container.addEventListener('mouseout', function(){
            overlay.style = 'filter : opacity(0)'
            container.style = 'transform : perspective(350px) rotateY(0deg) rotateX(0deg)'
        })
    }
}

function animateThFlag() {
    var width = window.innerWidth
    if (width>991) {
        var container = document.querySelector('#thFlagContainer')
        var overlay = document.querySelector('#thOverlay')
        container.addEventListener('mousemove', function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -4/45 * x + 20
            var rotateX = -2/15 * y + 20
            overlay.style = `background-position : ${x/5 + y/5}%`
            container.style = `transform : perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        })
        container.addEventListener('mouseout', function(){
            overlay.style = 'filter : opacity(0)'
            container.style = 'transform : perspective(350px) rotateY(0deg) rotateX(0deg)'
        })
    }
}

function animateSgFlag() {
    var width = window.innerWidth
    if (width>991) {
        var container = document.querySelector('#sgFlagContainer')
        var overlay = document.querySelector('#sgOverlay')
        container.addEventListener('mousemove', function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -4/45 * x + 20
            var rotateX = -2/15 * y + 20
            overlay.style = `background-position : ${x/5 + y/5}%`
            container.style = `transform : perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        })
        container.addEventListener('mouseout', function(){
            overlay.style = 'filter : opacity(0)'
            container.style = 'transform : perspective(350px) rotateY(0deg) rotateX(0deg)'
        })
    }
}