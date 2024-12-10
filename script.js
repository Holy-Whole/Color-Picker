var x, xo;
var ob = null;
document.onmousemove = fmm;
document.onmouseup = fmu;

function fmd(obj) {
    ob = obj;
    xo = x - ob.getBoundingClientRect().left;
}

function fmm(event) {
    x = event.pageX;
    
    if (ob) {
        const parent = ob.parentElement;
        const parentRect = parent.getBoundingClientRect();
        const obWidth = ob.offsetWidth;

        let newLeft= x- parentRect.left - xo;

        if(newLeft < 0) newLeft = 0;
        if(newLeft > parentRect.width - obWidth) newLeft = parentRect.width - obWidth;

        ob.style.left = newLeft + "px";

        const relativeX=Math.round((newLeft / (parentRect.width - obWidth)) * 255);

        if(ob.id === "rgb1") {
            document.getElementById("r").innerHTML = relativeX;
        }else if(ob.id === "rgb2") {
            document.getElementById("g").innerHTML = relativeX;
        }else if (ob.id === "rgb3") {
            document.getElementById("b").innerHTML = relativeX;
        }

        var r=parseInt(document.getElementById("r").innerHTML);
        var g=parseInt(document.getElementById("g").innerHTML);
        var b=parseInt(document.getElementById("b").innerHTML);
        document.getElementById("color1").style.backgroundColor=`rgb(${r},${g},${b})`;
        document.getElementById("color2").style.backgroundColor=`rgb(${r},${g},${b})`;

    }
}
function fmu(){
    ob=null;
}

document.querySelectorAll("#rgb1, #rgb2, #rgb3").forEach((slider) => {
    slider.onmousedown = function () {
        fmd(this);
    };
});