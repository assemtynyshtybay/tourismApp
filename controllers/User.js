export const getUserInfo = async (req, res) => {
  try {
    const { userLogin } = req.body;
    const result = await User.findOne({ username: userLogin });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
