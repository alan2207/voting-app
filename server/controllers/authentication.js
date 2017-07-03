const jwt = require('jwt-simple');
const User = require('../models/User');
const config = require('../config');

// create token for given user
function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

// signing in route callback
exports.signin = function(req, res, next) {
    res.send({token: tokenForUser(req.user)})
}


// callback for signing up route
exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).send({error: 'Email and password must be provided'});
    }

    User.findOne({email: email}, function(err, existingUser) {
        if(err) {
            return next(err);
        }

        if(existingUser) {
            return res.status(422).send({error: 'Email is aleready in use...'});
        }

        const user = new User({
            email: email,
            password: password
        });

        user.save(function(err) {
            if(err) {
                return next(err);
            }
            res.json({token: tokenForUser(user)});
        });
    });
}
