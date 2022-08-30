const db = require("./connection");
const { User, Event } = require("../models");
const eventsSeeds = require('./eventsSeeds.json');
const userSeeds = require('./userSeeds.json')


const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomFriend = (users, {_id}) => {
  const newFriend = users[genRandomIndex(users)];
  if (newFriend._id !== _id) {
    return newFriend
  } 
  return getRandomFriend(users, {_id})
};


db.once("open", async () => {
  try {


  await User.deleteMany({});
  await Event.deleteMany({});

  const users = await User.create(userSeeds);
  
  users.forEach(async (user) => {
    let friend = getRandomFriend(users, user);
    await User.findOneAndUpdate({
      _id: user._id
    }, {
      $addToSet: {
        friends: friend._id,
      },
    })
  });




  for (let i = 0; i < eventsSeeds.length; i++) {
    const { _id, eventAuthor } = await Event.create(eventsSeeds[i]);
    const user = await User.findOneAndUpdate(
      { username: eventAuthor },
      {
        $addToSet: {
          events: _id,
        },
      }
    );
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}

  

  console.log("users and events seeded");

  process.exit(0);
});
