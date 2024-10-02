import User from "../Models/User.Model.js";

export const getUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findById(id);

    return res.json({
      msg: "Get User By Id",
      user,
    });
  } catch (error) {
    console.log("Error occured : ", error);
  }
};
