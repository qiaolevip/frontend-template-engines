var getJSON = function(url, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) success(JSON.parse(xhr.responseText));
      } else {
        if (error) error(xhr);
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};

var $ = function(id) {
  return document.getElementById(id);
};

var fillOutContent = function(data) {
  var tmpl = doT.template($('tmplsTmpl').innerHTML);
  var html = tmpl(data);
  $('engineList').innerHTML = html;
};

var init = function() {
  getJSON('engines.json', function(data) {
    fillOutContent(data);
  });
};

init();