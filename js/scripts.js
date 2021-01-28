var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};


var colors = ['white','yellow','orange','gold','red','blue','grey','black','green','coral','tomato','pink'];


var elBtn = $_('.btn');

function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function changeBgcolor() {
  for(var i = 0; i < colors.length; i++) {
    document.body.style.backgroundColor = `${colors[getRandomNumber(colors)]}`;
  }
}

elBtn.addEventListener('click', changeBgcolor);