

  // submit name
 var submit1 = document.getElementById('submit_btn1');
 submit1.onclick = function(){
     //make a request to the server and send the name
 alert('first');
  //create a request to the counter and point
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
      
        alert('third');       
        if (request.readyState === XMLHttpRequest.DONE )
        {
           //alert('list');  
           alert(request.responseText);
            if(request.status === 200)
            {
        
              //capture a list of names and render it as a list
             var commets = request.responseText;
             alert(request.responseText);
             commets = JSON.parse(commets);
             var list = '';
            //alert(commets);
             for (var i = 0;i<commets.length;i++)
             {
                 
                 list += '<li>' + commets[i] + '</li>';
               //  alert(commets[i] );
                 
             }
             var ul = document.getElementById('commentlist');
             ul.innerHTML = list;
             
                    }
        } 
        
    };
    
    var commentInput = document.getElementById('comment5');
    alert(commentInput.value);
    var commentstr = commentInput.value;
    
    //make a request
    //xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
    
    request.open('GET','http://jyothi91.imad.hasura-app.io/article1-one?commentstr= '+ commentstr,true);
    request.send(null);     
    alert ('http://jyothi91.imad.hasura-app.io/article1-one?commentstr= ' && commentstr );

 };
 

/* var button = document.getElementById('counter');
button.onclick = function(){
   
    //create a request to the counter and point
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE )
        {
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
  
 
 // submit name
 var submit = document.getElementById('submit_btn');
 submit.onclick = function(){
     //make a request to the server and send the name

  //create a request to the counter and point
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE )
        {
            if(request.status === 200)
            {
                
              //capture a list of names and render it as a list
             var names = request.responseText;
            
             names = JSON.parse(names);
             var list = '';
             alert(names);
             for (var i = 0;i<names.length;i++)
             {
                 
                 list += '<li>' + names[i] + '</li>';
                 //alert(names[i]);
                 
             }
             var ul = document.getElementById('namelist');
             ul.innerHTML = list;
              //alert(ul.innerHTML);
                    }
        }
        
    };
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
   // alert('nameInput' & nameInput.value);
    //make a request
    request.open('GET','http://jyothi91.imad.hasura-app.io/submit-name?name= '+ name,true);
    request.send(null);     

 };
 
    
*/