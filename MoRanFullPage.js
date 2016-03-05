    window.onload= function () {
        var height=document.body.offsetHeight;
        var all=document.getElementById("pages")
        var pages=document.querySelectorAll("#pages>div");
        var count=0;
        var flag=true;
        ;(function (){
        var sideBar = document.createElement("div"); 
        sideBar.setAttribute("id", "sideBar"); 
        document.body.appendChild(sideBar);
            for(var i=0;i<pages.length;i++){
                pages[i].style.height=document.body.offsetHeight+"px";
                for(var j=0;j<pages[i].childNodes.length;j++){
                    var img=pages[i].childNodes[j];
                    if(img.nodeType==8){
                        pages[i].style.backgroundImage="url("+img.data+")";
                        break;
                    }
                }
                if(j==pages[i].childNodes.length)pages[i].innerHTML="<h1>请在源代码中这边写一个包含图片<strong>地址的注释</strong>!</h1>"
                sideBar.innerHTML+="<div></div>"
            }
            sideBar.style.height=50*i+"px"
        })()


        var ancer=sideBar.getElementsByTagName("div")
        change()
        document.body.onmousewheel=function (event){
            if(flag){
                event = event || window.event;
                event.wheelDelta<0?count==pages.length-1?count:++count:count==0?count:--count;
                all.style.top=-(height*count)+"px";
                change()
                flag=false;
                setTimeout(function () {
                    flag=true
                },800)
            }
        }
        for(var i=0;i<ancer.length;i++){
            ancer[i].onclick= (function (i) {
                return function (){
                    count=i;
                    all.style.top=-(height*count)+"px";
                    change()
                }
            })(i)
        }
        function change(){
            for(var j=0;j<ancer.length;j++){
                ancer[j].className="nomorle"
            }
            ancer[count].className="active"
        }
    }