// VER PROVAVEL ERRO QUE QUANDO SALVA CRIA NOVA TABELA AUTOMATICAMENTE


const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ic.db')

db.serialize(function() {

  //  CRIAR A TABELA
//     db.run(`
//         CREATE TABLE IF NOT EXISTS ideas(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             title TEXT,
//             category TEXT,
//             description TEXT,
//             link TEXT
//             );
//         `)


// //    // INSERIR DADO NA TABELA

//     const query = `INSERT INTO ideas(
//         image,
//         title,
//         category,
//         description,
//         link
//    ) VALUES (?,?,?,?,?);`
 
//     const values = [
//         "https:image.flaticon.com/icons/svg/2728/2728980.svg",
//         "Curso de Programação",
//         "Estudo",
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod officiis eaque quo labore",
//         "https:google.com"
//     ]
//     db.run(query, values, function(err){
//         if (err) return console.log(err)
 
//         console.log(this)
//     })




//     //CONSULTAR DADOS NA TABELA

//     db.all(`SELECT * FROM ideas`, function(err, rows){
//         if (err) return console.log(err)

//         console.log(rows)
//     })

    
    // DELETAR UM DADO NA TABELA

  //  db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
  //      if (err) return console.log(err)
  //
  //      console.log("deletei", this)
  //  })
})

module.exports = db