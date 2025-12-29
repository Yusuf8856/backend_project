// This utility uploads a local file to Cloudinary
// and safely removes the local file after upload or on error.

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (localFilePath) => {
  try {
    // 1️⃣ Validate input
    if (!localFilePath) return null;

    // 2️⃣ Configure Cloudinary INSIDE function
    // (prevents dotenv / ES module load-order issues)
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });

    // 3️⃣ Upload file
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // image / video / pdf etc.
      folder: "uploads", // optional (you can rename)
    });

    console.log("✅ Cloudinary uploaded:", response.secure_url);

    // 4️⃣ Delete local temp file after successful upload
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return response;
  } catch (error) {
    // 5️⃣ Log real Cloudinary error
    console.error("❌ Cloudinary upload error:", error.message);

    // 6️⃣ Cleanup local file on failure
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export { uploadOnCloudinary };
