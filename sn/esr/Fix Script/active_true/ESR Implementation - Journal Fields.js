/* 
 * Application : esr
 * ClassName   : sys_script_fix
 * Created On  : 2020-08-15 19:03:45
 * Created By  : lawlorap@nih.gov
 * Updated On  : 2020-08-15 19:03:45
 * Updated By  : lawlorap@nih.gov
 * URL         : /sys_script_fix.do?sys_id=b0f460df1baad8106daea681f54bcba0
 */
var oldESR = new GlideRecord("u_engineering_project_support");
oldESR.query();
while (oldESR.next()) {
var oldID = oldESR.getUniqueValue();
var tnum = oldESR.getValue('number');
var newesr = new GlideRecord("x_g_nci_esr_ticket");
newesr.get("legacy_number", tnum);
if (newesr.isValidRecord()) { 
var tid = newesr.getUniqueValue();
var oldrec = new GlideRecord("sys_journal_field");
oldrec.orderBy("sys_created_on");
oldrec.addQuery("element_id", oldID);
oldrec.query();
while (oldrec.next()) {
    var newrec = new GlideRecord("sys_journal_field");
    newrec.initialize();
	newrec.autoSysFields(false);
	newrec.setWorkflow(false);
    newrec.setValue("sys_created_on", oldrec.getValue("sys_created_on"));
    newrec.setValue("sys_created_by", oldrec.getValue("sys_created_by"));
    newrec.setValue("element", oldrec.getValue("element"));
    newrec.setValue("element_id", tid);
    newrec.setValue("name", newesr.getTableName());
    newrec.setValue("value", oldrec.getValue("value"));
    newrec.insert();
}
}
}
