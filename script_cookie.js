$(function() {
    var visit=GetCookie("COOKIE1");

    if (visit==null){
        popbox3();
    }
    var expire=new Date();
    expire=new Date(expire.getTime()+7776000000);
    document.cookie="COOKIE1=here; expires="+expire;
}


