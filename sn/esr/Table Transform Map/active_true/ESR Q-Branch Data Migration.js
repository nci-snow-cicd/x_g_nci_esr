/* 
 * Application : esr
 * ClassName   : sys_transform_map
 * Created On  : 2020-05-11 21:04:29
 * Created By  : scottrym@nih.gov
 * Updated On  : 2020-08-15 16:55:20
 * Updated By  : lawlorap@nih.gov
 * URL         : /sys_transform_map.do?sys_id=7649ead41b30dc102701b913cc4bcb01
 */
(function transformRow(source, target, map, log, isUpdate) {

	if (source.u_phase == "Phase 0: Q-Branch") {
		target.phase = 0;
		target.autoSysFields(false);
		if (source.u_state == "Backlog") {
			target.state = 2;
		} else if (source.u_state == "Work in Progress") {
			target.state = 7;
		} else if (source.u_state == "On Hold") {
			target.state = 3;
		} else if (source.u_state == "Closed Complete") {
			target.state = 9;
		} else if (source.u_state == "Closed Incomplete") {
			target.state = 10;
		} else if (source.u_phase == "Not Yet Started") {
			target.phase = 0;
			target.state = 2;
		}
	} else {
		ignore = true;
	}

})(source, target, map, log, action==="update");
