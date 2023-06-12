exports.protectedRoute = (req, res) => {
  // Access user information from the request, assuming it was set during the authentication process
  const user = req.user;

  // Perform any necessary authorization checks based on the user's role or permissions
  if (user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }

  // Authorized user can access the protected route
  res.json({ message: "This is a protected route" });
};
