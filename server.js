const { default: mongoose } = require("mongoose");
const app = require("./src/app");
const config = require("./src/config");

async function main() {
  try {
    await mongoose.connect(config.mongodbUrl);
    console.log("Connected to MongoDB");

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
