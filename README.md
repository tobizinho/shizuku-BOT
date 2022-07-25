: <center>

<h1 align="center">🤖 Shizuku bot</h1>
<div align="center">
   <img src="https://telegra.ph/file/ff1df8dfa47c64fbca798.png"  />
  <br>
  <a href="https://www.youtube.com/watch?v=fZyFX_e0eKs&t=0" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a><p>Shizuku bot é um desenvolvimento em open source feito por Tobi</p>
</div>



## ✍ Começando

Aqui estão algumas intruções para auxiliar os iniciantes, caso você já saiba o processo, pode pular esse tutorial

### 📝 Pré-requisitos

De que coisas você precisa para instalar o bot e como instalá-lo?

```
TERMUX - NOVA VERSÃO
recomendavel usar essa (https://f-droid.org/en/packages/com.termux) pelo fato do nodejs ja vim instalado
ARQUIVOS DA SHIZUKU

```
### 📁 Pasta de Download
Link do arquivo shizuku: (https://www.mediafire.com/file/nwmmqroguvg4h9j/shizuku.zip/file)
### 🙃 Instalação

Bem vamos lá, pode ser um pouco difícil pra alguns iniciantes por isso peço que leiam com calma, tentarei ser o máximo explicativo possível.

Logo depois de baixar o termux(seja por onde foi) entre nele e aplica tal comando:

```
termux-setup-storage
```
❗Esse comando vai liberar o acesso ao armazenamento ao aplicativo (caso não fucione, vá nas configurações do app e ative manualmente)



Depois de aplicar o comando citado a cima, use esse comando:

```
cd /sdcard/shizuku
```
❗Esse comando vai localizar onde o arquivo está, com certeza essa parte vai da erro para muita gente, pelo fato que muitas pessoas vai ter baixado o arquivo em outros lugares, caso isso ocorreu na sua instalação, verifique onde está seu diretorio, procure onde o arquivo da shizuku está e ver qual pasta ele tá se caso ele estiver na pasta errada, mova ele para sua pasta de downloads e coloque o nome da pasta exemplo; (cd/sdcard/Downloads/shizuku) e observe se estar em zip, caso esteja extrai o arquivo.

Finalizando use o comando:

```
npm start
```
❗O comando vai iniciar os arquivos do bot e no termux vai aparecer o qr code, use um aparelho para ler o qr code "lembrando" use o leitor de qr code do whatsapp web para conectar


## ⚙🔮 Executando os testes

Entre no whatsapp onde usou o leitor qr code, va e aperte nos 3 pontinhos que fica no lado direito encima, aperte em aparelhos conectados e ver se tem algum navegador conectado se estiver (significa que foi ativado a conexão do bot no whatsapp).

### 🔬 Analise de inicialização

Hmmm, sera que fucionou? sabe o whatsapp que usou o leitor qr code? então ele quem vai receber os comandos e mandar as respostas para o usuarios, peça para um amigo mandar um comando no privado do whatsapp que foi usado o leitor de qr code e ver se ele responde, exemplo de comando; /menu, se ele enviar a lista de comandos significa que ele ta fucionando normal, caso ele não envie nada verifique se o termux ainda está aberto e se ta fucionando, caso a aba dele estiver fechado (vá e abra a aba de novo e aplique o comandos de cd... e npm... fazendo ele iniciar de novo, não feche a aba do termux se caso queira ele ativado sem erros.


### 🧬 Analise codificação

Muitos vão querer modificar os arquivos do bot, então ja tirando a dúvidas de muitosSIM ele tem codigo aberto e pode ser modificado, sinta-se livre para fazer qualquer coisa com backend do bot, lembrando que caso não saiba mexer em Nodejs evite mexer nos arquivos dele, estude um pouco antes para depois mexer.
Caso saiba mexer a index do bot está organizada e sem muitas vias de direção de arquivos assim melhora sua codificão por cima da backend atual.


## 🔅 Desenvolvimento de code

Shizuku é totalmente manobrável para adicionar novos comandos e módulos, caso queira migrar os arquivos do bot para outra plataforma alem do termux sinta-se a vontade de migrar ela, porém observe se a outra plataforma também é compatível com a conexão do bot e linguagem usada, evite apagar módulos e arquivos adiversos atoa porque isso pode afeta nos fucionamentos do bot então observe bem o que vai apagar.

## 🔨 Construção 

Shizuku foi feita pelo software Quickedit e Visual code, foram usado a linguagem Nodejs, Shizuku utiliza a conexão websocket baileys, toda construção dela foi para suporta essa conexão, então caso queira modificar ou migrar a conexão dela é bem possivel que ocorra erros em toda backend do bot pelo fato de alterar a conexão principal dela, então evite modificar a conexão dela a não ser que tu saiba o que esteja fazendo.


## 📍 Versão

Essa é a primeira versão da shizuku 

## ✒️ Autores

Criador: Tobi

Ajudantes: Resen, Italuh.

Ajudante-Supremo: Thiago


## 🔐 Licença MIT

Direitos autorais (c) <24/04/22> <Tobi>

 É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
 deste software e arquivos de documentação associados (o "Software"), para lidar
 no Software sem restrição, incluindo, sem limitação, os direitos
 usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender
 cópias do Software, e para permitir que as pessoas a quem o Software é
 equipado para tal, nas seguintes condições:

 O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos no
 todas as cópias ou partes substanciais do Software.

 O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU
 IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO,
 ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM NENHUM CASO A
 AUTORES OU DETENTORES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTROS
 RESPONSABILIDADE, SEJA EM UMA AÇÃO DE CONTRATO, ATO ILÍCITO OU DE OUTRA FORMA, DECORRENTE DE,
 FORA OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO
 O SOFTWARE.

## 💯 Expressões de gratidão

* Use esse projeto e agrade a comunidade 
* Faça, edite, modifique, para melhor
* Divulga a outras pessoas sobre esse projeto
* Use esse projeto para coisas boas e não para prejudicar
* Obrigado por usar meu bot como open source

Com muito agradecimento -Tobi
