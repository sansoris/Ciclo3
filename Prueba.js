for (i=6; i<11; i++){
    db.prueba.insertOne({
        _id:i,
        datos: "dato"+i
    }
    )
}