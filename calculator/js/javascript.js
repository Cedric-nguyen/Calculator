function equation(query){
	oldquery=document.getElementById("que").textContent;
	document.getElementById('que').innerHTML=oldquery+query;
}
function result(){
	try{
		var ans = eval(document.getElementById("que").textContent);
		document.getElementById('ans').innerHTML=ans;
	}
	catch(err){
		document.getElementById('ans').innerHTML="Invalid Equation";
	}
}
function ctdel(sym){
	var eq = document.getElementById('que').innerHTML;
	sym =='C' ? document.getElementById('que').innerHTML = '' : sym == 'del' ? document.getElementById('que').innerHTML=eq.slice(0,-1)  : false;
	}