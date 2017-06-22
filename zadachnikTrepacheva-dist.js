var f1 = function() {
    for (var o = 1; o <= 100; o++) console.log(o);
}, f2 = function() {
    for (var o = 100; o >= 1; o--) console.log(o);
}, f3 = function() {
    for (var o = 1; o <= 100; o++) o % 2 == 0 && console.log(o);
}, f4 = function() {
    for (var o = [], n = 0; n <= 9; n++) o[n] = "x";
    console.log(o);
}, f5 = function() {
    for (var o = [], n = 0; n < 10; n++) o[n] = n + 1;
    console.log(o);
}, f6 = function() {
    for (var o = [], n = 0; n < 10; n++) o[n] = Math.random().toFixed(2);
    console.log(o);
}, f7 = function() {
    for (var o = [], n = 0; n < 10; n++) o[n] = function(o, n) {
        return Math.random() * (n - o) + o;
    }(1, 30).toFixed(2);
    return o;
}, f8 = function() {
    for (var o = [ "2", "5", "1", "6", "4", "2", "9", "34", "12", "145", "2", "5", "7", "2", "3", "1029", "34", "4657", "34", "164" ], n = 0; n < o.length; n++) o[n] > 0 && o[n] < 10 && console.log(o[n]);
}, f9 = function() {
    for (var o = [ "2", "1", "6", "4", "2", "9", "34", "12", "145", "2", "7", "2", "3", "1029", "34", "4657", "34", "164" ], n = 0; n < o.length; n++) if (5 == o[n]) {
        console.log("Есть!");
        break;
    }
}, f10 = function() {
    for (var o = [ "2", "1", "6", "4", "2", "9", "34", "12", "145", "2", "7", "2", "3", "1029", "34", "4657", "34", "164" ], n = 0; n < o.length; n++) n % 2 == 0 && console.log(o[n]);
}, f11 = function() {
    for (var o = [ "2", "1", "6", "4", "2", "9", "34", "12", "145", "2", "7", "2", "3", "1029", "34", "4657", "34", "164" ], n = 0, f = 0; f < o.length; f++) n += parseInt(o[f]), 
    console.log(n);
    console.log(n);
}, f12 = function() {
    for (var o = [ "2", "1", "6", "4", "2", "9", "34", "12", "145", "2", "7", "2", "3", "1029", "34", "4657", "34", "164" ], n = 0, f = 0; f < o.length; f++) n += Math.pow(parseInt(o[f]), 2), 
    console.log(n);
    console.log(n);
}, f13 = function() {
    for (var o = [ "2", "1", "6", "4", "2", "9", "34", "12", "145", "2", "7", "2", "3", "1029", "34", "4657", "34", "164" ], n = 0, f = 0; f < o.length; f++) n += parseInt(o[f]);
    console.log(n / o.length);
}, f14 = function() {
    var o = [ 0, 1 ];
    for (i = 0; i <= 17; i++) o[i + 2] = o[i] + o[i + 1];
    console.log(o);
};
//# sourceMappingURL=zadachnikTrepacheva-dist.js.map