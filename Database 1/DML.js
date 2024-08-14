// 1. Sube el salario a los ANALISTAS 100€
db.Emp.update({ oficio : "ANALISTA" } , { $inc: { salario : 100 } }, { multi : true })
// 2. Decrementa la comisión 10€ a los empleados que tienen comisión
db.Emp.update({ comision : { $ne : null } }, { $inc : { comision : -10 } }, { multi : true })
// 3. Cambia el oficio empleado por trabajador
db.Emp.update({ oficio : "EMPLEADO" } , { $set : { oficio : "TRABAJADOR" } }, { multi : true })
// 4. Borra los trabajadores que tienen un salario menor de 700€
db.Emp.remove({ salario : { $lt : 700 } })