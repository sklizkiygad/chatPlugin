let div = document.createElement('div');
localStorage.setItem('chatIsFulled', false);
div.id = "div-chat-vue";
document.body.append(div);
let chatPosition = localStorage.getItem('chatPosition');
let chatIconType = localStorage.getItem('chatIconType');
if(chatIconType==='default'){
  var css = '#div-chat-vue{position: fixed;z-index: 100;' + chatPosition + ': 0;bottom: 0;min-width: 350px;width: 15%;height: 25px;overflow: hidden;}#div-chat-vue__frame{ width: 100%;height: 100%;}';
}
else if(chatIconType==='circle'){
  var css = '#div-chat-vue{position: fixed;z-index: 100;' + chatPosition + ': 0;bottom: 0;width: 90px;height: 90px;overflow: hidden;margin:1%}#div-chat-vue__frame{ width: 100%;height: 100%;}';
}

head = document.head || document.getElementsByTagName('head')[0],
  style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);
div.innerHTML = '<iframe src="./plugin/chat/index.html" id="div-chat-vue__frame" frameborder="0"></iframe>';
window.addEventListener('storage', function (e) {

  
if(chatIconType==='default'){
  if (localStorage.getItem('chatIsFulled') === 'true') {
    div.style.height = '60%';
    div.style.minHeight = '415px';

  }
  else {
    div.style.height = '25px';
    div.style.minHeight = '25px';
  }
}

if(chatIconType==='circle'){
  if (localStorage.getItem('chatIsFulled') === 'true') {
    div.style.height = '60%';
    div.style.minHeight = '415px';
    div.style.minWidth= '350px';
    div.style.margin= '0';


  }
  else {
    div.style.height = '90px';
    div.style.minHeight = '90px';
    div.style.minWidth= '90px';
    div.style.margin= '1%';
  }
}
  

});