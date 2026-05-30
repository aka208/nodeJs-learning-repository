const { MongoClient, ServerApiVersion } = require("mongodb");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Uy29TKVhvcT4PJqE;
const URL =
  "mongodb+srv://akashbtw_db_user:Uy29TKVhvcT4PJqE@cluster0.gcwleop.mongodb.net/";

// const client = new MongoClient(URL, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
//   autoSelectFamily: false, // Explicitly disable auto selection of IP family
// });
const client = new MongoClient(URL);
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");
  const data = {
    firstName: "Akshay",
    lastName: "Saini",
    city: "Delhi",
    phone: "1234567890",
  };
  const data2 = {
    firstName: "Amar",
    lastName: "Makhija",
    city: "Ujjain",
    phone: "2345678909",
  };

  // insert many data into collection
  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  // insert one data into collection
  const insertOneResult = await collection.insertOne(data2);
  console.log("Inserted one document =>", insertOneResult);

  // read data
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // update data
  const updateResult = await collection.updateOne(
    { firstName: "Akash" },
    { $set: { city: "New York" } },
  );
  console.log("Updated document =>", updateResult);

  // delete data
  const deleteResult = await collection.deleteOne({ firstName: "Amar" });
  console.log("Deleted document =>", deleteResult);

  // count documents
  const count = await collection.countDocuments({});
  console.log("Total documents in collection =>", count);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
