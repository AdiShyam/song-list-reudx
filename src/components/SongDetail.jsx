import React from "react";
import { connect } from "react-redux";

// class SongDetail extends React.Component {
//   render() {
//     return (
//       <div>
//         <div>Song Name:</div>
//         <div>Song Name:</div>
//         {/* <div
//           onClick={() => {
//             // selectedSongReducer(this.props.song, { type: "SONG_SELECTED" });
//             this.setState({selecteSong : this.props.song});
//             console.log("selected song is ", this.props.song);
//           }}
//         >
//           Select
//         </div> */}
//       </div>
//     );
//   }
// }

const SongDetail = ({ song }) => {
  console.log("the props of song detail", song);
  if (!song) return <div>select a song to display the contents </div>;
  return (
    <div>
      <h3> Details for:</h3>
      <div className="title">Title: {song.title}</div>
      <div>Duration is {song.duration} min</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

// const mapDispatchToProps = dispatch => ({
//   selecteSong: song => dispatch(SelectSong(song))
// });

export default connect(mapStateToProps)(SongDetail);
