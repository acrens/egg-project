<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>列表</title>
	<link rel="stylesheet" type="text/css" href="/public/css/list.css" />
</head>
<body>
	<div class="list">
		{% for item in list %}
			<div class="list--item">
				<a href="{{ item.url }}">{{ item.title }}  Time: {{ helper.relativeTime(item.time) }}</a>
			</div>
		{% endfor %}
    </div>
</body>
</html>