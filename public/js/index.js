$(document).ready( function () {
    formSubmit('Welcome');
    $('form').submit( function () {
        $("#status").html('Logging In...');
        var formdata = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "/api/login",
            data: formdata,
            success: function() {
                $('#loginError').empty();
                formSubmit('Logged In');
            },
            error: function(err) {
                $('#loginError').html(err.responseJSON.errorMessage);
                $("#status").html('Welcome...');
            }
        });
        return false;
    });
});

function formSubmit(status) {
    var html;
    var btnClickStatus;
    if (status === 'Logged In') {
        html = '<button type="button" onclick="logoutBtn()" class="submit_btn btn btn-info btn-sm">Log Out<i class="icon-arrow-cicle"></i></button>';
    } else {
        btnClickStatus = 'Logging in...';
        html = '<h2 class="login-heading">Get Started</h2>' +
                '<form class="form form-horizontal login-form" method="post">' +
                    '<div class="form-group">' +
                        '<input class="form-control item" type="text" name="username" required="" pattern="^[^,.^\\\/]+$" id="username" placeholder="Username">' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<input class="form-control item" type="password" name="password" required=""  pattern="^[^,.^\\\/]+$" id="password" placeholder="Password">' +
                    '</div>' +
                    '<span class="error alert-danger" id="loginError"></span>' +
                    '<div class="form-group">' +
                        '<button class="btn btn-info btn-sm" type="submit">Log In</button>' +
                    '</div>' +
                '</form>';
    }
    $('#login-section').empty();
    $('#login-section').html(html);
    $("#status").html(status + '...');
}

function logoutBtn() {
    $("#status").html('Logging Out...');
    $.ajax({
        url: '/api/logout',
        type: 'delete',
        success: function() {
            formSubmit('Welcome');
        }
    });
}

