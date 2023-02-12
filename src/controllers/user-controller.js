const { request } = require("express");
const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully create the user",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to create user",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await userService.destroy({
      userId: req.query.id,
    });

    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted the user",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to delete the user",
      err: error,
    });
  }
};

const getById = async (req, res) => {
  try {
    const response = await userService.getById(req.query.id);

    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched the user",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to fetch the user",
      err: error,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.email,
      req.body.password
    );

    return res.status(200).json({
      data: response,
      success: true,
      message: "Signed In successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to sign in",
      err: error,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "user is authenticated and token is valid",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to authenticate",
      err: error,
    });
  }
};

const isAdmin = async (req, res) => {
  try {
    const response = await userService.isAdmin(req.body.userId);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched whether user is admin or not",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch whether user is admin or not",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  getById,
  signIn,
  isAuthenticated,
  isAdmin,
};
