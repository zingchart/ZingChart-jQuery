/* View the README.md for detailed documentation. */
/* Version 1.0.1 | Last Updated 22 Dec. 2014 */

(function ( $ ) {

	/**********************************************************************
	 ****************************** METHODS *******************************
	 *********************************************************************/

	// MAIN METHOD ============================================================
	$.fn.zingchart = function (options) {
		var id = this[0].id;
		var defaults = {
			id: id
		};
		$.extend(defaults, options);
		zingchart.render(defaults);
		return this;
	};

	// LOAD MODULES ===========================================================
	$.fn.loadModules = function (options) {
		zingchart.loadModules(options);
		return this;
	}

	// DATA MANIPULATION ======================================================
	$.fn.addNode = function (data) {
		zingchart.exec(this[0].id, "addnode", data);
		return this;
	};

	$.fn.addPlot = function (data) {
		zingchart.exec(this[0].id, "addplot", data);
		return this;
	};

	$.fn.appendSeriesData = function (data) {
		zingchart.exec(this[0].id, "appendseriesdata", data);
		return this;
	};

	$.fn.appendSeriesValues = function (data) {
		zingchart.exec(this[0].id, "appendseriesvalues", data);
		return this;
	};

	$.fn.getSeriesData = function (opts) {
		if (opts) {
			return zingchart.exec(this[0].id, "getseriesdata", opts);
		}
		else {
			return zingchart.exec(this[0].id, "getseriesdata", {});
		}
	};

	$.fn.getSeriesValues = function (opts) {
		if (opts) {
			return zingchart.exec(this[0].id, "getseriesvalues", opts);
		}
		else {
			return zingchart.exec(this[0].id, "getseriesvalues", {});
		}
	};

	$.fn.modifyPlot = function (data) {
		zingchart.exec(this[0].id, "modifyplot", data);
		return this;
	};

	$.fn.removeNode = function (data) {
		zingchart.exec(this[0].id, "removenode", data);
		return this;
	};

	$.fn.removePlot = function (data) {
		zingchart.exec(this[0].id, "removeplot", data);
		return this;
	};

	$.fn.set3dView = function (data) {
		zingchart.exec(this[0].id, "set3dview", data);
		return this;
	};

	$.fn.setNodeValue = function (data) {
		zingchart.exec(this[0].id, "setnodevalue", data);
		return this;
	};

	$.fn.setSeriesData = function (data) {
		zingchart.exec(this[0].id, "setseriesdata", data);
		return this;
	};

	$.fn.setSeriesValues = function (data) {
		zingchart.exec(this[0].id, "setseriesvalues", data);
		return this;
	};

	// EXPORT METHODS =========================================================
	$.fn.exportData = function () {
		zingchart.exec(this[0].id, "exportdata");
		return this;
	};

	$.fn.getImageData = function (ftype) {
		if (ftype == "png" || ftype == "jpg" || ftype == "bmp") {
			zingchart.exec(this[0].id, "getimagedata", {
				filetype: ftype
			});
			return this;
		}
		else {
			throw("Error: Got " + ftype + ", expected 'png' or 'jpg' or 'bmp'");
		}
	};

	$.fn.print = function () {
		zingchart.exec(this[0].id, "print");
		return this;
	};

	$.fn.saveAsImage = function () {
		zingchart.exec(this[0].id, "saveasimage");
		return this;
	};

	// FEED METHODS ===========================================================
	$.fn.clearFeed = function () {
		zingchart.exec(this[0].id, "clearfeed");
		return this;
	};

	$.fn.getInterval = function () {
		return zingchart.exec(this[0].id, "getinterval");
	};

	$.fn.setInterval = function (intr) {
		if (typeof(intr) == "number") {
			zingchart.exec(this[0].id, "setinterval", {
				interval: intr
			});
			return this;
		}
		else {
			throw("Error: Got " + typeof(intr) + ", expected number");
		}
	};

	$.fn.startFeed = function () {
		zingchart.exec(this[0].id, "startfeed");
		return this;
	};

	$.fn.stopFeed = function () {
		zingchart.exec(this[0].id, "stopfeed");
		return this;
	};

	// GRAPH INFORMATION METHODS ==============================================
	$.fn.getChartType = function (opts) {
		if (opts) {
			return zingchart.exec(this[0].id, "getcharttype", opts);
		}
		else {
			return zingchart.exec(this[0].id, "getcharttype");
		}
	};

	$.fn.getData = function () {
		return zingchart.exec(this[0].id, "getdata");
	};

	$.fn.getEditMode = function () {
		return zingchart.exec(this[0].id, "geteditmode");
	};

	$.fn.getGraphLength = function () {
		return zingchart.exec(this[0].id, "getgraphlength");
	};

	$.fn.getNodeLength = function (opts) {
		if (opts) {
			return zingchart.exec(this[0].id, "getnodelength", opts);
		}
		else {
			return zingchart.exec(this[0].id, "getnodelength");
		}
	};

	$.fn.getNodeValue = function (opts) {
		return zingchart.exec(this[0].id, "getnodevalue", opts);
	};

	$.fn.getObjectInfo = function (opts) {
		return zingchart.exec(this[0].id, "getobjectinfo", opts);
	};

	$.fn.getPlotLength = function (opts) {
		if (opts) {
			return zingchart.exec(this[0].id, "getplotlength", opts);
		}
		else {
			return zingchart.exec(this[0].id, "getplotlength");
		}
	};

	$.fn.getPlotValues = function (opts) {
		return zingchart.exec(this[0].id, "getplotvalues", opts);
	};

	$.fn.getRender = function () {
		return zingchart.exec(this[0].id, "getrender");
	};

	$.fn.getRules = function (opts) {
		return zingchart.exec(this[0].id, "getrules", opts);
	};

	$.fn.getVersion = function () {
		return zingchart.exec(this[0].id, "getversion");
	};

	$.fn.getXYInfo = function (opts) {
		return zingchart.exec(this[0].id, "getxyinfo", opts);
	};

	// GRAPH MANIPULATION =====================================================
	$.fn.addScaleValue = function (url) {
		zingchart.exec(this[0].id, "addscalevalue", {
			dataurl: url
		});
		return this;
	};

	$.fn.destroy = function (opts) {
		if (opts) {
			if (opts.hasOwnProperty("")) {

			}
		}
		else {
			zingchart.exec(this[0].id, "destroy");
		}
		return this;
	};

	$.fn.load = function (opts) {
		zingchart.exec(this[0].id, "load", opts);
		return this;
	};

	$.fn.modify = function (opts) {
		zingchart.exec(this[0].id, "modify", opts);
		return this;
	};

	$.fn.reloadChart = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "reload", opts);
		}
		else {
			zingchart.exec(this[0].id, "reload");
		}
		return this;
	};

	$.fn.removeScaleValue = function (opts) {
		zingchart.exec(this[0].id, "removescalevalue", opts);
		return this;
	};

	$.fn.resizeChart = function (opts) {
		zingchart.exec(this[0].id, "resize", opts);
		return this;
	};

	$.fn.setData = function (opts) {
		zingchart.exec(this[0].id, "setdata", opts);
		return this;
	};

	$.fn.update = function (opts) {
		zingchart.exec(this[0].id, "update");
		return this;
	};

	// HISTORY METHODS ========================================================
	$.fn.goBack = function () {
		zingchart.exec(this[0].id, "goback");
		return this;
	};

	$.fn.goForward = function () {
		zingchart.exec(this[0].id, "goforward");
		return this;
	};

	// INTERACTIVE METHODS ====================================================
	$.fn.addNodeIA = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "addnodeia", opts);
		}
		else {
			zingchart.exec(this[0].id, "addnodeia");
		}
		return this;
	};

	$.fn.enterEditMode = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "entereditmode", opts);
		}
		else {
			zingchart.exec(this[0].id, "entereditmode");
		}
		return this;
	};

	$.fn.exitEditMode = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "exiteditmode", opts);
		}
		else {
			zingchart.exec(this[0].id, "exiteditmode");
		}
		return this;
	};

	$.fn.removeNodeIA = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "removenodeia", opts);
		}
		else {
			zingchart.exec(this[0].id, "removenodeia");
		}
		return this;
	};

	$.fn.removePlotIA = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "removeplotia", opts);
		}
		else {
			zingchart.exec(this[0].id, "removeplotia");
		}
		return this;
	};

	// NOTES METHODS ==========================================================
	$.fn.addNote = function (opts) {
		zingchart.exec(this[0].id, "addnote", opts);
		return this;
	};

	$.fn.removeNote = function (opts) {
		zingchart.exec(this[0].id, "removenote", {
			"id": opts
		});
		return this;
	};

	$.fn.updateNote = function (opts) {
		zingchart.exec(this[0].id, "updatenote", opts);
		return this;
	};

	// OBJECTS METHODS ========================================================
	$.fn.addObject = function (opts) {
		zingchart.exec(this[0].id, "addobject", opts);
		return this;
	};

	$.fn.removeObject = function (opts) {
		zingchart.exec(this[0].id, "removeobject", opts);
		return this;
	};

	$.fn.repaintObjects = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "repaintobjects", opts);
		}
		else {
			zingchart.exec(this[0].id, "repaintobjects", {});
		}
		return this;
	};

	$.fn.updateObject = function (opts) {
		zingchart.exec(this[0].id, "updateobject", opts);
		return this;
	};

	// LABEL METHODS ==========================================================
	$.fn.addLabel = function (opts) {
		zingchart.exec(this[0].id, "addobject", {
			"type":"label",
			"data":opts
		});
		return this;
	};

	$.fn.removeLabel = function (opts) {
		zingchart.exec(this[0].id, "removeobject", {
			"type":"label",
			"id":opts
		});
		return this;
	};

	$.fn.updateLabel = function (opts) {
		zingchart.exec(this[0].id, "updateobject", {
			"type": "label",
			"data": opts
		});
		return this;
	};

	// RULES METHODS ==========================================================
	$.fn.addRule = function (opts) {
		zingchart.exec(this[0].id, "addrule", opts);
		return this;
	};

	$.fn.removeRule = function (opts) {
		zingchart.exec(this[0].id, "removerule", opts);
		return this;
	};

	$.fn.updateRule = function (opts) {
		zingchart.exec(this[0].id, "updaterule", opts);
		return this;
	};

	// SELECTION METHODS ======================================================
	$.fn.clearSelection = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "clearselection", opts);
		}
		else {
			zingchart.exec(this[0].id, "clearselection");
		}
		return this;
	};

	$.fn.chartDeselect = function (opts) {
		zingchart.exec(this[0].id, "deselect", opts);
		return this;
	};

	$.fn.getSelection = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "getselection", opts);
		}
		else {
			zingchart.exec(this[0].id, "getselection");
		}
		return this;
	};

	$.fn.chartSelect = function (opts) {
		zingchart.exec(this[0].id, "select", opts);
		return this;
	};

	$.fn.setSelection = function (opts) {
		zingchart.exec(this[0].id, "setselection", opts);
		return this;
	};

	// TOGGLE METHODS =========================================================
	$.fn.disable = function (message) {
		if (message) {
			zingchart.exec(this[0].id, "disable", {text: message});
		}
		else {
			zingchart.exec(this[0].id, "disable");
		}
		return this;
	};

	$.fn.enable = function () {
		zingchart.exec(this[0].id, "enable");
		return this;
	};

	$.fn.exitFullscreen = function () {
		zingchart.exec(this[0].id, "exitfullscreen");
		return this;
	};

	$.fn.fullscreen = function () {
		zingchart.exec(this[0].id, "fullscreen");
		return this;
	};

	$.fn.hideMenu = function () {
		zingchart.exec(this[0].id, "hidemenu");
		return this;
	};

	$.fn.hidePlot = function (opts) {
		zingchart.exec(this[0].id, "hideplot", opts);
		return this;
	};

	$.fn.hideAllPlots = function (opts) {
		var myId = this[0].id;
		var allPlots = ( opts && opts.hasOwnProperty("graphid") ? zingchart.exec(myId,"getplotlength",opts) : zingchart.exec(myId,"getplotlength"));
		if (opts && opts.hasOwnProperty('graphid')) {
			for (var i = 0; i < allPlots; i++) {
				zingchart.exec(myId, "hideplot", {
					"graphid": opts.graphid,
					"plotindex": i
				});
			}
		}
		else {
			for (var i = 0; i < allPlots; i++) {
				zingchart.exec(myId, "hideplot", {
					"plotindex": i
				});
			}
		}
		return this;
	};

	$.fn.hideAllPlotsBut = function (opts) {
		var myId = this[0].id;
		var allPlots = ( opts && opts.hasOwnProperty("graphid") ? zingchart.exec(myId,"getplotlength",opts) : zingchart.exec(myId,"getplotlength"));
		if (opts && opts.hasOwnProperty('graphid') && opts.hasOwnProperty('plotindex')) {
			for (var i = 0; i < allPlots; i++) {
				if (i != opts.plotindex) {
					zingchart.exec(myId, "hideplot", {
						"graphid": opts.graphid,
						"plotindex": i
					});
				}
			}
		}
		else {
			for (var i = 0; i < allPlots; i++) {
				if (i != opts.plotindex) {
					zingchart.exec(myId, "hideplot", {
						"plotindex": i
					});
				}
			}
		}
		return this;
	};

	$.fn.modifyAllPlotsBut = function (opts, data) {
		var myId = this[0].id;
		var allPlots = ( opts && opts.hasOwnProperty("graphid") ? zingchart.exec(myId,"getplotlength",opts) : zingchart.exec(myId,"getplotlength"));
		if (opts && opts.hasOwnProperty('graphid') && opts.hasOwnProperty('plotindex')) {
			for (var i = 0; i < allPlots; i++) {
				if (i != opts.plotindex) {
					zingchart.exec(myId, "modifyplot", {
						"graphid": opts.graphid,
						"plotindex": i,
						"data": data
					});
				}
			}
		}
		else {
			for (var i = 0; i < allPlots; i++) {
				if (i != opts.plotindex) {
					zingchart.exec(myId, "modifyplot", {
						"plotindex": i,
						"data": data
					});
				}
			}
		}
		return this;
	};

	$.fn.modifyAllPlots = function (data, opts) {
		var myId = this[0].id;
		var allPlots = ( opts ? zingchart.exec(myId,"getplotlength",opts) : zingchart.exec(myId,"getplotlength"));
		for (var i = 0; i < allPlots; i++) {
			if (opts && opts.graphid) {
				zingchart.exec(myId, "modifyplot", {
					"graphid": opts.graphid,
					"plotindex": i,
					"data": data
				});
			}
			else {
				zingchart.exec(myId, "modifyplot", {
					"plotindex": i,
					"data": data
				});
			}
		};
		return this;
	};

	$.fn.showAllPlots = function (opts) {
		var myId = this[0].id;
		var allPlots = ( opts && opts.hasOwnProperty("graphid") ? zingchart.exec(myId,"getplotlength",opts) : zingchart.exec(myId,"getplotlength"));
		if (opts && opts.hasOwnProperty('graphid')) {
			for (var i = 0; i < allPlots; i++) {
				zingchart.exec(myId, "showplot", {
					"graphid": opts.graphid,
					"plotindex": i
				});
			}
		}
		else {
			for (var i = 0; i < allPlots; i++) {
				zingchart.exec(myId, "showplot", {
					"plotindex": i
				});
			}
		}
		return this;
	};

	$.fn.showAllPlotsBut = function (opts) {
		var myId = this[0].id;
		var allPlots = ( opts && opts.hasOwnProperty("graphid") ? zingchart.exec(myId,"getplotlength",opts) : zingchart.exec(myId,"getplotlength"));
		if (opts && opts.hasOwnProperty('graphid') && opts.hasOwnProperty('plotindex')) {
			for (var i = 0; i < allPlots; i++) {
				if (i != opts.plotindex) {
					zingchart.exec(myId, "showplot", {
						"graphid": opts.graphid,
						"plotindex": i
					});
				}
			}
		}
		else {
			for (var i = 0; i < allPlots; i++) {
				if (i != opts.plotindex) {
					zingchart.exec(myId, "showplot", {
						"plotindex": i
					});
				}
			}
		}
		return this;
	};

	$.fn.legendMaximize = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "legendmaximize", opts);
		}
		else {
			zingchart.exec(this[0].id, "legendmaximize");
		}
		return this;
	};

	$.fn.legendMinimize = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "legendminimize", opts);
		}
		else {
			zingchart.exec(this[0].id, "legendminimize");
		}
		return this;
	};

	$.fn.showMenu = function () {
		zingchart.exec(this[0].id, "showmenu");
		return this;
	};

	$.fn.showPlot = function (opts) {
		zingchart.exec(this[0].id, "showplot", opts);
		return this;
	};

	$.fn.toggleAbout = function () {
		zingchart.exec(this[0].id, "toggleabout");
		return this;
	};

	$.fn.toggleBugReport = function () {
		zingchart.exec(this[0].id, "togglebugreport");
		return this;
	};

	$.fn.toggleDimension = function () {
		zingchart.exec(this[0].id, "toggledimension");
		return this;
	};

	$.fn.toggleLegend = function () {
		zingchart.exec(this[0].id, "togglelegend");
		return this;
	};

	$.fn.toggleLens = function () {
		zingchart.exec(this[0].id, "togglelens");
		return this;
	};

	$.fn.toggleSource = function () {
		zingchart.exec(this[0].id, "togglesource");
		return this;
	};

	// ZOOM METHODS ===========================================================
	$.fn.viewAll = function () {
		zingchart.exec(this[0].id, "viewall");
		return this;
	};

	$.fn.zoomIn = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "zoomin", opts);
		}
		else {
			zingchart.exec(this[0].id, "zoomin");
		}
		return this;
	};

	$.fn.zoomOut = function (opts) {
		if (opts) {
			zingchart.exec(this[0].id, "zoomout", opts);
		}
		else {
			zingchart.exec(this[0].id, "zoomout");
		}
		return this;
	};

	$.fn.zoomTo = function (opts) {
		zingchart.exec(this[0].id, "zoomto", opts);
		return this;
	};

	$.fn.zoomToValues = function (opts) {
		zingchart.exec(this[0].id, "zoomtovalues", opts);
		return this;
	};

	/*********************************************************************
	 ****************************** EVENTS *******************************
	 *********************************************************************/

	// ANIMATION EVENTS ====================================================
	$.fn.animationEnd = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "animationEnd", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.animationStart = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "animation_start", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.animationStep = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "animation_step", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	// DATA MANIPULATION EVENTS ===============================================
	$.fn.chartModify = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "modify", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.nodeAdd = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "node_add", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.nodeRemove = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "node_remove", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.plotAdd = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "plot_add", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.plotModify = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "plot_modify", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.plotRemove = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "plot_remove", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.chartReload = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "reload", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.dataSet = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "setdata", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	// EXPORT EVENTS ==========================================================
	$.fn.dataExport = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "data_export", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.imageSave = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "image_save", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.chartPrint = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "print", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	// FEED EVENTS ============================================================
	$.fn.feedClear = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "feed_clear", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.feedIntervalModify = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "feed_interval_modify", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.feedStart = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "feed_start", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.feedStop = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "feed_stop", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	// GLOBAL EVENTS
	$.fn.graphClick = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "click", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.graphComplete = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "complete", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.graphDataParse = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "dataparse", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.graphDataReady = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "dataready", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.graphGuideMouseMove = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "guide_mousemove", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.graphLoad = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "load", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.graphMenuItemClick = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "menu_item_click", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.graphResize = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "resize", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	// HISTORY EVENTS =========================================================
	$.fn.historyForward = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "history_forward", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.historyBack = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "history_back", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	// INTERACTIVE EVENTS =====================================================
	$.fn.nodeSelect = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "node_select", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.nodeDeselect = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "node_deselect", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.plotSelect = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "plot_select", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.plotDeselect = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "plot_deselect", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	// LEGEND EVENTS ==========================================================
	$.fn.legendItemClick = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "legend_item_click", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.legendMarkerClick = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "legend_marker_click", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	// NODE EVENTS ============================================================
	$.fn.nodeClick = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "node_click", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.nodeDoubleClick = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "node_doubleclick", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};
	
	$.fn.nodeMouseOver = function (callback) {
		var jq = this;
		var NODEMOUSEOVER = false;
		zingchart.bind(this[0].id, "node_mouseover", function(p){
			if (!NODEMOUSEOVER) {
				$.extend(jq,{event:p});
				NODEMOUSEOVER = true;
				callback.call(jq);
			}
		});
		zingchart.bind(jq[0].id, "node_mouseout", function(){
			NODEMOUSEOVER = false;
		});
		return this;
	};

	$.fn.nodeMouseOut = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "node_mouseout", function(p){
			$.extend(jq,{event:p});
			callback.call(jq);
		});
		return this;
	};

	$.fn.nodeHover = function (mouseover, mouseout) {
		$(this).nodeMouseOver(mouseover).nodeMouseOut(mouseout);
		return this;
	};

	// LABEL EVENTS ============================================================
	$.fn.labelClick = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "label_click", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.labelMouseOver = function (callback) {
		var jq = this;
		var LABELMOUSEOVER = false;
		zingchart.bind(this[0].id, "label_mouseover", function(p){
			if (!LABELMOUSEOVER) {
				$.extend(jq,{event:p});
				LABELMOUSEOVER = true;
				callback.call(jq);
			}
		});
		zingchart.bind(jq[0].id, "label_mouseout", function(){
			LABELMOUSEOVER = false;
		});
		return this;
	};

	$.fn.labelMouseOut = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "label_mouseout", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.labelHover = function (mouseover, mouseout) {
		$(this).labelMouseOver(mouseover).labelMouseOut(mouseout);
		return this;
	};

	// SHAPE EVENTS ============================================================
	$.fn.shapeClick = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "shape_click", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.shapeMouseOver = function (callback) {
		var jq = this;
		var SHAPEMOUSEOVER = false;
		zingchart.bind(this[0].id, "shape_mouseover", function(p){
			if (!SHAPEMOUSEOVER) {
				$.extend(jq,{event:p});
				SHAPEMOUSEOVER = true;
				callback.call(jq);
			}
		});
		zingchart.bind(jq[0].id, "shape_mouseout", function(){
			SHAPEMOUSEOVER = false;
		});
		return this;
	};

	$.fn.shapeMouseOut = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "shape_mouseout", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.shapeHover = function (mouseover, mouseout) {
		$(this).shapeMouseOver(mouseover).shapeMouseOut(mouseout);
		return this;
	};

	// PLOT EVENTS ============================================================
	$.fn.plotClick = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "plot_click", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.plotDoubleClick = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "plot_doubleclick", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.plotMouseOver = function (callback) {
		var jq = this;
		var PLOTMOUSEOVER = false;
		zingchart.bind(this[0].id, "plot_mouseover", function(p){
			if (!PLOTMOUSEOVER) {
				$.extend(jq,{event:p});
				PLOTMOUSEOVER = true;
				callback.call(jq);
			}
		});
		zingchart.bind(jq[0].id, "plot_mouseout", function(){
			PLOTMOUSEOVER = false;
		});
		return this;
	};

	$.fn.plotMouseOut = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "plot_mouseout", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.plotHover = function (mouseover, mouseout) {
		$(this).plotMouseOver(mouseover).plotMouseOut(mouseout);
		return this;
	};

	$.fn.plotShow = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "plot_show", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.plotHide = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "plot_hide", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	// TOGGLE EVENTS ==========================================================
	$.fn.aboutShow = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "about_show", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.aboutHide = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "about_hide", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.bugReportShow = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "bugreport_show", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.bugReportHide = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "bugreport_hide", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.dimensionChange = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "dimension_change", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.lensShow = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "lens_show", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.lensHide = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "lens_hide", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.sourceShow = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "source_show", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.sourceHide = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "source_hide", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.legendShow = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "legend_show", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.legendHide = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "legend_hide", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.legendMaximize = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "legend_maximize", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.legendMinimize = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "legend_minimize", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	$.fn.zoomEvent = function (callback) {
		var jq = this;
		zingchart.bind(this[0].id, "zoom", function(p){
			$.extend(jq,{event:p});
			callback.call(jq)
		});
		return this;
	};

	/*********************************************************************
	 ********************** HELPER METHODS *******************************
	 *********************************************************************/

	$.fn.setTitle = function (newtitle) {
		if (typeof(newtitle) == 'object') {
			zingchart.exec(this[0].id, "modify", {
				data: {
					title: newtitle
				}
			});
		}
		else {
			zingchart.exec(this[0].id, "modify", {
				data: {
					title: {
						text: newtitle
					}
				}
			});
		}
		return this;
	};

	$.fn.setSubtitle = function (newtitle) {
		if (typeof(newtitle) == 'object') {
			zingchart.exec(this[0].id, "modify", {
				data: {
					subtitle: newtitle
				}
			});
		}
		else {
			zingchart.exec(this[0].id, "modify", {
				data: {
					subtitle: {
						text: newtitle
					}
				}
			});
		}
		return this;
	};

	$.fn.setType = function (type) {
		zingchart.exec(this[0].id, "modify", {
			"data": {
				"type": type
			}
		});
		zingchart.exec(this[0].id,"update");
		return this;
	};

	$.fn.drawTrendline = function (opts) {
		var myId = this[0].id;
		calculate.call(this,0);
		function calculate(pindex) {
			var nodes = $(this).getSeriesValues({
				plotindex:pindex
			});
			var sxy = 0, sx = 0, sy = 0, sx2 = 0, l = 0;
			var oScaleInfo = $(this).getObjectInfo({
				object : 'scale',
				name : 'scale-x'
			});
			var aScaleValues = oScaleInfo.values;
			for (var i=0;i<nodes.length;i++) {
				if (nodes[i][1] != undefined && typeof(nodes[i][1]) == 'number') {
					sxy += nodes[i][0]*nodes[i][1];
					sx += nodes[i][0];
					sy += nodes[i][1];
					sx2 += nodes[i][0]*nodes[i][0];
					l++;
				}
				else {
					sxy += nodes[i]*aScaleValues[i];
					sx += aScaleValues[i];
					sy += nodes[i];
					sx2 += Math.pow(aScaleValues[i],2);
					l++;
				}
			}
			var b = (l * sxy - sx * sy) / (l * sx2 - sx * sx);
			var a = (sy - b * sx) / l;
			var oScaleInfo = $(this).getObjectInfo({
				object : 'scale',
				name : 'scale-x'
			});
			var aScaleValues = oScaleInfo.values, fScaleMin = aScaleValues[0], fScaleMax = aScaleValues[aScaleValues.length-1];
			var aRange = [a + b*fScaleMin, a + b*fScaleMax];
			var trendline = {
				type : 'line',
				lineColor : '#c00',
				lineWidth : 2,
				alpha : 0.75,
				lineStyle : 'dashed',
				label : {
					text : ''
				}
			};
			if (opts) {
				$.extend(trendline,opts);
			}
			trendline.range = aRange;
			var scaleY = $(this).getObjectInfo({
				object:'scale',
				name: 'scale-y'
			});
			var markers = scaleY.markers;
			if (markers) {
				markers.push(trendline);
			}
			else {
				markers = [trendline];
			}
			$(this).modify({
				"data": {
					"scale-y": {
						"markers": markers
					}
				}
			});
		}
		return this;
	};

}( jQuery ));