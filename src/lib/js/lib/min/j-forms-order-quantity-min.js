$(document).ready(function () {$('#first_field_quantity, #second_field_quantity, #third_field_quantity').stepper({ limit:[0] }), $('#third_field_price').autoNumeric('init'); var e = function () {var e = $('#first_field_quantity').val(), r = 1.3, t = $('#first_field_total'), i = $('#second_field_quantity').val(), s = 3.5, o = $('#second_field_total'), a = $('#third_field_quantity').val(), n = $('#third_field_price').val().split(' ')[1] || 0, u = $('#third_field_total'), d = 0, l = 0, c = $('#field_totals'); d = Math.round(e * r * 100) / 100, t.val('$ ' + d), l += d, d = Math.round(i * s * 100) / 100, o.val('$ ' + d), l += d, d = Math.round(a * n * 100) / 100, u.val('$ ' + d), l += d, c.val('$ ' + l);}; $('#order-forms-quantity .fruits-calculation').on('click', function () {e();}), $('#order-forms-quantity .fruits-calculation').change(function () {e();}), $('#order-forms-quantity .quantity-events').bind('DOMMouseScroll', function (r) {return r.originalEvent.detail > 0, e(), !1;}), $('#order-forms-quantity .quantity-events').bind('mousewheel', function (r) {return r.originalEvent.wheelDelta < 0, e(), !1;}), $('#order-forms-quantity .quantity-events').keyup(function (r) {(38 == r.keyCode || 40 == r.keyCode) && e();}), $('#phone').mask('(999) 999-9999', { placeholder:'x' }), $('#order-forms-quantity').validate({ errorClass:'error-view', validClass:'success-view', errorElement:'span', onkeyup:!1, onclick:!1, ignore:'', rules:{ first_field_quantity:{ required:!0 }, second_field_quantity:{ required:!0 }, third_field:{ required:!0 }, third_field_quantity:{ required:!0 }, third_field_price:{ required:!0 }, name:{ required:!0 }, email:{ required:!0, email:!0 }, phone:{ required:!0 } }, messages:{ first_field_quantity:{ required:'Required' }, second_field_quantity:{ required:'Required' }, third_field:{ required:'Please enter a fruit' }, third_field_quantity:{ required:'Required' }, third_field_price:{ required:'Required' }, name:{ required:'Please enter your name' }, email:{ required:'Please enter your email', email:'Incorrect email format' }, phone:{ required:'Please enter your phone' } }, highlight:function (e, r, t) {$(e).closest('.input').removeClass(t).addClass(r), ($(e).is(':checkbox') || $(e).is(':radio')) && $(e).closest('.check').removeClass(t).addClass(r);}, unhighlight:function (e, r, t) {$(e).closest('.input').removeClass(r).addClass(t), ($(e).is(':checkbox') || $(e).is(':radio')) && $(e).closest('.check').removeClass(r).addClass(t);}, errorPlacement:function (e, r) {$(r).is(':checkbox') || $(r).is(':radio') ? $(r).closest('.check').append(e) : $(r).closest('.unit').append(e);}, submitHandler:function () {$('#order-forms-quantity').ajaxSubmit({ target:'#order-forms-quantity #response', error:function (e) {$('#order-forms-quantity #response').html('An error occured: ' + e.status + ' - ' + e.statusText);}, beforeSubmit:function () {$('#order-forms-quantity button[type="submit"]').attr('disabled', !0).addClass('processing');}, success:function () {$('#order-forms-quantity button[type="submit"]').attr('disabled', !1).removeClass('processing'), $('#order-forms-quantity .success-message').length && ($('#order-forms-quantity .input').removeClass('success-view error-view'), $('#order-forms-quantity .check').removeClass('success-view error-view'), $('#order-forms-quantity').resetForm(), $('#order-forms-quantity button[type="submit"]').attr('disabled', !0), setTimeout(function () {$('#order-forms-quantity #response').removeClass('success-message').html(''), $('#order-forms-quantity button[type="submit"]').attr('disabled', !1);}, 5e3));} });} });});
