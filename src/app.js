require('./stylesheets/app.scss'); /* This loads the css and foces the sass to compile... */
var jsLogo = require('file-loader!./images/js-img.png')

const title = document.querySelector('h1');
title.classList = "jumbo";

var node = document.createElement("img");
node.src = "./" + jsLogo;
document.body.appendChild(node);
