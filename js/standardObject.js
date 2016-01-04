/*
ConnectorMapping
*/
metadata.newObject("ConnectorMapping");
metadata.ConnectorMapping.addField("name");
metadata.ConnectorMapping.addField("description");
metadata.ConnectorMapping.addField("sequence",{datatype:"number",defaultVal:1});
metadata.ConnectorMapping.addField("paramHandler");


/*
Step name="Fetch Customer Information From SAP" number="1" input="parameter" output="record"
*/
metadata.newObject("Step");
metadata.Step.addField("name");
metadata.Step.addField("number",{datatype:"number",defaultVal:1});
metadata.Step.addField("input",{datatype:"picklist",defaultVal:"parameter",
								picklist:true,picklistValues:["parameter","record"]});
metadata.Step.addField("output",{datatype:"picklist",defaultVal:"record",
								picklist:true,picklistValues:["parameter","record"]});

/*
<ObjectMapping name="EXPORT_ACCOUNT_FROM_SAP" description="Retrieve Account Info from SAP" 
objectReference="ZCUST_MAST_CRM" 
action="export" subAction="loadRecord" processor="sapProcessor" alias="" criteria="" attribute1="">
*/
metadata.newObject("ObjectMapping");
metadata.ObjectMapping.addField("name");
metadata.ObjectMapping.addField("description");
metadata.ObjectMapping.addField("objectReference");
metadata.ObjectMapping.addField("action",{datatype:"picklist",picklist:true,picklistValues:["export","import"]});
metadata.ObjectMapping.addField("subAction",{datatype:"picklist",picklist:true,picklistValues:["loadRecord","loadParameter"]});
metadata.ObjectMapping.addField("processor");
metadata.ObjectMapping.addField("alias");
metadata.ObjectMapping.addField("criteria");
metadata.ObjectMapping.addField("attribute1");

/*

*/