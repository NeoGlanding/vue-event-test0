const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
            counter3: 0,
            name: ''
        }
    },
    methods: {
        addCounter2(num) {
            if (num) {
                this.counter3 += num
            } else {
                this.counter2++
            }
        },
        reduceCounter2(num) {
            if (num) {
                this.counter3 -= num
            } else {
                this.counter2--
            }
        },
        setName(e) {
            this.name = e.target.value
        },
        setName2(e, lastname) {
            this.name = e.target.value + " " + lastname
        }
    }
})

app.mount('#vue-event')