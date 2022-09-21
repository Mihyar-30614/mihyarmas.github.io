(() => {
    'use strict'

    $('#navbarSideCollapse').on('click', () => {
        $('.offcanvas-collapse').toggleClass('open');
    });

    $('#home').on('click', () => {
        $("#single-page-container").load("https://Mihyar-30614.github.io/mihyarmas.github.io/pages/home.html", () => {
            $("#yearsOfExp").text(new Date().getFullYear() - 2017);
            $('#pageList').find("li .active").toggleClass("active");
            $('#pageList').find("li #home").toggleClass("active");
            $('.offcanvas-collapse').removeClass('open');
        });
    });

    $('#about').on('click', () => {
        $("#single-page-container").load("https://Mihyar-30614.github.io/mihyarmas.github.io/pages/about.html", () => {
            $('#pageList').find("li .active").toggleClass("active");
            $('#pageList').find("li #about").toggleClass("active");
            $('.offcanvas-collapse').removeClass('open');
        });
    });

    $('#resume').on('click', () => {
        $("#single-page-container").load("https://Mihyar-30614.github.io/mihyarmas.github.io/pages/resume.html", () => {
            $('#pageList').find("li .active").toggleClass("active");
            $('#pageList').find("li #resume").toggleClass("active");
            $('.offcanvas-collapse').removeClass('open');
        });
    });

    $("#home").trigger("click");

    console.info(`
    👍Welcome! you have made it to the secret terminal shhh!!🤐. \n
    Here are some of you options📃:%c
    1) Mihyar.github() :---------- will take you to my github profile.
    2) Mihyar.linkedin() :-------- will take you to my linkedin profile.
    3) Mihyar.twitter() :--------- will take you to my twitter profile.
    4) Mihyar.facebook() :-------- will take you to my facebook profile.
    5) Mihyar.email() :----------- will give you my email address.
    `, 'background: #222; color: #bada55');

})()

const Mihyar = {
    email: email = () => "eng.mihyear@gmail.com",
    github: github = () => {
        let url = 'https://github.com/Mihyar-30614';
        window.open(url, '_blank').focus();
    },
    linkedin: linkedin = () => {
        let url = 'https://www.linkedin.com/in/mihyar/';
        window.open(url, '_blank').focus();
    },
    twitter: twitter = () => {
        let url = 'https://twitter.com/MihyarMas';
        window.open(url, '_blank').focus();
    },
    facebook: facebook = () => {
        let url = 'https://www.facebook.com/Mihyar';
        window.open(url, '_blank').focus();
    }
}