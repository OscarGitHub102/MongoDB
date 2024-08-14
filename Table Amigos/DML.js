// 1. Cambiar el nombre a Ana por Ana María
db.Amigos.updateOne({ nombre : "Ana" }, { $set : { "nombre" : "Ana María" } })
// 2. Modifica la edad de Ana María a 24 años
db.Amigos.updateOne({ nombre : "Ana María" }, { $set : { "edad" : 24 } })
// 3. Borra la edad de Maleni
db.Amigos.updateOne({ nombre : "Marleni" }, { $unset : { "edad" : "" } })
// 4. Incrementa la edad de Ana María en una unidad
db.Amigos.update({ nombre : "Ana María" }, { $inc : { "edad" : 1 } })
// 5. Subir la nota un punto a los de 1DAM
db.Amigos.updatemany({ curso : "1DAM" }, { $inc : { "nota" : 1 } })
// 6. Borra a Maleni
db.Amigos.deleteOne({ nombre : "Marleni" })