// console.log("Hello, VUE")


const app = Vue.createApp(
    {
        // data function can be called here
        // template:'<h1>Hello World</h1>'

        data() {
            return {
                // multiple variables can be used but should only be accessed in the Vue App.
                showContent: false,
                url: 'https://tanacom.io',
                title: 'Intro to VUE JS',
                sukulu: 'KNUST',
                age: 100,
                x: 0,
                y: 0,
                books: [
                    { name: 'Anthony', country: 'UK', img: 'assets/logo.png', isFav: true },
                    { name: 'Clement', country: 'Ghana', img: 'assets/logo.png', isFav: false },
                    { name: 'Theodore', country: 'Korea', img: 'assets/logo.png', isFav: true },
                    { name: 'Felix', country: 'Ch', img: 'assets/logo.png', isFav: false },

                ],
            }
        },
        methods: {

            changeTitle() {
                console.log('You clicked me')

                this.title = 'Title is called in VUE'
            },

            changeTitleArg(title) {

                this.title = title
            },

            toggleShowContent() {
                this.showContent = !this.showContent
            },

            handleEvent(e) {
                console.log(e, e.type)
            },

            handleMouseMove(e) {
                this.x = e.offsetX
                this.y = e.offsetY

            },

            toggleFav(book) {
                book.isFav = !book.isFav
            },



        },
        computed: {
            filteredBook(){
                return this.books.filter((book) => book.isFav)
            }
        }


    }
)


app.mount('#con')