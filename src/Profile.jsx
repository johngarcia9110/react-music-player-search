import React, { Component } from 'react';

class Profile extends Component {

    render(){
        let artist = {name : '', followers : { total : '' }, images : [ {url : ''} ], genres : [] };
        let relatedArtists = [];
        artist = this.props.artist !== null ? this.props.artist : artist;
        relatedArtists = this.props.relatedArtists !== null ? this.props.relatedArtists : relatedArtists;
        console.log(relatedArtists);
        return (
            <div className="col-sm-4">
                <div className="profile">
                    <img className="profile-picture"src={artist.images[0]['url']} alt='Artist Profile'/>
                    <div className="profile-name"><h2>{artist.name}</h2></div>
                    <div className="profile-followers">{artist.followers.total} followers</div>
                    <div className="profile-genres">
                        <strong>Genres: </strong> <br/>
                        {
                            artist.genres.map((genre, index) =>{
                                genre = genre !== artist.genres[artist.genres.length -1] ? ` ${genre},` : ` ${genre}`
                                return(
                                    <span key={index}>{genre}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="related-artists">
                    <h4>Related Artists: </h4>
                    <ul className="related-artists-list">
                    {
                        relatedArtists.map((artist, index) =>{
                            return(
                                <li key={index}>{artist.name}</li>
                            )
                        })
                    }
                    </ul>
                </div>    
            </div>
        )
    }
}

export default Profile;