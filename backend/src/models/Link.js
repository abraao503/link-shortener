const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const createShortUrl = require('../utils/createShortUrl');

class Link extends Model {
  static init(sequelize){
    super.init(
      {
        url: Sequelize.STRING,
        short_url: Sequelize.STRING,
        hits: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        }
      }, 
      {
        sequelize
      }
    );

    this.addHook('beforeSave', (link) => {
      link.short_url = createShortUrl();
    });

    return this;
  }
}

module.exports = Link;