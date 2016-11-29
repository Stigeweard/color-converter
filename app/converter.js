exports.rgbToHex = function (r, g, b) {
    let redHex = r.toString(16);
    let greenHex = g.toString(16);
    let blueHex = b.toString(16);
    return pad(redHex) + pad(greenHex) + pad(blueHex);
}

function pad(hex) {
    return (hex.length === 1 ? "0" + hex:hex);
}

exports.hexToRGB = function (hex) {
    let red = parseInt(hex.substring(0, 2), 16);
    let green = parseInt(hex.substring(2, 4), 16);
    let blue = parseInt(hex.substring(4, 6), 16);
    return [red, green, blue]
}
