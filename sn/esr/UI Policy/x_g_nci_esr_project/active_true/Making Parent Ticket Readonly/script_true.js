/* 
 * Application : esr
 * ClassName   : sys_ui_policy
 * Created On  : 2020-04-15 20:12:28
 * Created By  : saxenap2@nih.gov
 * Updated On  : 2020-04-16 01:37:00
 * Updated By  : saxenap2@nih.gov
 * URL         : /sys_ui_policy.do?sys_id=6b2620c01b90d4102701b913cc4bcbf2
 */
function onCondition() {
	var fields = g_form.getEditableFields();  
	for (var x = 0; x < fields.length; x++) {  
      g_form.setReadOnly(fields[x], true);
	}  
}

