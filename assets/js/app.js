function checkFromInvite(){
    $.getJSON("https://servers-frontend.fivem.net/api/servers/single/3r93zr",function(data){
        $("#a").text(data.Data.players.length);
    }).fail(function(){
        noServerOnline();
    })
}

function noServerOnline(){
    $("#a").text("API Error");
}

setInterval(function(){checkFromInvite()}, 3000);
