	var jcoapp = {};
	var x2js = new X2JS({useDoubleQuotes:true});
	var CM = [],Steps = [],ObjectMappings = [];
	jcoapp = angular.module("jcoapp",[]);
	jcoapp.controller("JCOcntrler",JCOcntrler);
	$(document).ready(function(){
		$("#explorer  >div  > div").accordion({header:"h6",collapsible:true});
		$("#draft  > div").accordion({header:"h6",collapsible:true});
		$("#create  > div").accordion({header:"h6",collapsible:true});
		$("#tabs").tabs({heightStyle:"fill"});
		$(window).resize(responsiveSize);
		responsiveSize();
<<<<<<< HEAD
		$("#xml_view").hide();
		$("#leftPanel").show();
		$("#design_view").show();
		$("#overlay").fadeOut();
		angular.element("body").scope().init();
=======
		dragdrop.init($);
		dialog.init($);
		$("#xml_view").hide();
>>>>>>> 2014af251e8a5b93dbb3c66516f00ef936417796
	});
	function responsiveSize(){
		$(".canvas").css("margin-left",$(".left_pane").outerWidth());
		$(".canvas").css("width",$(document).width() - $(".left_pane").outerWidth());
		$(".main").css("height",$(document).height()-100);
		$("#tabs").tabs("refresh");
		var sidemargin = ($(".canvas").width() - ($(".canvas_panels").width()+4)*3)/6;
		$(".canvas_panels").css({
			"margin-top":-($(".canvas_panels").height()/2),
			"margin-left":sidemargin,
			"margin-right":sidemargin
		});
	}

	function genXML() {
		var ConnectorConfiguration = {};
		_.each(CM,function(cm){
			var ConnectorMapping = {};
			ConnectorMapping._name = cm.attr.name;
			ConnectorMapping._description = cm.attr.description;
			ConnectorMapping._paramHandler = cm.attr.paramHandler;
			if(typeof(ConnectorConfiguration.ConnectorMapping) == "undefined"){
				ConnectorConfiguration.ConnectorMapping = [];
			}
			ConnectorConfiguration.ConnectorMapping.push(ConnectorMapping);
		})
		myCodeMirror.options.value = x2js.json2xml_str({ConnectorConfiguration});
		return x2js.json2xml_str({ConnectorConfiguration});
	}