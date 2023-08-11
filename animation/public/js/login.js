function doLogin(FormId){
    var formObj = $('#'+FormId)
    var errorsShow = $('#show_error');
    if(formObj.is('[disabled=disabled]')){
        return false;
    } else {
        formObj.attr('disabled','disabled');
        $.ajax({
            url:  formObj.attr('action'),
            type: "POST",
            data: formObj.serialize(),
            success: function(response){
                formObj.removeAttr('disabled');
                try {
                    response = JSON.parse(response);
                }catch(err){}
                errorsShow.empty();
                if(response.success === 'true'){
                    window.location.href = subscription_url;
                }
                if(response.success == 'false'){
                    $.each(response.message, function(k, v) {
                        errorsShow.append(v + '<br>');
                    });
                }
            },
            error(request, status, error){
                formObj.removeAttr('disabled');
                errorsShow.append(error);
            }
        })
    }
}

function doRegister(FormId)
{
    var formObj = $('#'+FormId)
    var errorsShow = $('#show_error_register');
    if(formObj.is('[disabled=disabled]')){
        return false;
    }else {
        formObj.attr('disabled','disabled');
        $.ajax({
            url:  formObj.attr('action'),
            type: "POST",
            data: formObj.serialize(),
            success: function(response){
                formObj.removeAttr('disabled');
                errorsShow.empty();
                try {
                    response = JSON.parse(response);
                }catch(err){}
                if(response.success == 'true'){
                    //Show user login successfully
                    window.location.href = subscription_url;
                }
                if(response.success == 'false'){
                    $.each(response.message, function(k, v) {
                        errorsShow.append(v + '<br>');
                    });
                }
            },
            error(request, status, error){
                formObj.removeAttr('disabled');
                errorsShow.append(error);
            }
        })
    }
}
