/* 
 * Application : esr
 * ClassName   : sys_script_fix
 * Created On  : 2020-08-13 12:39:46
 * Created By  : lawlorap@nih.gov
 * Updated On  : 2020-08-13 12:39:46
 * Updated By  : lawlorap@nih.gov
 * URL         : /sys_script_fix.do?sys_id=7c5d34261b2218106daea681f54bcb01
 */
var legacyTix = new GlideRecord('u_engineering_project_support');
legacyTix.addQuery('u_phase=0');
legacyTix.query();

while (legacyTix.next()) {
	var donorTable = 'u_engineering_project_support';
	var donorID = legacyTix.getValue('sys_id');
	var newTix = new GlideRecord('x_g_nci_esr_ticket');
	newTix.get('legacy_number', legacyTix.getValue('number'));
	if (newTix.isValidRecord()) {
		var recipientTable = 'x_g_nci_esr_ticket';
		var recipientID = newTix.getValue('sys_id');
		GlideSysAttachment.copy(donorTable, donorID, recipientTable, recipientID);
	}
}
