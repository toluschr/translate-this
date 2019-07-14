javascript:
	var url = document.URL;
	url.replace(':', "%\3A");
	url.replace('/', "%\2F");
	url.replace('?', "%\3F");
	url.replace('=', "%\3D");
	url.replace('&', "%\26");
	url.replace('+', "%\2B");
	var win = window.open();
	win.location = "https://translate.google.com/translate?sl=auto&tl=en&u=" + url;
	win.focus();