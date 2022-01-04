const Sequelize = require("sequelize");
const user = require("./user");
const post = require("./post");
const dislikes_hash_tag = require("./dislikes_hash_tag");
const likes_hash_tag = require("./likes_hash_tag");
const click_like = require("./click_like");
const click_dislike = require("./click_dislike");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = user;
db.post = post;
db.dislikes_hash_tag = dislikes_hash_tag;
db.likes_hash_tag = likes_hash_tag;
db.click_like = click_like;
db.click_dislike = click_dislike;

user.init(sequelize);
post.init(sequelize);
dislikes_hash_tag.init(sequelize);
likes_hash_tag.init(sequelize);
click_like.init(sequelize);
click_dislike.init(sequelize);

user.associate(db);
post.associate(db);
dislikes_hash_tag.associate(db);
likes_hash_tag.associate(db);

module.exports = db;
