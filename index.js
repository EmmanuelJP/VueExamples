Vue.component('todo-item', {
    props: ['todo'],
    template: '<li> {{todo.id+1}} - {{todo.text}} </li>'
})
var instance = {
    el: '#app',
    data: {
        message: 'Hello Vue!',
        spanTitle: 'Titulo del span',
        seen: true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
};
var app = new Vue(instance);