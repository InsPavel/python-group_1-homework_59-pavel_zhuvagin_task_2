import React, {Component, Fragment} from 'react';
import ChuckNorris from "../../components/ChuckNorris/ChuckNorris";

class Jokes extends Component {
    state = {
        jokes: []
    };

    componentDidMount() {
        const P_URL = 'https://api.chucknorris.io/jokes/random';
        fetch(P_URL).then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong with network request');
        }).then(jokes => {
          const updatedJokes = jokes.value;
            this.setState({jokes: updatedJokes});
        }).catch(error => {
          console.log(error);
        })
    }

    render(){
        return (
            <Fragment>
                <div>
                    <ChuckNorris
                        text={this.state.jokes}
                    />
                </div>
            </Fragment>
        )
    }


}

export default Jokes;