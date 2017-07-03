const passport = require('passport');
const User = require('../models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const config = require('../config')

// strategy for signing in
const localOptions = {usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    User.findOne({email: email}, function(err, user) {
        if(err) {
            return done(err);
        }

        if(!user) {
            return done(null, false);
        }

        user.comparePasswords(password, function(err, isMatch) {
            if(err) {
                return done(err);
            }

            if(!isMatch) {
                return done(null, false);
            }

            return done(null, user);
        });
    });
});


// strategy for signing up

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.sub, function(err, user) {
        if(err) {
            return done(err, false);
        }

        if(user) {
             done(null, user);
        } else {
            done(null, false)
        }
    })
});


// make sure passport uses these strategies
passport.use(jwtLogin);
passport.use(localLogin);
