import React, {Component} from 'react';
import './ChuckNorris.css';

class ChuckNorris extends Component {
    render() {
        return (
            <article className="ChuckNorris">
                <div className="Info">
                    <div className="value">{this.props.text}</div>
                </div>
            </article>
        );
    }
}

export default ChuckNorris;