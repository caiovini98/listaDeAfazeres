# Lista de Afazeres

Uma simples "List To Do" utilizando React Native. Essa lista armazena no dispositivo móvel os dados e as tarefas deixadas pelo usuário. Aplicativo protegido por senha.

## Execução do projeto

Para poder executar o projeto é necessário que tenha instalado na máquina:  
|  |  |
| ------ | ------ |
| Node.js | https://nodejs.org/en/|
| Yarn | https://classic.yarnpkg.com/en/docs/install#windows-stable |
| Expo |https://expo.io/|
|  |  |

## Node.js

Para instalar o Node.js no Windows, acesse o site citado acima e baixe a versão LTS. Após o download, instale normalmente na sua máquina.
Após a instalação, abra o terminal de comando como administrador e execute a instrução abaixo para verificar a versão.
```sh
$ node --version
```
## Yarn

Para instalar o Yarn no Windows, acesse o site do yarn citado acima e baixe a versão Stable. Após o download, instale normalmente na sua máquina.
Após a instalação, abra o terminal de comandos como administrador e execute a instrução abaixo para verificar a versão.
```sh
$ yarn --version
```

## Expo

Para instalar o Expo, é necessário abrir o terminal (prompt) de comando em modo administrador e executar o seguinte comando:
```sh
$ npm install --global expo-cli
```
## IDE

A instalação de uma IDE para poder analisar o código, visualizar o projeto por trás de sua execução como um todo. A escolha fica a critério e gosto de quem vai utilizar, mas recomendo utilizar VS Code.
Para instalar, acesse o link abaixo e baixe a versão mais recente.
|  |  |
| ------ | ------ |
| VS Code | https://code.visualstudio.com/Download |


## Executar o projeto

Para executar o projeto, abra o terminal (prompt) de comandos como administrador. Navegue até o local onde foi baixado o projeto. Exemplo abaixo:
```sh
$ C:\Users\caioPC> cd meuApp  
```
Para adicionar as dependencias dos yarn ao projeto, execute o comando abaixo:
```sh
$ C:\Users\caioPC\meuApp yarn add expo
```
Após chegar até o local do projeto, execute-o utilizando o Yarn, seguindo o exemplo abaixo:
```sh
$ C:\Users\caioPC\meuApp yarn start
```
Caso utilize o VS Code como IDE e queira abrir o projeto nele, execute o comando abaixo dentro da pasta do projeto:
```sh
$ C:\Users\caioPC\meuApp code . 
```

>Após o projeto ser aberto, abrirá automaticamente uma pagina no navegador, a "localhost". Quando aberta, não feche o terminal de comando e nem a página.
>Você pode abrir o aplicativo tanto em um emulador IOS (se estiver em um SO Mac) ou Android, quanto no celular.

## Abrindo aplicativo pelo celular

Para abrir o projeto pelo celular, baixe o aplicativo "Expo" na PlayStore (Android). Após baixado, abra-o. Quando aberto, vá em "Projects" e clique em "Scan QR Code". Volte ao navegador do localhost, que será aberto após execução do projeto, e no canto inferior esquerdo haverá um QR Code. Aproxime a câmera do smartphoneao QR Code, espere carregar e abrirá o aplicativo no celular.

## Versão compatível do Node com o Expo

Caso o terminal de comando dê um erro denominado "expo-cli supports following node.js versions", significa que precisa baixar e instalar a versão do Node.js compatível com a atual do Expo. Para resolver esse erro, pode-se gerenciar várias versões do Node.js com o NVM (Node Version Manager). O passo a passo abaixo explicará como instalar no Windows:  

- Acesse https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7 e baixe o "nvm-setup.zip".
- Extraia o arquivo para alguma pasta em seu computador e o execute.
- Instale-o normalmente.
- Após a instalação, abra o terminal de comando em modo administrador.
- Instale uma nova versão para o Node, compatível ao Expo instalado na sua maquina utilizando o seguinte comando:
```sh
$ nvm install vX.X.X
```
> Os valores dos "Xs" trocam-se pelos números da versão a qual for instalar.

- Após instalado a versão, reinicie o prompt de comando. 
- Para usar a versão que acabou de instalar, execute o comando `use` seguido pela versão que você quer.
```sh
$ nvm use vX.X.X
```
> Os valores dos "Xs" trocam-se pelos números da versão a qual for usar.

A seguir, uma lista para executar outras instruções com o NVM Windows:

- Listar versões instaladas
```sh
$ nvm ls
```
- Listar versões disponíveis para instalação
```sh
$ nvm ls-remote
```
- Desinstalar uma versão
```sh
$ nvm uninstall vX.X.X
```
- Definir uma versão padrão
```sh
$ nvm alias default vX.X.X
