const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
  const min = Artist.find({}).sort({ yearsActive: 1 }).limit(1).then(artists => artists[0].age);
  const max = Artist.find({}).sort({ yearsActive: -1 }).limit(1).then(artists => artists[0].age);

  return Promise.all([min, max]).then(res => {
    return { min: res[0], max: res[1] };
  });
};
