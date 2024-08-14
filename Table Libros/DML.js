// 1. Añadir el tema Mongodb al libro con código 1
db.Libros.updateOne({ codigo : 1 }, { $push : { "temas" : "mongodb" } })
// 2. Añadir varios temas al array con código 1 y 2
db.Libros.updateMany({ $or : [ { codigo : 2 }, { codigo : 1 } ] }, { $push : { "temas" : { $each : [ "java", "php", "subneting" ] } } })
// 3. Borrar el primer tema del libro con codigo 3
db.Libros.updateOne({ codigo : 3 }, { $pop : { temas : 1 } })
// 4. Borrar de todos los libros los elementos Base de Datos y JSON si los tienen
db.Libros.updateMany({ editorial : "Garceta" }, { $pullAll : { temas : [ "Base de datos", "json" ] } })
// 5. Visualiza los libros de la editorial garceta con precio entre 20 y 25 (incluidos) € y que tengan el tema Socket
//db.Libros.updateMany({ editorial : "Garceta" }, { $pullAll : { temas: [ "Base de datos", "json" ] } })
// 6. Baja 5 euros a los libros de la editorial garceta
db.Libros.updateMany({ editorial : "Garceta" }, { $inc : { pvp : -5} })