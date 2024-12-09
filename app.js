const express = require('express');
const conexao = require("./conexaobanco");
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.json()); // Para processar JSON
app.use(express.urlencoded({ extended: true })); // Para processar dados enviados como "application/x-www-form-urlencoded"


//chamando o módulo body-parser para deixar o código mais organizado
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//GET
app.get('/', (req, res) => {
    res.render('index', { home: 'Home - Ribeiro Planejados'});
});

app.get('/blog', (req, res) => {
    res.render('blog', { pblog: 'Blog - Ribeiro Planejados'});
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro', { pcadastro: 'Cadastro - Ribeiro Planejados'});
});

app.get('/login', (req, res) => {
    res.render('login', { plogin: 'Login - Ribeiro Planejados'});
});
app.get('/orcamento', (req, res) => {
    res.render('orcamento', { porcamento: 'Orçamento - Ribeiro Planejados'});
});
app.get('/checkorcamento', (req, res) => {
    res.render('checkorcamento', { pcheckorcamento: 'Enviado com Sucesso - Ribeiro Planejados'});
});
app.get('/portfolio', (req, res) => {
    res.render('portfolio', { pportfolio: 'Portfolio - Ribeiro Planejados'});
});

app.get('/quemsomos', (req, res) => {
    res.render('quemsomos', { pquemsomos: 'Quem Somos - Ribeiro Planejados'});
});
app.get('/redefinirsenha', (req, res) => {
    res.render('redefinirsenha', { precsenha: 'Redefinir Senha - Ribeiro Planejados'});
});
app.get('/confirmacaosenha', (req, res) => {
    res.render('confirmacaosenha', { pconfsenha: 'Confirmação de Senha - Ribeiro Planejados'});
});
app.get('/checksenha', (req, res) => {
    res.render('checksenha', { pchecksenha: 'Nova Senha Cadastrada! - Ribeiro Planejados'});
});
app.get('/status', (req, res) => {
    res.render('status', { pstatus: 'Status - Ribeiro Planejados'});
});
app.use('/404', (req, res) => {
    res.render('404', { p404: 'Erro 404 - Ribeiro Planejados'});
});

//POST CADASTRO

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

//POST LOGIN

app.use(session({
    secret: 'chavesecretarbp', // Use uma chave forte na produção
    resave: false,
    saveUninitialized: false,
  }));
  
  app.post('/login', (req, res) => {
    const { email_cliente, senha_cadastro } = req.body;
  
    const query = 'SELECT * FROM CADASTRO_CLIENTE WHERE email_cliente = ? AND senha_cadastro = ?';
  
    conexao.query(query, [email_cliente, senha_cadastro], (err, results) => {
      if (err) throw err;
  
      if (results.length > 0) {
        // Usuário encontrado, salvar na sessão
        req.session.CADASTRO_CLIENTE = {
          id: results[0].id,
          nome_completo_cliente: results[0].nome_completo_cliente,
        };
        res.redirect ('/');
      } else {
        // Usuário não encontrado
        res.status(401).json({ success: false, message: "Credenciais inválidas!" });
      }
    });
  });

  // POST ORÇAMENTO

  const multer = require('multer');
  // Configuração do Multer para salvar os arquivos na pasta 'uploads'
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve("uploads")); // Pasta onde o arquivo será salvo
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Nome único para o arquivo
    }
  });
  
  const upload = multer({ storage });
  
  app.post('/orcamento', upload.single('arquivos'), (req, res) => {
    try {
      // Exibir dados do corpo da requisição
      console.log('Dados recebidos no corpo da requisição:', req.body);
  
      // Verificar se o arquivo foi enviado
      const arquivoPath = req.file ? req.file.path : null; // Define `null` se nenhum arquivo foi enviado
  
      // Preparar os dados para inserção no banco de dados
      const sql = `
        INSERT INTO ORCAMENTOS 
        (nome_orcamento, email_orcamento, celular_orcamento, mensagem_orcamento, arquivos) 
        VALUES (?, ?, ?, ?, ?)
      `;
      const valores = [
        req.body.nomeOrcamento || null,
        req.body.emailOrcamento || null,
        req.body.celularOrcamento || null,
        req.body.mensagemOrcamento || null,
        arquivoPath // Pode ser o caminho do arquivo ou `null`
      ];
  
      console.log('Dados preparados para inserção:', valores);
  
      // Inserir no banco de dados
      conexao.query(sql, valores, (error, results) => {
        if (error) {
          console.error('Erro ao salvar no banco:', error);
          return res.status(500).send('Erro no servidor.');
        }
  
        console.log('Orçamento salvo com sucesso no banco:', results);
        res.redirect("/checkorcamento");
      });
    } catch (err) {
      console.error('Erro inesperado:', err);
      res.status(500).send('Erro no servidor.');
    }
  });
  

app.listen(2500);

