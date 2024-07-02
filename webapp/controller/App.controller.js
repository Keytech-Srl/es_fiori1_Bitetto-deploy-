sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
	"use strict";

	const controller = {
		navigate: function (route) {
			this.getOwnerComponent().getRouter().navTo(route);
		},

		toogleExpanded: function () {
			const toolPage = this.getView().byId("toolPage");
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		}
	};

	return Controller.extend("ui5.crud.controller.App", controller);
});
