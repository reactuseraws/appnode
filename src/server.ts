//import express, { request, response } from "express";
import express from "express";
import bodyParser from "body-parser";

/*
CONEXÃO COM BANCO DE DADOS

INICIO
*/

const mysql = require('mysql');

const con = mysql.createConnection(
  { host     : "cad.testeaws.sa-east-1.rds.amazonaws.com",
    user     : "xyz",
    password : "zyzxyz",
    port     : "3306"
  });

const app = express();

var jsonParser = bodyParser.json()
/*
GET     => BUSCAR UMA INFORMAÇÃO NA API
POST    => INSERIR UMA INFORMAÇÃO NA API
PUT     => ALTERAR UMA INFORMAÇÃO NA API
DELETE  => DELETAR UMA INFORMAÇÃO NA API
PATCH   => ALTERAR UMA INFORMAÇÃO ESPECÍFICA
*/

/*
TIPOS DE PARÂMETROS

ROUTES PARAMS => FAZEM PARTE DA ROTA  | LOCALHOST:3000/produtos/100200
QUERY PARAMS  => FAZER UM FILTRO |  LOCALHOST:3000/produtos?name=teclados&descricao=sem fio -- não obrigatórios
BODY PARAMS   => MÉDITO POST/PUT/PATCH { "name": "teclado", "descricao": "sem fio"}

*/

app.get("/", (request, response) => {
  return response.send("Utilize /produtos/consultar  ou /produtos/incluir");
});

app.get("/produtos", (request, response) => {
  return response.send("Utilize /produtos/consultar  ou /produtos/incluir");
});

app.get("/produto/consultar", (request, response) => {
    //Request -- Entrada
    //Responde -- Saída

    const mysql = require('mysql');
    const con = mysql.createConnection(
      { host : "cadastro.cvhcnipsqecs.sa-east-1.rds.amazonaws.com", user : "admin", password : "saladmin00", port : "3306" });
    con.connect(function(err) {});

    con.query(`SELECT * FROM DataBases.cadastro`, function(err, result, fields) {
      con.end();

      if (err) {
        return response.send(err);
        }
      if (result) {
        return response.send(result);
      }
    });
 
});

app.post("/produto/incluir", jsonParser, (request, response) => {
    //Request -- Entrada
    //Responde -- Saída

    const mysql = require('mysql');
    const con = mysql.createConnection(
      { host : "cadastro.cvhcnipsqecs.sa-east-1.rds.amazonaws.com", user : "admin", password : "saladmin00", port : "3306" });
    con.connect(function(err) {});

    con.query(`INSERT INTO DataBases.cadastro (cdProduto, nmProduto, qtEstoque, qtMinEstoque) VALUES (${request.body.cdProduto}, '${request.body.nmProduto}', ${request.body.qtEstoque} ,${request.body.qtMinEstoque})`, function(err, result, fields) {
    
      con.end();
  
      if (err) {
         return response.send(err);
      }
      if (result) {
        return response.send(result);
      }
    });
    
});

//http://localhost:3000
app.listen( 3000, ()=> console.log("Server is Running"));