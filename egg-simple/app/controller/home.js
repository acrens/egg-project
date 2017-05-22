module.exports = app => {
	class HomeController extends app.Controller {
		* index() {
			this.ctx.body = {
				id: 110,
				text: '你若安好，便是晴天'
			};
		}
	}

	return HomeController;
};