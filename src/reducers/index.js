import { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        {title: 'Check it out', duration: '4.05'},
        {title: 'Let\'s do it', duration: '5.25'},
        {title: 'I will be there ', duration: '3.56'},
        {title: 'Who\'s that', duration: '8.22'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    switch(action.type) {
        case 'SONG_SELECTED':
            return action.payload;
        
        default: return selectedSong;
    }
}

export default combineReducers( {
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
