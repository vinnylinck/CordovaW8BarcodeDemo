cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.barcodescanner/www/barcodescanner.js",
        "id": "com.phonegap.plugins.barcodescanner.BarcodeScanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.barcodescanner/src/windows8/CameraHandler.js",
        "id": "com.phonegap.plugins.barcodescanner.CameraHandler",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.barcodescanner/src/windows8/ScannerProxy.js",
        "id": "com.phonegap.plugins.barcodescanner.ScannerProxy",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.barcodescanner": "1.0.1"
}
// BOTTOM OF METADATA
});