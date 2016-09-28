var button = document.getElementById('counter');
button.onclick = function(){
   
    //create a request to the counter and point
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
         alert(request.readystate);
         alert(XMLHttpRequest.DONE);
        if (request.readystate === XMLHttpRequest.DONE )
        {
            alert('Hi');
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    
    //make a request
    request.open('GET','http://jyothi91.imad.hasura-app.io/counter',true);
    request.send(null);
  };