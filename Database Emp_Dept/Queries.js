// 1. Crear una consulta para visualizar el nombre y el salario de los empleados que ganan más de 2400$.
db.Emp.find({ "salario" : { $gt : 2400 } }, { "apellido" : 1, "salario" : 1 })
// 2. Crear una consulta para visualizar el nombre del empleado y el número de departamento para el número de empleado 7566.
db.Emp.find({ "emp_no" : 7566}, { "apellido" : 1, "dept_no" : 1 })
// 3. Visualizar el nombre y el salario de todos los empleados cuyo salario no este entre 1500$ y 2850$.
db.getCollection('Emp').find({ salario : { $not : { $gte : 1500 , $lte : 2850 } } }, { apellido : 1, salario : 1 })
// 4. Visualizar el nombre del empleado, oficio y fecha de alta de los empleados contratados entre el 20 de febrero de 1981 y el 1 de mayo de 1981. Ordenar la consulta en orden ascendente por la fecha de alta.
db.getCollection('Emp').find({ fecha_alt : { $gt : new Date("1981-02-20"), $lt : new Date("1981-05-01") } }, { apellido : 1, oficio : 1, fecha_alt : 1}).sort({ fech_alt : 1 })
// 5. Visualizar el apellido y el número de departamento de todos los empleados de los departamentos 10 y 30. (Orden alfabético por apellido).
db.getCollection('Emp').find({ $or : [ { dept_no : 10 }, { dept_no : 30 } ] }, { apellido : 1, dept_no : 1 }).sort({ apellido : 1 })
// 6. Sacar un listado del apellido de los empleados que ganan más de 1500$ de los departamentos 10 o 30.
db.getCollection('Emp').find({ $or : [ { dept_no : 10 }, { dept_no : 30 } ], $and : [ { salario : { $gt : 1500 } } ] },{ apellido : 1})
// 7. Visualizar el nombre y la fecha de alta de cada empleado que fue contratado en 1982.
db.getCollection('Emp').find({ fecha_alt : { $gt : new Date("1982-01-01"), $lt : new Date("1982-12-31") } }, { apellido : 1, fecha_alt : 1 })
// 8. Visualizar el nombre y el oficio de todos los empleados que no tienen un jefe asignado.
db.getCollection('Emp').find({ dir : { $eq : null } }, { apellido : 1, oficio : 1 })
// 9. Visualiza el nombre, salario y comisión de todos los empleados que ganan comisiones. Ordenar por salario y comisión en orden descendente.
db.getCollection('Emp').find({ comision : { $ne : null } }, {apellido : 1, salario : 1, comision : 1 }).sort({ salaraio : -1, comision : -1})
// 10. Visualizar el nombre de todos los empleados que tengan dos R en su nombre y que sean del departamento 30 o que su jefe sea el 7698. (Investigar si es posible)
db.getCollection('Emp').find({ $and : [ { apellido : /RR/ }, { dept_no : 30 } ], $or : [ { dir : 7698 } ] }, { apellido : 1, dir : 1 })
// 11. Visualizar el nombre, oficio y salario de todos los empleados cuyo oficio sea CLERK o ANALYST y su salario no sea igual a 1000, 3000 ó 5000 dólares.
db.getCollection('Emp').find({ $or : [ { oficio : "EMPLEADO" }, { oficio : "ANALISTA" } ], $and : [ { salario : { $ne : 1000 } }, { salario : { $ne : 3000 } }, { salario : { $ne : 5000 } } ] } , { apellido : 1, oficio : 1, salario : 1 })
// 12. Obten los empleados con salario mayor a 1000 y de oficio SALESMAN
db.getCollection('Emp').find({ $and : [ { oficio : "VENDEDOR" }, { salario : { $gt : 1000 } } ] })
// 13. Visualiza la media de los salarios de los trabajadores
db.Emp.aggregate([ { $group : { _id : "" , mediaSalario : { $avg : "$salario" } } } ])
// 14. Visualiza el máximo de los salarios del departamento 10
db.Emp.aggregate([ { $match : { dept_no : 10 } }, { $group : { _id : null, SalarioMaximo : { $max : "$salario" } } } ])