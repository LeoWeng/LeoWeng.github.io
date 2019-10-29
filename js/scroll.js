var barAnimatTID;

function wheelEvent(event){
    let viewHeight = document.querySelector("#container-viewer").clientHeight;
    let page_location = document.querySelector("#container-page");
    let page_Height = page_location.clientHeight-viewHeight+50;
    let page_offset = -page_location.offsetTop;
    let new_offset = 0;
    let bar_animation = document.querySelector("#dragger-vertical>div");
    const delta = Math.sign(event.deltaY);
    const step_unit = 200;
    const move_range = document.querySelector(".dragger-container").clientHeight-bar_animation.clientHeight;

    if(delta>0){
        if(bar_animation){
            bar_animation.classList.add("bar_open");
            if(barAnimatTID){
                clearTimeout(barAnimatTID);
                barAnimatTID=null;
            }
            barAnimatTID=setTimeout(function(){
                document.querySelector("#dragger-vertical>div").classList.remove("bar_open");
                }, 500);
        }
        if(page_offset<page_Height){
            new_offset = page_offset+step_unit;
            if(new_offset>page_Height){
                new_offset = page_Height;
                bar_animation.style.top = ""+move_range+"px";
            }
            else{
                bar_animation.style.top = ""+(new_offset/page_Height)*move_range+"px";
            }
            page_location.style.top = "-"+new_offset+"px";
        }
    }
    else if(delta<0){
        if(bar_animation){
            bar_animation.classList.add("bar_open");
            if(barAnimatTID){
                clearTimeout(barAnimatTID);
                barAnimatTID=null;
            }
            barAnimatTID=setTimeout(function(){
                document.querySelector("#dragger-vertical>div").classList.remove("bar_open");
                }, 500);
        }
        if(page_offset>0){
            new_offset = page_offset-step_unit;
            if(new_offset<0){
                new_offset = 0;
                bar_animation.style.top = "0px";
            }
            else{
                bar_animation.style.top = ""+(new_offset/page_Height)*move_range+"px";
            }
            page_location.style.top = "-"+new_offset+"px";
        }
    }
    checkPosition();
}