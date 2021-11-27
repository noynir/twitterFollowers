const Twitter = require("twitter");
const { twitterAPIPaths } = require("../constants/paths");

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  bearer_token: process.env.BEARER_TOKEN,
});

module.exports = {
  getFollowers(params) {
    return client.get(twitterAPIPaths.FOLLOWERS_LIST, params).catch((e) => {
      throw new Error("failed to get followers");
    });
  },
};
