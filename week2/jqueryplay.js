 
$(function(){
    $("#panel1").css({color:'red',fontWeight:'bold'});
    $("#panel2").css({color:'red',fontWeight:'bold',opacity:'0.5'})
    $("#panel1").hide(900).show(1100);
    $("#panel2").slideUp(900).delay(500).slideDown(1100);
    $("#panel3").fadeToggle(900).fadeToggle(1100).fadeToggle(1100);
    $("#panel4").slideToggle(900).slideToggle(1100);
});
     