//db.col01.deleteMany({})
db.col01.insertOne({nombre: "Pepe", edad: 19 })
db.col01.insertOne({nombre: "Antonio", edad: 20 })
db.col01.insertOne({nombre: "Juan Manuel", edad: 18 })

db.col01.find()