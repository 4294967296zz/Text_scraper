
// function open_insta_tab() {
	// chrome.tabs.create({
	// 	url: "https://www.naver.com"
	// });
// }

chrome.tabs.executeScript({
	code:'document.querySelector("body").innerText;'
}, function(result) { // 위 함수 실행 후 result에 담고, 그 다음 아래를 실행
	// alert(result[0]);
	document.querySelector('#test_div').innerText = result[0];

	// insta_btn click event - creates new chrome tab of my instagram
	document.getElementById('insta_btn').onclick = function() {
	    chrome.tabs.create({
			url: "https://www.instagram.com/dooonnnnnng"
		});
	};

});


