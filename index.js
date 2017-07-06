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
