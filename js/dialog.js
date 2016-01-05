var dialog = {init:function($){
	$("#newCMDialog").dialog({
		closeText: "",
		autoOpen: false,
		modal : true,
		height:350,
		width:350,
		buttons : {
			"Add" : function(){
				if(angular.element("#connector_mappings").scope().addCMRecord()){
					$("#newCMDialog").dialog("close");
				}
			},
			"Cancel" : function(){$("#newCMDialog").dialog("close");}
		}
	});
	$(".items").sortable();
}};