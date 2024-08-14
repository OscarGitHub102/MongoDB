// 1. Libros que tengan el tema UML
db.Libros.find({ temas : "UML" })
// 2. Libros que tengan el tema UML o Neodatis
db.Libros.find({ $or : [ { temas : "UML" }, { temas : "Neodatis" } ] })
// 3. Libros de la editorial garceta con pvp>25 y que tengan el tema UML o Neodatis
db.Libros.find({ $and : [ { $or : [ { temas : "UML" }, { temas : "Neodatis" } ] }, { editorial : "Garceta" }, { pvp : { $gte : 25 } } ] })