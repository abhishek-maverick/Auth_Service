const express = require("express");
const { PORT } = require("./config/serverConfig");
const app = express();

const prepareAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(
      `Authentication Server Up and Running at http://localhost:${PORT}/ ✈️`
    );
  });
};

prepareAndStartServer();
