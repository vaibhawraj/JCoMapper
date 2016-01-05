function JCOcntrler($scope){
	$scope.init = function(){
		dragdrop.init($);
		dialog.init($);
		$scope.draggables.enable("draft_cm");
		if(!$scope.$$phase){$scope.$apply();}
	}
	$scope.errorMsg = "";	//Error Message is used to append on dialog boxes
	$scope.draggables = {
		draft_cm : false,
		draft_st : false,
		draft_om : false,
		enable : function(name) {
			eval("$scope.draggables."+name + "=true");
			$("."+name).draggable("enable");
		}
	};

	$scope.CMrecords = function(){return CM;};
	$scope.STrecords = function(){
		//TODO : Only return those steps whose CM is selected
	};
	$scope.OMrecords = function(){
		//TODO : Only return those object mapping whose ST is selected
	};

	$scope.CMdialog = function(){
		$scope.errorMsg = "";
		$("#newCMDialog").dialog("open");
	};

	$scope.CMDialogData = {	//Field To Track and Validation Rules Specified
		name : "",
		description : "",
		paramHandler : "",
		validationRule : [
			{condition : "that.name==''",errorMsg: "Required field missing [Name]"},
			{condition : "that.name.split(' ').length!=1",errorMsg: "No space is allowed [Name]"}
		]
	};

	$scope.addCMRecord = function(){
		if(!$scope.validationRule($scope.CMDialogData)){
			if(!$scope.$$phase) {
				$scope.$apply();
			}
			return false;
		};
		var tempRec = metadata.ConnectorMapping.newRecord();
		var seq = CM.length;
		tempRec.attr.sequence = seq + 1;
		tempRec.attr.name = $scope.CMDialogData.name;
		tempRec.attr.paramHandler = $scope.CMDialogData.paramHandler;
		tempRec.attr.description = $scope.CMDialogData.description;
		CM.push(tempRec);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
		return true;
	};

	$scope.validationRule = function(obj) {
		var that=obj;
		var result = true;
		_.each(that.validationRule,function(param){
			var condition;
			eval("condition = ("+param.condition+")");
			if(condition==true) {
				$scope.errorMsg = param.errorMsg;
				result = false;
				return;
			}
		})
		return result;
	}
	$scope.toggleflag = true;
	$scope.toggleView = function(){
		var str = genXML();
		if($scope.toggleflag) {
			$("#design_view").hide();
			$("#xml_view").show();
			mod ="";
			_.each(str.split('>'),function(param,index,list){
				if(list.length-1 != index) {
					mod = mod + param + ">\n";
				}
			})
			myCodeMirror.doc.setValue(mod);
			myCodeMirror.refresh();
			myCodeMirror.execCommand("selectAll");
			myCodeMirror.execCommand("indentAuto");
			$scope.toggleflag = false;
		} else {
			$("#design_view").show();
			$("#xml_view").hide();
			$scope.toggleflag = true;
		}
	}
}