const { getMockReq, getMockRes } = require("@jest-mock/express");
const service = require("../services/twitterService");
const twitterController = require("./twitter");
jest.mock("../services/twitterService");

const { res, next, mockClear } = getMockRes();

describe("twitter controller", () => {
  beforeEach(() => {
    mockClear();
  });
  it("should return list of twitter followers", async () => {
    const followersList = [];
    const { getFollowers } = service;
    getFollowers.mockResolvedValueOnce(followersList);
    const requestParams = {
      skip_status: true,
      include_user_entities: false,
      screen_name: "noynir",
      cursor: 0,
      count: 30,
    };
    const req = getMockReq({
      query: requestParams,
    });

    await twitterController.getFollowers(req, res, next);

    expect(getFollowers).toHaveBeenCalledTimes(1);
    expect(getFollowers).toHaveBeenCalledWith({ ...requestParams });
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith(followersList);
  });
  it("should forward to error handler when service rejects", async () => {
    const { getFollowers } = service;
    const error = new Error("general Error");
    getFollowers.mockRejectedValueOnce(error);
    const requestParams = {
      skip_status: true,
      include_user_entities: false,
      screen_name: "noynir",
      cursor: 0,
      count: 30,
    };
    const req = getMockReq({
      query: requestParams,
    });

    await twitterController.getFollowers(req, res, next);

    expect(getFollowers).toHaveBeenCalledTimes(1);
    expect(getFollowers).toHaveBeenCalledWith({ ...requestParams });
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(error);
  });
});
