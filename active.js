chrome.contextMenus.create(
{
	"id":"view-raw-url",
	"title":"View link as raw",
	"contexts":[ "link" ]
});

chrome.contextMenus.onClicked.addListener((info, tab) =>
{
	if (info.menuItemId == 'view-raw-url')
	{
		chrome.tabs.create({ "url":"viewer.html?url="+info.linkUrl });
	}
});