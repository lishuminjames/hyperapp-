import { h, app } from 'hyperapp';

app({
    state: {
        count: 0
    },
    view: (state, actions) => (
        <main>
            <h1>{state.count}</h1>
            <button onclick={actions.down}>-</button>
            <button onclick={actions.up}>+</button>
        </main>
    ),
    actions: {
        down: state => ({
            count: state.count - 1
        }),
        up: state => ({
            count: state.count + 1
        })
    }
})
