import React from 'react';

// button that handles sharing poll on Twitter
export default class ShareButton extends React.Component {
    constructor(props) {
        super(props)
    }

    handleShare() {
        window.open("https://twitter.com/intent/tweet?text=Check out this awesome poll: " + this.props.title + " " + window.location.href);
    }


    render() {
        return (
             <div className="row">
                <button onClick={this.handleShare.bind(this)} className="blue darken-3 white-text waves-effect waves-teal btn-flat">Share</button>
            </div>  
        )
    }
}
