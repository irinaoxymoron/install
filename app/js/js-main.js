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

interNational = {
    russian: {
        name: 'Ирина Андрианова',
        range: 'UX/UI дизайнер'
    },
    english: {
        name: 'Irina Andrianova',
        range: 'UX/UI designer'
    },

    link: document.getElementById('interlink'),

    changeLang(lang) {
    for (key in lang) {
        let selector = `[data-id="${key}"`,
        item = document.querySelector(selector);

        item.innerText = lang[key]
    }
},



init() {
    let self = this;

    this.link.addEventListener('click', function () {
        if(this.classList.contains('englishActive_js')) {
            this.innerText = 'EN'
            self.link.classList.remove('englishActive_js');
            self.changeLang(self.russian)
        } else {
            this.innerText = 'RU'
            self.link.classList.add('englishActive_js');
            self.changeLang(self.english)
        }
    })
}
}

interNational.init()

