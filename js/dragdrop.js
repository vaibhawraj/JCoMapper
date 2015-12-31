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
		$("#connector_mappings").droppable({
			scope:"draft_cm",
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
		return ele;
	}

};