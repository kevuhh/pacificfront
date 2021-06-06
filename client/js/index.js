$(document).ready(() => {
    $('#home-btn').click(()=> {
        $('.mainContent').css("display","none");
        $('#home').css("display","block");
    });
    $('#attitude-btn').click(()=> {
        $('.mainContent').css("display","none");
        $('#attitude').css("display","block");
    });
    $('#land-btn').click(()=> {
        $('.mainContent').css("display","none");
        $('#land').css("display","block");
    });
    $('#naval-btn').click(()=> {
        $('.mainContent').css("display","none");
        $('#naval').css("display","block");
    });
    $('#end-btn').click(()=> {
        $('.mainContent').css("display","none");
        $('#end').css("display","block");
    });
});