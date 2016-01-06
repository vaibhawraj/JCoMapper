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
}};