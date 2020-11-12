/* 
 * Application : esr
 * ClassName   : sys_script_client
 * Created On  : 2020-06-24 18:51:30
 * Created By  : scottrym@nih.gov
 * Updated On  : 2020-06-24 18:51:30
 * Updated By  : scottrym@nih.gov
 * URL         : /sys_script_client.do?sys_id=87b270ee1ba1d8102701b913cc4bcbcc
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   //Type appropriate comment here, and begin script below
	var start = new Date(g_form.getValue('planned_start_date'));
	var end = new Date(g_form.getValue('planned_end_date'));
	
	if (start > end) {
		g_form.setValue('planned_start_date', '');
		
		alert("Planned Start Date must be before Planned End Date.");
	}
   
}
