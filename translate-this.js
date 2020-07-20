javascript:
	let url = encodeURIComponent(document.URL);
	let win = window.open();
	win.location = "https://translate.google.com/translate?sl=auto&tl=en&u=" + url;
	win.focus();
