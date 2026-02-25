// const express = require('express')
import express from 'express'


const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.get('/user', (req, res) => {
    res.send('Aqui está a lista de usuários!')
})

app.post('/user', (req, res) => {
    res.send('Usuário criado!')
})

app.put('/user', (req, res) => {
    res.send('Cadastro atualizado!')
})

app.patch('/user', (req, res) => {
    res.send('Nome de usuário alterado!')
})

app.delete('/user', (req, res) => {
    res.send('Usuário deletado!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em  http://localhost:${port}`)
})