window.onload= function () {
    (function () {
        if(winH>winW) {
            window.orientation = 90;
            //window.orientation="Landscape";
            console.log(1);
        }
    })();
};


var winW=document.documentElement.clientWidth;
var winH=document.documentElement.clientHeight;
var desW=640;
//  这个desW要根据设计稿的宽度进行修改
var rem=desW/100;
if(winW>desW*1.5)winW=winH;
//if(winW>desW)winW=desW;//如果是PC端，就不修改字体了
//    winW=winW>desW?desW:winW;//也可以这么写
document.documentElement.style.fontSize=winW/rem+"px";



//
//function orientationChange() {
//    switch(window.orientation) {
//        case 0:
//        default :
//            window.style.transform("rotate(90deg)");
//    }
//}
//
//window.addEventListener('load', function(){
//
//    orientationChange();
//
//    window.onorientationchange = orientationChange;
//
//});


//jquerymobile没有这个功能，他只是一个前端展示框架。且无操作手机其他权限的功能。
//使用window.orientation可以判断是否横竖屏
//原生JS实现切换：
//<script>
//屏幕方向标识，0横屏，其他值竖屏
/*

var orientation=0;

//转屏事件，内部功能可以自定义

function screenOrientationEvent(){

    if(orientation == 0)document.getElementById("change").value="竖";

    else document.getElementById("change").value="横";

}

var innerWidthTmp = window.innerWidth;

//横竖屏事件监听方法

function screenOrientationListener(){

    try{

        var iw = window.innerWidth;

        //屏幕方向改变处理

        if(iw != innerWidthTmp){

            if(iw>window.innerHeight)orientation = 90;

            else orientation = 0;

            //调用转屏事件

            screenOrientationEvent();

            innerWidthTmp = iw;

        }

    } catch(e){alert(e);}

    //间隔固定事件检查是否转屏，默认500毫秒

    setTimeout("screenOrientationListener()",500);

}

//启动横竖屏事件监听

screenOrientationListener();
//</script>
//<body onload="screenOrientationEvent()">
//
//<input id="change" type="text" value=""/>
//
//</body>
window.body.onload=screenOrientationEvent;*/
