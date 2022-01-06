const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
            counter3: 0,
            name: '',
            friendName: 'Jordy',
            confirmedFriendName: '',
            twoWayText: '',
            counterWatcher: 0
        }
    },
    watch: {
        counterWatcher(value) {
            if (value > 50) {
                this.counterWatcher = 0
            }
        }
    },
    computed: {
        yourNameAndFriend() {
            return this.name + ' ' + this.confirmedFriendName
        }
    },
    methods: {
        counterWatcherAdd(params) {
            this.counterWatcher += params
        },
        friendInputChange(e) {
            this.friendName = e.target.value;
        },
        submitFriendName() {
            this.confirmedFriendName = this.friendName
        },
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