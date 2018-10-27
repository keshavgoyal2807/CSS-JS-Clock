function setdate(){
    var a=new Date();
    var b=a.getSeconds();
    var c=((b/60)*360)+90;
    var d=document.querySelector('.seconds_hand');
    d.style.transform=`rotate(${c}deg)`;
    var d=document.querySelector('.minutes_hand');
    var b=a.getMinutes();
    var c=((b/60)*360)+90;
    d.style.transform=`rotate(${c}deg)`;
    var d=document.querySelector('.hours_hand');
    var b=a.getHours();
    var b1=a.getMinutes();
    //console.log(b);
    var c=((b/12)*360)+((b1/60)*30)+90;
    d.style.transform=`rotate(${c}deg)`;
}
setInterval(setdate,1000);
setdate();