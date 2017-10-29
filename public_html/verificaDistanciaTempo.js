

function getDistanciaTempo() {
//    $json = file_get_contents('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=YOUR_API_KEY');
//    $jsonDecode = (json_decode($json, true));
    
    var distancia = document.getElementById(distancia);
    
    $.ajax({
    type: 'GET',
    url: "newjson.json",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data) 
    {
        $.each(data, function(i, desafio) {
            item = "<center><h4>" + desafio.meta + "</h4></center>";

            if (desafio.id === $('#selectDesafio').val() ) {
                $('#blocodesafio').html(''),
                $('#blocodesafio').append(item);
            }
        });
    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
}); 
    
    distancia.textContent = distancia.textContent + JSON.stringify(json);





}


