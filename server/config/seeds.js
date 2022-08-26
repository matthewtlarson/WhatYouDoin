const db = require("./connection");
const { User, Event } = require("../models");
const eventsSeeds = require('./eventsSeeds');



db.once("open", async () => {

// clear out DB before creating 
// npm run seed
  await User.deleteMany();
  await Event.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    username: "Pam1",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    username: "ElijahH",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  await Event.create({
    title: 'Event 1',
    description: "This is a test event",
    eventAuthor: "Pam1"
});


//   for (let i = 0; i < eventsSeeds.length; i++) {
//     const { _id, eventAuthor } = await Event.create(eventsSeeds[i]);
//     const user = await User.findOneAndUpdate(
//       { username: eventAuthor },
//       {
//         $addToSet: {
//           events: _id,
//         },
//       }
//     );
//   }
// } catch (err) {
//   console.error(err);
//   process.exit(1);
// }

  

  console.log("users and events seeded");

  process.exit();
});
