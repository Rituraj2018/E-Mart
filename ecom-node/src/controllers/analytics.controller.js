const Product = require('../models/product.model');
const Order = require('../models/order.model');
const User = require('../models/user.model');

// GET /api/admin/app/analytics
const getAnalytics = async (req, res) => {
  try {
    const [productCount, totalOrders, revenueResult, userCount] = await Promise.all([
      Product.countDocuments(),
      Order.countDocuments(),
      Order.aggregate([{ $group: { _id: null, total: { $sum: '$totalAmount' } } }]),
      User.countDocuments({ roles: 'ROLE_USER' }),
    ]);
    const totalRevenue = revenueResult.length ? revenueResult[0].total : 0;
    return res.status(200).json({
      productCount: String(productCount),
      totalOrders: String(totalOrders),
      totalRevenue: String(totalRevenue),
      userCount: String(userCount),
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAnalytics };
