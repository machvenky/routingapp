sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ui5/nav/routingapp/controller/BaseController"
], function (Controller,BaseController){
	"use strict";

	return BaseController.extend("ui5.nav.routingapp.controller.Master", {
		onInit: function () {

		},
		onRowSelected:function(oEvent) {
		this.getRouter().navTo("detail",{
			pid:oEvent.getSource().getBindingContext().getProperty("ProductID")
		});
		}
		
	});
});