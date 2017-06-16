var wrap = document.querySelector(".wrap"), block = document.querySelector(".block"), allowDrag = !1, coords = {}, borderWidth = 4;

block.addEventListener("mousedown", function(o) {
    allowDrag = !0;
    var e = wrap.getBoundingClientRect(), t = block.getBoundingClientRect();
    coords.block = {
        offsetLeft: t.left,
        offsetTop: t.top,
        clickedX: o.layerX,
        clickedY: o.layerY,
        blockWidth: t.width,
        blockHeight: t.height
    }, coords.wrap = {
        offsetLeft: e.left,
        offsetTop: e.top,
        wrapWidth: e.width,
        wrapHeight: e.height
    };
}), document.addEventListener("mousemove", function(o) {
    if (allowDrag) var e = o.pageX - coords.wrap.offsetLeft - coords.block.clickedX, t = o.pageY - coords.wrap.offsetTop - coords.block.clickedX;
    e < 0 && (e = 0), t < 0 && (t = 0), e > coords.wrap.wrapWidth - coords.block.blockWidth && (e = coords.wrap.wrapWidth - coords.block.blockWidth - borderWidth), 
    t > coords.wrap.wrapHeight - coords.block.blockHeight && (t = coords.wrap.wrapHeight - coords.block.blockHeight - borderWidth), 
    block.style.top = t + "px", block.style.left = e + "px";
}), document.addEventListener("mouseup", function() {
    allowDrag = !1;
});
//# sourceMappingURL=trainingJS_DOM-dist.js.map