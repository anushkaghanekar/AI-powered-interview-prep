const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

// Middleware to protect routes
const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    // Check if token is provided and starts with Bearer
    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1]; // Get the actual token

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user (without password) to req object
      req.user = await User.findById(decoded.id).select("-password");

      // Proceed to next middleware or route handler
      next();

    } else {
      return res.status(401).json({
        success : false,
        message: "Not authorized, no token provided",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Token failed",
      error: error.message,
    });
  }
};

module.exports = { protect };
