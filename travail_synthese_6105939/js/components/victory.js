import avecTemplateHtml from '../avecTemplateHtml.js'

Vue.component('victory', avecTemplateHtml({
    props: ['show', 'winner'],
    template: 'victory.html'
}))