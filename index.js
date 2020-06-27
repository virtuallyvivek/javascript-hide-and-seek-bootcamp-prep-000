function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
 
  for (let i = 0; i < lis.length; i++) {
   var newValue = parseInt(lis[i].innerText) + n
   lis[i].innerText = newValue
  }
}



function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length- 1];
  return mostDeep
}