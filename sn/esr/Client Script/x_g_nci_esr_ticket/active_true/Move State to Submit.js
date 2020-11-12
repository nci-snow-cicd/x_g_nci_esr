/* 
 * Application : esr
 * ClassName   : sys_script_client
 * Created On  : 2020-04-05 11:29:12
 * Created By  : saxenap2@nih.gov
 * Updated On  : 2020-04-12 11:02:11
 * Updated By  : saxenap2@nih.gov
 * URL         : /sys_script_client.do?sys_id=675d8fa01bc050902701b913cc4bcbae
 */
function onSubmit() {
   //Move the state to Submit on first submit
	var state = g_form.getValue('state');
	if(state == -5) {
		g_form.setValue('state', 2);
	} 
}
