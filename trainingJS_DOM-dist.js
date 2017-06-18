!function() {
    var e = document.querySelector(".number__input"), t = document.querySelector(".color__input"), n = document.querySelector(".container"), a = !0;
    e.addEventListener("input", function() {
        for (var e = this.value, t = "", a = 0; a < e; a++) {
            var c = document.createElement("div");
            c.className = "block__item", c.innerText = a + 1, t += c.outerHTML;
        }
        n.innerHTML = t;
    }), t.addEventListener("change", function() {
        var e = this.value, t = n.children;
        a = !a;
        for (var c = 0; c < t.length; c++) a && c % 2 == 0 && (t[c].style.background = e), 
        a || c % 2 == 0 || (t[c].style.background = e);
        console.log(e);
    });
}(), function() {
    function e(e, t) {
        var a = document.createElement("div");
        a.className = "game__item", t && a.classList.add(t), a.innerText = e, n.appendChild(a);
    }
    for (var t, n = document.querySelector(".game"), a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ], c = a.length, i = 0; i < c; i++) {
        var r = function(e, t) {
            return Math.floor(Math.random() * (t - e)) + e;
        }(0, a.length);
        e(a[r]), a.splice(r, 1);
    }
    e("", "game__item_black"), n.addEventListener("click", function(e) {
        var n = e.target;
        "game__item" == n.className && t.classList.contains("game__item_active") && (t.innerText = n.innerText, 
        t.classList.remove("game__item_black", "game__item_active"), n.classList.add("game__item_black")), 
        n.classList.contains("game__item_black") && (n.classList.toggle("game__item_active"), 
        t = n);
    });
}();
//# sourceMappingURL=trainingJS_DOM-dist.js.map