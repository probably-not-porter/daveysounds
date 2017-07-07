var t = 0

function clickHandle(n) {
    console.log(`sounds/${n}`)
    var audio = new Audio(`sounds/${n}`)
    audio.play()
    if (n.indexOf("twammich") >= 0) {
        twammichCounter()
    }
}

function twammichCounter() {
    t++
    console.log(t)
    document.getElementById("tCount").textContent=`🍔 twAMMICh_cOUNteRR: ${t}`;
}

function switchSet(n,x) {
    console.log(`${n}`)
    document.getElementById("cat1").style.display = 'none'
    document.getElementById("cat2").style.display = 'none'
    document.getElementById("cat3").style.display = 'none'
    document.getElementById("cat4").style.display = 'none'
    document.getElementById("cat5").style.display = 'none'

    document.getElementById(`${n}`).style.display = 'block'

    document.getElementById("n1").style.color = 'black'
    document.getElementById("n2").style.color = 'black'
    document.getElementById("n3").style.color = 'black'
    document.getElementById("n4").style.color = 'black'
    document.getElementById("n5").style.color = 'black'

    document.getElementById(`${x}`).style.color = 'red'

}
