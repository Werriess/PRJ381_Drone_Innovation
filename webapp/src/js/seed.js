import { faker } from "@faker-js/faker";
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


async function seedDatabase() {
  await seedUsers();
}

export default seedDatabase;