const app = Vue.createApp({
    data: function () {
        return {
            posts: posts
        }
    },
    methods: {
        wordCut: function (phrase) {
            let split = phrase.split(' ')
            if (split.length > 20){
                split.splice(20)
                split.push('...')
            }

            return split.join(' ')

        }
    }
})

const vm = app.mount('#app')