import { connect } from "mongoose";
import chalk from "chalk";

export const dbConnection = async () => {
  try {
    const con = await connect(process.env.MONGO_URI);

    console.log(chalk.bgCyanBright.bold("DB Connection Successful"));
    console.log(chalk.bgCyanBright.bold("DB Host:", con?.connection?.host));
    console.log(chalk.bgCyanBright.bold("DB Name:", con?.connection?.name));
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
    process.exit(0);
  }
};
