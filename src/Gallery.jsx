import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            playingUrl : '',
            audio : null,
            playing : false
        }
    }
    playAudio(previewUrl){
        let audio = new Audio(previewUrl);
        if(!this.state.playing){
            audio.play();
            this.setState({playingUrl : previewUrl, audio, playing : true});
        }else{
            if(this.state.playingUrl === previewUrl){
                this.state.audio.pause();
                this.setState({playing : false});
            }else{
                this.state.audio.pause();
                audio.play();
                this.setState({playingUrl : previewUrl, audio, playing : true});
            }
        }
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
                                <div className="track-play">
                                    <div className="track-play-inner">
                                        {
                                            this.state.playingUrl === track.preview_url 
                                            ? <span className="track-pause-icon">| |</span>
                                            : <span className="track-play-icon">&#9654;</span>
                                        }
                                    </div>
                                </div>
                                <p className="track-title">{
                                    track.name.length > 10 ? track.name.substring(0,10) + '..' :
                                    track.name
                                    
                                    }</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;