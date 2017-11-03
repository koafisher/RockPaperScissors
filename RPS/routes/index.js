var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var rps = [
  {
    name: 'rock',
    avatarUrl: 'https://png.icons8.com/fist/p1em/1600'
  },
  {
    name: 'paper',
    avatarUrl: 'https://cdn2.iconfinder.com/data/icons/hawcons-gesture-stroke/32/icon_3_high_five-512.png'
  },
  {
    name: 'scissors',
    avatarUrl: 'https://maxcdn.icons8.com/Share/icon/p1em/Hands//hand_scissors1600.png'
  }
  {
    name: 'fistbump',
    avatarUrl: 'https://i.pinimg.com/736x/08/15/30/0815301a7d7f908cfa45778278db7bd8--logo-ideas.jpg'
  },
  {
    name: 'scissors',
    avatarUrl: 'https://maxcdn.icons8.com/Share/icon/p1em/Hands//hand_scissors1600.png'
  },
  {
    name: 'scissors',
    avatarUrl: 'https://maxcdn.icons8.com/Share/icon/p1em/Hands//hand_scissors1600.png'
  }
];

router.get('/rps',function(req, res, next) {
  res.send(rps);
});

module.exports = router;
