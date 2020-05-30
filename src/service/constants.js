'use strict';

const USER_ARGV_INDEX = 2;
const DEFAULT_COMMAND = `--help`;
const MOCKS_FILE_NAME = `mocks.json`;
const NOT_FOUND_MESSAGE = `Not found`;
const INTERNAL_SERVER_ERROR_MESSAGE = `INTERNAL_SERVER_ERROR`;
const INVALID_REQUEST_MESSAGE = `INVALID_REQUEST`;
const MAX_MONTH_RANGE = 3;
const ID_SIZE = 6;
const ExitCode = {
  success: 0,
  error: 1,
};
const DEFAULT_PORT = {
  API: 3000,
  CLIENT: 8080,
};
const VALID_TEMPLATE = Object.freeze({
  ARTICLES: {
    POST: {
      title: ``,
      fullText: ``,
      announce: ``,
      createdDate: ``,
      category: [],
    },
    PUT: {
      title: ``,
      announce: ``,
      fullText: ``,
      createdDate: ``,
      category: [],
    },
  },
  COMMENTS: {
    POST: {
      text: ``,
    },
  },
  SEARCH: {
    GET: {
      query: ``,
    },
  },
});
const VALIDATOR_STATUS = Object.freeze({
  EXIST: `EXIST`,
  OPTIONAL: `OPTIONAL`,
});
const COUNT = Object.freeze({
  ARTICLE: {
    MIN: 1,
    MAX: 1000,
  },
  CATEGORY: {
    MIN: 1,
    MAX: 9,
  },
  ANNOUNCE: {
    MIN: 1,
    MAX: 5,
    LENGTH: {
      MIN: 30,
      MAX: 250,
    },
  },
  COMMENT: {
    MIN: 0,
    MAX: 9,
  },
  TITLE: {
    MIN: 1,
    MAX: 12,
    LENGTH: {
      MIN: 30,
      MAX: 250,
    },
  },
  FULL_TEXT: {
    LENGTH: {
      MAX: 1000,
    },
  },
});
const HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
  INVALID_REQUEST: 400,
};
const FILE_PATH = {
  TITLES: `./data/titles.txt`,
  DESCRIPTIONS: `./data/descriptions.txt`,
  CATEGORIES: `./data/categories.txt`,
  COMMENTS: `./data/comments.txt`,
};

module.exports = {
  USER_ARGV_INDEX,
  DEFAULT_COMMAND,
  ID_SIZE,
  ExitCode,
  HTTP_CODE,
  MOCKS_FILE_NAME,
  NOT_FOUND_MESSAGE,
  INTERNAL_SERVER_ERROR_MESSAGE,
  FILE_PATH,
  COUNT,
  INVALID_REQUEST_MESSAGE,
  DEFAULT_PORT,
  MAX_MONTH_RANGE,
  VALIDATOR_STATUS,
  VALID_TEMPLATE,
};
