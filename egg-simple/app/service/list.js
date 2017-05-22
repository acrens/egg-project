module.exports = app => {
	class ListService extends app.Service {
		* list(page = 1) {
			const { serverUrl, pageSize } = this.app.config.lists;
			const {data: idList } = yield this.ctx.curl(`${serverUrl}/topstories.json`, {
				data: {
					orderBy: '"$key"',
					startAt: `"${pageSize * (page - 1)}"`,
					endAt: `"${pageSize * (page - 1)}"`,
				},
				dataType: 'json'
			});
			const lists = yield Object.keys(idList).map(key => {
				const url = `${serverUrl}/item/${idList[key]}.json`;
				return this.ctx.curl(url, {dataType: 'json'});
			});

			return lists.map(res => res.data);
		}
	}

	return ListService;
};