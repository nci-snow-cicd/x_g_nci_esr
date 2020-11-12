/* 
 * Application : esr
 * ClassName   : sys_script
 * Created On  : 2020-05-03 01:50:09
 * Created By  : saxenap2@nih.gov
 * Updated On  : 2020-08-24 20:23:50
 * Updated By  : scottrym@nih.gov
 * URL         : /sys_script.do?sys_id=930459651b2050102701b913cc4bcb66
 */
(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	var impact = current.getValue('impact');
	var urgency = current.getValue('urgency');
	gs.debug("Impact & Urgency" + urgency);
	
	var priority = impact * urgency;
	
	if (priority == 1) {
		current.setValue('priority',1);
	} else if (priority == 2) {
		current.setValue('priority',2);
	} else if (priority == 4 || priority == 3) {
		current.setValue('priority',3);
	} else if (priority == 6) {
		current.setValue('priority',4);
	} else {
		current.setValue('priority',5);
	}
	

})(current, previous);
