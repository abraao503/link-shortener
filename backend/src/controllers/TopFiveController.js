const sequelize = require('sequelize');
const Link = require('../models/Link');
const getArrayFromJson = require('../utils/getArrayFromJson');

class TopFiveController {
  async index(req, res){
    const topFive = await Link.findAll({
      group: ['id'], 
      order: sequelize.literal('max(hits) DESC'),
      limit: 5,
      attributes: ['id', 'hits', 'url', ['short_url', 'shortUrl']],
      raw: true,
    });

    if(!topFive.length){
      const jsonData = getArrayFromJson(5);
      return res.json(jsonData);
    }

    return res.json(topFive);
  }
}

module.exports = new TopFiveController();