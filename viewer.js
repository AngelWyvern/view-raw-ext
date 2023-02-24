document.addEventListener('DOMContentLoaded', () =>
{
	const pre = document.querySelector('pre');
	
	if (window.location.search.startsWith('?url=') && window.location.search.length > 5)
	{
		const url = window.location.search.substr(5);
		fetch(url).then(res =>
		{
			res.text().then(value =>
			{
				pre.innerText = value.trim();
			}).catch(() =>
			{
				pre.innerText = 'Error: Failed to access contents';
			});

			if (res.headers.has('content-disposition'))
			{
				const cd = res.headers.get('content-disposition');
    			const match = cd.match(/filename="(.*?)"/);
				if (match)
					document.title = 'raw:' + match[1];
			}
		}).catch(() =>
		{
			pre.innerText = 'Error: Failed to access remote URL';
		});
	}
	else
	{
		pre.innerText = 'Error: No URL passed';
	}
}, { "once":true });