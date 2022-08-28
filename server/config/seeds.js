const db = require("./connection");
const { User, Event } = require("../models");
const eventsSeeds = require('./eventsSeeds.json');
const userSeeds = require('./userSeeds.json')



db.once("open", async () => {
  try {

// clear out DB before creating 
// npm run seed
  await User.deleteMany({});
  await Event.deleteMany({});

  await User.create(userSeeds);

  // for (let i = 0; i < userSeeds.length; i++) {
  //   const { _id, email } = await User.create(userSeeds[i]);
  //   const user = await User.findOneAndUpdate(
  //     { friends: email },
  //     {
  //       $addToSet: {
  //         friends: _id,
  //       },
  //     }
  //   );
  // }




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
