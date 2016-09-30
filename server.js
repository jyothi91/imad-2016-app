var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one' : {
        title:'Article one Jyothi',
        heading:'Article one',
        date:'Sep 5 2016',
        content:`
                   <p>
                    This is a content of my first article.This is a content of my first article.This is a content of my first article.
                    This is a content of my first article.This is a content of my first article.This is a content of my first article.
                    This is a content of my first article.This is a content of my first article.This is a content of my first article.
                </p>
                <p>
                    This is a content of my first article.This is a content of my first article.This is a content of my first article.
                    This is a content of my first article.This is a content of my first article.This is a content of my first article.
                    This is a content of my first article.This is a content of my first article.This is a content of my first article.
                </p>
                <p>
                    This is a content of my first article.This is a content of my first article.This is a content of my first article.
                    This is a content of my first article.This is a content of my first article.This is a content of my first article.
                    This is a content of my first article.This is a content of my first article.This is a content of my first article.
                </p>`,
                
    },
    'article-two' : {
        title:'Article two Jyothi',
        heading:'Article two',
        date:'Sep 20 2016',
        content:`
                   <p>
                    This is a content of my second article.
                </p>`
    } ,
    'article-three' : {
        title:'Article three Jyothi',
        heading:'Article three',
        date:'Sep 25 2016',
        content:`
                <p>
                    This is a content of my third article.This is a content of my third article.This is a content of my third article.
                </p>`
    }            
    

};

function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=`<html>
        <head>
            <title>
                ${title};
            </title>
            <meta name= "viewport" content="width=device.width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class = "container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>${heading};</h3>
                <div>${date};</div>
                ${content};
            <hr/>
            <br/>
            <input type= "text" id="comment" placeholder = "comment" ></input>
            <input type = "submit" value = "Submit" id = 'submit_btn1'></input>
            <ul id = 'commentlist'>
            </ul>
           </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
        </body>
        
    </html>
    `;
    return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

var names=[];
app.get('/submit-name', function (req, res) {
    //get the name from the request
    var name = req.query.name; //to do
    
    names.push(name);
    alert(JSON.stringify(names));
    //JSON javascript object notation
    res.send(JSON.stringify(names)); //to do
});

var comments=[];
app.get('/:articlename', function (req, res) {
   var  articlename = req.params.articlename;   
   
   var comment = req.query.comment; //to do
    comments.push(comment);
    //JSON javascript object notation
    //JSON.stringify(comments)
     res.send(JSON.stringify(comments));
    res.send( createtemplate(articles[articlename]));
   //res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

