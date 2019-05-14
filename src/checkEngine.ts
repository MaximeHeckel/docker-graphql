import chalk from "chalk";
import request from "superagent";

const checkEngine = baseURL => {
  return new Promise((resolve, reject) => {
    request
      .get(`${baseURL}/version`)
      .then(res => {
        const { body } = res;
        console.info(chalk.green(`Docker Engine Detected.`));
        console.info(`\n`);
        console.info(`Version: ${chalk.blue(body.Version)}`);
        console.info(`API Version: ${chalk.blue(body.Version)}`);
        console.info(`GitCommit:: ${chalk.blue(body.Version)}`);
        console.info(`\n`);
        resolve();
      })
      .catch(() => {
        console.info(chalk.red("Error: Docker Engine is not running."));
        console.info(`\n`);
        console.info(
          chalk.white(
            "Please start Docker on your machine or use a valid value for the BASE_URL environment variable."
          )
        );
        console.info(`\n`);
        reject();
      });
  });
};

export default checkEngine;
