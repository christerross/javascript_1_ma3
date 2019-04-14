//Console.log out elements in JSON file

data = '[{"author" : "Alejandro Morales", "url" : "/author/alejandro-morales", "type" : "master"}]';

(function() {
    var mydata = JSON.parse(data);
    console.log(mydata[0].author);
    console.log(mydata[0].url);
    console.log(mydata[0].type);
})();