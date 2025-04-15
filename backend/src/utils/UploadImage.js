const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dc39vcrli', 
    api_key: '629426941633434', 
    api_secret: 'aIsuHcX7506o_hT3ghcOsFvaGlo'
  });

  const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
  };
  module.exports = (image) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(image, opts, (error, result) => {
            if(result && result.secure_url) {
                return resolve(result.secure_url)
            }
            console.log(error.message)
            return reject({message: error.message})
        })
    })
}