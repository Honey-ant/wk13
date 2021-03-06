// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'product_id',
  onDelete:'CASCADE'
});
// Categories have many Products
Category.hasMany(Product, {

});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, ProductTag, {
  foreignKey: 'product_id',
  onDelete:'CASCADE'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, ProductTag, {
  foreignKey: 'product_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
