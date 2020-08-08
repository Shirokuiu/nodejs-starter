'use strict';

const chalk = require(`chalk`);
const fs = require(`fs`).promises;

const { ExitCode, MOCKS_FILE_NAME } = require(`../constants`);

const generateData = (count) =>
  Array(count)
    .fill({})
    .map(() => ({}));

module.exports = {
  name: `--generate`,
  async run() {
    try {
      const content = {};

      await fs.writeFile(MOCKS_FILE_NAME, content);
      console.log(chalk.green(`Operation success. File created.`));

      process.exit(ExitCode.success);
    } catch (err) {
      console.error(chalk.red(`Mock file generation failed`));
      console.error(chalk.red(err));

      process.exit(ExitCode.error);
    }
  },
};
