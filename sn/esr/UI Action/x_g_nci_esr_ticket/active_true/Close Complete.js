/* 
 * Application : esr
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-02 16:06:13
 * Created By  : saxenap2@nih.gov
 * Updated On  : 2020-07-09 15:06:36
 * Updated By  : scottrym@nih.gov
 * URL         : /sys_ui_action.do?sys_id=b60dacb31b3f0c502701b913cc4bcbec
 */
current.state = 9;
if(current.closeout_reason == "") {
	gs.addErrorMessage("Please provide the closeout reason.");
	current.state = 8;
	current.setAbortAction(true);
} else {
	current.update();
}
