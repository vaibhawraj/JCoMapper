/* metadata.js */

var metadata = {};

metadata.newObject = function(objectName) {
	Object.defineProperty(this,objectName,{value : new this.mObject(),enumerable:true});
};
metadata.objId = 1;
metadata.mObject = function(){
		this.addField = function(name) {
			Object.defineProperty(this,name,{value:{
				defaultVal : "",
				readOnly : false,
				picklist : false,
				picklistValues : [],
				setDefault : function(val){this.defaultVal = val;}
			},enumerable:true});
		}
		this.objId = metadata.objId;
		metadata.objId = metadata.objId + 1;
		this.currentId = 0;
		this.newRecord = function(){
			this.currentId = this.currentId + 1;
			var newRec = {};
			var that = this;
			listOfFields = _.keys(_.omit(this,["addField","currentId","newRecord","objId"]));
			_.each(listOfFields,function(name){
				Object.defineProperty(newRec,name,{value : (_.property(name)(that)).defaultVal,enumerable:true});
			});
			return {id: this.objId + "x" + this.currentId, attr : newRec,child : [], parentId : null};
		}
		return this;
	};
