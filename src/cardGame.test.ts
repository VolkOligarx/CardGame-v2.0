const { it } = require('@jest/globals')
const { TodoList, TodoItem } = require('../useless/uselessTest')

it('should add first element to list', () => {
    const list = new TodoList()

    list.addItem({ name: 'create test' })

    if (list.items.length === 0) {
        throw Error('Items equal to 0')
    }
})

it('should add second item to list', () => {
    const item = new TodoItem({ name: 'create test' })
    const list = new TodoList([item])

    list.addItem({ name: 'check me' })

    if (list.items[1].name !== 'check me') {
        throw Error('Second item was not added')
    }
})
