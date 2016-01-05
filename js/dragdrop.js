var dragdrop = {init:function($){
		/* Draft Tools */
		$(".draft_cm").draggable({
			cursor:"pointer",
			helper:this.dummy,
			scope:"draft_cm"
		});
		$(".draft_st").draggable({
			cursor:"pointer",
			helper:this.dummy,
			scope:"draft_st"
		});
		$(".draft_om").draggable({
			cursor:"pointer",
			helper:this.dummy,
			scope:"draft_om"
		});
		$(".draft_cm").draggable("disable");	//By default, disable dragging
		$(".draft_st").draggable("disable");	//By default, disable dragging
		$(".draft_om").draggable("disable");	//By default, disable dragging
		$("#connector_mappings").droppable({
			scope:"draft_cm",
			activeClass: "canvas_dropzone",
			hoverClass:"canvas_dropaccept",
			drop:function(event,ui){
				/*var item = $("<li class=\"item\">										<div class=\"sequence\">1</div>										<div class=\"item_content\">											<span style=\"width:100%;overflow:hidden;\">CUSTOMER_UPDATE_IN_SALESFORCE</span><br/>											<span style=\"color:rgb(0,255,0)\">ParamHandler</span>										</div>									</li>");
				$(this).children("div").children("ul").eq(0).append(item);*/
				angular.element($(this)).scope().CMdialog();
			}
		});
		$("#steps").droppable({
			scope:"draft_st",
			activeClass: "canvas_dropzone",
			hoverClass:"canvas_dropaccept",
			drop:function(event,ui){
				console.log(ui)
				$(this).children("div").html(
					$(this).children("div").html() +
					ui.helper.html() + "<br>"
					);
			}
		});
		$("#object_mappings").droppable({
			scope:"draft_om",
			activeClass: "canvas_dropzone",
			hoverClass:"canvas_dropaccept",
			drop:function(event,ui){
				console.log(ui)
				$(this).children("div").html(
					$(this).children("div").html() +
					ui.helper.html() + "<br>"
					);
			}
		});
		/*$(".sobject").draggable({
			cursor:"pointer",
			appendTo:"body",
			scope:"t",
			helper:function(){
				var elem = $("<div></div>");
				elem.addClass("sobject-dragged");
				elem.html($(this).html());
				return elem;
			}
		});

		$(".canvas").droppable({
			 accept:".sobject",
			 scope:"t",
			 drop:function(elem){$(this).html("added" + $(elem.toElement).html())}
		});*/
	},
	dummy:function(){
		var ele = $("<div></div>");
		ele.html($(this).html());
		ele.addClass("draft_tool");
		ele.addClass("draggable");
		return ele;
	}

};