import express from "express";
const app = express();
app.use(express.json());

const tarefas = [
    {
        id: 1,
        titulo: "lembrar de catar coquinho"
    },
    {
        id: 2,
        titulo: "secar gelo"
    }
]

function buscaTarefa(id) {
    return tarefas.findIndex(tarefas => {
        return tarefas.id === Number(id);
    })
}

app.get('/', (req, res) => {
    res.status(200).send('Tudo ok');
});

app.get('/tarefas', (req, res) => {
    res.status(200).json(tarefas);
});

app.post('/tarefas', (req, res) => {
    tarefas.push(req.body);
    res.status(201).send("tarefa cadastrada com sucesso");
});

app.get("/tarefas/:id", (req, res) => {
    const index = buscaTarefa(req.params.id);
    res.status(200).json(tarefas[index]);
})

app.put("/tarefas/:id", (req, res) => {
    const index = buscaTarefa(req.params.id);
    tarefas[index].titulo = req.body.titulo;
    res.status(200).json(tarefas);
});

app.delete("/tarefas/:id", (req, res) => {
    const index = buscaTarefa(req.params.id);
    tarefas.splice(index, 1);
    res.status(200).send("tarefas removido com sucesso");
});







export default app;
