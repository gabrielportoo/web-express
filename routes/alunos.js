var express = require("express");
var router = express.Router();

const AlunoServiceMongo = require("../services/AlunoServiceMongo");

// MONGO GET
router.get("/listar", (request, response, next) => {
  AlunoServiceMongo.listar(request, response);
});

router.get("/recuperar/:id", (request, response, next) => {
  AlunoServiceMongo.recuperar(request, response);
});

// MONGO POST
router.post("/criar", (request, response, next) => {
  AlunoServiceMongo.criar(request, response);
});

router.put("/atualizar/:id", (request, response, next) => {
  AlunoServiceMongo.atualizar(request, response);
});

router.delete("/apagar/:id", (request, response, next) => {
  AlunoServiceMongo.delete(request, response);
});

router.get("/listar", async (req, res) => {
  try {
    const alunos = await AlunoServiceMongo.find();
    const totalIRA = alunos.reduce((sum, aluno) => sum + aluno.ira, 0);
    const mediaIRA = alunos.length ? totalIRA / alunos.length : 0;

    res.json({ alunos, mediaIRA });
  } catch (error) {
    res.status(500).send("Erro ao listar alunos");
  }
});

module.exports = router;
