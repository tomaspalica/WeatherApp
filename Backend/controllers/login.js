export const login = async (req, res, next) => {
  const { log } = req.body;
  console.log(log);
  res.json({ message: log });
};
