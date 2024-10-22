import { faker } from "@faker-js/faker";
import Stats from "../../models/stats.js";
import Register from "../../models/register.js";

async function generateUsers(num) {
  const usersArr = [];

  for (let i = 0; i < num; i++) {
    usersArr.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      emailAddress: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
    });
  }

  return usersArr;
}

async function seedUsers() {
  try {
    const users = await generateUsers(50);
    await Register.insertMany(users);
    console.log("Success");
  } catch (error) {
    console.error("Error inserting users:", error);
  }
}

function generateStats(nums, userId) {
  const statsArr = [];

  for (let i = 0; i < nums; i++) {
    const gas = faker.lorem.word();
    const percentage = faker.number.int();

    statsArr.push({
      userId,
      gas,
      percentage,
    });
  }
  return statsArr;
}

async function seedStats() {
  try {
    const user = await Register.findOne();
    if (!user) {
      console.error("No users found in the Register model.");
      return;
    }

    const stats = generateStats(50, user._id);
    await Stats.insertMany(stats);
    console.log("Success");
  } catch (error) {
    console.error("Error inserting stats:", error);
  }
}

async function seedDatabase() {
  await seedUsers();
  await seedStats();
}

export default seedDatabase;