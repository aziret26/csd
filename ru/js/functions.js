
function changeLang(lang){
	var arr = document.location.pathname.split("/");
	arr[2] = lang;
	document.cookie = "lang="+lang+";path=/";
	window.location.assign(pathToString(arr));
}

function pathToString(path){
	var p = "";
	for(i=0;i<path.length;i++){
		p += path[i];
		if(i<path.length-1){
			p+="/";
		}
	}
	return p;
}