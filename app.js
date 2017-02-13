
var app = new Vue ({
    el: '#app',
    data: {
        title: 'Basic Vue Starter',
        description: 'Basic quick starter for Vue protoype. Helps to get an app in play quickly',
        includes: [
            {name: 'Tachyons.css', url:'http://tachyons.io/'},
            {name: 'Vue.js', url:'https://vuejs.org/'},
            {name:'Browsersync', url:'https://browsersync.io/'}
        ],
        todos: [
            {item: 'Add Firebase connection with basic implementation'},
            {item: 'Add basic routing'}
        ]
    }
})

var footer = new Vue({
    el: '#footer',
    data: {
        footerLinks: [
            {text:'bryanrankin.com', url:'http://bryanrankin.com', icon:'fa fa-globe'},
            {text:'@bmrankin', url:'http://github.com/bmrankin', icon:'fa fa-github'}
        ]
        // copyright: 'Copyright Bryan Rankin' + Data.now().getFullYear()
    }
})
