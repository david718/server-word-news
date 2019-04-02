/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Word', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		word: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		translation: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		ngram: {
			type: "DOUBLE",
			allowNull: true
		},
		grade: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'Word',
		timestamps: false
	});
};