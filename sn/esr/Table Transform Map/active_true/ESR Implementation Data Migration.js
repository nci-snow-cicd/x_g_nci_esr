/* 
 * Application : esr
 * ClassName   : sys_transform_map
 * Created On  : 2020-07-27 20:18:42
 * Created By  : scottrym@nih.gov
 * Updated On  : 2020-08-15 17:33:10
 * Updated By  : lawlorap@nih.gov
 * URL         : /sys_transform_map.do?sys_id=83b143411bdad8106daea681f54bcb11
 */
(function transformRow(source, target, map, log, isUpdate) {

	//if (source.u_phase == "Phase 0: Q-Branch") {
	//	ignore = true;
	if (source.u_phase == "Phase 1: Initiation"){
		target.phase = 1;
		target.state = 11;
	} else if (source.u_phase == "Phase 2: Planning"){
		target.phase = 1;
		target.state = 12;
	} else if (source.u_phase == "Phase 3: Execution"){
		target.phase = 1;
		target.state = 13;
	} else if (source.u_phase == "Phase 4: Closed Out"){
		target.phase = 1;
		target.state = 14;
	} else {
		ignore = true;
	}
	target.autoSysFields(false);

})(source, target, map, log, action==="update");
