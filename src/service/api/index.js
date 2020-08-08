'use strict';

const { Router } = require(`express`);
const template = require(`./template`);
const { TemplateService } = require(`../data-service/index`);

const app = new Router();

(() => {
  const templateData = [
    {
      name: 'Template name',
      id: 1,
    },
  ];

  template(app, new TemplateService(templateData));
})();

module.exports = app;
