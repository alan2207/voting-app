const Poll = require('../models/Poll');
const helpers = require('../helpers')



// creating new poll
exports.createpoll = function(req, res, next) {
  const poll = new Poll({
    title: req.body.title,
    author: req.user._id,
    options: helpers.extractOptions(req.body.options)
  });


  poll.save()
    .then(() => {
      res.send(poll);
    })
    .catch((err) => res.send(err));
}

// listing all polls that exist
exports.listallpolls = function(req, res, next) {
  console.log(req.user)
  Poll.find({}).sort({"_id":1})
    .then((polls) => res.send(polls))
    .catch((err) => res.send(err))
}


// display poll individually
exports.showpoll = function(req, res, next) {
  Poll.findById(req.params.id)
    .then((poll) => res.send(poll))
    .catch((err) => res.send(err))
}


// handle voting
exports.vote = function(req, res, next) {
  var ip = req.ip;
  Poll.findById(req.params.id)
    .then((poll) => {
      // check if the user has already voted on the poll
      if(poll.voters.indexOf(req.user && req.user._id.toString() || ip) === -1) {
        Poll.findByIdAndUpdate(poll._id, {options: helpers.update(poll.options, req.body.option), voters: helpers.updateVoters(poll.voters, req.user && req.user._id.toString() || ip)})
          .then(() => res.send({voted: true}))
          .catch((err) => res.send(err))
      } else {
        res.send({voted: false})
      }
    })
}


// finding polls of the authenticated user
exports.mypolls = function(req, res, next) {
  Poll.find({author: req.user._id}).sort({"_id":1})
    .then(polls => {
      res.send(polls);
    })
    .catch(err => res.send(err));
}

// deleting a poll
exports.removepoll = function(req, res, next) {
  Poll.findById(req.params.id)
    .then((poll) => {
      // allow only author to delete poll
      if(poll.author.toString() === req.user._id.toString()) {
        Poll.findByIdAndRemove(poll._id)
          .then(() => res.send({message: "poll deleted"}))
          .catch(err => res.send(err))
      } else {
        res.send({message: "no permission to delete this poll"})
      }
    })
    .catch(() => res.send({message: "poll  not found"}))
}


// add option to the poll
exports.addoption = function(req, res, next) {
  var option = {
    option: req.body.option,
    value: 0
  };
  // TODO: rewrite it
  //Poll.findByIdAndUpdate(req.params.id, {$push: {options: option}})
  Poll.findByIdAndUpdate(req.params.id)
    .then((poll) => {
      const options = helpers.formatOptions(poll.options);
      // alow adding only if the option does not exist yet
      if(!helpers.isInArray(options, req.body.option)) {
        Poll.update({_id: poll._id}, {$push: {options: option}})
          .then(() => res.send(option))

      } else {
        res.send({failed: true});
      }
    })
    .catch(() => res.send({message: "error adding option"}))
}
