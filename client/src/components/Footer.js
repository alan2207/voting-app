import React from 'react';
import ReactDOM from 'react-dom';

// just the footer of the page
export default class Footer extends React.Component {

    render() {
        return (
            <footer id="footer" className="page-footer blue darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Voting App</h5>
                <p className="grey-text text-lighten-4">Voting App as a part of FCC Backend Curriculum</p>                
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/alan2207/voting-app" target="_blank">App Repository</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            <p className="left">© 2017</p>
            <p className="right">Created by: <a className="grey-text text-lighten-4" href="https://github.com/alan2207" target="_blank">Alan</a></p>
            </div>
          </div>
          </footer>
        )
    }
}

