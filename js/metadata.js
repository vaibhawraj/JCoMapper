/* metadata.js 

To Create Object : metadata.newObject("objName");
To addField : metadata.objName.addField("fieldName");
To addField and set its values : metadata.objName.addField("fieldName",{
	defaultVal : "anyValue",
	readOnly : false
	...
	picklistValues : ["value1","value2"]
})

To Access Metadata : metadata.objName
To Access Field Info : metadata.objName.fieldName
To Retrieve Field Lost : metadata.objName.fieldList
To Create New Record : metadata.objName.newRecord();
*/

var metadata = {};

metadata.newObject = function(objectName) {
	Object.defineProperty(this,objectName,{value : new this.mObject(),enumerable:true});
};
metadata.objId = 1;
metadata.mObject = function(){
		this.addField = function(name,prop) {
			prop=(typeof(prop)==="undefined")?{}:prop;
			Object.defineProperty(this,name,{value:{
				defaultVal : (_.has(prop,"defaultVal"))?prop.defaultVal:"",
				readOnly : (_.has(prop,"readOnly"))?prop.readOnly:false,
				picklist : (_.has(prop,"picklist"))?prop.picklist:false,
				picklistValues : (_.has(prop,"picklistValues"))?prop.picklistValues:[],
				datatype : (_.has(prop,"datatype"))?prop.datatype:"string"
			},enumerable:true});
			this.fieldList.push(name);
		}
		this.objId = metadata.objId;
		metadata.objId = metadata.objId + 1;
		this.currentId = 0;
		this.fieldList = [];
		this.newRecord = function(){
			this.currentId = this.currentId + 1;
			var newRec = {};
			var that = this;
			_.each(this.fieldList,function(name){
				Object.defineProperty(newRec,name,{value : (_.property(name)(that)).defaultVal,enumerable:true,writable:!((_.property(name)(that)).readOnly)});
			});
			return {id: this.objId + "x" + this.currentId, attr : newRec,child : [], parentId : null};
		}
		return this;
	};
