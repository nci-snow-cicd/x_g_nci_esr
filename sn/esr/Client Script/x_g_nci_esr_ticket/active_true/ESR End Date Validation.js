/* 
 * Application : esr
 * ClassName   : sys_script_client
 * Created On  : 2020-06-24 15:21:20
 * Created By  : scottrym@nih.gov
 * Updated On  : 2020-06-24 18:56:51
 * Updated By  : scottrym@nih.gov
 * URL         : /sys_script_client.do?sys_id=d2a2c06e1b6d98102701b913cc4bcb84
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   //Type appropriate comment here, and begin script below
	var start = new Date(g_form.getValue('planned_start_date'));
	var end = new Date(g_form.getValue('planned_end_date'));
	
	if (start > end) {
		g_form.setValue('planned_end_date', '');
		
		alert("Planned End Date must be after Planned Start Date.");
	}
   
}
