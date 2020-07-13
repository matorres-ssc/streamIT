const router = require('express').Router();
const {wrapAsync} = require('../../utils/util');

const {
  signUp,
  signIn,
  getUserProfile,
  getUserKeys,
  getSubFollow,
} = require('../controllers/user_controllers');

router.get('/test',
    wrapAsync(test));

router.post('/user/signup',
    wrapAsync(signUp));

router.post('/user/signin',
    wrapAsync(signIn));

router.get('/user/profile',
    wrapAsync(getUserProfile));

router.get('/user/keys',
    wrapAsync(getUserKeys));

// update profile route

// update followers route

// update subscriber route

// router.get('/user/profile/:category',
//     wrapAsync(getSubFollow));

module.exports = router;

async function test(req, res) {
  res.send('Testing123 Works! :D');
}