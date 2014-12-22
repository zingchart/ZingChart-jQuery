# ZingChart jQuery #
#### Less code. More win. ####
<br>
ZingChart jQuery is a wrapper for the [ZingChart charting library](http://www.zingchart.com/) that allows for jQuery-style use of the [**88** different API methods](#methods) and [**81** different API events](#events) that ZingChart has to offer. It's designed to allow maximum use of the various features with the simplest and most jQuery-esque syntax possible.

Intro
-----
Before we get started with this wrapper, it'd be a good idea to familiarize yourself with the [ZingChart library](http://www.zingchart.com/). There's even a [tutorial](http://www.zingchart.com/docs/tutorials/first-chart/) for creating your first chart with ZingChart. It should get you up to speed on how this library works.

Looking for more info? Check out any of the below tutorials to get up to speed on the ZingChart library or dig into our [docs pages](http://www.zingchart.com/docs/).

**Tutorials**
+ [Your First Chart](http://www.zingchart.com/docs/tutorials/first-chart/)
+ [Basic Scale Configuration](http://www.zingchart.com/docs/tutorials/configuring-scales/)
+ [Improving Data Indicators](http://www.zingchart.com/docs/tutorials/improving-data-indicators/)
+ [Adding Style](http://www.zingchart.com/docs/tutorials/adding-style/)
+ [Calling Attention](http://www.zingchart.com/docs/tutorials/calling-attention/)
+ [Customizing the Context-Menu](http://www.zingchart.com/docs/tutorials/context-menu/)
+ [Using Data From a Database](http://www.zingchart.com/docs/tutorials/database-data/)

Basics
------
Step One is to make sure you have [jQuery loaded](http://jquery.com/download/). This wrapper won't work without it.

The ZingChart jQuery wrapper works just like normal jQuery. Each method or event is tacked on to the standard jQuery selector method. All methods should be placed inside a ``` $(document).ready() ``` call to ensure the DOM is fully loaded. Here's an example of creating a ZingChart object on a div with an ID of "$("#myChart")":

```javascript
$(document).ready(function() {
	$("#myChart").zingchart({
		"data":{
			"type": "line",
			"series": [
				{
					"values": [1,2,5,3,9,4]
				}
			]
		}
	});
})
```
> For the sake of brevity, the rest of the examples will omit the ``` $(document).ready() ``` wrapper. That being said, you still need to include it when using this library.

All of the methods which take an object as a parameter can have it passed through directly or by reference. Both are equivalent.

**Directly**
```javascript
$("#myChart").zingchart({
	"data": {
		"type": "bar",
		"series": [
			{
				"values": [3,7,9,2]
			}
		]
	}
});
```
**Reference**
```javascript
var myData = {
	"type": "bar",
	"series": [
		{
			"values": [3,7,9,2]
		}
	]
};

$("#myChart").zingchart({data: myData});
```
Woohoo! Congrats! You've just made your first ZingChart. Pretty straightforward, isn't it? Now we get into the nitty gritty of the API: how to make your chart do stuff.

Chaining
--------
One of the more user-friendly aspects of jQuery is the chaining of functions, allowing for users to specify the target once but call multiple functions that affect it. This wrapper supports chaining for any methods or events that return a jQuery object. For example, say you want to set a chart to the 3D view and resize it. Instead of calling each method on the chart separately, you could chain them like this:

```javascript
$("#myChart").set3dView({"y-angle":10}).resizeChart({"width":600,"height":400});
```
$("#myChart") is now set to a 3D view and resized in just one line of code!
Pat yourself on the back for saving time by using chaining. You're a rockstar!

<br>
**An Important Note**: many of the event functions may be very similar in name to the method functions and vice versa. This is intentional. The differentiation between the method functions and the event functions is that the ***method*** functions always start with a ***verb***: the action they're performing, while the ***event*** functions always start with a ***noun***: the object they're watching.

Examples
--------

1. [**Chart Manipulation**: Using Methods and Events Together](http://jsfiddle.net/zingchart/2duo5ww0/)

	Check out this example to see how to make a chart with lots of plots into an interactive and much more legible chart. [Edit in JSFiddle](http://jsfiddle.net/zingchart/2duo5ww0/)

	[![Chart Manipulation](http://g.recordit.co/lUwnAuoqDI.gif)](http://jsfiddle.net/zingchart/2duo5ww0/)

	---

2. [**Chart to DOM**: Manipulating the DOM with Events](http://jsfiddle.net/zingchart/f29jn25b/)

	Learn how to manipulate the DOM through the use of ZingChart jQuery events. [Edit in JSFiddle](http://jsfiddle.net/zingchart/f29jn25b/)

	[![Chart to DOM](http://g.recordit.co/S2r5tcHhfm.gif)](http://jsfiddle.net/zingchart/f29jn25b/)

	---

3. [**DOM to Chart**: Manipulating the Chart with Methods](http://jsfiddle.net/zingchart/5ja8guxf/)

	This is a great first example if you're looking to learn how to integrate ZingChart jQuery methods with standard DOM input elements. [Edit in JSFiddle](http://jsfiddle.net/zingchart/5ja8guxf/)

	[![Chart to DOM](http://g.recordit.co/GljMl7bzGe.gif)](http://jsfiddle.net/zingchart/5ja8guxf/)

	---

4. [**AJAX Data**: Using Asynchronous Data with your Chart](http://jsfiddle.net/zingchart/z3n3qobm/)

	No need to load your data at once. Check out this example to see how to get started with AJAX and the ZingChart jQuery wrapper. [Edit in JSFiddle](http://jsfiddle.net/zingchart/z3n3qobm/)

	[![AJAX Data](http://g.recordit.co/6BaZJT0b7J.gif)](http://jsfiddle.net/zingchart/z3n3qobm/)

	---

Questions?
----------

Check out out extensive documentation below or feel free to email us at [support@zingchart.com](mailto:support@zingchart.com) if you have any questions.

<br>
# Methods[](#methods) #
## Rendering ##

#### .zingchart( object ) ####
Creates a new ZingChart object

Values | Type | Details
--- | --- | ---
Parameter | Object | [ZingChart Object](http://www.zingchart.com/docs/reference/zingchart-object/#zingchart__render)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Rendering a chart
```javascript
$("#myChart").zingchart({
	"type": "line",
	"title": {
		"text": "Hello, ZingChart World!"
	},
	"series": [
		{
			"values": [5, 10, 15, 5, 10, 5]
		}
	]
});
```

<br>
## Data Manipulation ##
#### .addNode( object ) ####
Adds a node to an existing plot

Values | Type | Details
--- | --- | ---
Parameter | Object | [Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addnode)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").addNode({
	"plotindex": 1,
	"nodeindex": 2,
	"value": 12
});
```
<br>
#### .addPlot( object ) ####
Adds a new plot to an exising chart

Values | Type | Details
--- | --- | ---
Parameter | Object | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addplot)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").addPlot({
	"plotindex": 0,
	"data": {
		"values": [10,20,15]
	}
});
```
<br>
#### .appendSeriesData( object ) ####
Appends data to the existing series. Can be used on a single plot or the whole series. Note that the value arrays sent do not concatenate the existing ones.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__appendseriesdata)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").appendSeriesData({
	"plotindex": 0,
	data: {
		"lineColor": "red"
	}
});
```
<br>
#### .appendSeriesValues( object ) ####
Appends data to the end of a plot. Can be used on a single plot or the whole series.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__appendseriesdata)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").appendSeriesData({
	"plotindex": 1,
	"values": [19,28,13,42]
});
```
<br>
#### .getSeriesData( object ) ####
Returns the series data. If a series object is passed through, the data for that series is returned. If no argument is passed through, the data for every series of the chart is returned.

Values | Type | Details
--- | --- | ---
Parameter | Object (OPTIONAL) | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getseriesdata)
Return | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getseriesdata)

```javascript
var myData = $("#myChart").getSeriesData({
	"plotindex": 1
});

// myData = the series data for plot[1] of the chart

var allData = $("#myChart").getSeriesData();

// allData = the series data for all plots of the chart
```
<br>
#### .getSeriesValues( object ) ####
Returns the series values. If a series object is passed through, the values for that series are returned. If no argument is passed through, the values for every series of the chart are returned concatenated in order from the first plot to the last plot.

Values | Type | Details
--- | --- | ---
Parameter | Object (OPTIONAL) | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getseriesvalues)
Return | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getseriesvalues)

```javascript
var myValues = $("#myChart").getSeriesValues({
	"plotindex": 0
});

// myValues = the series values for plot[0] of the chart

var allValues = $("#myChart").getSeriesValues();

// allValues = the series values for all plots of the chart
```
<br>
#### .modifyPlot( object ) ####
Modifies an existing plot on the chart specified by **plotindex**.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__modifyplot)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").modifyPlot({
	"plotindex": 0,
	"data": {
		"lineWidth": 2,
		"lineColor": "yellow",
	}
});
```
<br>
#### .removeNode( object ) ####
Removes a node specified by **plotindex** and **nodeindex**.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removenode)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").removeNode({
	"plotindex": 1,
	"nodeindex": 2
});
```
<br>
#### .removePlot( object ) ####
Removes a plot specified by **plotindex**.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removeplot)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").removePlot({
	"plotindex": 0
});
```
<br>
#### .set3dView( object ) ####
Sets the new 3D parameters for the view. This overrides the settings from the **3d-aspect** attribute of the chart.

Values | Type | Details
--- | --- | ---
Parameter | Object | [3D View Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__set3dview)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").set3dView({
	"y-angle": 10,
	"depth": 60
});
```
<br>
#### .setNodeValue( object ) ####
Changes the value of a single node specified via **plotindex** and **nodeindex** to the new **value**.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__setnodevalue)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").setNodeValue({
	"plotindex": 1,
	"nodeindex": 2,
	"value": 22
});
```
<br>
#### .setSeriesData( object ) ####
Replaces the series data. It can be used on one plot or the whole series depending on if **plotindex** is set.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__setseriesdata)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Setting the series data for a single plot:
```javascript
$("#myChart").setSeriesData({
	"plotindex": 1,
	"data" : {
		"values": [12, 33, 20],
		"lineColor": "red"
	}
});
```

Setting the series data for all plots:
```javascript
$("#myChart").setSeriesData({
	"data": [
		{
			"values": [10,15,20],
			"lineColor": "blue"
		},
		{
			"values": [12,17,10],
			"lineColor": "pink"
		}
	]
});
```
<br>
#### .setSeriesValues( object ) ####
Replaces the series values. It can be used on one plot or the whole series depending on if **plotindex** is set.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__setseriesvalues)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Setting the series values for a single plot:
```javascript
$("#myChart").setSeriesValues({
	"plotindex": 1,
	"values": [99,98,97]
});
```

Setting the series values for all plots:
```javascript
$("#myChart").setSeriesValues({
	"values": [
		[19,28,13,42],
		[37,11,27,25]
	]
});
```
<br>
## Export ###
#### .exportData() ####
Exports the current data for the chart. This only works if the **exportdataurl** is set in the [render options](http://www.zingchart.com/docs/reference/zingchart-object/#zingchart__render).

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").exportData();
//Assuming the exportdataurl is set in the render options, the current data for the chart will be exported to that url.
```

<br>
#### .getImageData( string ) ####
Returns a Base64 encoded image string of the current chart.

Values | Type | Details
--- | --- | ---
Parameter | String | "png", "jpg", "bmp" (only if rendering in Flash)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").getImageData("png");

// or...

$("#myChart").getImageData("jpg");

// or (if you're rendering via Flash)...

$("#myChart").getImageData("bmp");
```

<br>
#### .print() ####
Creates a printable version of the chart and attempts to print it.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
// Results in the printer dialog opening on the page
$("#myChart").print();
```

<br>
#### .saveAsImage() ####
Produces an image of the graph. This will only work if the **exportimageurl** is set in the [render options](http://www.zingchart.com/docs/reference/zingchart-object/#zingchart__render).

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
// Assuming the exportimageurl is set in the render options, an image of the current chart will be exported to that url.
$("#myChart").saveAsImage();
```

<br>
## Feed (Real-time Data) ##
#### .clearFeed() ####
Clears the current chart and starts the feed anew.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").clearFeed();
```

<br>
#### .getInterval() ####
Returns the current interval value set on the feed.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | Number | Seconds (1,2,..) or Miliseconds (100,200,...)

```javascript
var myInterval = $("#myChart").getInterval();
```

<br>
#### .setInterval( number ) ####
Sets the feed update interval on a feed graph.

Values | Type | Details
--- | --- | ---
Parameter | Number | Seconds (1,2,...) or Miliseconds (100,200,...)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").setInterval(500);
// Sets the feed update interval to 500ms (1/2 sec)
```

<br>
#### .startFeed() ####
Starts the data feed of the chart.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").startFeed();
```

<br>
#### .stopFeed() ####
Stops the data feed of the chart.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").stopFeed();
```

<br>
## Graph Information ##
#### .getChartType( object ) ####
Returns the chart's type. If a **graphid** is passed, it will return the chart type for the specified chart. If the chart is has multiple charts inside it (i.e. a graphset) and no object is passed specifying which graphid to get, the method returns the chart type of the first (index 0) chart in the graph set.

Values | Type | Details
--- | --- | ---
Parameter | Object (OPTIONAL) | [Graph Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getcharttype)
Return | String | The [chart type](http://www.zingchart.com/docs/chart-types/) in lowercase ("line", "pie", "area",...)

```javascript
var myType = $("#myChart").getChartType();
// myType = the type of the chart at #$("#myChart")

var indexOneType = $("#myChart").getChartType({
	"graphid": 1
});
// indexOneType = the type of the chart at index 1 of #$("#myChart")
```

<br>
#### .getData() ####
Returns the entire JSON for the chart. All of it. Every single nugget of info.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | Object | [Chart Data Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getdata)

<br>
#### .getEditMode() ####
Returns 'true' if the user is in edit more for the chart or 'false' if not.

Values | Type | Details
--- | --- | ---
Parameter | |
Return | Boolean | true if in edit more, false if not

```javascript
if ( $("#myChart").getEditMode() ) {
	alert("I am editing my chart")
}

// If we were in edit more on the chart, the alert would fire.
```

<br>
#### .getGraphLength() ####
Returns the number of graph objects in the chart.

Values | Type | Details
--- | --- | ---
Parameter | |
Return | Number | 1,2,...

```javascript
var numberOfGraphs = $("#myChart").getGraphLength();

// numberOfGraphs = the number of graph objects in the chart
```

<br>
#### .getNodeLength( object ) ####
Returns the number of nodes in a plot specified by **plotindex**. If no object is passed, the function returns the number of nodes in the 0 index plot.

Values | Type | Details
--- | --- | ---
Parameter | Object (OPTIONAL) | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getnodelength)
Return | Number | 1,2,...

```javascript
var numberOfNodes = $("#myChart").getNodeLength();

// numberOfNodes = the number of nodes in the 0 index plot

var nodesInPlot = $("#myChart").getNodeLength({
	"plotindex": 1
});

// nodesInPlot = the number of nodes in the plot at index 1
```

<br>
#### .getNodeValue( object ) ####
Returns the value of the node specified by **plotindex** and **nodeindex**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getnodevalue)
Return | Number | 1,2,...

```javascript
var myValue = $("#myChart").getNodeValue({
	"plotindex": 1,
	"nodeindex": 5
});
```

<br>
#### .getObjectInfo( object ) ####
Returns various attributes for specific chart elements (graph, plotarea, scale, plot, node). Depending on the object passed, a subset of the following attributes will be returned:
```x, y, width, height, lineColor, lineWidth, borderColor, borderWidth, backgroundColor1, backgroundColor2, text, values, minValue, maxValue, step, stepSize```

Value | Type | Details
--- | --- | ---
Parameter | Object | [Info Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getobjectinfo)
Return | Object | Dependent on targeted object

```javascript
$("#myChart").getObjectInfo({
	"object": "graph"
});

// This would return all the object info available for the graph object.
```

<br>
#### .getPlotLength( object ) ####
Returns the number of plots in a given graph. If **graphid*** is specified, the number of plots for that graph are returned.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graph ID Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getplotlength)
Return | Number | 1,2,...

```javascript
var myPlotLength = $("#myChart").getPlotLength();

// myPlotLength would then equal the number of plots in $("#myChart")
```

<br>
#### .getPlotValues( object ) ####
Returns the value of the plot specified by **plotindex**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getplotvalues)
Return | Array | ex: [12,23,45]

```javascript
var myPlotValues = $("#myChart").getPlotValues({
	"plotindex": 0
});

// myPlotValues = the array of values for the plot at index 0.
```

<br>
#### .getRender() ####
Returns the render mode for the chart.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | String | "svg", "canvas", "vml"

```javascript
var myRenderMode = $("#myChart").getRender();

// myRenderMode = the render more of $("#myChart")
```

<br>
#### .getRules( object ) ####
Returns an array containing the ids of the existing rules in the chart, specified by **plotindex**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getrules)
Return | Array | ["rule1", "rule2"]

```javascript
var myRules = $("#myChart").getRules({
	"plotindex": 0
});

myRules = the rules for the plot at index 0.
```

<br>
#### .getVersion() ####
Returns the version of the library you're currently running. This is usefulf for debugging and good information to provide if you need to contacting support.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | String | ex: "0.141015pre"

```javascript
var myVersion = $("#myChart").getVersion();

// myVersion = the version of the library you're currently running.
```

<br>
#### .getXYInfo( object ) ####
Returns various scale and node related information based on x and y positions in the chart. The returned data is an array of object holding information relative to key scales, value scales, and node proximity.

Value | Type | Details
--- | --- | ---
Parameter | Object | [XY Coords.](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getxyinfo)
Return | Array | [Object1, Object2, ...]

```javascript
var myXYInfo = $("#myChart").getXYInfo({
	x: 100,
	y: 200
});

// myXYInfo = an array of information relative to the XY coordinates.
```

<br>
## Graph Manipulation ##
#### .addScaleValue( object ) ####
Adds a new scale value on the chart.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Scale Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addscalevalue)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").addScaleValue({
	"scale": "scale-x",
	"nodeindex": 4,
	"value": 23
});
```

<br>
#### .destroy() ####
Destroys the chart, removing the associated DOM nodes and events. This is the recommended way to remove a chart from a page.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").destroy();

// ZingChart jQuery Wrapper uses 'destroy'. It's super effective!
```

<br>
#### .load( string ) ####
Loads a new JSON packet from a URL.

Value | Type | Details
--- | --- | ---
Parameter | String | 'newjson.php', 'somedata.php', etc.
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").load("awholenewdata.php");
```

<br>
#### .modify( object ) ####
Modifies any part of the current graph that you specify in the passed object.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Modify Data Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__modify)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").modify({
	"data": {
		"title": {
			"text": "Supermodified"
		},
		"subtitle": {
			"text": "by Amon Tobin"
		}
	}
});

// The title of $("#myChart") is now "Supermodified" and the subtitle is now "by Amon Tobin"
```

<br>
#### .reloadChart( object ) ####
If an object is passed through specifying the **graphid** of a graph, only that graph will be reloaded. If no object is passed through, the entire chart is reloaded.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graphset Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__reload)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Reloading the entire chart.
```javascript
$("#myChart").reloadChart();
```

Reloading a single graph of the chart.
```javascript
$("#myChart").reload({
	"graphid": 0
});
```

<br>
#### .removeScaleValue( object ) ####
Removes a value from the scale specified by the **scale** and the **nodeindex**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Scale Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removescalevalue)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").removeScaleValue({
	"scale": "scale-x",
	"nodeindex": 4
});

// The scale value at index 4 on the x-axis has now been removed.
```

<br>
#### .resizeChart( object ) ####
Resizes the chart according to new dimensions set by the **width** and **height**. For pixel-based widths and heights, you can just use a number (i.e. 600 instead of "600px"). For percentages, you'll need to use a string (i.e. "100%").

Value | Type | Details
--- | --- | ---
Parameter | Object | [Size Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__resize)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").resize({
	"width": 600,
	"height": 400
});

// Wha-Bam! Your chart is now 600px wide and 400px tall. 
```

<br>
#### .setData( object ) ####
Takes a full JSON packet to replace the current one. Like the .zingchart() method, you can pass the object through directly or by reference.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Data Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__setdata)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").setData({
	"data": {
		"type": "bar",
		"title": {
			"text": "A whole new chart"
		},
		"subtitle": {
			"text": "A new fantastic point of view"
		},
		"series": [
			{
				"values": [1,2,3,4,5,6,7]
			}
		]
	}
});
```

<br>
#### .update() ####
Flushes and applies all queued data manipulation changes set via API calls.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").update();
```

<br>
## History ##
#### .goBack() ####
Goes to the previous page in the chart history. This is very useful for navigating drilldown charts.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").goBack();
```

<br>
#### .goForward() ####
Goes forward one page in the chart history. This is very useful for navigating drilldown charts.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").goForward();
```

<br>
## Interactive ##
#### .addNodeIA( object ) ####
Turns on the ability to add a node to the selected plot through clicking on the graph. An object argument need only be passed if you wish to 1) specify a specific graph in the graph set for which you wish to turn on interactive node adding or 2) in the case of a bubble graph which you pass through the object with "size": number where number is the size of the added node(s).

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Added Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addnodeia)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

For a non-bubble graph
```javascript
$("#myChart").addNodeIA();
```

For a bubble graph
```javascript
$("#myChart").addNodeIA({
	"size": 10
});
```

<br>
#### .enterEditMode( object ) ####
Turns on interactive mode, allowing the selection of a node or plot by clicking on it. The object need only be passed through if you wish you specify a graph in the graphset for which you wish to turn on edit mode.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graph ID](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__entereditmode)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").enterEditMode();
```

<br>
#### .exitEditMode( object ) ####
Deselects the previously selected plot or node when interactive mode is on and exits interactive mode. The object need only be passed through if you wish to specify a graph in the graphset for which you wish to turn off edit mode.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graph ID](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__exiteditmode)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").exitEditMode();
```

<br>
#### .removeNodeIA( object ) ####
Removes a node selected in interactive mode. The object need only be passed through if you wish to specify a graph in the graphset for which you wish to remove a selected node.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graph ID](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removenodeia)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").removeNodeIA();
```

<br>
#### .removePlotIA( object ) ####
Removes a plot selected in interactive mode. The object need only be passed through if you wish to specify a graph in the graphset for which you wish to remove a selected plot.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graph ID](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removeplotia)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").removePlotIA();
```

<br>
## Notes ##

**Requires the zingchart-html5-api-annotations-min.js module**

***
#### .addNote( object ) ####
Adds a note to a chart. The **id** of the note allows it to be updated or removed later.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Note Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addnote)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").addNote({
	"id": "note1",
	"type": "node",
	"text": "I am a note. Hear me roar.",
	"plotindex": 0,
	"nodeindex": 3,
	"style": {
		"background-color": "#F90"
	}
});
```

<br>
#### .removeNote( string OR array) ####
Removes a note, specified by **id** from a chart. If you wish to remove a single note, pass just the **id** of that note as a string. If you wish to remove multiple notes, pass an array of the **ids** of the notes you wish to remove.

Value | Type | Details
--- | --- | ---
Parameter | String OR Array | [Note Name or Note Array](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removenote)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Removing a single note
```javascript
$("#myChart").removeNote("note1");
```

Removing multiple notes
```javascript
$("#myChart").removeNote(["note1","note2","note3"]);
```

<br>
#### .updateNote( object ) ####
Updates an existing note specified by the **id** of the passed note object. The note's position can be moved, the type can be changed, the style can be modified, and much more.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__updatenote)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").updateNote({
	"id": "note1",
	"style": {
		"border-color": "#F7A93E"
	},
	"type": "node",
	"text": "I have been updated."
});
```

<br>
## Objects ##
#### .addObject( object ) ####
Adds one or more objects (labels or shapes) on the chart. Single objects are passed through within the **data** object. Multiple objects are passed through as an array of objects within the **data** object.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Shape/Label Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addobject)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Adding a single object
```javascript
$("#myChart").addObject({
	"type": "label",
	"data": {
		"id": "label1",
		"text": "Made in San Diego",
		"x": 200,
		"y":  100
	}
});
```

Adding multiple objects
```javascript
$("#myChart").addObject({
	"type": "shape",
	"data":[
		{
			"id": "shape1",
			"x": 100,
			"y": 200,
			"type": "circle",
			"size": 20,
			"label": {
				"text": "I AM A CIRCLE!"
			}
		},
		{
			"id": "shape2",
			"x": 200,
			"y": 300,
			"type": "star5",
			"size": 15,
			"label": {
				"text": "I AM A STAR!"
			}
		}
	]
})
```

<br>
#### .removeObject( object ) ####
Removes one or more objects (labels or shapes) from the chart. 
Adds one or more objects (labels or shapes) on the chart. Single objects are passed through with to the **id** attribute. Multiple objects are passed through as an array of objects to the **id** attribute.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Shape/Label Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removeobject)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Removing a single object
```javascript
$("#myChart").removeObject({
	"type": "label",
	"id": "label1"
});
```

Removing multiple objects
```javascript
$("#myChart").removeObject({
	"type": "shape",
	"id": ["shape1","shape2"]
});
```

<br>
#### .repaintObjects( object ) ####
Repaints the entire object collection that was called with **update** set to **false** in the options. It's useful for deferring object changes if you want all the changes to appear at once.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [GraphID Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__repaintobjects)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").repaintObjects();
```

<br>
#### .updateObject( object ) ####
Updates one or more objects (labels or shapes) of the chart. Single objects are passed through within the **data** object. Multiple objects are passed through as an array of objects within the **data** object.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Shape/Label Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__updateobject)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Updating a single object
```javascript
$("#myChart").updateObject({
	"type": "label",
	"data": {
		"id": "label1",
		"background-color": "pink"
	}
});
```

Updating multiple objects
```javascript
$("#myChart").updateObject({
	"type": "shapes",
	"data": [
		{
			"id": "shape1",
			"type": "square",
			"label": {
				"text": "I AM A SQUARE!"
			}
		},
		{
			"id": "shape2",
			"type": "square",
			"label": {
				"text": "¡SOY UN CUADRADO!"
			}
		}
	]
});
```

<br>
## Labels ##
#### .addLabel( object ) ####
Adds a single label to the chart. This is just a shortcut from addObject.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Label Object](http://www.zingchart.com/docs/json-attributes-syntax/graph-objects/labels/)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").addLabel({
	"id": "label1",
	"text":"Donde esta la biblioteca?",
    "font-size":"20px",
    "color":"white",
    "background-color":"pink",
    "x":20,
    "y":20
});
```

<br>
## Rules ##

**Requires the zingchart-html5-api-rules-min.js module**

***
#### .addRule( object ) ####
Adds a rule to a chart, applying the effect to any node that meets the conditions. The rules make use of the [various tokens](http://www.zingchart.com/docs/features/tokens/#tokens__rules) that ZingChart has available. [Visit here](http://www.zingchart.com/docs/features/tokens/#tokens__list) to see the full range of available tokens (be warned: there are lots).

Value | Type | Details
--- | --- | ---
Parameter | Object | [Rule Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addrule)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").addRule({
	"id": "rule1",
	"plotindex": 0,
	"rule": "%node-value < 50",
	"style": {
		"background-color": "#FF0"
	}
});

// Now, any nodes with a value below 50 will have a background color of #FF0. Pretty simple!
```

<br>
#### .removeRule( object ) ####
Removes either a single rule or a series of rules from a chart.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Rule Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removerule)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Removing a single rule.
```javascript
$("#myChart").removeRule({
	"id": "rule1"
});

// Poof. Rule1 is gone.
```

Removing multiple rules.
```javascript
$("#myChart").removeRule({
	"id": ["rule1","rule2",...]
});
```

<br>
#### .updateRule( object ) ####
Update an existing rule, specified by the **id** and the **plotindex** if there are multiple plots.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Rule Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__updaterule)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").updateRule({
	"id": "rule1",
	"plotindex": 0,
	"style": {
		"background-color": "#F00 #00F"
	}
});

// rule1 on plotindex 0 now has a background gradient from red to blue
```

<br>
## Selection ##
#### .clearSelection( object ) ####
Clears the current node(s) selection. See the [plot series item](http://www.zingchart.com/docs/json-attributes-syntax/graph-objects/plot-series-item/) for more informatino on working with selections.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [GraphID Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__clearselection)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").clearSelection();

// Any nodes specified by selection are now deselected.
```

<br>
#### .deselect( object ) ####
Deselects a combination of nodes in the chart specified by **plotindex** and **nodeindex**. Both the **nodeindex** and **plotindex** can be specified individually (0), as a range ("0-3"), or as a group ([0,2,6]).

Value | Type | Details
--- | --- | ---
Parameter | Object | [Select Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__deselect)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Deselecting from a single plot.
```javascript
$("#myChart").deselect({
	"plotindex":0,
	"nodeindex":"1-3"
});

// Nodes at index 1-3 in plot 0 have been deselected.
```

Deselecting from multiple plots.
```javascript
$("#myChart").deselect([
	{
		"plotindex":0,
		"nodeindex":[0,2]
	},
	{
		"plotindex":1,
		"nodeindex":1
	}
]);

// Nodes at index 0 and 2 in plot 0 and the node at index 1 in plot 1 have been deselected.
```

<br>
#### .getSelection( object ) ####
Returns the current node(s) selected.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [GraphID Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getselection)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
mySelection = $("#myChart").getSelection();
```

<br>
#### .select( object ) ####
Sets a combination of nodes in the chart if selected. If **toggle** is true, then the nodes already selected will be deselected. Both the **nodeindex** and **plotindex** can be specified individually aa number (0), as a range in a string ("0-3"), or as a group in an array ([0,2,6]).

Value | Type | Details
--- | --- | ---
Parameter | Object | [Select Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__select)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").select({
	[
		{
			"plotindex":0,
			"nodeindex":[0,2]
		},
		{
			"plotindex":1,
			"nodeindex":3
		}
	]
})
```

<br>
#### .setSelection( object ) ####
Another method setting node selection of the chart. Selection is passed as an array of arrays where each array corresponds to a plotindex of the chart and each number in the array corresponds to a nodeindex in that plot.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Select Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__setselection)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").setSelection({
	"selection": [
		[1,2],
		[0,3]
	]
});

// The nodes at index 1 and 2 of plot index 0 are now selected as are the nodes at 0 and 3 of plot index 1.
```

<br>
## Toggle ##
#### .disable( string)  ####
Disable makes the chart inactive for user interactions. This is useful in the case of time-consuming operations. An optional string can be passed through that will be displayed as a message on top of the disabled chart.

Value | Type | Details
--- | --- | ---
Parameter | String (optional) | [Disable Message](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__disable)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").disable("Waiting on the world to change...");

// Disclaimer: you don't have to use John Mayer lyrics in your disable message but no one would fault you if you did.
```

<br>
#### .enable() ####
Enables a chart for user interactions, turning off the disabled attribute.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").enable();
```
<br>
#### .fullscreen() ####
Randers the chart in fullscreen. Can be exited with .exitFullscreen() or hitting the escape key.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").fullscreen();
```

<br>
#### .exitFullscreen() ####
Destroys the fullscreen render of the chart.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").exitFullscreen();
```

<br>
#### .maximizeLegend() ####
Maximizes the legend.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").maximizeLegend();
```

<br>
#### .minimizeLegend() ####
Minimizes the legend.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").minimizeLegend();
```

<br>
#### .showMenu() ####
Shows the context menu.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").showMenu();
```

<br>
#### .hideMenu() ####
Hides the context menu.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").hideMenu();
```

<br>
#### .showPlot( object ) ####
Shows the plot specified by **plotindex** or **plotid**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Plot Index Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__showplot)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").showPlot({
	"plotindex": 1
});
```

<br>
#### .showAllPlots( object ) ####
Shows ALL plots. Takes an optional object as a parameter than can specify a **graphid**.

Value | Type | Details
--- | --- | ---
Parameter | Object | Graph ID Object
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Show all plots for all graphs.
```javascript
$("#myChart").showAllPlots();
```
Show all plots for a specific graph.
```javascript
$("#myChart").showAllPlots({
	graphid: "graph1"
});
```

<br>
#### .showAllPlotsBut( object ) ####
> This won't have a visible effect unless some charts have been hidden.

Shows ALL plots EXCEPT the **plotindex** you specify.
An optional **graphid** attribute can be passed as well to affect only that graph.

Value | Type | Details
--- | --- | ---
Parameter | Object | Specify the plotindex (required) and the graphid (optional)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Show all plots except plotindex 0 for all graphsets.
```javascript
$("#myChart").showAllPlotsBut({
	plotindex: 0
});
```

Show all plots except plotindex 0 for graphid "graph0".
```javascript
$("#myChart").showAllPlotsBut({
	graphid: "graph0",
	plotindex: 0
});
```

<br>
#### .hidePlot( object ) ####
Hides the plot specified by **plotindex** or **plotid**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Plot Index Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__hideplot)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").hidePlot({
	plotindex: 1
});
```

<br>
#### .hideAllPlots( object ) ####
Hides ALL plots. Takes an optional object as a parameter than can specify a **graphid**.

Value | Type | Details
--- | --- | ---
Parameter | Object | Graph ID Object
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Hide all plots for all graphs.
```javascript
$("#myChart").hideAllPlots();
```
Hide all plots for a specific graph.
```javascript
$("#myChart").hideAllPlots({
	graphid: "graph1"
});
```

<br>
#### .hideAllPlotsBut( object ) ####
Hides ALL plots EXCEPT the plot index you specify via the attribute **plotindex**.
An optional graphset can be set via the attribute **graphid**.

Value | Type | Details
--- | --- | ---
Parameter | Object | Specify the plotindex (required) and the graphid (optional)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

**Hide all plots across all graphsets except plotindex 0**

```javascript
$("#myChart").hideAllPlotsBut({
	plotindex: 0
});
```

**Hide all plots on the graphid "graph0" except plotindex 0**

```javascript
$("#myChart").hideAllPlotsBut({
	graphid: "graph0",
	plotindex: 0
});
```

<br>
#### .toggleAbout() ####
Toggle the 'About' screen on and off.

Value | Type | Details
--- | --- | ---
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").toggleAbout();
```

<br>
#### .toggleBugReport() ####
Toggle the 'Bug Report' screen on an off.

Value | Type | Details
--- | --- | ---
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").toggleBugReport();
```

<br>
#### .toggleDimension() ####
For graphs with the option of 3D mode, toggles between 2D and 3D.

Value | Type | Details
--- | --- | ---
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").toggleDimension();
```

<br>
#### .toggleLegend() ####
Toggle the visibility of the legend.

Value | Type | Details
--- | --- | ---
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").toggleLegend();
```

<br>
#### .toggleLens() ####
Toggle the visibility of the lens.

Value | Type | Details
--- | --- | ---
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").toggleLens();
```

<br>
#### .toggleSource() ####
Toggle the visibility of the View Source Screen.

Value | Type | Details
--- | --- | ---
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").toggleSource();
```

<br>
## Zoom ##
#### .viewAll() ####
Resets the zoom of the chart to 'view all'. Big surprise, eh?

Value | Type | Details
--- | --- | ---
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").viewAll();
```

<br>
#### .zoomIn( object ) ####
Zooms in the graph. **zoomx** and **zoomy** allow you to determine which scales will zoom by setting them to ```true``` or ```false```.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Zoom Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__zoomin)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").zoomIn({
	"zoomx": true,
	"zoomy": false
});

// The chart will now zoom in only by scaling the x-scale.
```

<br>
#### .zoomOut( object ) ####
Zooms out the graph. **zoomx** and **zoomy** allow you to determine which scales will zoom out by setting them to ```true``` or ```false```.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Zoom Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__zoomout)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").zoomOut({
	"zoomx": false,
	"zoomy": true
});

// The chart will now zoom out only by scaling the y-scale.
```

<br>
#### .zoomTo( object ) ####
Zooms to a specific area in a graph specified by **xmin**, **xmax**, **ymin**, **ymax**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Zoom To Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__zoomto)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").zoomTo({
	"xmin": 10,
	"xmax": 30,
	"ymin": 12,
	"ymax": 17
});

// The chart will now be zoomed in to show
// values 10 through 30 on the x-scale and 
// values 12 through 17 on the y scale.
```

<br>
#### .zoomToValues( object ) ####
Zooms to a specific area in a graph specified by x-scale values or labels. Use this option when you're x-axis doesn't use numbers (i.e. months, names, etc).

Value | Type | Details
--- | --- | ---
Parameter | Object | [Zoom To Values Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__zoomtovalues)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").zoomToValues({
	"xmin": "Feb",
	"xmax": "Apr",
	"ymin": 200,
	"ymax": 300
});

// The chart will now be zoomed in to show
// values "Feb" through "Apr" on the x-scale 
// and values 200 through 300 on the y scale.
```

<br>
# Events[](#events) #

Events are one of the most powerful aspects of the ZingChart API. While other charting libraries have only a handful of events, ZingChart provides dozens of built-in events to monitor and track.

All events take a callback as a argument. Within that callback, you have access to both the jQuery object (the DOM element in which the chart resides) and the event object, an object which reveals different data for each event.


To access the jQuery object, simply use ```this```.

To access the event object, use ```this.event```.

Here's an example using the node click event:

```javascript
$("#myChart").nodeClick(function(){

	// Below, we're accessing the event object
	console.log("Node Value:"+this.event.value); 	// Print the node's value
	console.log("Node Index:"+this.event.nodeindex); // Print the node's index
	console.log("Plot Index:"+this.event.plotindex);	// Print the plot index
	console.log("Chart ID:"+this.event.id);			// Print the chart's ID

	// Down here, we're accessing the jQuery object and using normal
	// jQuery functionality on the chart's DOM element. Snazzy!
	$(this).css("border","5px solid #F00");

});
```

**Under The Hood**
 > What we're doing here is extending the jQuery object with a custom 'event' attribute. That event attribute holds all the event data returned by the ZingChart event API call. What this allows us to do is retain access to the jQuery element and all it's associated attributes and functionality while also providing easy and granular access to the event attributes. The scope of the extended jQuery object only exists inside the event function and doesn't affect jQuery performance or functionality in anyway. That means less code and more win.

**The Event Object**

```javascript
{
	ev: MouseEvent,
	graphid: "myChart-graph-id0",
	id: "myChart",
	key: 2,
	nodeindex: 2,
	plotid: "",
	plotindex: 0,
	scaletext: "2",
	text: "9",
	value: 9
}
```

Let's get down to business with the events.

## Animation Events
#### .animationStart( callback )
Fires the callback when the chart's animation starts.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The id of the graph
	graphid: "myChart-graph-id0"
}
```

```javascript
$("#myChart").animationStart(function(){
	// Make some magic
});
```

<br>
#### .animationEnd( callback )
Fires the callback when the chart's animation ends.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The id of the graph
	graphid: "myChart-graph-id0"
}
```

```javascript
$("#myChart").animationEnd(function(){
	// Make some magic
});
```

<br>
#### .animationStep( callback )
Fires the callback for every step of the animation, for every plot/node. That means it fires A LOT. Like, dozens of times. Be **very** careful what you do inside the callback as it is very easy to kill your browser if you use this improperly.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The id of the graph
	graphid: "myChart-graph-id0",
	// The index of the node being animated
	nodeindex: 0,
	// The index of the plot being animated
	plotindex: 0,
	// The "position" in the animation timeline.
	// It starts from 0 and ends as 1 but for several animation methods, intermediate values can exceed 1
	stage: 1
}
```

```javascript
$("#myChart").animationStep(function(){
	// Make some magic
});
```

<br>
## Data Manipulation Events
#### .chartModify( callback )
Fires the callback when ZingChart is modified via the modify API call. This applies to both the wrapper method and the hand-coded modify method.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The id of the graph
	graphid: "myChart-graph-id0",
	// The object being modified
	object: 'title',
	// The data passed through to modify the object.
	// In this case, it's text for a new title.
	text: 'A whole new title',
}
```

```javascript
$("#myChart").chartModify(function(){
	// Make some magic
});
```
<br>
#### .nodeAdd( callback )
Fires the callback when a node is added to the chart.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The id of the graph
	graphid: "myChart-graph-id0",
	// The node's key
	key: 5,
	// The node's index.
	nodeindex: 5,
	// The plot's index to which the node was added.
	plotindex: 0,
	// The text of the node (similar to value)
	text: 11,
	// The value of the node
	value: 11
}
```

```javascript
$("#myChart").nodeAdd(function(){
	// Make some magic
});
```

<br>
#### .nodeRemove( callback )
Fires the callback when a node is removed from the chart.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The id of the graph
	graphid: "myChart-graph-id0",
	// The node's key
	key: 2,
	// The node's index.
	nodeindex: 2,
	// The plot's index from which the node was removed.
	plotindex: 1,
	// The text of the node (similar to value)
	text: 21,
	// The value of the node
	value: 21
}
```

```javascript
$("#myChart").nodeRemove(function(){
	// Make some magic
});
```

<br>
#### .plotAdd( callback )
Fires the callback when a plot is added to the chart.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The id of the graph
	graphid: "myChart-graph-id0",
	// The index of the added plot.
	plotindex: 1,
	// Data about the added plot (object)
	data: {
		// This object contains information about the added plot.
		// Example data includes: an array of values, the palette, etc.
	}
}
```

```javascript
$("#myChart").plotAdd(function(){
	// Make some magic
});
```

<br>
#### .plotRemove( callback )
Fires the callback when a plot is removed from the chart.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The id of the graph
	graphid: "myChart-graph-id0",
	// The node's key
	key: 2,
	// The index of the removed plot.
	plotindex: 1
}
```

```javascript
$("#myChart").plotRemove(function(){
	// Make some magic
});
```

<br>
#### .plotModify( callback )
Fires the callback when a plot of the chart is modified.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The id of the graph
	graphid: "myChart-graph-id0",
	// The index of the added plot.
	plotindex: 0,
	// Data about the added plot (object)
	data: {
		// This object contains information about the modified plot.
		// Whatever info is passed in the data object when modifyPlot
		// is called will appear here.
		// Example data includes: an array of values, the color, etc.
	}
}
```

```javascript
$("#myChart").plotModify(function(){
	// Make some magic
});
```

<br>
#### .chartReload( callback )
Fires the callback when the chart is reloaded.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The render type of the added chart.
	output: 'canvas',
	// The new height of the chart.
	height: 300,
	// The new width of the chart.
	width: 500,
	// The x position of the chart.
	x: 0,
	// The y position of the chart.
	y: 0,
	// Data about the reload call (object)
	params: { }
}
```

```javascript
$("#myChart").chartReload(function(){
	// Make some magic
});
```

<br>
#### .dataSet( callback )
Fires the callback when the chart is reloaded.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The data packet that was sent (object)
	data: { }
}
```

```javascript
$("#myChart").dataSet(function(){
	// Make some magic
});
```

<br>
## Export Events
#### .dataExport( callback )
Fires the callback when the user exports the graph data.

**NOTE**: Only works if exportdataurl is set in .zingchart options.

```javascript
$("#myChart").dataExport(function(){
	// Make some magic
});
```

<br>
#### .imageSave( callback )
Fires the callback when the user saves an image of the graph.

**NOTE**: Only works if exportimageurl is set in .zingchart options.

```javascript
$("#myChart").imageSave(function(){
	// Make some magic
});
```

<br>
#### .chartPrint( callback )
Fires the callback when the user prints the graph.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The render type of the printed chart.
	output: 'canvas',
	// The height of the chart.
	height: 300,
	// The width of the chart.
	width: 500,
	// The x position of the chart.
	x: 0,
	// The y position of the chart.
	y: 0,
	// Data about the print call (object)
	params: { }
}
```

```javascript
$("#myChart").chartPrint(function(){
	// Make some magic
});
```

<br>
## Feed Events
#### .feedClear( callback )
Fires the callback when the feed is cleared.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The render type of the feed chart.
	output: 'canvas',
	// The height of the chart.
	height: 300,
	// The width of the chart.
	width: 500,
	// The x position of the chart.
	x: 0,
	// The y position of the chart.
	y: 0,
	// Data about the clearFeed call (object)
	params: { }
}
```

```javascript
$("#myChart").feedClear(function(){
	// Make some magic
});
```

<br>
#### .feedIntervalModify( callback )
Fires the callback when the feed's interval is modified.

```javascript
$("#myChart").feedIntervalModify(function(){
	// Make some magic
});
```

<br>
#### .feedStart( callback )
Fires the callback when the feed starts.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The render type of the feed chart.
	output: 'canvas',
	// The height of the chart.
	height: 300,
	// The width of the chart.
	width: 500,
	// The x position of the chart.
	x: 0,
	// The y position of the chart.
	y: 0,
	// Data about the clearFeed call (object)
	params: { }
}
```

```javascript
$("#myChart").feedStart(function(){
	// Make some magic
});
```

<br>
#### .feedStop( callback )
Fires the callback when the feed stops.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The render type of the feed chart.
	output: 'canvas',
	// The height of the chart.
	height: 300,
	// The width of the chart.
	width: 500,
	// The x position of the chart.
	x: 0,
	// The y position of the chart.
	y: 0,
	// Data about the stopFeed call (object)
	params: { }
}
```

```javascript
$("#myChart").feedStop(function(){
	// Make some magic
});
```

<br>
## Global Events
#### .graphClick( callback )
Fires the callback when the user clicks anywhere in the graph.
All attributes of the event object are dependent on where the click originated.

**Sample Event Object**
```javascript
{
	// The id of the chart
	id: "myChart",
	// The id of the graph
	graphid: "myChart-graph-id0",
	// If the click was inside, the plotarea, this will be true.
	// Otherwise, it will be false.
	plotarea: true,
	// The target will be set to whatever element of the chart was clicked.
	// If no specific object was clicked, target will equal "none".
	target: "node",
	// The targetid will be the ID in the DOM of the object you clicked.
	targetid: "myChart-graph-id0-plotset0-plot0-plot-1-node-0"
	// The x position of the click event.
	x: 168.203125,
	// The y position of the click event.
	y: 21.5625,
	// Touch tells if the event was triggered by a touch-screen.
	touch: false,
	// Data about the stopFeed call (object)
	ev: { } // MouseEvent
}
```

```javascript
$("#myChart").graphClick(function(){
	// Make some magic
});
```

<br>
#### .graphComplete( callback )
Fires the callback when the graphset is completely rendered. It's called even on API calls that require chart repaint.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").graphComplete(function(){
	// Make some magic
});
```

<br>
#### .graphDataParse( callback )
Fires the callback when the data is availabe for the chart, prior to parsing routines. Useful for changing/adding elements into the data.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").graphDataParse(function(){
	// Make some magic
});
```

<br>
#### .graphDataReady( callback )
Fires the callback when the data is ready to be parsed.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").graphDataReady(function(){
	// Make some magic
});
```

<br>
#### .graphGuideMouseMove( callback )
Fires the callback when the guide position changes.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").graphGuideMouseMove(function(){
	// Make some magic
});
```

<br>
#### .graphLoad( callback )
Fires the callback only the first time the graphset is completely rendered.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").graphLoad(function(){
	// Make some magic
});
```

<br>
#### .graphMenuItemClick( callback )
Fires the callback when a context menu item is clicked.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").graphMenuItemClick(function(){
	// Make some magic
});
```

<br>
#### .graphResize( callback )
Fires the callback when the graph is resized.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").graphResize(function(){
	// Make some magic
});
```

<br>
## History Events
#### .historyForward( callback )
Fires the callback when the users goes forward in the chart history.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").historyForward(function(){
	// Make some magic
});
```

<br>
#### .historyBack( callback )
Fires the callback when the user goes backward in the chart history.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").historyBack(function(){
	// Make some magic
});
```

<br>
## Interactive Events
#### .nodeSelect( callback )
Fires the callback when Interactive Mode is on and a node is selected.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").nodeSelect(function(){
	// Make some magic
});
```

<br>
#### .nodeDeselect( callback )
Fires the callback when Interactive Mode is on and a node is deselected.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").nodeDeselect(function(){
	// Make some magic
});
```

<br>
#### .plotSelect( callback )
Fires the callback when Interactive Mode is on and a plot is selected.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").plotSelect(function(){
	// Make some magic
});
```

<br>
#### .plotDeselect( callback )
Fires the callback when Interactive Mode is on and a plot is deselected.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").plotDeselect(function(){
	// Make some magic
});
```

<br>
## Legend Events
#### .legendItemClick( callback )
Fires the callback when a legend item is clicked.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").legendItemClick(function(){
	// Make some magic
});
```

<br>
#### .legendMarkerClick( callback )
Fires the callback when a legend marker is clicked.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").legendMarkerClick(function(){
	// Make some magic
});
```

<br>
#### .legendShow( callback )
Fires the callback when the legend is shown.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").legendShow(function(){
	// Make some magic
});
```

<br>
#### .legendHide( callback )
Fires the callback when the legend is hidden.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").legendHide(function(){
	// Make some magic
});
```

<br>
#### .legendMaximize( callback )
Fires the callback when the legend is maximized.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").legendMaximize(function(){
	// Make some magic
});
```

<br>
#### .legendMinimize( callback )
Fires the callback when the legend is minimized.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").legendMinimize(function(){
	// Make some magic
});
```
<br>
## Node Events
#### .nodeClick( callback )
Fires the callback when a node is clicked.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").nodeClick(function(){
	// Make some magic
});
```

<br>
#### .nodeDoubleClick( callback )
Fires the callback when a node is double clicked.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").nodeDoubleClick(function(){
	// Make some magic
});
```

<br>
#### .nodeMouseOver( callback )
Fires the callback when the user's mouse enters a node.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").nodeMouseOver(function(){
	// Make some magic
});
```

<br>
#### .nodeMouseOut( callback )
Fires the callback when the user's mouse exits a node.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").nodeMouseOut(function(){
	// Make some magic
});
```

<br>
#### .nodeHover( callback, callback )
Fires the first callback when the user's mouse enters a node. Fires the second callback when the user's mouse exits a node.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").nodeHover(
	// Fires on nodeMouseOver
	function(){
		// Make some magic
	},
	// Fires on nodeMouseOut
	function(){
		// Make some more magic
	}
);
```

<br>
## Label Events
#### .labelClick( callback )
Fires the callback when the user clicks a label.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").labelClick(function(){
	// Make some magic
});
```

<br>
#### .labelMouseOver( callback )
Fires the callback when the user's mouse enters a label.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").labelMouseOver(function(){
	// Make some magic
});
```

<br>
#### .labelMouseOut( callback )
Fires the callback when the user's mouse exits a label.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").labelMouseOut(function(){
	// Make some magic
});
```

<br>
#### .labelHover( callback, callback )
Fires the first callback when the user's mouse enters a label. Fires the second callback when the user's mouse exits a label.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").labelHover(
	// Fires on labelMouseOver
	function(){
		// Make some magic
	},
	// Fires on labelMouseOut
	function(){
		// Make some more magic
	}
);
```

<br>
## Shape Events
#### .shapeClick( callback )
Fires the callback when the user clicks a shape.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").shapeClick(function(){
	// Make some magic
});
```

<br>
#### .shapeMouseOver( callback )
Fires the callback when the user's mouse enters a shape.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").shapeMouseOver(function(){
	// Make some magic
});
```

<br>
#### .shapeMouseOut( callback )
Fires the callback when the user's mouse exits a shape.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").shapeMouseOut(function(){
	// Make some magic
});
```

<br>
#### .shapeHover( callback, callback )
Fires the first callback when the user's mouse enters a shape. Fires the second callback when the user's mouse exits a shape.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").shapeHover(
	// Fires on shapeMouseOver
	function(){
		// Make some magic
	},
	// Fires on shapeMouseOut
	function(){
		// Make some more magic
	}
);
```

<br>
## Plot Events
#### .plotClick( callback )
Fires the callback when the user clicks a plot.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").plotClick(function(){
	// Make some magic
});
```

<br>
#### .plotDoubleClick( callback )
Fires the callback when the user double-clicks a plot.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").plotDoubleClick(function(){
	// Make some magic
});
```

<br>
#### .plotMouseOver( callback )
Fires the callback when the user's mouse enters a plot.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").plotMouseOver(function(){
	// Make some magic
});
```

<br>
#### .plotMouseOut( callback )
Fires the callback when the user's mouse exits a plot.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").plotMouseOut(function(){
	// Make some magic
});
```

<br>
#### .plotHover( callback, callback )
Fires the first callback when the user's mouse enters a plot. Fires the second callback when the user's mouse exits a plot.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").plotHover(
	// Fires on plotMouseOver
	function(){
		// Make some magic
	},
	// Fires on plotMouseOut
	function(){
		// Make some more magic
	}
);
```

<br>
#### .plotShow( callback )
Fires the callback when a plot is shown.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").plotShow(function(){
	// Make some magic
});
```

<br>
#### .plotHide( callback )
Fires the callback when a plot is hidden.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").plotHide(function(){
	// Make some magic
});
```

<br>
## Toggle Events
#### .aboutShow( callback )
Fires the callback when the About Screen is opened.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").aboutShow(function(){
	// Make some magic
});
```

<br>
#### .aboutHide( callback )
Fires the callback when the About Screen is closed.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").aboutHide(function(){
	// Make some magic
});
```

<br>
#### .bugReportShow( callback )
Fires the callback when the Report Bug Screen is opened.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").bugReportShow(function(){
	// Make some magic
});
```

<br>
#### .bugReportHide( callback )
Fires the callback when the Bug Report Screen is closed.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").bugReportHide(function(){
	// Make some magic
});
```

<br>
#### .dimensionChange( callback )
Fires the callback when the dimension is toggled between 2D and 3D.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").dimensionChange(function(){
	// Make some magic
});
```

<br>
#### .lensShow( callback )
Fires the callback when the lens is shown.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").lensShow(function(){
	// Make some magic
});
```

<br>
#### .lensHide( callback )
Fires the callback when the lens is hidden.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").lensHide(function(){
	// Make some magic
});
```

<br>
#### .sourceShow( callback )
Fires the callback when the source is shown.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").sourceShow(function(){
	// Make some magic
});
```

<br>
#### .sourceHide( callback )
Fires the callback when the source is hidden.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").sourceHide(function(){
	// Make some magic
});
```

<br>
## Zoom Events
#### .zoomEvent( callback )
Fires the callback when a zoom event occurs.

Value | Type | Details
--- | --- | ---
Parameter | [Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/js-ctypes_reference/Callbacks)
Return | [jQuery](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").zoomEvent(function(){
	// Make some magic
});
```

<br>
## Additional Methods

The following methods are amalgamations of other ZingChart methods. While not built in, they make use of the API and allow you to perform tedious tasks with minimal code and that's pretty sweet.

#### .setTitle( string OR object )
Allows the title to be set dynamically. This method accepts either a string or an object.
The string parameter is useful if you just with to set the title's text and not style the title.
The object parameter allows you to set both the text and the style for the title of the chart.

Value | Type | Details
--- | --- | ---
Parameter | String OR Object | String of new text OR Object with style and text.
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQueuery)

Setting just text.
```javascript
$("#myChart").setTitle("Woohoo! New title!");
```

Setting text and style.
```javascript
$("#myChart").setTitle({
	text: "My fandangled chart",
	color: "#F0F",
	backgroundColor = "#333"
});
```

<br>
#### .setSubtitle( string OR object )
Allows the subtitle to be set dynamically. This method accepts either a string or an object.
The string parameter is useful if you just with to set the subtitle's text and not style the subtitle.
The object parameter allows you to set both the text and the style for the subtitle of the chart.

Value | Type | Details
--- | --- | ---
Parameter | String OR Object | String of new text OR Object with style and text.
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQueuery)

Setting just text.
```javascript
$("#myChart").setSubitle("Catchy Subtitle");
```

Setting text and style.
```javascript
$("#myChart").setSubtitle({
	text: "Catchy Subtitle with Color!",
	color: "#00BAF0",
	backgroundColor:"#003849"
});
```

<br>
#### .setType( string )
Allows the type of the chart to be set dynamically. Want to make your bar chart a line chart? Done. How about a scatter chart? Wha-bam! Party time.

Value | Type | Details
--- | --- | ---
Parameter | String | [Chart Type](http://www.zingchart.com/docs/chart-types/)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQueuery)

```javascript
$("#myChart").setType("scatter");
```

<br>
#### .drawTrendline( object )
Draws a trendline based off the data on the 0th plotindex. An optional object can be passed through to style the trendline.

Value | Type | Details
--- | --- | ---
Parameter | Object | Trendline Style
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQueuery)

Using default style.
```javascript
$("#myChart").drawTrendline();
```

Using custom style.
```javascript
$("#myChart").drawTrendline({
	lineColor: "#0FF",
	lineWidth: 1,
	alpha: 1,
	lineStyle: "solid"
});
```