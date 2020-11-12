/* 
 * Application : esr
 * ClassName   : sys_ui_action
 * Created On  : 2020-05-01 16:14:32
 * Created By  : saxenap2@nih.gov
 * Updated On  : 2020-06-23 19:26:21
 * Updated By  : scottrym@nih.gov
 * URL         : /sys_ui_action.do?sys_id=2ca842891b2c50502701b913cc4bcbf1
 */
if(current.comments == "") {
	gs.addErrorMessage("Please add a reason for Close Incomplete to the comments.");
	current.setAbortAction(true);
} else {
	current.state = 16;
	current.update();
}
