// 1. Obtener los datos de la colección ordenados por nombre
db.Amigos.find().sort({ "nombre" : 1 })
// 2. Visualizar los datos de manera descendente por nombre
db.Amigos.find().sort({ "nombre" : -1 })
// 3. Buscar el amigo de nombre Maleni
db.Amigos.find({ nombre : "Marleni" })
// 4. Visualizar el teléfono de Marleni
db.Amigos.find({ nombre : "Marleni" }, { "teléfono" : 1 })
// 5. Visualizar nombre y nota de los alumnos de 1DAM
db.Amigos.find({ curso : "1DAM" }, { "nombre" : 1, "nota" : 1 })
// 6. Visualizar cuantos alumnos hay en 1DAM y 2DAM
db.Amigos.find({ "curso" : "1DAM" }).count()
db.Amigos.find({ "curso" : "2DAM" }).count()
// 7. Obtener los alumnos con nota mayor o igual que 6
db.Amigos.find({ "nota" : { $gte : 6 } })
// 8. Obtener los alumnons 1DAM con notas entre 7 y 9 incluidos
db.Amigos.find({ curso : "1DAM", "nota" : { $gte : 7, $lte : 9 } })
// 9. Obtener los documentos con una nota distinta de 7
db.Amigos.find({ "nota" : { $ne : 7 } })
// 10. Obtener los documentos cuya nota sea 5, 7 y 8 visualizando solo el nombre y el curso
db.Amigos.find({ $or : [ { nota : 5 }, { nota : 7 }, { nota : 8 } ] })
// 11. Visualizar los documentos de 1DAM que tienen una nota superior a 7
db.Amigos.find({ $and : [ { curso : "1DAM" }, { "nota" : { $gt : 7 } } ] })
// 12. Visualizar los que tienen de nombre Ana o Marleni
db.Amigos.find({ $or : [ { nombre : "Ana" }, { nombre : "Marleni" } ] })
// 13. Visualizar los que son de 2DAM y tienen una nota = 7
db.Amigos.find({ $and : [ { curso : "2DAM" }, { nota : { $eq : 7 } } ] })
// 14. Obtener los que tienen una nota mayor que 7
db.Amigos.find({ nota : { $gt : 7 } })
// 15. Visualizar nombre, curso y nota de los que su nota no sea mayor que 7
db.Amigos.find({ nota : { $gt : 7 } }, { "nombre" : 1, "curso" : 1, "nota" : 1 })
// 16. Obtener los registros que tengan nota
db.Amigos.find({ "nota" : { $exists : true } })