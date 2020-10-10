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

function mobileTest() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return true;
    }
    else{
        return false;
    }
}

function init() {
    let mobileCheck = mobileTest();
    let viewHeight = document.querySelector("#container-viewer").clientHeight;
    let animaBackground = document.querySelector("#anima_background");
    let windowWidth = window.screen.availWidth;
    let innerLeft = document.querySelector(".site-content__inner-left");
    let innerRight = document.querySelector(".site-content__inner-right");
    let person = document.getElementById('personInfo');
    let min_person = document.getElementById('min-view-personInfo');
    let skillItem = document.querySelectorAll('div.skill-item');
    let title = document.querySelector('#about > h1');
    let allI = document.querySelectorAll('i');
    let sessionMenuI = document.querySelectorAll('ul.session-info-menu i');
    let skillItemlogo = document.querySelectorAll('div.skill-item > i');
    let allP = document.querySelectorAll('p');
    let h3Title = document.querySelectorAll('h3.title');
    let h5 = document.querySelectorAll('h5');
    let h5TextSession = document.querySelectorAll('h5.text-session');
    let h6 = document.querySelectorAll('h6');
    let sessionButtomMenu = document.querySelectorAll('ul.session-buttom-menu > span');
    let aboutItems = document.querySelectorAll('div.about-item');
    let aboutItemsAfter = document.querySelectorAll('spen.about-item-after');
    let leftMenu = document.querySelector('.left-vertical-menu');
    let skillContentItem = document.querySelectorAll('.skill-content-item');
    let bar = document.querySelectorAll('.bar');
    let barLine = document.querySelectorAll('.bar span');
    let jobDescript = document.querySelectorAll('div.job-descript');
    let jobTitle = document.querySelectorAll('span.title');
    let jobLogo = document.querySelectorAll('div.logo-group > div.logo');
    
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
    console.log(mobileCheck);
    if(mobileCheck){
        console.log("smart-phone");
        title.style.fontSize = '120px';
        leftMenu.style.flexBasis = '150px';
        for(let i=0; i<skillItem.length; i++){
            skillItem[i].style.width="100%";
            skillItem[i].style.paddingTop="25px";
            skillItem[i].style.paddingBottom="25px";
        }
        for(var c=0; c < aboutItems.length; c++) {
            if(aboutItems[c].style) {
                aboutItems[c].style.fontSize = '32px';
            }
        }
        for(var c=0; c < aboutItemsAfter.length; c++) {
            if(aboutItemsAfter[c].style) {
                aboutItemsAfter[c].style.fontSize = '32px';
            }
        }
        for(var c=0; c < allP.length; c++) {
            if(allP[c].style) {
                allP[c].style.fontSize = '40px';
            }
        }
        for(var c=0; c < allI.length; c++) {
            if(allI[c].style) {
                allI[c].style.fontSize = '80px';
            }
        }
        for(var c=0; c < sessionMenuI.length; c++) {
            if(sessionMenuI[c].style) {
                sessionMenuI[c].style.fontSize = '55px';
            }
        }
        for(var c=0; c < skillItemlogo.length; c++) {
            if(skillItemlogo[c].style) {
                skillItemlogo[c].style.fontSize = '80px';
            }
        }
        for(var c=0; c < h3Title.length; c++) {
            if(h3Title[c].style) {
                h3Title[c].style.fontSize = '80px';
            }
        }
        for(var c=0; c < h5.length; c++) {
            if(h5[c].style) {
                h5[c].style.fontSize = '50px';
            }
        }
        for(var c=0; c < h6.length; c++) {
            if(h6[c].style) {
                h6[c].style.fontSize = '35px';
            }
        }
        for(var c=0; c < jobDescript.length; c++) {
            if(jobDescript[c].style) {
                jobDescript[c].style.fontSize = '35px';
            }
        }
        for(var c=0; c < jobLogo.length; c++) {
            if(jobLogo[c].style) {
                jobLogo[c].style.height = '100px';
                jobLogo[c].style.width = '100px';
            }
        }
        for(var c=0; c < jobTitle.length; c++) {
            if(jobTitle[c].style) {
                jobTitle[c].style.fontSize = '40px';
            }
        }
        for(var c=0; c < skillContentItem.length; c++) {
            if(skillContentItem[c].style) {
                skillContentItem[c].style.fontSize = '40px';
            }
        }
        for(var c=0; c < h5TextSession.length; c++) {
            if(h5TextSession[c].style) {
                h5TextSession[c].style.fontSize = '35px';
            }
        }
        
        for(var c=0; c < sessionButtomMenu.length; c++) {
            if(sessionButtomMenu[c].style) {
                sessionButtomMenu[c].style.fontSize = '30px';
            }
        }
        for(var c=0; c < bar.length; c++) {
            if(bar[c].style) {
                bar[c].style.height = '15px';
            }
        }
        for(var c=0; c < barLine.length; c++) {
            if(barLine[c].style) {
                barLine[c].style.height = '15px';
            }
        }
        innerLeft.style.maxWidth = '150px';
        innerRight.style.maxWidth = 'calc(100% - 150px)';
        person.style.display = 'none';
        min_person.style.display = 'block';
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
            } else {
                if(person.hasChildNodes()){
                    var children = person.childNodes;
                    for(var c=0; c < children.length; c++) {
                        if(children[c].style) {
                            children[c].style.display = 'none';
                        }
                    }
                }
            }
        }
    }
    else{
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