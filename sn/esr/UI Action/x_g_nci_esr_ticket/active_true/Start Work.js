/* 
 * Application : esr
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-02 13:26:10
 * Created By  : saxenap2@nih.gov
 * Updated On  : 2020-07-10 00:51:55
 * Updated By  : saxenap2@nih.gov
 * URL         : /sys_ui_action.do?sys_id=a4fbc07b1b7b0c502701b913cc4bcb72
 */
current.state = 7;
if(current.federal_lead == "" || current.project_manager == "" ) {
	gs.addErrorMessage("Federal Lead and Project Manager are required before work is initiated.");
	current.state = 4;
	current.setAbortAction(true);
} else {
	current.update();
}
