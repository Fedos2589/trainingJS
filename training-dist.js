function generateABC() {
    for (var o, r = [], e = [], n = [], l = [], t = 97; t <= 122; t++) o = String.fromCharCode(t), 
    r.push(o);
    console.log(r);
    for (t = 65; t <= 90; t++) o = String.fromCharCode(t), e.push(o);
    console.log(e);
    for (t = 0; t <= 9; t++) n.push(t);
    return console.log(n), l = r.concat(e, n, "_"), console.log(l), l;
}

function generatePrime(o) {
    generateABC();
    for (var r = 0; r <= 9; r++) {
        var e = 100 * math.random();
        e < resultABC.lenght && (""[r] = resultABC[e]), console.log("");
    }
}
//# sourceMappingURL=training-dist.js.map