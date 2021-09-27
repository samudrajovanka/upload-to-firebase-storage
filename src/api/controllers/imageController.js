const { uploadImage } = require("../../lib/uploadToStorage");

exports.uploadImage = async (req, res) => {
  try {
    console.log('Uploading image');

    const file = req.file;

    const url = await uploadImage(file);

    return res.status(200).json({
      success: true,
      message: url,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}