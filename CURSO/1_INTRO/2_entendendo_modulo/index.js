const fs = require("fs"); // Importa o módulo fs

fs.readFile("arquivo.txt", "utf8", (err, data) => {
  // Lê o arquivo.txt

  if (err) {
    console.error("Deu errado paizao");
    return;
  }
  console.log(data)
  console.log("deu certo paizao");
});
