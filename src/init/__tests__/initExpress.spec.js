const compression = require("compression");
const cors = require("cors");
const initExpress = require("../initExpress");
const config = require("../../config");

jest.mock("compression", () => jest.fn());

describe("[initExpress]", () => {
  let app;
  let bodyParser;

  beforeEach(() => {
    jest.restoreAllMocks();
    app = {
      set: jest.fn().mockReturnThis(),
      use: jest.fn().mockReturnThis()
    };
    bodyParser = {
      json: jest.fn(),
      urlencoded: jest.fn()
    };
  });

  it("should initialize app correctly", () => {
    initExpress(app, telemetry);

    expect(app.set).toHaveBeenCalledWith("port", config.PORT);
    expect(app.use).toHaveBeenCalledWith(
      bodyParser.json({ type: "application/json" })
    );
    expect(app.use).toHaveBeenCalledWith(bodyParser.json({ limit: "50mb" }));
    expect(app.use).toHaveBeenCalledWith(
      bodyParser.urlencoded({ limit: "50mb", extended: true })
    );
    expect(app.use).toHaveBeenCalledWith(compression());
  });
});
