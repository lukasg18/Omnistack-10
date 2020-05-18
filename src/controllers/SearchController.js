const axios = require("axios");
const Dev = require("../models/Dev");
const parseArray = require("../utils/parseArray");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;
    const techsArray = parseArray(techs);
    console.log(techsArray)
    return response.json({dev:[]});
  }
};
