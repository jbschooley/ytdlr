var init = function(){
	//document.write("test");
	document.write("<!doctype html><html><head><meta charset=\"utf-8\"><title>Watch\/Download Video<\/title><style>body{background: #333}.container{position: fixed;width: 100%;height: 100%;}.preloader{position: absolute;margin: -48px 0 0 -48px;display: block;position: relative;width: 90px;height: 90px;border: 3px solid #eb1777;border-radius: 50%;top: 50%;left: 50%;animation-delay: 0.2s}.preloader:before{content: \"\";display: block;position: absolute;width: 58px;height: 58px;border: 3px solid #3bb4e5;top: 50%;left: 50%;margin: -32px 0 0 -32px;border-radius: 50%;animation-delay: 0.4s}.preloader:after{content: \"\";display: block;position: absolute;border: 3px solid #ccdc25;width: 26px;height: 26px;top: 50%;left: 50%;margin: -16px 0 0 -16px;border-radius: 50%;animation-delay: 0.6s}.preloader,.preloader:before,.preloader:after{animation-name: Scale;animation-duration: 3s;animation-iteration-count: infinite;animation-timing-function: ease-in-out;animation-direction: alternate;-webkit-animation-name: Scale;-webkit-animation-duration: 3s;-webkit-animation-iteration-count: infinite;-webkit-animation-timing-function: ease-in-out;-webkit-animation-direction: alternate;}@keyframes Scale{25%{transform: scale(-1.2, 1.2)}50%{transform: scale(-1, -1)}75%{transform: scale(1.2, -1.2)}100%{transform: scale(1, 1)}}@-webkit-keyframes Scale{25%{-webkit-transform: scale(-1.2, 1.2)}50%{-webkit-transform: scale(-1, -1)}75%{-webkit-transform: scale(1.2, -1.2)}}<\/style><\/head><body><div class=\'container\' id=\'loadinganimation\'><i class=\'preloader\'><\/i><\/div><div id=\'results\'><\/div><\/body><\/html>");
	document.getElementById('loadingbefore').style.display = 'none';
	var currenturl = document.getElementById('beginscript').getAttribute('currenturl');
	var patt = /(?!s?ilverproxy1?)[a-zA-Z0-9_-]{11}/;
	if (patt.test(currenturl)) {
		var id = patt.exec(currenturl);
	} else {
	    var id = "invalid or no id given";
	}
	var results = document.getElementById('results');
	results.style.display = 'none';
	results.innerHTML += id;
	var loading = document.getElementById('loadinganimation');
	setTimeout(function(){
		loading.style.display = 'none';
		results.style.display = 'block';
	}, 1000);
}


init();