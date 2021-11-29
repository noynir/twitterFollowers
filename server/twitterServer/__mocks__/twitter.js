const mockInstance = {
  get: jest.fn(),
};
const mock = jest.fn().mockImplementation(() => {
  return mockInstance;
});
mock.instance = mockInstance;

module.exports = mock;
