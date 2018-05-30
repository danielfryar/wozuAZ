 
$(function(){

    $("#panel1").hide(900).show(1100);

    $("#addButton").click(() => {
        $("#contactsTable").append(
            `<tr>`+
            `<td>`+$("#firstName").val()+`</td>`+
            `<td>`+$("#lastName").val()+`</td>`+
            `<td>`+$("#emailAddr").val()+`</td>`+
            `</tr>`
        );
        $("#firstName").val('');
        $("#lastName").val('');
        $("#emailAddr").val('');
    })
});
     
