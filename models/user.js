const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    bio: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    isAdmin: { type: DataTypes.BOOLEAN },
    isActivated: { type: DataTypes.BOOLEAN },
    allowNotifications: { type: DataTypes.BOOLEAN }
  }, {});
  User.associate = (models) => {
    User.hasMany(models.article, { foreignKey: 'author', allowNull: false });
    User.hasMany(models.comments, { foreignKey: 'author', allowNull: false });
    User.hasMany(models.rate, { foreignKey: 'userId', allowNull: false });
    User.hasMany(models.reportArticle, { foreignKey: 'reporter', allowNull: false });
    User.hasMany(models.articleStats, { foreignKey: 'userId', allowNull: false });
    User.hasMany(models.vote, { foreignKey: 'user', allowNull: false });
    User.hasMany(models.notification, { foreignKey: 'userId', allowNull: false });
    User.hasMany(models.editedcommentshistory, { foreignKey: 'userId', allowNull: false });
  };
  return User;
};

export default UserModel;
