function toggleMusic(){
    var music = document.getElementById('music')
    var $music_icon = $('.music-icon')
    if(music.paused){
        music.play()
        $music_icon.css('animation-play-state','running')
    }else{
        music.pause()
        $music_icon.css('animation-play-state','paused')
    }
}