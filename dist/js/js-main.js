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

        /*Здесь добавляю включаю нужный таб*/
        link.classList.add('tab__active-link')
        activeTab.classList.add('tab__active-content')
    }
})()

let interNational = {
    russian: {
        name: 'Ирина Андрианова',
        range: 'UX/UI дизайнер',
        aboutTitle: 'Немного обо мне',
        aboutText: 'Принято считать, что дизайнер и разработчик это две разные специальности. На самом деле, хороший специалист по юзабилити всегда немного программист, аналитик, вообще много думающий и изучающий человек. В этом и скрыта главная прелесть работы UX-дизайнера — постоянный рост и стремление к лучшим результатам. В данный момент меня интересуют масштабные проекты, предоставляющие такую возможность.',
        aboutText3: 'Перейдем к работам.',
        workTitle: `Портфолио`,

    },
    english: {
        name: 'Irina Andrianova',
        range: 'UX/UI designer',
        aboutTitle: 'Let me introduce myself',
        aboutText: `It is accepted that a designer and a web developer are two different specialties. To be honest, I have a different point of view. A good UX-specialist should know the basics of programming, should be able to analyze, must constantly grow and learn something new. And I think that it is very inspiring to work! And now I would like to work in a long-term project with interesting new tasks. I hope that my skills can be interesting for your company.`,
        aboutText3: `let's move on my works.`,
        workTitle: `My works`
    },

    link: document.getElementById('interlink'),

    changeLang(lang) {
        for (let key in lang) {
            let selector = `[data-id="${key}"`,
                item = document.querySelector(selector);

            item.innerText = lang[key]
        }
    },
/**/

    init() {
        let self = this;

        this.link.addEventListener('click', function () {
            if (this.classList.contains('englishActive_js')) {
                this.innerHtml = 'EN'
                self.link.classList.remove('englishActive_js');
                self.changeLang(self.russian)
            } else {
                this.innerHtml = 'RU'
                self.link.classList.add('englishActive_js');
                self.changeLang(self.english)
            }
        })
    }
}

interNational.init()

