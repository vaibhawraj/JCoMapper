<<<<<<< HEAD
var dialog = {
	init:function($){
		this.CMDialog = $("#newCMDialog").dialog({
			closeText: "",
			autoOpen: false,
			modal : true,
			height:350,
			width:600,
			buttons : {
					"Add" : function(){
						if(angular.element("#connector_mappings").scope().addCMRecord()){
							$("#newCMDialog").dialog("close");
						}
					},
					"Cancel" : function(){$("#newCMDialog").dialog("close");}
				}
			});
		this.CMDialog.find("form").on("submit",function(event){
			event.preventDefault();
			if(angular.element("#connector_mappings").scope().addCMRecord()){
				$("#newCMDialog").dialog("close");
			}
		});
	$(".sortable").sortable({axis:"y"});
=======
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
>>>>>>> 2014af251e8a5b93dbb3c66516f00ef936417796
}};