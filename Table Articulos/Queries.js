// 1. Obtener las denominaciones de los artículos y la categoria convertida a mayúscula ambas
db.Articulos.aggregate([ { $project : { denominacion : { $toUpper : "$denominacion" }, categoria : { $toUpper : "$categoria" } } } ])
// 2. Obtener la denominacion en mayúsculas, el importe de las ventas y el stock actual
db.Articulos.aggregate([ { $project : { articulo : { $toUpper : "$denominacion" }, importe : { $multiply : [ "$pvp", "$uv" ] }, stockactual : { $subtract : [ "$stock", "$uv" ] } } } ])
// 3. Respecto al ejercicio anterior, si el stock actual es negativo añadir un (a_reponer true)
db.Articulos.aggregate([ { $project : { articulo : { $toUpper : "$denominacion" }, importe : { $multiply : [ "$pvp", "$uv" ] }, stockactual : { $subtract : [ "$stock", "$uv" ] }, a_reponer : { $cond : [ { $lte : [ { $subtract : [ "$stock", "$uv" ] }, 0 ] }, true, false ] } } } ])
// 4. Por cada categoria obtener el número de artículos, el número de unidades vendidas y el total del importe
db.Articulos.aggregate([ { $group : { _id : "$categoria" , contador : { $sum : 1 }, sumaunidades : { $sum : "$uv" }, totalimporte : { $sum : { $multiply : [ "$pvp", "$uv" ] } } } } ])
// 5. Igual que el ejercicio anterior, pero mostrando solo la categoria deportes
db.Articulos.aggregate([ { $match : { categoria : "Deportes" } }, { $group : { _id : "$categoria", contador : { $sum : 1 }, sumaunidades : { $sum : "$uv" }, totalimporte : { $sum : { $multiply : [ "$pvp", "$uv" ] } } } } ])
// 6. Obtener el precio más caro
db.Articulos.aggregate([ { $sort : { pvp : -1, denominacion : -1 } }, { $group : { _id : null, mascaro : { $first : "$denominacion" }, precio : { $first : " $pvp" } } } ])
// 7. Obtener la suma del importe de los artículos cuta denominacion empieza por M o P
db.Articulos.aggregate([ { $project : { primerchar : { $substr : [ "$denominacion", 0, 1 ] }, import : { $multiply : [ "$pvp", "$uv" ] } } }, { $match : { primerchar : { $in : [ "M", "P" ] } } }, { $group : { _id : 1, totalimporte : { $sum : "$import" } } } ])
// 8. Obtener por cada categoria el articulo con el precio más caro
db.Articulos.aggregate([ { $group : { _id : "$categoria", mascaro : { $max : "$pvp" } } } ])