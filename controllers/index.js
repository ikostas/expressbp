'use strict';
module.exports = {
  homePage: (req, res, next) => {
    res.render('index', { title: 'Express bolierplate', user: req.session.user });
  }
}
