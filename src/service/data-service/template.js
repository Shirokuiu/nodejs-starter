'use strict';

class TemplateService {
  constructor(data) {
    this._templateData = data;
  }

  get templateData() {
    return this._templateData;
  }
}

module.exports = TemplateService;
