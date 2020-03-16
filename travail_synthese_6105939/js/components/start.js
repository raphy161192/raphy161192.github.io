import avecTemplateHtml from '../avecTemplateHtml.js'

Vue.component('start', avecTemplateHtml({
    props: ['show'],
    template: 'start.html',
}))