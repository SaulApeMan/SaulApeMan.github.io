(function(){
 var L='';try{L=localStorage.getItem('lang')||''}catch(e){}
 if(L!='pl'&&L!='en'){L='en'}
 function render(){
  document.querySelectorAll('[data-pl]').forEach(function(e){e.textContent=L=='pl'?e.getAttribute('data-pl'):e.getAttribute('data-en')});
  document.documentElement.lang=L;
  document.querySelectorAll('.lang button[data-l]').forEach(function(b){var on=b.getAttribute('data-l')==L;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false')});
 }
 document.querySelectorAll('.lang button[data-l]').forEach(function(b){b.onclick=function(){L=b.getAttribute('data-l');try{localStorage.setItem('lang',L)}catch(e){}render()}});
 render();
})();
