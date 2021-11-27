const twitterService = require("./twitterService");
const Twitter = require("twitter");
const { twitterAPIPaths } = require("../constants/paths");

describe("twitter service get followers", () => {
  it("should return list of followers", async () => {
    const followersList = [];
    const requestParams = {
      skip_status: true,
      include_user_entities: false,
      screen_name: "noynir",
      cursor: 0,
      count: 30,
    };
    const { get: getFollowerstFn } = Twitter.instance;
    getFollowerstFn.mockResolvedValueOnce(followersList);
    const result = await twitterService.getFollowers(requestParams);

    expect(result).toBe(followersList);
    expect(getFollowerstFn).toHaveBeenCalledTimes(1);
    expect(getFollowerstFn).toHaveBeenCalledWith(
      twitterAPIPaths.FOLLOWERS_LIST,
      requestParams
    );
  });
  it("should reject when client rejects", async () => {
    const requestParams = {
      skip_status: true,
      include_user_entities: false,
      screen_name: "noynir",
      cursor: 0,
      count: 30,
    };
    const { get: getFollowerstFn } = Twitter.instance;
    getFollowerstFn.mockRejectedValueOnce(new Error("get followers error"));
    expect(twitterService.getFollowers(requestParams)).rejects.toThrow(
      "failed to get followers"
    );

    expect(getFollowerstFn).toHaveBeenCalledTimes(1);
    expect(getFollowerstFn).toHaveBeenCalledWith(
      twitterAPIPaths.FOLLOWERS_LIST,
      requestParams
    );
  });
});
