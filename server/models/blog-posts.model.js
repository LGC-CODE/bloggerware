// blog-posts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const blogPosts = new Schema({
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    userId: { type: String, required: true },
    posters: [{ url: String }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('blogPosts', blogPosts);
};
