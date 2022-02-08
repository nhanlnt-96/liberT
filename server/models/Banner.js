module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define("Banner", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    connectBtnName:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bgImageName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bgImageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Banner;
};
