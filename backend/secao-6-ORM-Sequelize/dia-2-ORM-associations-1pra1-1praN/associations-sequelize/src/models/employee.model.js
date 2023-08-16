module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // torna opicional os campos `createdAt` e `updatedAt`
    tableName: 'employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasMany(
      models.Address,
      { foreignKey: 'employeeId', as: 'addresses' }
    );
  };

  return Employee;
}

// No caso de relacionamentos 1:1, utilizamos os métodos hasOne e belongsTo. A tradução literal desses métodos facilita o seu entendimento.

// hasOne = tem um
// hasMany = tem muitos
// belongsTo = pertencente a