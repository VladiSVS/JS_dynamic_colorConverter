
// rgb(255, 192, 203) = #FFC0CB
// rgb(128, 0, 128) = #800080
// rgb(255, 165, 0) = #FFA500

let colorRgb = [255, 255, 255]

console.log(colorRgb)

changeBackground = (color) => {
    if (color == 'pink') {
        colorSplice(255, 192, 203)
        defaultRangeColor()
        displayBackground()
    } else if (color == 'purple') {
        colorSplice(128, 0, 128)
        defaultRangeColor()
        displayBackground()
    } else if (color == 'orange') {
        colorSplice(255, 165, 0)
        defaultRangeColor()
        displayBackground()
    }
    console.log(colorRgb)
}

colorSplice = (rotParam, grunParam, blauParam) => {
    colorRgb.splice(0, 1, rotParam)
    colorRgb.splice(1, 1, grunParam)
    colorRgb.splice(2, 1, blauParam)
}

defaultRangeColor = () => {
    document.getElementById("rot").value = colorRgb[0]
    document.getElementById("grun").value = colorRgb[1]
    document.getElementById("blau").value = colorRgb[2]
}

displayHex = (r, g, b) => {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}

displayBackground = () => {
    let colorHex = displayHex(colorRgb[0], colorRgb[1], colorRgb[2])
    document.body.style.background = `rgb(${colorRgb[0]}, ${colorRgb[1]}, ${colorRgb[2]})`
    document.getElementById("demo").innerHTML = `rgb(${colorRgb[0]}, ${colorRgb[1]}, ${colorRgb[2]}) = ${colorHex}`
    console.log(colorHex)
}

displayBackground()

changeHandle = () => {
    document.querySelector("#rot").addEventListener("click", () => {
        let indexRot = Number(document.getElementById("rot").value)
        colorRgb.splice(0, 1, indexRot)
        displayBackground()
    })
    document.querySelector("#grun").addEventListener("click", () => {
        let indexGrun = Number(document.getElementById("grun").value)
        colorRgb.splice(1, 1, indexGrun)
        displayBackground()
    })
    document.querySelector("#blau").addEventListener("click", () => {
        let indexBlau = Number(document.getElementById("blau").value)
        colorRgb.splice(2, 1, indexBlau)
        displayBackground()
    })
}
