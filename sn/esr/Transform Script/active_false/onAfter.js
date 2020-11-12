/* 
 * Application : esr
 * ClassName   : sys_transform_script
 * Created On  : 2020-05-18 19:32:34
 * Created By  : scottrym@nih.gov
 * Updated On  : 2020-07-01 19:33:41
 * Updated By  : scottrym@nih.gov
 * URL         : /sys_transform_script.do?sys_id=38989e261b3090102701b913cc4bcb0d
 */
(function runTransformScript(source, map, log, target) {

	//var snum = source.getValue("number");
	var snum = source.u_number;
	var oldesr = new GlideRecord("u_engineering_project_support");
	//oldesr = get("number",snum);
	oldesr.addQuery("number",snum);
	oldesr.query();
	oldesr.next();
	var sid = oldesr.getUniqueValue();
	gs.info("Test1 snum " + snum);
	gs.info("Test1 sid " + sid);
	
	var tnum = target.number;
	var newesr = new GlideRecord("x_g_nci_esr_ticket");
	newesr.addQuery("number",tnum);
	newesr.query();
	newesr.next();
	var tid = newesr.getUniqueValue();
	gs.info("Test2 " + tid);
	
	var oldrec = new GlideRecord("sys_journal_field");
	oldrec.orderBy("sys_created_on");
	oldrec.addQuery("element_id",sid);
	oldrec.query();
	while (oldrec.next()) {
		gs.info("Test3 beginning");
		target.setValue("comments", "Test Comments");
		target.setValue("work_notes", "Test Work Notes");
		//var newrec = new GlideRecord("sys_journal_field");
		//newrec.initialize();
		//newrec.newRecord();
		//newrec.setValue("sys_created_on", oldrec.getValue("sys_created_on"));
		//newrec.setValue("sys_created_by", oldrec.getValue("sys_created_by"));
		//newrec.setValue("element", oldrec.getValue("element"));
		//newrec.setValue("element_id", "tid");
		//newrec.setValue("name", 'x_g_nci_esr_ticket');
		//newrec.setValue("value", oldrec.getValue("value"));
		//newrec.insert();
		gs.info("Test3 end");
		//gs.info("Result of insert " + newrec.insert());
	}
	

})(source, map, log, target);
