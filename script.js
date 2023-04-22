let flag=0;
showfunc(flag);
function controll(val){
    flag=flag+val;
    showfunc(flag);
}
function showfunc(num){
    let slides=document.getElementsByClassName('slide');
    if(num==slides.length)
    {
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
        }
    for(y of slides){
        y.style.display='none';
    }
    slides[num].style.display='block';
}