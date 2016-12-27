
function changeLang(lang){
	var arr = document.location.pathname.split("/");
	curr = lang == "ru" ? "en": "ru";
	arr[findStr(arr,curr)] = lang;
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
function findStr(arr,str){
	for(i = 0;i<arr.length;i++)
		if(arr[i] == str)
			return i;
}
