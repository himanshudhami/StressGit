var mammoth = require("mammoth");
var fs = require('fs');

mammoth.convertToHtml({path: "./t1.docx"})
    .then(function(result){
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion
		fs.writeFile("./test.html", html, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
    });