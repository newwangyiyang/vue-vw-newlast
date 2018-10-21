export default {
    inserted(el) {
        var parentNode = window.self;
        var pWidth = parentNode.innerWidth,
            pHeight = parentNode.innerHeight;
        el.addEventListener("touchstart", function (event) {
            //当只有一个手指时              .
            if (event.touches.length == 1) {
                //禁止浏览器默认事
                event.preventDefault();
            };
            var touch = event.targetTouches[0];
            var disX = touch.clientX - el.offsetLeft,
                disY = touch.clientY - el.offsetTop;
            var oWidth = el.offsetWidth,
                oHeight = el.offsetHeight;

            el.addEventListener("touchmove", function (event) {
                var touch = event.targetTouches[0];
                el.style.position = 'fixed';
                el.style.left = touch.clientX - disX + "px";
                el.style.top = touch.clientY - disY + "px";
                //左侧
                if (el.offsetLeft <= 0) {
                    el.style.left = 0;
                }
                //右侧
                if (el.offsetLeft >= pWidth - oWidth) {
                    el.style.left = pWidth - oWidth + "px";
                }
                //上面
                if (el.offsetTop <= 0) {
                    el.style.top = 0;
                }
                //下面
                if (el.offsetTop >= pHeight - oHeight) {
                    el.style.top = pHeight - oHeight + "px";
                }
            });
            el.addEventListener("touchend", function (event) {
                el.removeEventListener("touchmove", undefined);
                el.removeEventListener("touchend", undefined);
            });
        });
    }
};