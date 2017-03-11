import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            query : '',
            artist : null,
            tracks : []
        }
    }

    search(){
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

        console.log('FETCH_URL',FETCH_URL);
        fetch(FETCH_URL,{
            method : 'GET'
        }).then(response => response.json())
        .then(json => {
            const artist = json.artists.items[0];
            this.setState({artist});

            FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
            fetch(FETCH_URL, {
                method : 'GET'
            })
            .then(response => response.json())
            .then(json => {
                const { tracks } = json;
                this.setState({tracks});
            })
        })
    }

    render(){
        return(
            <div className="app">
                <div className="row header">
                    <div className="col-sm-12 col-md-6">
                        <div className="title">Spotify Music Search</div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" 
                                placeholder="Enter Artist Name"
                                value={this.state.query}
                                onChange={event => this.setState({query : event.target.value })}
                                onKeyPress={event => {if (event.key === 'Enter') { this.search(); }}}
                                />
                                <InputGroup.Addon onClick={() => this.search()}>
                                    <Glyphicon glyph="search"> <span className="search-text">Search</span></Glyphicon>
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.artist !== null 
                    ? <div> 
                            <Profile artist={this.state.artist}/>
                            <div className="song-gallery col-sm-8">
                                <Gallery tracks={this.state.tracks}/>
                            </div>
                        </div>
                        : <div></div>
                    }
                </div>
            </div>

        )
    }
}

export default App;