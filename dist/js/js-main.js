'use strict';

(function () {
    let tab = document.getElementById('tab');

    tab.addEventListener('click', function (e) {

        let target = e.target;
        while (target != this) {
            if (target.classList.contains('tab__link')) {
                showtab(target, e)
                return
            }
            target = target.parentNode;
        }
    })

    function showtab(link, e) {
        e.preventDefault()

        let tabId = link.getAttribute('data-tab'),
            links = tab.querySelectorAll('.tab__link'),
            blocks = tab.querySelectorAll('.tab__content'),
            selector = tabId + '',
            activeTab = document.getElementById(selector);

        /*удаляю активный класс с сылок и вешаю на нужную*/
        for (let i = 0; i <= links.length - 1; i++) {
            links[i].classList.remove('tab__active-link')
        }

        for (let i = 0; i <= blocks.length - 1; i++) {
            blocks[i].classList.remove('tab__active-content')
        }

        /*Добавляю нужный таб*/
        link.classList.add('tab__active-link')
        activeTab.classList.add('tab__active-content')
    }
})()

let interNational = {
    russian: {
        blog: `Блог`,
        name: `Ирина`,
        surname: 'Андрианова',
        range: `Веб-дизайнер, разработчик`,
        aboutTitle: `Обо мне`,
        aboutText: `Считается, что дизайнер и разработчик это две разные специальности, но я думаю, что хороший UX-специалист всегда немного программист, аналитик и много изучающий человек. В этом и есть главная прелесть работы — постоянный рост и стремление к лучшим результатам. Меня интересуют проекты, предоставляющие такую возможность.`,
        aboutText2: `Вы можете связаться со мной по поводу резюме. `,
        aboutText3: `Ссылка на Телеграмм`,
        skillsTitle: `Мои навыки`,
        hobbies: `Увлечения:`,
        hobbiesText: `Экстремальные виды спорта (прыжки с парашютом, полеты на параплане, верховая езда, путешествия автостопом).`,
        workTitle: `Портфолио`,
        workDesign: `Дизайн и прототипирование`,
        workCoding: `Верстка сайтов и рассылок`,
        gameDesc: `Макет игрового сайта.`,
        couchDesc: `Макет сайта коучеров.`,
        floristDesc: `Прототип сайта по продаже цветов.`,
        houseDesc: `Тестовое задание. Макет сайта для домостроительной компании.`,
        houseAxureDesc: `Тестовое задание. Прототип сайта для домостроительной компании.`,
        lsrDesc: `Промо-страница застройщика LSR. Стек используемых технологий: Foundation for Emails, Inky, SASS, Gulp.`,
        lsrEmail: `Верстка рассылки для LSR. Стек используемых технологий: Gulp, Less. Адаптивная верстка.`,
        landingDesc: `Учебный проект. Gulp 4.0, Sass, native JS. Адаптивная верстка, CSS-спрайты, методология BEM.`,
        wordpressDesc: `Сайт-портфолио для фотографа. WordPress, Gulp 4.0, Sass, jQuery. Адаптивная верстка. Плагины: jQuery FreeWall, Magnific Popup, NiceScroll, Lazy Load.`,
        smitlerDesc: `Сайт салона красоты. Gulp 4.0, Sass, jQuery. Адаптив. Плагины: Optimized HTML, Hamburgers, equalHeights, Fotorama, Mmenu, Owl Carousel 2, Selectize.`,
        emailDesc: `Шаблон для email-рассылки. Foundation for Emails, Inky, SASS, Gulp. Использовался для создания корпоративной рассылки.`,
        footerContent: `Ирина Андрианова`
    },
    english: {
        blog: `Blog`,
        name: `Irina`,
        surname: 'Andrianova',
        range: `Web-designer, developer`,
        aboutTitle: `Let me introduce myself`,
        aboutText: `It is accepted that a designer and a web-developer are two different specialties, but I think that a good UX-specialist should know the basics of programming, should be able to analyze and must constantly develop. That it is very inspiring to work! Now I would like to work in a long-term project with interesting tasks.`,
        aboutText2: `Please, contact me for any information relevant to to my resume. `,
        aboutText3: `Telegram`,
        skillsTitle: `My skills`,
        hobbies: `Hobbies:`,
        hobbiesText: `Extreme activities (paragliding, horseback riding, skydiving, travels and hitch-hiking).`,
        workTitle: `My works`,
        workDesign: `Design and Prototype`,
        workCoding: `Html and Email coding`,
        gameDesc: `Games website layout.`,
        couchDesc: `Couching website layout.`,
        floristDesc: `The prototype of the site for the sale of flowers.`,
        houseDesc: `Test. Site layout for house-building company.`,
        houseAxureDesc: `Test. Site prototype for a house-building company.`,
        lsrDesc: `Promo-landing LSR. Stack: Gulp, Less. Adaptive layout.`,
        lsrEmail: `Email template LSR. Stack: Foundation for Emails, Inky, SASS, Gulp.`,
        landingDesc: `Training project. Stack: Gulp 4.0, Sass, native JS. Adaptive layout, CSS-sprite, BEM methodology.`,
        wordpressDesc: `Portfolio for photographer. Stack: WordPress, Gulp 4.0, Sass, jQuery. Adaptive layout. Plugins: jQuery FreeWall, Magnific Popup, NiceScroll, Lazy Load.`,
        smitlerDesc: `Site of beauty salon. Stack: Gulp 4.0, Sass, jQuery. Adaptive. Plugins: Optimized HTML, Hamburgers, equalHeights, Fotorama, Mmenu, Owl Carousel 2, Selectize.`,
        emailDesc: `Email template. Ready template for creating email. Stack: Foundation for Emails, Inky, SASS, Gulp. Used to create a corporate newsletter.`,
        footerContent: `Irina Andrianova`
    },

    link: document.getElementById('interlink'),

    changeLang(lang) {
        for (let key in lang) {
            let selector = key+'',//`[data-id="${key}"`
                item = document.getElementById(selector);
            if(item) {
                item.innerText = lang[key]
            }
        }
    },
/**/

    init() {
        let self = this;

        this.link.addEventListener('click', function(e) {
            e.preventDefault();

            if (this.classList.contains('englishActive_js')) {
                this.innerText = 'EN';
                self.link.classList.remove('englishActive_js');
                self.changeLang(self.russian)
            } else {
                this.innerText = 'RU';
                self.link.classList.add('englishActive_js');
                self.changeLang(self.english)
            }
        })
    }
}

interNational.init()

