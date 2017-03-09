import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component{
    render(){
        return(
            <div className="app">
                <div className="title">Spotify Music Search</div>
                <FormGroup>
                    <FormControl type="text" 
                    placeholder="Enter Artist Name"
                    />
                    <InputGroup.Addon>
                        <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>
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