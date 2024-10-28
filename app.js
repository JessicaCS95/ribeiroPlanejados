const express = require('express');
var conexao = require("./conexaobanco");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

//chamando o módulo body-parser para deixar o código mais organizado
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//GET
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
app.get('/orcamento', (req, res) => {
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

//POST 

app.post('/cadastro', function (req, res) {
    var cpf_cnpj= req.body.cpf_cnpj;
    var nome_completo_cliente = req.body.nome_completo_cliente;
    var email_cliente= req.body.email_cliente;
    var celular_cadastro = req.body.celular_cadastro;
    var senha_cadastro = req.body.senha_cadastro;
    var  novidades_email = req.body. novidades_email ? 1 : 0;
    var  novidades_sms = req.body. novidades_sms ? 1 : 0;

    conexao.connect(function (error) {
        if (error) throw error;
        var sql = "INSERT INTO CADASTRO_CLIENTE (cpf_cnpj, nome_completo_cliente, email_cliente, celular_cadastro, senha_cadastro, novidades_email, novidades_sms) VALUES(?,?,?,?,?,?,?)";

        conexao.query(sql, [cpf_cnpj, nome_completo_cliente, email_cliente, celular_cadastro, senha_cadastro, novidades_email, novidades_sms], function(error,result){
            if(error) throw error;
            res.send("Cliente " + nome_completo_cliente + " cadastrado com sucesso! " + result.insertId);
        });
        
    });
});



app.listen(4000);

