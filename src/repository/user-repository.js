const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong at repository layer !!!");
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong at repository layer !!!");
      throw { error };
    }
  }

  async getById(userId) {
    try {
      console.log(userId);
      const user = await User.findByPk(userId);
      console.log(user);
      return user;
    } catch (error) {
      console.log("Something went wrong at repository layer !!!");
      throw { error };
    }
  }
  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (error) {
      console.log("Something went wrong in user repository");
      throw { error };
    }
  }
}

module.exports = UserRepository;
