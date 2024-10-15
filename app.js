const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro');
});
app.get('/catalogo', (req, res) => {
    res.render('catalogo');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/orcamneto', (req, res) => {
    res.render('orcamento');
});
app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});
app.get('/produto', (req, res) => {
    res.render('produto');
});
app.get('/quemsomos', (req, res) => {
    res.render('quemsomos');
});
app.get('/recuperacaosenha', (req, res) => {
    res.render('recuperacaosenha');
});
app.use('/404', (req, res) => {
    res.render('404');
});



app.listen(3000);

