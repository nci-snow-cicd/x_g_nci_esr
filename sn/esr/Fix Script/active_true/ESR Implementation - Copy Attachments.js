/* 
 * Application : esr
 * ClassName   : sys_script_fix
 * Created On  : 2020-08-13 12:40:10
 * Created By  : lawlorap@nih.gov
 * Updated On  : 2020-08-13 12:40:10
 * Updated By  : lawlorap@nih.gov
 * URL         : /sys_script_fix.do?sys_id=e27db0261b2218106daea681f54bcbc5
 */
var legacyTix = new GlideRecord('u_engineering_project_support');
legacyTix.addQuery('u_phaseIN1,2,3,4');
legacyTix.query();

while (legacyTix.next()) {
	var donorTable = 'u_engineering_project_support';
	var donorID = legacyTix.getValue('sys_id');
	var newTix = new GlideRecord('x_g_nci_esr_project');
	newTix.get('legacy_number', legacyTix.getValue('number'));
	if (newTix.isValidRecord()) {
		var recipientTable = 'x_g_nci_esr_project';
		var recipientID = newTix.getValue('sys_id');
		GlideSysAttachment.copy(donorTable, donorID, recipientTable, recipientID);
	}
}
