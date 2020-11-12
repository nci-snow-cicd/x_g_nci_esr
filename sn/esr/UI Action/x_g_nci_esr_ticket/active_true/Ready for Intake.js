/* 
 * Application : esr
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-02 15:46:10
 * Created By  : saxenap2@nih.gov
 * Updated On  : 2020-05-22 20:05:49
 * Updated By  : scottrym@nih.gov
 * URL         : /sys_ui_action.do?sys_id=662c6c731b3f0c502701b913cc4bcbc6
 */
current.state = 4;
if(current.federal_lead == "" || current.project_manager == "" ) {
	gs.addErrorMessage("Federal Lead and Project Manager are required before work is initiated.");
	current.state = 2;
	current.setAbortAction(true);
} else {
	current.update();
}
