/* 
 * Application : esr
 * ClassName   : sys_script
 * Created On  : 2020-05-03 16:02:50
 * Created By  : saxenap2@nih.gov
 * Updated On  : 2020-05-03 16:02:50
 * Updated By  : saxenap2@nih.gov
 * URL         : /sys_script.do?sys_id=b6289c7d1b2c50102701b913cc4bcba9
 */
(function executeRule(current, previous /*null when async*/) {
	
	var start = current.getValue('planned_start_date');
	var end = current.getValue('planned_end_date');

	// Add your code here
	if(start < end) {
		// do something.
	}

})(current, previous);
