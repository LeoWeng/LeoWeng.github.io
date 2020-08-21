var elements;
var windowHeight;
var win_container;
var about;
var skill;
var group_exp_edu;
var exp;
var edu;
var top_interval;
var menu;

function Point(obj_pointer) {
    let t=obj_pointer.offsetTop;
    let l=obj_pointer.offsetLeft;
    while (obj_pointer = obj_pointer.offsetParent) {
        t += obj_pointer.offsetTop;
        l += obj_pointer.offsetLeft;
    }
    return {x:l,y:t};   
}

function init() {
    let viewHeight = document.querySelector("#container-viewer").clientHeight;
    let animaBackground = document.querySelector("#anima_background");
    let windowWidth = window.screen.availWidth;
    let innerLeft = document.querySelector(".site-content__inner-left");
    let innerRight = document.querySelector(".site-content__inner-right");
    let person = document.getElementById('personInfo');
    let skillItem = document.querySelectorAll('div.skill-item');
    elements = document.querySelectorAll('span[class^="hidden"]');
    windowHeight = -document.querySelector("#container-page").offsetTop;
    document.querySelector("#dragger-vertical").style.height=""+viewHeight/3+"px";
    win_container=Point(document.querySelector("#container-page"));
    about=Point(document.querySelector("#about"));
    skill=Point(document.querySelector("#skill"));
    group_exp_edu=Point(document.querySelector("#group-exp-edu"));
    exp=Point(document.querySelector("#exp"));
    edu=Point(document.querySelector("#edu"));
    vedio=Point(document.querySelector("#vedio"));
    top_interval=parseInt(window.getComputedStyle(document.querySelector("div.content__inner"), null).getPropertyValue('padding-top'),10);
    if(windowWidth<1400){
        if(windowWidth>=500){
            if(person.hasChildNodes()){
                var children = person.childNodes;
                for(var c=0; c < children.length; c++) {
                    if(children[c].style) {
                        children[c].style.display = 'block';
                    }
                }
            }
            innerLeft.style.maxWidth = 'calc(50% - 150px)';
            innerRight.style.maxWidth = 'calc(50% + 150px)';
        } else {
            if(person.hasChildNodes()){
                var children = person.childNodes;
                for(var c=0; c < children.length; c++) {
                    if(children[c].style) {
                        children[c].style.display = 'none';
                    }
                }
            }
            innerLeft.style.maxWidth = '50px';
            innerRight.style.maxWidth = 'calc(100% - 50px)';
        }
    }
    if((animaBackground.clientWidth<441)||windowWidth<441){
        for(let i=0; i<skillItem.length; i++){
            skillItem[i].style.width="100%";
        }
    }
    else{
        for(let i=0; i<skillItem.length; i++){
            skillItem[i].style.width="50%";
        }
    }
    
    buttonInit();
    checkPosition();
    touchInit();
}

function checkPosition() {
    const viewHeight = document.querySelector("#container-viewer").clientHeight;
    windowHeight = -document.querySelector("#container-page").offsetTop + viewHeight*2/3;
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
            let class_type = element.className;
            switch(class_type){
                case "hidden-master":
                    element.classList.add('master');
                    element.classList.remove('hidden-master');
                    break;
                case "hidden-expert":
                    element.classList.add('expert');
                    element.classList.remove('hidden-expert');
                    break;
                case "hidden-familiar":
                    element.classList.add('familiar');
                    element.classList.remove('hidden-familiar');
                    break;
                case "hidden-junior":
                    element.classList.add('junior');
                    element.classList.remove('hidden-junior');
                    break;  
            }
        }
    }
    let page_location = -document.querySelector("#container-page").offsetTop;
    let menu_icon = document.querySelectorAll("ul.session-info-menu>li>i");
    const interval=70;
    const cust_int=200;
    if((page_location>=about.y-win_container.y-interval)&&(page_location<skill.y-win_container.y-interval-cust_int)){
        menu=['y','n','n','n','n'];
    }else if((page_location>=skill.y-win_container.y-interval-cust_int)&&(page_location<group_exp_edu.y-win_container.y-interval-cust_int*2)){
        menu=['n','y','n','n','n'];
    }else if((page_location>=group_exp_edu.y-win_container.y-interval-cust_int*2)&&(page_location<vedio.y-win_container.y-interval-cust_int*2)){
        if((exp.y==edu.y)){
            menu=['n','n','y','y','n'];
        }else if(exp.y<edu.y){
            if(page_location>=edu.y-win_container.y-interval-cust_int*2){
                menu=['n','n','n','y','n'];
            }else{
                menu=['n','n','y','n','n'];
            }
        }
    }else{
        menu=['n','n','n','n','y'];
    }
    for(let i=0;i<menu_icon.length;i++){
        if(menu[i]==='y'){
            if(!menu_icon[i].classList.contains('color-complement-1')){
                menu_icon[i].classList.add('color-complement-1');
            }
        }else{
            if(menu_icon[i].classList.contains('color-complement-1')){
                menu_icon[i].classList.remove('color-complement-1');
            }
        }
    }
}

function EventSetting() {
    window.addEventListener('resize', init);
    window.addEventListener("wheel", wheelEvent);
    VendorInit();
    init();
    checkPosition();
}

window.onload = EventSetting;