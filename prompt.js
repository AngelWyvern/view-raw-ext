document.addEventListener('DOMContentLoaded', () =>
{
	const input = document.querySelector('input');
	document.querySelector('button').onclick = () =>
	{
		chrome.tabs.create({ "url":"viewer.html?url="+input.value });
	};
}, { "once":true });