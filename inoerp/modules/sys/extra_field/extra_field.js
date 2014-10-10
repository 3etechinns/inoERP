function setValFromSelectPage(sys_extra_field_id) {
 this.sys_extra_field_id = sys_extra_field_id;
}

setValFromSelectPage.prototype.setVal = function() {
 var sys_extra_field_id = this.sys_extra_field_id;
 if (sys_extra_field_id) {
	$("#sys_extra_field_id").val(sys_extra_field_id);
 }
};


$(document).ready(function() {
 //selecting Id
 $(".sys_extra_field_id.select_popup").on("click", function() {
	void window.open('select.php?class_name=sys_extra_field', '_blank',
					'width=1000,height=800,TOOLBAR=no,MENUBAR=no,SCROLLBARS=yes,RESIZABLE=yes,LOCATION=no,DIRECTORIES=no,STATUS=no');
 });

 //Get the sys_extra_field_id on find button click
 $('a.show.sys_extra_field_id').click(function() {
	var sys_extra_field_id = $('#sys_extra_field_id').val();
	$(this).attr('href', modepath() + 'sys_extra_field_id=' + sys_extra_field_id);
 });
 
 $('#field_type').on('change', function(){
  switch($(this).val()){
    case 'DECIMAL' :
      case 'FILE' :
      case 'IMAGE' :
      case 'LIST' :
      case 'INT' :
      case 'MULTI_SELECT' :
      case 'OPTION_LIST' :
      $('#field_length').attr('required', true).css('background-color','pink');
      break;
  
  
    default :
       $('#field_length').attr('required', false).css('background-color','white');
      break;
  
  }


})

});

