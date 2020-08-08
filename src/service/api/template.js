const { Router } = require(`express`);

const route = new Router();
const { HTTP_CODE } = require(`../constants`);

module.exports = (app, templateService) => {
  app.use(`/template`, route);

  route.get(`/`, (req, res) => {
    const templateData = templateService.templateData;

    res.status(HTTP_CODE.OK).json(templateData);
  });
};
