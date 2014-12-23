(function ( $ ) {

	$.fn.zingify = function( options ) {
		
		if (options === undefined) {
			options = {};
		}

		if ( $(this).is('table') ) {
			return convertToChart.call(this, 0, options);
		} else {
			var charts = [];
			$(this).find('table').each( function(i) {
				charts.push( convertToChart.call(this, i, options) );
			});
			return charts;
		}
		
		/*
		 * 	options [object]: {
		 *		target 		[string]: Target to add the chart to. If undefined, a target will be created
		 *		hideTable 	[boolean]: Hides table if true; default: false
		 *	} 
		 */
		function convertToChart(i, options) {
			console.log("convertToChart:");
			console.log("\toptions =", JSON.stringify(options));

			var target = undefined;
			if ( options.target !== undefined) {
				target = $('#' + options.target);
			} else {
				target = $('<div></div>').insertAfter(this);

				// we need an options.target for the ID
				// Create the target from 
				options.target = (new Date()).valueOf().toString();
				target.attr('id', options.target);
			}

			console.log("\ttarget =", target);
			
			if (options.hideTable === true) {
				$(this).hide();
			}
			
			// 
			$(target).width( options.hasOwnProperty('width') ? options.width : '100%' );
			$(target).height( options.hasOwnProperty('height') ? options.height : '500px' );

			// Each chart needs a UNIQUE identifier
			var zingchartID = options.target + '_zc_chart';
			if (i > 0) zingchartID += i;
			console.log('zingchartID =', zingchartID);
			$(target).attr('id', zingchartID);
			
			var data = {};
			
			// extract the columns from the table into a data object
			var columns = $(this).find('thead th').map(function() {
				return $(this).text();
			});
			
			// the first <th> in <thead> corresponds to the data that will be 
			// represented on the x-axis, so we'll use that value for the x-axis label
			data['scale-x'] = { label: { text: columns[0] }, values: [] };
			
			
			// the remaining <td>s are the labels for each data series the chart will support
			// so we'll create each series array, and push each series object onto with with text
			data.series = [];
			for (var i = 1; i < columns.length; i++) {
				data.series.push( { text: columns[i], values: [] } );
			}
			
			$(this).find('tbody tr').each( function() {
				$(this).find('td').each( function(i) {
					if (i === 0) {
						data['scale-x'].values.push( $(this).html() );
					} else {
						data.series[i - 1].values.push( parseInt( $(this).html() ));
					}
				});
			});
			
			// set the title from the <caption> element if present
			if ( $(this).find('caption').html() !== undefined ) {
				data.title = { text: $(this).find('caption').html() }
			}
			
			data.legend = {};
			
			
			// now we extract JSON structure from any custom html data attributes
			
			// get key-value mapped object of all the <table> attributes
			// these will be parsed and the custom zingchart data extracted

			/*
			 *	Alternative way to extract data. Single attribute on the HTML element
			 *	data-zc OR data-zingchart: contains a JSON string to be parsed
			 */

			var attributes = undefined;

			try {
				var jsonString = $(this).attr('data-zc') || $(this).attr('data-zingchart');
				attributes = JSON.parse(jsonString);
			} catch (err) {
				console.log(err);
				attributes = {};
			}

			$(this).each(function() {
				$.each(this.attributes, function() {
					if(this.specified) {
						attributes[this.name] = this.value;
					}
				});
			});
			
			// convert 'data-zingchart_' to 'data-zc_' (so user can specify it either way)
			for (var key in attributes) {
				if (key.substring(0,14) === 'data-zingchart') {
					newKey = key.replace('data-zingchart', 'data-zc');
					attributes[newKey] = attributes[key];
					delete attributes[key];
				}
			}
			
			// now filter out any attributes that do not begin with 'data-zc'
			for (var key in attributes) {
				if (key.substring(0,8) !== 'data-zc-') {
					delete attributes[key];
				}
			}
			
			var attrData = {};
			
			for (var key in attributes) {
				var attributeKey = key;
			
				// strip off 'data-zc_' section
				key = key.substring(8);
				
				// separate into each JSON specification, which are delimited by underscores. 
				key = key.split('_');
				
				// create a temp variable with the JSON struct corresponding to the values specified in the data attribute
				var temp = generateJSON(-1);
				
				// recursive function that generates a multi-level JSON struct from the 'flat' data attribute array
				function generateJSON(count) {
					count++;
					if (count === key.length) {
						// the last layer is not another object, but rather the value of the deepest JSON key specified
						return attributes[attributeKey]; 
					} else {
						// the keys at the outer layers specify an object as their value, so recurse the function to generate the next step
						var obj = {};
						obj[key[count]] = generateJSON(count);
						return obj;
					}
				}
				
				$.extend(attrData, temp); // for each data attribute, attrData will gain additional key-value pairs	
				
			}

			$.extend(true, data, attrData); // finally, extend all the JSON data collected from attributes into the main data variable

			// $.extend(true, data, attributes);
			
			// allow user to include JSON options in the standard form while invoking the zingify function
			if (options.hasOwnProperty('data')) {
				$.extend(true, data, options.data);
			}
			
			// temp fix: convert data['scale-x'] into data['scaleX']
			data['scaleX'] = data['scale-x'];
			
			return $(target).zingchart( { data: data } ); // and render the chart
			
		}; // end convertToChart() function
	}; // end $.fn.extend()
}( jQuery ));