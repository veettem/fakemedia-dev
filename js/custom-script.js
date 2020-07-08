$(document).ready(function(){
    $('#login-email').hide();
    $('.again-login').hide();
    $('.send-btn').hide();
    $('.head-verification').hide();
    $('#registerA').hide();
    $('.overlay').hide();
});

function changeinput(){
    $('#login-user').hide();
    $('#login-password').hide();
    $('#login-email').show();
    $('.forget-pwd').hide();
    $('.again-login').show();
    $('.login-btn').hide();
    $('.send-btn').show();
    $('.head-verification').show();
    $('.head-login').hide();
}

function changeinputlogin(){
    $('#login-email').hide();
    $('#login-user').show();
    $('#login-password').show();
    $('.forget-pwd').show();
    $('.again-login').hide();
    $('.login-btn').show();
    $('.send-btn').hide();
    $('.head-verification').hide();
    $('.head-login').show();
}

function createA(){
    $('#registerA').show();
    $('.overlay').show();
}

function createClose(){
    $('#registerA').hide();
    $('.overlay').hide();
}