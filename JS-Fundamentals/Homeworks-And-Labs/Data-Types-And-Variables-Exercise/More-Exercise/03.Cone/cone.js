function cone(r, h) {
    let volume = (1 / 3) * Math.PI * (r * r) * h;
    let area = Math.PI * r * (r + Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)))
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3.3, 7.8);