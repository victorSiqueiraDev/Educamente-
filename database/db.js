// Configuração de conexão
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "victor",
  password: "Victor2001@",
  database: "educamente",
});

// Rota de registro
app.post("/registro", async (req, res) => {
  const { email, senha } = req.body;
  const senhaHash = await bcrypt.hash(senha, 10);

  connection.query("INSERT INTO usuarios (email, senha) VALUES (?, ?)", [
    email,
    senhaHash,
  ]);
});
