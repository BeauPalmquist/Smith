'use strict'; function sinAndCos() {for (var a = [], t = [], r = [], n = [], e = [], i = 0; 100 > i; i++)a.push({ x:i, y:i % 10 == 5 ? null : Math.sin(i / 10) }), t.push({ x:i, y:.4 * Math.sin(i / 5) - .25 }), r.push({ x:i, y:.5 * Math.cos(i / 10) }), n.push({ x:i, y:Math.random() / 10 }), e.push({ x:i, y:Math.cos(i / 10) + Math.random() / 10 }); return [{ area:!0, values:a, key:'Sine Wave', color:'#66bb6a', strokeWidth:2, classed:'dashed' }, { values:r, key:'Cosine Wave', color:'#00acc1' }, { values:n, key:'Random Points', color:'#00897b' }, { values:e, key:'Random Cosine', color:'#e57373', strokeWidth:2 }, { area:!0, values:t, key:'Fill opacity', color:'#ab47bc', strokeWidth:1, fillOpacity:.1 }];} function HistoricalBar() {function a() {for (var a = [], t = [], r = 0; 100 > r; r++)a.push({ x:r, y:Math.sin(r / 10) }), t.push({ x:r, y:.5 * Math.cos(r / 10) }); return [{ values:a, key:'Sine Wave', color:'#ff7f0e' }, { values:t, key:'Cosine Wave', color:'#2ca02c' }];} function t() {for (var a = [], t = 0; 100 > t; t++)a.push({ x:t, y:Math.sin(t / 10) * Math.random() * 100 }); return [{ values:a, key:'Sine Wave', color:'#26a69a' }];} var r; nv.addGraph(function () {return r = nv.models.historicalBarChart(), r.margin({ left:100, bottom:100 }).useInteractiveGuideline(!0).duration(250), r.xAxis.axisLabel('Time (s)').tickFormat(d3.format(',.1f')), r.yAxis.axisLabel('Voltage (v)').tickFormat(d3.format(',.2f')), r.showXAxis(!0), d3.select('#nvd-historical-bar').datum(t()).transition().call(r), nv.utils.windowResize(r.update), r.dispatch.on('stateChange', function (a) {nv.log('New State:', JSON.stringify(a));}), r;});} function StackNvdChart() {d3.json('data/stackedAreaData.json', function (a) {nv.addGraph(function () {var t = nv.models.stackedAreaChart().margin({ right:100 }).x(function (a) {return a[0];}).y(function (a) {return a[1];}).useInteractiveGuideline(!0).rightAlignYAxis(!0).showControls(!0).clipEdge(!0); return t.xAxis.tickFormat(function (a) {return d3.time.format('%x')(new Date(a));}), t.yAxis.tickFormat(d3.format(',.2f')), d3.select('#nvd-stack-chart svg').datum(a).call(t), nv.utils.windowResize(t.update), t;});});} function NvdMultiBar() {function a() {return stream_layers(3, 10 + 100 * Math.random(), .1).map(function (a, t) {return { key:'Stream #' + t, values:a };});}nv.addGraph(function () {var t = nv.models.multiBarChart().reduceXTicks(!0).rotateLabels(0).showControls(!0).groupSpacing(.1); return t.xAxis.tickFormat(d3.format(',f')), t.yAxis.tickFormat(d3.format(',.1f')), d3.select('#nvd-multibar-chart svg').datum(a()).call(t), nv.utils.windowResize(t.update), t;});}d3.json('data/linePlusBarData.json', function (a, t) {nv.addGraph(function () {var a = nv.models.linePlusBarChart().margin({ top:30, right:60, bottom:50, left:70 }).x(function (a, t) {return t;}).y(function (a, t) {return a[1];}); return a.xAxis.tickFormat(function (a) {var r = t[0].values[a] && t[0].values[a][0] || 0; return d3.time.format('%x')(new Date(r));}), a.y1Axis.tickFormat(d3.format(',f')), a.y2Axis.tickFormat(function (a) {return '$' + d3.format(',f')(a);}), a.bars.forceY([0]), d3.select('#chart svg').datum(t).transition().duration(0).call(a), nv.utils.windowResize(a.update), a;});}); var chart, data, randomizeFillOpacity = function () {for (var a = Math.random(0, 1), t = 0; 100 > t; t++)data[4].values[t].y = .4 * Math.sin(t / (5 + a)) * a - .25; data[4].fillOpacity = a, chart.update();}; nv.addGraph(function () {return chart = nv.models.lineChart().options({ transitionDuration:300, useInteractiveGuideline:!0 }), chart.xAxis.axisLabel('Time (s)').tickFormat(d3.format(',.1f')).staggerLabels(!0), chart.yAxis.axisLabel('Voltage (v)').tickFormat(function (a) {return null == a ? 'N/A' : d3.format(',.2f')(a);}), data = sinAndCos(), d3.select('#nvd-line').append('svg').datum(data).call(chart), nv.utils.windowResize(chart.update), chart;}), HistoricalBar(), StackNvdChart(), NvdMultiBar();
