module.exports = app => {
	class ListContoller extends app.Controller {
		* list() {
			// const dataList = {
			// 	list: [
			// 		{ id: 1, title: 'this is item 1', url: '/list/1' },
			// 		{ id: 2, title: 'this is item 2', url: '/list/2' }
			// 	]
			// };
			
			const ctx = this.ctx;
			const page = ctx.query.page || 1;
			const lists = yield ctx.service.list.list(page);
			yield ctx.render('list.tpl', {list: lists});
		}
	}

	return ListContoller;
};