const request = require("supertest");
const app = require("../../app");

describe("followers endpoint", function () {
  it("GET /followers - success", async () => {
    const requestParams = {
      skip_status: true,
      include_user_entities: false,
      screen_name: "noynir",
      count: 30,
    };
    const response = await request(app)
      .get("/followers")
      .query(requestParams)
      .set("Accept", "application/json");

    expect(response.get("Content-Type")).toMatch("application/json");
    expect(response.status).toBe(200);
    expect(response.body).toMatchSnapshot();
  });
  it("GET /followers - no query params - fail", async () => {
    const response = await request(app)
      .get("/followers")
      .set("Accept", "application/json");

    expect(response.status).toBe(500);
  });
});
