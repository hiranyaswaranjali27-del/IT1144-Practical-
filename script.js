const title=document.getElementById("title");
const button=document.
getElementById("changeBtn");
button.addEventListener("click",function(){
	title.textContent="boutton clicked!";
	
	title.style.color="red";
});