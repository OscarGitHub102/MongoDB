// 1. Sube el salario a los ANALISTAS 100€
db.Emp.update({ oficio : "ANALISTA" } , { $inc: { salario : 100 } }, { multi : true })
db.emp.updateMany({ oficio : "ANALISTA" }, { $inc : { salario : 100 } } )
// 2. Decrementa la comisión a 20€ a los que la tengan
db.emple.updateMany({ "comision" : { $exists : true } }, { $inc : { comision : -20 } })
// 3. Decrementa la comisión 10€ a los empleados que tienen comisión
db.Emp.update({ comision : { $ne : null } }, { $inc : { comision : -10 } }, { multi : true })
// 4. Cambia el oficio empleado por trabajador
db.Emp.update({ oficio : "EMPLEADO" } , { $set : { oficio : "TRABAJADOR" } }, { multi : true })
// 5. Borra los trabajadores que tienen un salario menor de 700€
db.Emp.remove({ salario : { $lt : 700 } })