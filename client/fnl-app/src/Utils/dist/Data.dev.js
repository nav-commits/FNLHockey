"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fnlGoalieSchedule = exports.scheduleFNLHockey = exports.stories = exports.tabs = exports.monthNames = exports.fields = exports.weeks = exports.fnlPlayers = void 0;
var fnlPlayers = [{
  id: 1,
  name: 'Nav Dhamrait',
  team: ['White'],
  age: 29,
  shootHand: 'Left',
  username: 'navdhamrait',
  imageUrl: 'https://media.licdn.com/dms/image/C4D03AQEQSPPTVT6-Ow/profile-displayphoto-shrink_800_800/0/1519322311787?e=2147483647&v=beta&t=YRq4ElvYhYH4kkpoVq30aGJDYlOHMqU60xHjDXHwdY0'
}, {
  id: 2,
  name: 'Gurveer Gill',
  team: ['White'],
  age: 29,
  shootHand: 'Left',
  username: 'gurveergill',
  imageUrl: 'https://scfamilylaw.ca/wp-content/uploads/2020/11/Gurveer-Gill-Articling-Student.jpg'
}, {
  id: 3,
  name: 'Tony Sidhu',
  team: ['white'],
  age: 40,
  username: 'tonysidhu',
  shootHand: 'Left',
  imageUrl: 'https://media.licdn.com/dms/image/D5603AQHuTEmSfLu6Iw/profile-displayphoto-shrink_800_800/0/1691450119277?e=2147483647&v=beta&t=frrt7pp1lff8xdsOgIbnsVJtcNw7Q90wOl8rlMD-nHQ'
}, {
  id: 4,
  name: 'Andy Badwal',
  team: ['white'],
  username: 'andybadwal',
  age: 43,
  shootHand: 'Right',
  imageUrl: 'https://media.licdn.com/dms/image/C5603AQGXmwY0e87s-Q/profile-displayphoto-shrink_800_800/0/1539366407860?e=2147483647&v=beta&t=AlyMowZ54cUyHp1HHGrTnwy7Prj4MX4uAR9Dh5V7MJ0'
}, {
  id: 5,
  name: 'Suhky Dhami',
  team: ['white', 'black'],
  age: 31,
  username: 'sukh',
  shootHand: 'Right',
  imageUrl: 'https://media.licdn.com/dms/image/C4E03AQG3HDp9V7bijQ/profile-displayphoto-shrink_800_800/0/1623297486937?e=2147483647&v=beta&t=a9AlrMuJt85Qa978dmwFO_fg6ho0G5UIopAEzvAVK7Q'
}, {
  id: 6,
  name: 'Varinder Gill',
  team: ['white', 'black'],
  username: 'varinder',
  age: 31,
  shootHand: 'Right',
  imageUrl: 'https://media.licdn.com/dms/image/C4D03AQFmsAQjtJ7_AA/profile-displayphoto-shrink_800_800/0/1516929898209?e=2147483647&v=beta&t=LjQzLAtflswOqSuw2KayOYHIfiGLHxkFii-BScmB9IA'
}, {
  id: 7,
  name: 'Kenny G',
  team: ['white', 'black'],
  username: 'kennyg',
  age: 35,
  shootHand: 'Right',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/TomKenny.jpg/1200px-TomKenny.jpg'
}, {
  id: 8,
  name: 'KP',
  team: ['white', 'black'],
  age: 31,
  username: 'kp',
  shootHand: 'Right',
  imageUrl: 'https://smartcdn.gprod.postmedia.digital/v1/dynamic_resize/sws_path/suns-prod-images/1297249920110_ORIGINAL.jpg?quality=80&size=650x'
}, {
  id: 9,
  name: 'Kali Singh',
  team: ['white', 'black'],
  age: 31,
  username: 'kali',
  shootHand: 'Right',
  imageUrl: 'https://media.licdn.com/dms/image/C4D03AQHWZOL7_QaDGg/profile-displayphoto-shrink_800_800/0/1590613479409?e=2147483647&v=beta&t=2QTCsJ-oi6Vd7a45ulM2b4iy2rghYiKjem9BePjR7B4'
}, {
  id: 10,
  name: 'Sherman Heer',
  team: ['white', 'black'],
  age: 38,
  username: 'sherman',
  shootHand: 'Right',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Red-ink-alexie-matsunaga-2016-3507_%2827727650011%29_%28cropped%29.jpg'
}, {
  id: 11,
  name: 'Harry Jangi',
  team: ['white', 'black'],
  age: 40,
  username: 'harry',
  shootHand: 'left',
  imageUrl: 'https://media.licdn.com/dms/image/C4E03AQF1RBoiKWO3LQ/profile-displayphoto-shrink_800_800/0/1611611879603?e=2147483647&v=beta&t=kcoumdBdEBlcgbmwUZErqCNcCZO-MJ3LJ3dPPnrPpmQ'
}, {
  id: 12,
  name: 'Deep Grewal',
  team: ['white', 'black'],
  age: 40,
  username: 'deep',
  shootHand: 'left',
  imageUrl: 'https://pbs.twimg.com/profile_images/1642711347447177216/xmGhPdp5_400x400.jpg'
}, {
  id: 13,
  name: 'Sundeep Gupta',
  team: ['white', 'black'],
  age: 40,
  username: 'sundeep',
  shootHand: 'left',
  imageUrl: 'https://media.licdn.com/dms/image/C4E03AQG0VGgg1aBE3g/profile-displayphoto-shrink_800_800/0/1560816335630?e=2147483647&v=beta&t=VA3id5QJTXK7t0NqeAE1qZ0o_Gaqsu9hVUN5AXX-4u0'
}, {
  id: 14,
  name: 'Jessie',
  team: ['white', 'black'],
  age: 40,
  username: 'jessie',
  shootHand: 'left',
  imageUrl: 'https://deadline.com/wp-content/uploads/2019/07/cameron-boyce.jpg?w=1000'
}, {
  id: 15,
  name: 'AP Sharma',
  team: ['white', 'black'],
  age: 40,
  username: 'ap',
  shootHand: 'left',
  imageUrl: 'https://www.qatar-tribune.com/uploads/imported_images/data/20211003/images/575697.jpg'
}, {
  id: 16,
  name: 'Kip',
  team: ['white', 'black'],
  age: 40,
  username: 'kip',
  shootHand: 'left',
  imageUrl: 'https://www.qatar-tribune.com/uploads/imported_images/data/20211003/images/575697.jpg'
}];
exports.fnlPlayers = fnlPlayers;
var weeks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
exports.weeks = weeks;
var fields = [{
  name: 'name',
  type: 'text',
  placeholder: 'Name'
}, {
  name: 'age',
  type: 'number',
  placeholder: 'Age'
}, {
  name: 'position',
  type: 'text',
  placeholder: 'Position'
}, {
  name: 'username',
  type: 'text',
  placeholder: 'Username'
}, {
  name: 'shootHand',
  type: 'text',
  placeholder: 'Shoot Hand'
}, {
  name: 'number',
  type: 'text',
  placeholder: 'Number'
}];
exports.fields = fields;
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
exports.monthNames = monthNames;
var tabs = [{
  label: 'Center'
}, {
  label: 'Left Wing'
}, {
  label: 'Right Wing'
}, {
  label: 'Defense'
}, {
  label: 'Goalie'
}];
exports.tabs = tabs;
var stories = ['Sherman Heer clinches top scorer title for last season', 'FNL season set to kick off on April 12th, 2024', 'Player training camps begin, rookies show promise', "Expansion team 'Ice Breakers' announced for next season", 'Major rule changes expected to speed up the game', 'Defensive strategies evolve as coaches adapt to new offenses', 'Community outreach programs expand to support youth hockey', 'Technology in sports: Referee cams introduced for transparency', 'Health and safety protocols updated for player wellbeing', 'End-of-season awards predictions: MVP, Best Goalie, Most Improved'];
exports.stories = stories;
var scheduleFNLHockey = [{
  date: '2024-04-12',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-04-19',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-04-26',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-05-03',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-05-10',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-05-17',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-05-24',
  time: '8:30 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-05-31',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-06-07',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-06-14',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-06-28',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-07-12',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-07-19',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-08-09',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-08-16',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-08-23',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-08-30',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-09-06',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-09-13',
  time: '8:30 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-09-20',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-09-27',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-10-04',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-10-11',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-10-18',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-10-25',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}, {
  date: '2024-11-01',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  teams: {
    home: 'Team White',
    away: 'Team Black'
  }
}];
exports.scheduleFNLHockey = scheduleFNLHockey;
var fnlGoalieSchedule = [{
  date: '2024-04-12',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'KP'
  }
}, {
  date: '2024-04-19',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'Cali'
  }
}, {
  date: '2024-04-26',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'KP',
    goalie2: 'Cali'
  }
}, {
  date: '2024-05-03',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'KP'
  }
}, {
  date: '2024-05-10',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'Cali'
  }
}, {
  date: '2024-05-17',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'KP',
    goalie2: 'Cali'
  }
}, {
  date: '2024-05-24',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'KP'
  }
}, {
  date: '2024-05-31',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'Cali'
  }
}, {
  date: '2024-06-07',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'KP',
    goalie2: 'Cali'
  }
}, {
  date: '2024-06-14',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'KP'
  }
}, {
  date: '2024-06-28',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'KP',
    goalie2: 'Cali'
  }
}, {
  date: '2024-07-12',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'Cali'
  }
}, {
  date: '2024-07-19',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'KP',
    goalie2: 'Cali'
  }
}, {
  date: '2024-08-06',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'Cali'
  }
}, {
  date: '2024-08-23',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'KP',
    goalie2: 'Cali'
  }
}, {
  date: '2024-08-30',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'KP'
  }
}, {
  date: '2024-09-06',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'Cali'
  }
}, {
  date: '2024-09-13',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'KP',
    goalie2: 'Cali'
  }
}, {
  date: '2024-09-20',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'KP'
  }
}, {
  date: '2024-09-27',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'Cali'
  }
}, {
  date: '2024-10-04',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'KP',
    goalie2: 'Cali'
  }
}, {
  date: '2024-10-11',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'KP'
  }
}, {
  date: '2024-10-18',
  time: '8:00 PM',
  arena: 'Gore Meadows',
  goalies: {
    goalie1: 'Kenny',
    goalie2: 'Cali'
  }
}];
exports.fnlGoalieSchedule = fnlGoalieSchedule;