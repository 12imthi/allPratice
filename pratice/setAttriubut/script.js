var element = document.createElement('div');
element.setAttribute('class','container');

var row = document.createElement('div');
row.setAttribute('class','row');

var content = document.createElement('div');
content.setAttribute('id', 'content');
content.innerHTML += '<p> hello</p>';

var part = document.createElement('h1');
part.setAttribute('class','extra');
part.textContent='I am a very extra long text that should be split into several lines';






element.appendChild(row);
row.appendChild(content);
content.appendChild(part)


document.body.appendChild(element);
