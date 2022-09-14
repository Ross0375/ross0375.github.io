

const app = Vue.createApp({
    data: function () {
        return {
            songs: songs,
            input: "",
            selectedSongs: [],
            searchType: ["Title", "Composer"],
            selection: "Title",
            keys: [],
            keyFilter: "None",
            dailySong: {
                date: null,
                todaysSong: []
            }
        }
    },
    created: function() {
        const songs = localStorage.getItem('songs')
        if (songs) {
            this.songs = JSON.parse(songs)
        }
        const selectedSongs = localStorage.getItem('selectedSongs')
        if (selectedSongs) {
            this.selectedSongs = JSON.parse(selectedSongs)
        }
        const dailySong = localStorage.getItem('dailySong')
        if (dailySong) {
            this.dailySong = JSON.parse(dailySong)
        }

        const d = new Date().getDay()
        console.log(d);
            if (this.dailySong.date == null) {
                this.dailySong.date = new Date().getDay()
                const selectedSong = this.songs[Math.floor(Math.random()* this.songs.length)]
                this.dailySong.todaysSong = selectedSong
            } else if (this.dailySong.date != d){
                const selectedSong = this.songs[Math.floor(Math.random()* this.songs.length)]
                this.dailySong.todaysSong = selectedSong
                this.dailySong.date = new Date().getDay()
            }

        let unique = []
            this.songs.forEach(song => {
                if (!unique.includes(song.Key)){
                    unique.push(song.Key)
                }
            }
            )
            return this.keys = unique
    },
    computed: {
        filteredSongs: function() {
            if(this.keyFilter != "None"){
                if (this.selection === "Title"){
                    return this.songs.filter(song =>
                        song.Title.toLowerCase().includes(this.input.toLowerCase()) && song.Key === this.keyFilter
                      );
                }
                if (this.selection === "Composer"){
                    return this.songs.filter(song =>
                        song.Composer.toLowerCase().includes(this.input.toLowerCase()) && song.Key === this.keyFilter
                    );
                }
            } 
            if (this.selection === "Title"){
                return this.songs.filter(song =>
                    song.Title.toLowerCase().includes(this.input.toLowerCase())
                  );
            }
            if (this.selection === "Composer"){
                return this.songs.filter(song =>
                    song.Composer.toLowerCase().includes(this.input.toLowerCase())
                );
            }
            
        },
        
    },
    methods: {
        addSong(selectedPage, index) {
            const selectedSong = this.songs.find(song => song.PageNumber === selectedPage)
            selectedSong.Selected = true
            this.selectedSongs.push(selectedSong)
            console.log(index)
        },
        delSong(selectedPage, index) {
            console.log(index)
            const selectedSong = this.songs.find(song => song.PageNumber === selectedPage)
            selectedSong.Selected = false
            this.selectedSongs.splice(index, 1)
        },
        addRandom() {
            const selectedSong = this.songs[Math.floor(Math.random()* this.songs.length)]
            if (selectedSong.Selected == false){
                selectedSong.Selected = true
                this.selectedSongs.push(selectedSong)
            } else {
                this.addRandom()
            }
        },
        clearSongs() {
            console.log(this.selectedSongs.length)
            for (let i = 0; i < this.selectedSongs.length; i++){
                console.log('sasd')
                const selectedSong = this.songs.find(song => song.PageNumber === this.selectedSongs[i].PageNumber)
                selectedSong.Selected = false
            }
            this.selectedSongs.splice(0, this.selectedSongs.length)
            
        },
        
        mounted() {  
            
        },
    },
    watch: {
        songs: {
            deep: true,
            handler: function (songs) {
                localStorage.setItem('songs', JSON.stringify(songs))
            }
        },
        selectedSongs: {
            deep: true,
            handler: function (selectedSongs) {
                localStorage.setItem('selectedSongs', JSON.stringify(selectedSongs))
            }
        },
        dailySong: {
            deep: true,
            handler: function (dailySong) {
                localStorage.setItem('dailySong', JSON.stringify(dailySong))
            }
        }
    }
})

const vm = app.mount('#app')