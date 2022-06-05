function calc(ary,word='',max=5){
 if(word.length===0) return []
 try{
 return ary.filter(d=> ~d[2].indexOf(word) ).slice(0,max) //search the containts words
  .map(d=>d[0]).map(num=> ary.filter(d=>d[0]===num) ) //search syno...m
  .reduce((a,b)=> a.concat(b) ) //flattan
 ;}catch(e){ //reduce error
  return []
 }
}
;
var fn={};
fn.q=(s,doc=document)=>{return doc.querySelector(s)}
fn.q('button').onclick=()=>{

 (async ()=>{
  const url='https://raw.githubusercontent.com/gnjo/gnjo.github.io/master/wnjpn-ok.tab.json'
  ,ary=await fetch(url).then(d=>d.json() )
  ,word=fn.q('input').value
  ,res =calc(ary,word) /////
  ;
  console.log(res)
  fn.q('textarea').textContent=res.map(d=>d[2]).join('/')
 })();

}