const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        }
    },
    methods: {
        addCounter2() {
            this.counter2++
        },
        reduceCounter2() {
            this.counter2--
        }
    }
})

app.mount('#vue-event')