!function(t){"use strict";"function"==typeof define&&define.amd?define(["chart.js"],t):"object"==typeof exports?module.exports=t(require("chart.js")):t(Chart)}(function(t){"use strict";var i=t.helpers,s={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,relativeBars:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',showTotal:!1,totalColor:"#fff",totalLabel:"Total",tooltipHideZero:!1};t.Type.extend({name:"StackedBar",defaults:s,initialize:function(s){var o=this.options;this.data=s,this.ScaleClass=t.Scale.extend({offsetGridLines:!0,calculateBarX:function(t){return this.calculateX(t)},calculateBarY:function(t,i,s,e){for(var a=0,l=0,n=0;n<t.length;n++)l+=t[n].bars[s].value;for(n=i;n<t.length;n++)n===i&&e?a+=e:a=+a+ +t[n].bars[s].value;return o.relativeBars&&(a=a/l*100),this.calculateY(a)},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*o.barValueSpacing},calculateBaseHeight:function(){return this.calculateY(1)-this.calculateY(0)},calculateBarWidth:function(t){return this.calculateBaseWidth()},calculateBarHeight:function(t,i,s,e){for(var a=0,l=0;l<t.length;l++)a+=t[l].bars[s].value;return e||(e=t[i].bars[s].value),o.relativeBars&&(e=e/a*100),this.calculateY(e)}}),this.datasets=[],this.options.showTooltips&&i.bindEvents(this,this.options.tooltipEvents,function(t){var s="mouseout"!==t.type?this.getBarsAtEvent(t):[];this.eachBars(function(t){t.restore(["fillColor","strokeColor"])}),i.each(s,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(s)}),this.BarClass=t.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),i.each(s.datasets,function(t,o){var e={label:t.label||null,fillColor:t.fillColor,strokeColor:t.strokeColor,bars:[]};this.datasets.push(e),i.each(t.data,function(o,a){i.isNumber(o)||(o=0),e.bars.push(new this.BarClass({value:o,label:s.labels[a],datasetLabel:t.label,strokeColor:t.strokeColor,fillColor:t.fillColor,highlightFill:t.highlightFill||t.fillColor,highlightStroke:t.highlightStroke||t.strokeColor}))},this)},this),this.buildScale(s.labels),this.eachBars(function(t,s,o){i.extend(t,{base:this.scale.endPoint,height:0,width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(s),y:this.scale.endPoint}),t.save()},this),this.render()},showTooltip:function(s,o){"undefined"==typeof this.activeElements&&(this.activeElements=[]),i=t.helpers;var e=function(t){var s=!1;return t.length!==this.activeElements.length?s=!0:(i.each(t,function(t,i){t!==this.activeElements[i]&&(s=!0)},this),s)}.call(this,s);if(e||o){if(this.activeElements=s,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),s.length>0)if(this.datasets&&this.datasets.length>1){for(var a,l,n=this.datasets.length-1;n>=0&&(a=this.datasets[n].points||this.datasets[n].bars||this.datasets[n].segments,l=i.indexOf(a,s[0]),-1===l);n--);var h=[],r=[],c=function(t){var s=[],o,e=[],a=[],n,c,p,d;i.each(this.datasets,function(t){o=t.points||t.bars||t.segments,o[l]&&o[l].hasValue()&&s.push(o[l])});var u={datasetLabel:this.options.totalLabel,value:0,fillColor:this.options.totalColor,strokeColor:this.options.totalColor};return i.each(s,function(t){this.options.tooltipHideZero&&0===t.value||(e.push(t.x),a.push(t.y),u.value+=t.value,h.push(i.template(this.options.multiTooltipTemplate,t)),r.push({fill:t._saved.fillColor||t.fillColor,stroke:t._saved.strokeColor||t.strokeColor}))},this),this.options.showTotal&&(h.push(i.template(this.options.multiTooltipTemplate,u)),r.push({fill:u.fillColor,stroke:u.strokeColor})),d=i.min(a),c=i.max(a),p=i.min(e),n=i.max(e),{x:p>this.chart.width/2?p:n,y:(d+c)/2}}.call(this,l);new t.MultiTooltip({x:c.x,y:c.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:h,legendColors:r,legendColorBackground:this.options.multiTooltipKeyBackground,title:s[0].label,chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else i.each(s,function(s){var o=s.tooltipPosition();new t.Tooltip({x:Math.round(o.x),y:Math.round(o.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:i.template(this.options.tooltipTemplate,s),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},update:function(){i.each(this.datasets,function(t,s){i.extend(this.datasets[s],{label:t.label||null,fillColor:t.fillColor,strokeColor:t.strokeColor}),i.each(t.data,function(o,e){i.extend(this.datasets[s].bars[e],{value:o,label:this.data.labels[e],datasetLabel:t.label,strokeColor:t.strokeColor,fillColor:t.fillColor,highlightFill:t.highlightFill||t.fillColor,highlightStroke:t.highlightStroke||t.strokeColor})},this)},this),this.scale.update(),i.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachBars(function(t){t.save()}),this.render()},eachBars:function(t){i.each(this.datasets,function(s,o){i.each(s.bars,t,this,o)},this)},getBarsAtEvent:function(t){for(var s=[],o=i.getRelativePosition(t),e=function(t){s.push(t.bars[a])},a,l=0;l<this.datasets.length;l++)for(a=0;a<this.datasets[l].bars.length;a++)if(this.datasets[l].bars[a].inRange(o.x,o.y))return i.each(this.datasets,e),s;return s},buildScale:function(t){var s=this,o=function(){var t=[];return i.each(s.datasets,function(o){i.each(o.bars,function(i,o){t[o]||(t[o]=0),s.options.relativeBars?t[o]=100:t[o]=+t[o]+ +i.value})}),t},e={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var s=i.calculateScaleRange(o(),t,this.fontSize,this.beginAtZero,this.integersOnly);i.extend(this,s)},xLabels:this.options.xLabels||t,font:i.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&i.extend(e,{calculateYRange:i.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(e)},addData:function(t,s){i.each(t,function(t,o){i.isNumber(t)&&this.datasets[o].bars.push(new this.BarClass({value:i.isNumber(t)?t:0,label:s,x:this.scale.calculateBarX(this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[o].strokeColor,fillColor:this.datasets[o].fillColor}))},this),this.scale.addXLabel(s),this.update()},removeData:function(){this.scale.removeXLabel(),i.each(this.datasets,function(t){t.bars.shift()},this),this.update()},reflow:function(){i.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});var t=i.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var s=t||1;this.clear();var o=this.chart.ctx;this.scale.draw(s),i.each(this.datasets,function(t,o){i.each(t.bars,function(t,i){var e=this.scale.calculateBarY(this.datasets,o,i,t.value),a=this.scale.calculateBarHeight(this.datasets,o,i,t.value);t.value>0&&t.transition({base:this.scale.endPoint-(Math.abs(a)-Math.abs(e)),x:this.scale.calculateBarX(i),y:Math.abs(e),height:Math.abs(a),width:this.scale.calculateBarWidth(this.datasets.length)},s).draw()},this)},this)}})});