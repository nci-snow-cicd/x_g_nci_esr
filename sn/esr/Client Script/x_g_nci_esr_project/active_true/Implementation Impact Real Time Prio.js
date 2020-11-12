/* 
 * Application : esr
 * ClassName   : sys_script_client
 * Created On  : 2020-07-10 17:03:02
 * Created By  : scottrym@nih.gov
 * Updated On  : 2020-07-10 17:03:02
 * Updated By  : scottrym@nih.gov
 * URL         : /sys_script_client.do?sys_id=076376e71bf95c506daea681f54bcb38
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

	var impact = g_form.getValue('impact');
	var urgency = g_form.getValue('urgency');
	
	var priority = impact * urgency;
	
	if (priority == 1) {
		g_form.setValue('priority',1);
	} else if (priority == 2) {
		g_form.setValue('priority',2);
	} else if (priority == 4 || priority == 3) {
		g_form.setValue('priority',3);
	} else if (priority == 6) {
		g_form.setValue('priority',4);
	} else {
		g_form.setValue('priority',5);
	}
   
}
