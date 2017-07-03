const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});


const PollController = require('./controllers/polls');

module.exports = function(app) {

    app.get('/', function(req, res) {
      res.send('Serving Vote App');
    })

    app.get('/polls/', PollController.listallpolls);

    app.post('/signin', requireSignIn, Authentication.signin);

    app.post('/signup', Authentication.signup);

    app.post('/createpoll', requireAuth, PollController.createpoll);

    app.get('/mypolls', requireAuth, PollController.mypolls);

    app.get('/polls/:id', PollController.showpoll);

    app.delete('/removepoll/:id', requireAuth, PollController.removepoll);

    app.post('/polls/:id/addoption', requireAuth, PollController.addoption);

    app.post('/polls/:id/vote', PollController.vote);

    app.post('/polls/:id/voteauth', requireAuth, PollController.vote);
}
