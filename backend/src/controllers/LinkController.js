const Link = require('../models/Link');

class LinkController {
  async store(req, res){
    const { url } = req.body;

    const link = await Link.create({ url });

    return res.json(link);
  }
}

module.exports = new LinkController();