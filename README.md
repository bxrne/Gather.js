Gather.js
=========

 > A javascript framework for gathering and importing javascript and css files

#### Really simple to use just include one script tag:

```html

<script type="text/javascript" src="bin/gather.js"></script>

```

#### There are just two methods to remember:

```javascript

gather.import("js_file","js"); // includes a javascript file in the body tag
gather.import("css_file", "css"); // includes a css file in the body tag
gather.gather(); // logs each gather.import(html element) to the console (for debugging)

```