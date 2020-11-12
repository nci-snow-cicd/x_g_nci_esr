/* 
 * Application : esr
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-10 15:20:38
 * Created By  : saxenap2@nih.gov
 * Updated On  : 2020-07-09 15:04:19
 * Updated By  : scottrym@nih.gov
 * URL         : /sys_ui_action.do?sys_id=63537d1e1b08d8902701b913cc4bcbbb
 */
if(current.comments == "") {
	gs.addErrorMessage("Please add a reason for Close Incomplete to the comments.");
	current.setAbortAction(true);
} else {
	current.state = 10;
	current.update();
}

