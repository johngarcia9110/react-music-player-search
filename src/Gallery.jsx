import React, { Component } from 'react';

class Gallery extends Component {
    playAudio(previewUrl){
        let audio = new Audio(previewUrl);
        audio.play();
    }
    render(){
        const { tracks } = this.props;

        return(
            <div className="gallery-wrapper">
                <h3>Top tracks:</h3>
                {
                    tracks.map((track, index) => {
                        console.log('track', track);
                        const trackImage = track.album.images[0].url;
                        return(
                            <div key={index} 
                            className="track col-md-4"
                            onClick={()=> this.playAudio(track.preview_url)}
                            >
                                <img src={trackImage} className="track-image" alt="track"/>
                                <p className="track-title">{track.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;