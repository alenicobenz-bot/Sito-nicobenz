// Copy-to-clipboard helpers
(function(){
  function toast(msg){
    var el=document.getElementById('dkToast');
    if(!el)return;
    el.textContent=msg;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t=setTimeout(function(){el.classList.remove('show');},1600);
  }
  function copy(text){
    if(navigator.clipboard && navigator.clipboard.writeText){
      return navigator.clipboard.writeText(text);
    }
    var ta=document.createElement('textarea');
    ta.value=text;document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');}catch(e){}
    document.body.removeChild(ta);
    return Promise.resolve();
  }
  document.addEventListener('click',function(e){
    var t=e.target.closest('[data-copy]');
    if(!t)return;
    copy(t.getAttribute('data-copy')).then(function(){
      toast('Copiato: '+t.getAttribute('data-copy').slice(0,40));
    });
  });
  window.dkToast=toast;
  window.dkCopy=copy;
})();
