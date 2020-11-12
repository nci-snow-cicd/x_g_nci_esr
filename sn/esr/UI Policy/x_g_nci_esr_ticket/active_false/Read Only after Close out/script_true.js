/* 
 * Application : esr
 * ClassName   : sys_ui_policy
 * Created On  : 2020-04-16 01:39:22
 * Created By  : saxenap2@nih.gov
 * Updated On  : 2020-04-29 18:34:58
 * Updated By  : saxenap2@nih.gov
 * URL         : /sys_ui_policy.do?sys_id=79f035c81bd4d4102701b913cc4bcb23
 */
function onCondition() {
	var fields = g_form.getEditableFields();  
	for (var x = 0; x < fields.length; x++) {  
      g_form.setReadOnly(fields[x], true);
	}  
}
