import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            query : ''
        }
    }

    search(){
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        console.log('FETCH_URL',FETCH_URL);
    }

    render(){
        return(
            <div className="app">
                <div className="title">Spotify Music Search</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" 
                        placeholder="Enter Artist Name"
                        value={this.state.query}
                        onChange={event => this.setState({query : event.target.value })}
                        onKeyPress={event => {if (event.key === 'Enter') { this.search(); }}}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="artist-profile">
                    <div>Artist Name</div>
                    <div>Artist Picture</div>
                </div>
                <div className="song-gallery">
                    Song Gallery
                </div>
            </div>

        )
    }
}

export default App;