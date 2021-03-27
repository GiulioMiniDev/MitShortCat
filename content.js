//https://www.youtube.com/watch?v=O269ctk5b5k
//https://stackoverflow.com/questions/49612868/how-to-communicate-between-two-html-pages-via-javascript



function copyText(elementText){

    if(!elementText){
        return;
    }

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value',elementText);
    document.body.appendChild(inputElement);

   inputElement.select();

   document.execCommand('copy');

    document.body.removeChild(inputElement);
}


$.get('Materie.txt', function (data){
    var lista = data.split('\n');
    //(lista.length);
    creaBob(lista);
}, 'text' );


function creaBob(lista) {
    var l = Math.ceil(lista.length/2);
    //alert(l);
    for (let i = 0; i < l; i++) {
        // 1. Create the button
        var button = document.createElement("button");
        button.id = lista[i];
        button.innerHTML = lista[i+l];

        // 2. Append somewhere
        document.body.appendChild(button);

        //3. Create onclick
        button.onclick = function() { // Note this is a function
            copyText(lista[i]);
        };
    }
}






