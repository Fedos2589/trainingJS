!function() {
    var e = document.querySelector(".number__input"), n = document.querySelector(".color__input"), t = document.querySelector(".container"), r = !0;
    e.addEventListener("input", function() {
        for (var e = this.value, n = "", r = 0; r < e; r++) {
            var o = document.createElement("div");
            o.className = "block__item", o.innerText = r + 1, n += o.outerHTML;
        }
        t.innerHTML = n;
    }), n.addEventListener("change", function() {
        var e = this.value, n = t.children;
        r = !r;
        for (var o = 0; o < n.length; o++) r && o % 2 == 0 && (n[o].style.background = e), 
        r || o % 2 == 0 || (n[o].style.background = e);
        console.log(e);
    });
}();
//# sourceMappingURL=trainingJS_DOM-dist.js.map