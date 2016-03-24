$(document).ready(function () {$('#forms-login').validate({ errorClass:'error-view', validClass:'success-view', errorElement:'span', onkeyup:!1, onclick:!1, rules:{ login:{ required:!0 }, password:{ required:!0, minlength:6 } }, messages:{ login:{ required:'Please enter your login' }, password:{ required:'Please enter your password', minlength:'At least 6 characters' } }, highlight:function (s, e, o) {$(s).closest('.input').removeClass(o).addClass(e), ($(s).is(':checkbox') || $(s).is(':radio')) && $(s).closest('.check').removeClass(o).addClass(e);}, unhighlight:function (s, e, o) {$(s).closest('.input').removeClass(e).addClass(o), ($(s).is(':checkbox') || $(s).is(':radio')) && $(s).closest('.check').removeClass(e).addClass(o);}, errorPlacement:function (s, e) {$(e).is(':checkbox') || $(e).is(':radio') ? $(e).closest('.check').append(s) : $(e).closest('.unit').append(s);}, submitHandler:function () {$('#forms-login').ajaxSubmit({ target:'#forms-login .response', error:function (s) {$('#forms-login .response').html('An error occured: ' + s.status + ' - ' + s.statusText);}, beforeSubmit:function () {$('#forms-login button[type="submit"]').attr('disabled', !0).addClass('processing');}, success:function () {$('#forms-login button[type="submit"]').attr('disabled', !1).removeClass('processing'), $('#forms-login .input').removeClass('success-view error-view'), $('#forms-login .check').removeClass('success-view error-view'), $('#forms-login .success-message').length && ($('#forms-login').resetForm(), $('#forms-login button[type="submit"]').attr('disabled', !0), setTimeout(function () {$('#forms-login .response').removeClass('success-message').html(''), $('#forms-login button[type="submit"]').attr('disabled', !1);}, 5e3));} });} });});
