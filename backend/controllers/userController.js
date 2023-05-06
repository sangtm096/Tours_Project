import User from "../models/User.js";

// create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update User
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};
export const updateFavorite = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).populate("favorites");
    if (user.favorites.includes(req.body._id)) {
      await User.findByIdAndUpdate(id, {
        $pullAll: { favorites: req.body },
      });
    } else {
      await User.findByIdAndUpdate(id, {
        $push: { favorites: req.body },
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to deleted",
    });
  }
};

// get User
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully get User",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found User",
    });
  }
};
export const getFavorites = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).populate("favorites");

    res.status(200).json({
      success: true,
      message: "Successfully get User",
      data: user.favorites,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found User",
    });
  }
};

// getAll User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "Successfully get all User",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found Users",
    });
  }
};
