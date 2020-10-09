var barAnimatTID;
var pressY = 0;
var endpressX = 0,endpressY = 0;
var viewHeight,page_Height;

function pageMoveEvent(maximum,offset){
    let page_location = document.getElementById('container-page');
    let bar_animation = document.getElementById('dragger-vertical-body');
    let bar_container = document.getElementById('dragger-container');

    const bar_rangeMax = bar_container.clientHeight-bar_animation.clientHeight;
    const settingMov = -page_location.offsetTop+offset;

    if(settingMov>maximum){
        bar_animation.style.top=""+bar_rangeMax+"px";
        page_location.style.top = "-"+maximum+"px";

    }else if(settingMov<0){
        bar_animation.style.top=""+0+"px";
        page_location.style.top = ""+0+"px";
    }else{
        bar_animation.style.top=""+(settingMov/maximum*bar_rangeMax)+"px";
        page_location.style.top = "-"+settingMov+"px";
    }
    checkPosition();
}

function pageJump(location){
    let viewer = document.getElementById('container-viewer');
    let page_location = document.getElementById('container-page');
    let bar_animation = document.getElementById('dragger-vertical-body');
    let bar_container = document.getElementById('dragger-container');
    let maximum = page_location.clientHeight-viewer.clientHeight+50;
    const bar_rangeMax = bar_container.clientHeight-bar_animation.clientHeight;

    bar_animation.style.top=""+(location/maximum*bar_rangeMax)+"px";
    page_location.style.top = "-"+location+"px";
}



function wheelEvent(event){
    let page_location = document.getElementById('container-page');
    let viewer = document.getElementById('container-viewer');
    viewHeight = viewer.clientHeight;
    page_Height = page_location.clientHeight-viewHeight+50;
    const delta = Math.sign(event.deltaY);
    const step_unit = 200;
    if(delta>0){
        pageMoveEvent(page_Height,step_unit);
    }
    else if(delta<0){   
        pageMoveEvent(page_Height,-step_unit)
    }

    let bar_animation = document.getElementById('dragger-vertical-body');
    if(!bar_animation.classList.contains('bar_open')){
        bar_animation.classList.add("bar_open");
    }
    if(barAnimatTID){
        clearTimeout(barAnimatTID);
        barAnimatTID=null;
    }
    barAnimatTID=setTimeout(function(){
        bar_animation.classList.remove("bar_open");
        }, 500);

    checkPosition();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function touchInit(){
    let touchPanel = document.querySelector("#anima_background");
    touchPanel.addEventListener('touchmove',function(event) {
        event.preventDefault();
        event.stopPropagation();
        if(event.targetTouches.length == 1){
            var touch = event.targetTouches[0];
            const spanY = touch.pageY - pressY;
            //console.log(spanY);
            pageMoveEvent(page_Height,-spanY);
        }
        sleep(200);
    },false);
    touchPanel.addEventListener('touchstart', function(event) {
        let page_location = document.getElementById('container-page');
        let viewer = document.getElementById('container-viewer');
        let bar_animation = document.getElementById('dragger-vertical-body');
        event.preventDefault();
        if(!bar_animation.classList.contains('bar_open')){
            bar_animation.classList.add("bar_open");
        }
        // console.log("touch start.");
        viewHeight = viewer.clientHeight;
        page_Height = page_location.clientHeight-viewHeight+50;
        if(event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            pressY = touch.pageY;
        }}, false);
    touchPanel.addEventListener('touchend', function(event) {
        event.preventDefault();
        // console.log("touch end.");

        if(barAnimatTID){
            clearTimeout(barAnimatTID);
            barAnimatTID=null;
        }
        if(document.getElementById('dragger-vertical-body').classList.contains('bar_open')){
            barAnimatTID=setTimeout(function(){
                let bar_animation = document.getElementById('dragger-vertical-body');
                bar_animation.classList.remove("bar_open");
            }, 500);
        }
    }, false);
    touchPanel.addEventListener("touchcancel", function(event) {
        event.preventDefault();
        // console.log("touch cancel.");
        if(barAnimatTID){
            clearTimeout(barAnimatTID);
            barAnimatTID=null;
        }
        if(document.getElementById('dragger-vertical-body').classList.contains('bar_open')){
            barAnimatTID=setTimeout(function(){
                let bar_animation = document.getElementById('dragger-vertical-body');
                bar_animation.classList.remove("bar_open");
            }, 500);
        }
    }, false);
}

function gotoTaget(taget){
    var win_container=Point(document.querySelector("#container-page"));
    const location = taget.y-win_container.y-70;
    pageJump(location);
}

var isEventSupported = (function(){
    var TAGNAMES = {
      'select':'input','change':'input',
      'submit':'form','reset':'form',
      'error':'img','load':'img','abort':'img'
    }
    function isEventSupported(eventName) {
      var el = document.createElement(TAGNAMES[eventName] || 'div');
      var isSupported = (eventName in el);
      if (!isSupported) {
        el.setAttribute(eventName, 'return;');
        isSupported = typeof el[eventName] == 'function';
      }
      el = null;
      return isSupported;
    }
    return isEventSupported;
  })();

  var ID;
  function sampleup(e){
    let buttomSet = document.querySelectorAll('ul.session-info-menu i');
    let childName,taget;

    childName = this.childNodes[0].className;

    if(ID===childName){
        for(let i=0; i<buttomSet.length; i++){
            buttomSet[i].classList.remove("color-complement-1");
        }
        childName = this.childNodes[0].className;

        switch(childName){
            case "fas fa-user":
                document.querySelector('ul.session-info-menu i.fas.fa-user').classList.add("color-complement-1");
                taget=Point(document.querySelector("#about"));
                gotoTaget(taget);
                break;
            case "fas fa-tools":
                document.querySelector('ul.session-info-menu i.fas.fa-tools').classList.add("color-complement-1");
                taget=Point(document.querySelector("#skill"));
                gotoTaget(taget);
                break;
            case "fas fa-suitcase":
                document.querySelector('ul.session-info-menu i.fas.fa-suitcase').classList.add("color-complement-1");
                taget=Point(document.querySelector("#exp"));
                gotoTaget(taget);
                break;
            case "fas fa-school":
                document.querySelector('ul.session-info-menu i.fas.fa-school').classList.add("color-complement-1");
                taget=Point(document.querySelector("#edu"));
                gotoTaget(taget);
                break;
            case "fab fa-youtube":
                document.querySelector('ul.session-info-menu i.fab.fa-youtube').classList.add("color-complement-1");
                taget=Point(document.querySelector("#vedio"));
                gotoTaget(taget);
                break;
            default:
                break;
        }
    }
}
function sampledown(e){
    let childName = this.childNodes[0].className;
    ID=childName;
}
  
  function buttonInit(){
      let buttomSet = document.querySelectorAll('ul.session-info-menu>li');
      if (isEventSupported("onpointerdown")) {
        //   console.log("device support on-pointer-down");
          for(let i=0; i<5; i++){
              buttomSet[i].addEventListener('pointerup',sampleup,false);
              buttomSet[i].addEventListener('pointerdown',sampledown,false);
              
          }
      } else if (isEventSupported("ontouchstart")) {
        //   console.log("device support on-touch-start");
          for(let i=0; i<4; i++){
              buttomSet[i].addEventListener('touchend',sampleup,false);
              buttomSet[i].addEventListener('touchstart',sampledown,false);
          }
      } else if (isEventSupported("onmousedown")) {
        //   console.log("device support on-mouse-down");
          for(let i=0; i<4; i++){
              buttomSet[i].addEventListener('mouseup',sampleup,false);
              buttomSet[i].addEventListener('mousedown',sampledown,false);
          }
      }
  }