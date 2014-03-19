/*global window, console */
function doScan() {
	'use strict';

	window.cordova.plugins.barcodeScanner.scan(
		function (result) {
			console.log(result);
		},

		function (e) {
			throw e;
		}
	);
}