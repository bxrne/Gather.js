/*
> Gather.js
> Simply EPIC
> By Adam Byrne
> Copyright (c) 2014
> Licensed under MIT License
> Hosted on Github
*/

var gather = {};
var files = [];

gather.import = function(name, type) {
    /* SWITCH between elements  */
    var _type = type.toUpperCase();
    switch (_type) {

        case "CSS":
            var e = document.createElement('link');
            e.rel = "stylesheet";
            e.type = 'text/css';
            e.href = name + ".css";
            document.head.appendChild(e);
            files.push(e);
            break;

        case "JS":
            var el = document.createElement('script');
            el.type = 'text/javascript';
            el.src = name + ".js";
            document.body.appendChild(el);
            files.push(el);
            break;

    }
};

gather.gather = function() {

  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }

};
