const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Uploads a local file to Cloudinary.
 * If credentials are not configured or are placeholders, it returns null.
 * 
 * @param {string} localFilePath - Path to the local file
 * @param {string} folderName - Cloudinary folder name
 * @returns {Promise<string|null>} - Secure URL or null
 */
const uploadToCloudinary = async (localFilePath, folderName = 'eshop') => {
  try {
    if (!localFilePath) return null;

    const isConfigured = 
      process.env.CLOUDINARY_CLOUD_NAME && 
      process.env.CLOUDINARY_CLOUD_NAME !== 'your_cloud_name';

    if (!isConfigured) {
      console.warn("⚠️ Cloudinary credentials are not configured or still using placeholders. Skipping Cloudinary upload.");
      return null;
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
      folder: folderName,
    });
    return response.secure_url;
  } catch (error) {
    console.error("🚨 Cloudinary upload error:", error.message);
    return null;
  }
};

module.exports = { cloudinary, uploadToCloudinary };
