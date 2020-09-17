require('dotenv').config();

const Link = require('../models/Link');
const getArrayFromJson = require('../utils/getArrayFromJson');

class HitController {
  async index(req, res){
    const hits = await Link.sum('hits');

    if(!hits){
      const arrayData = getArrayFromJson();

      let hits = arrayData.reduce((prev, cur) => {
        return prev + cur.hits;
      }, 0);

      return res.json({ totalHits: hits });
    }

    return res.json({ totalHits: hits });
  }

  async store(req, res){
    const { urlId } = req.params;

    const link = await Link.findOne({
      where: { short_url: process.env.APP_URL + '/' + urlId }
    });

    if(!link){
      return res.status(404).json({ error: 'Link not found.' })
    }

    link.increment('hits');

    return res.redirect(link.url);
  }
}

module.exports = new HitController();