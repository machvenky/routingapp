sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ui5/nav/routingapp/controller/BaseController"
], function (Controller,BaseController) {
	"use strict";

	return BaseController.extend("ui5.nav.routingapp.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ui5.nav.routingapp.view.Detail
		 */
		onInit: function () {
			this.getRouter().getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched:function(oEvent) {
		var oArgs =	oEvent.getParameter("arguments");
		var oView = this.getView();
			oView.bindElement({
				path: "/ProductSet('" + oArgs.pid + "')"
		});
		},
		onNavBack:function() {
			this.myNavBack();
		}

	
	});

});