import React from 'react';

// component that displays information about the app
export default function(props) {
    return (
        <div className="container">
            <h2 className="center-align">About</h2>

            <p>This is a fullstack web application, built using the MERN stack. It was made as a part of FreeCodeCamp's Backend Curriculum.</p>
            <p>The frontend and the backend are completely separated, which makes it easy to integrate the app with other frontends.</p>
            <h3>User Stories:</h3>
            <ul>
                <li>As an authenticated user, I can keep my polls and come back later to access them.</li>
                <li>As an authenticated user, I can share my polls with my friends on Twitter.</li>
                <li>As an authenticated user, I can see the aggregate results of my polls.</li>
                <li>As an authenticated user, I can delete polls that I created and don't want anymore.</li>
                <li>As an authenticated user, I can create a poll with any number of possible items that should be separated with comma.</li>
                <li>As an unauthenticated or authenticated user, I can see and vote on everyone's polls.</li>
                <li> As an unauthenticated or authenticated user, I can see the results of polls in chart form.</li>
                <li>As an authenticated user, if I don't like the options on a poll, I can create a new option.</li>
                <li>As an authenticated user, I can vote only once per poll. It is limited by user's account.</li>
                <li>As an unauthenticated user, I can vote only once per poll. It is limited by clients IP adress.</li>
            </ul>


            <h3>Technologies Used:</h3>
            <div className="row">
                <div className="col s6">
                    <h4>Frontend:</h4>
                    <ul>
                        <li>Materialize</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>React-Router V4</li>
                        <li>Redux-Thunk</li>
                        <li>Redux-Form</li>
                        <li>React-Google-Charts</li>
                        <li>Axios</li>
                        <li>Webpack</li>
                        <li>Babel</li>
                    </ul>
                </div>
                
                <div className="col s6">
                    <h4>Backend:</h4>
                    <ul>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Passport with JWT authentication</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}