var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var rps = [
  {
    name: 'Rock',
    avatarUrl: 'https://png.icons8.com/fist/p1em/1600'
  },
  {
    name: 'Paper',
    avatarUrl: 'http://www.iconarchive.com/download/i88180/icons8/ios7/Hands-Hand.ico'
  },
  {
    name: 'Scissors',
    avatarUrl: 'https://maxcdn.icons8.com/Share/icon/p1em/Hands//hand_scissors1600.png'
  }
  ];
  
var outcomes = [
  {
    name: 'fistbump',
    avatarUrl: 'https://i.pinimg.com/736x/08/15/30/0815301a7d7f908cfa45778278db7bd8--logo-ideas.jpg'
  },
  {
    name: 'scissorstie',
    avatarUrl: 'http://aceimpression.com/wp-content/uploads/2015/04/cuttingties.jpg'
  },
  {
    name: 'highfive',
    avatarUrl: 'https://hdwallsbox.com/wallpapers/m/33/sharks-high-five-gorillas-explosion-gorila-m32973.jpg'
  },
  {
    name: 'win',
    avatarUrl: 'https://media.consumeraffairs.com/files/news/winner.jpg'
  },
  {
    name: 'lose',
    avatarUrl: 'https://www.choicenotchance.org.nz/files/you-lose-banner-sm-%40x2.png'
  }
];

router.get('/rps',function(req, res, next) {
  res.send(rps);
});

//var WLT = ['Win', 'Lose', 'Tie'];

var rand = 0;

router.get('/rock',function(req, res, next) {
  rand = outcomes[Math.floor(Math.random() * 3)];
  res.send(rand);
});

router.get('/paper',function(req, res, next) {
  rand = outcomes[Math.floor(Math.random() * 3)];
  res.send(rand);
});

router.get('/scissor',function(req, res, next) {
  rand = outcomes[Math.floor(Math.random() * 3)];
  res.send(rand);
});

module.exports = router;
