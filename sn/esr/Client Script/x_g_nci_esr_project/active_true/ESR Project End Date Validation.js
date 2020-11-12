/* 
 * Application : esr
 * ClassName   : sys_script_client
 * Created On  : 2020-06-24 18:14:14
 * Created By  : scottrym@nih.gov
 * Updated On  : 2020-06-24 18:56:25
 * Updated By  : scottrym@nih.gov
 * URL         : /sys_script_client.do?sys_id=2889a0a21ba1d8102701b913cc4bcbf9
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

	var start = new Date(g_form.getValue('planned_start_date'));
	var end = new Date(g_form.getValue('planned_end_date'));
	
	if (start > end) {
		g_form.setValue('planned_end_date', '');
		
		alert("Planned End Date must be after Planned Start Date.");
	}
   
}
