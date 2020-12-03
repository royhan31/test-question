'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Enter your question" },
        len: {args: [5, 20],msg: "Question of at least 5 and up to 20 characters"}
      }
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Author can't be null" },
        is:{ args: [/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/],msg: "Author not correctly"},
        len: { args: [3, 20],msg: "Author of at least 3 and up to 20 characters"}
      }
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Author can't be null" },
        is:{ args: [/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/],msg: "Author not correctly"},
        len: { args: [3, 20],msg: "Author of at least 3 and up to 20 characters"}
      }
    },
    isActive: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
    tableName: 'Questions',
    timestamps: true,
  });
  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};
