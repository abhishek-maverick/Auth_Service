const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_KEY } = require("../config/serverConfig");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in service layer !!!");
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      const user = this.userRepository.destroy(userId);
      return user;
    } catch (error) {
      console.log("Something went wrong in service layer !!!");
      throw { error };
    }
  }

  async getById(userId) {
    try {
      const user = this.userRepository.getById(userId);
      return user;
    } catch (error) {
      console.log("Something went wrong in service layer !!!");
      throw { error };
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
      return result;
    } catch (error) {
      console.log("Something went wrong in token creation");
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in token validation");
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("Something went wrong in password comparision");
    }
  }
}

module.exports = UserService;
