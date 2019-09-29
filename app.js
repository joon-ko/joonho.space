const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }))
app.get('/projects', (req, res) => res.sendFile('projects.html', { root: __dirname }))
app.get('/classes', (req, res) => res.sendFile('classes.html', { root: __dirname }))
app.get('/color', (req, res) => res.sendFile('color.html', { root: __dirname }))

app.listen(process.env.PORT || 3000, () => console.log('running'))
