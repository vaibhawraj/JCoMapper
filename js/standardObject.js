/*
ConnectorMapping
*/
metadata.newObject("ConnectorMapping");
metadata.ConnectorMapping.addField("name");
metadata.ConnectorMapping.addField("description");
metadata.ConnectorMapping.addField("sequence");
metadata.ConnectorMapping.addField("paramHandler");
metadata.ConnectorMapping.sequence.datatype = "number";
metadata.ConnectorMapping.sequence.defaultVal = 1;


/*
Step name="Fetch Customer Information From SAP" number="1" input="parameter" output="record"
*/
metadata.newObject("Step");
metadata.Step.addField("name");
metadata.Step.addField("number");
metadata.Step.number.datatype = "number";
metadata.Step.number.defaultVal = 1;
metadata.Step.addField("input");
metadata.Step.input.datatype = "picklist";
metadata.Step.input.defaultVal = "parameter";
metadata.Step.input.picklist = true;
metadata.Step.input.picklistValues.push("parameter");
metadata.Step.input.picklistValues.push("record");
metadata.Step.addField("output");
metadata.Step.output.datatype = "picklist";
metadata.Step.output.defaultVal = "record";
metadata.Step.output.picklist = true;
metadata.Step.output.picklistValues.push("parameter");
metadata.Step.output.picklistValues.push("record");