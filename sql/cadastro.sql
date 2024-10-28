CREATE DATABASE ribeiroplanejados;

CREATE TABLE CADASTRO_CLIENTE (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    cpf_cnpj VARCHAR(30) NOT NULL ,
    nome_completo_cliente VARCHAR(200) NOT NULL,
    data_nascimento DATE NOT NULL,
    email_cliente VARCHAR(200) NOT NULL UNIQUE,
    celular_cadastro BIGINT(15) NOT NULL,
    senha_cadastro VARCHAR(250) NOT NULL,
    confirmacao_senha_cadastro VARCHAR(250) NOT NULL,
    novidades_email BOOLEAN DEFAULT FALSE,
    novidades_sms BOOLEAN DEFAULT FALSE
    creat_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);       