# Mobly-Teste

Teste fullstack da [Mobly](https://mobly.com.br/), Laravel + ReactJS.

## Visuals

#### Exemplo da aplicação.

![mobly](https://user-images.githubusercontent.com/53484547/69959106-11632d00-14e5-11ea-8922-1be5223e5025.gif "mobly Screenshot")


## Installation

Para inicializar o projeto
```bash
 git clone https://github.com/Lucas-Fonte/teste-php.git
```
Ou faça o download do .zip do projeto.

Para configurar o projeto

```bash
docker-compose up
```
O arquivo **.env** já possui as mesmas configurações do docker, para iniciar com as mesmas basta copiar o **.env.example**. 
 
Use um package manager, [composer](https://getcomposer.org/), para instalar as dependências.

```bash
cd teste-php
composer install
php artisan serve

```
Use um package manager, [yarn](https://yarnpkg.com/lang/en/) ou npm, para instalar as dependências.
```bash
cd client
yarn 
yarn dev
```

Tudo pronto, agora basta inserir o usuários testes da api na tela de dashboard, clicando no botão vermelho.

![mobly](https://user-images.githubusercontent.com/53484547/69958723-2f7c5d80-14e4-11ea-843e-52d50584c47d.png "Mobly Screenshot")

## License
mobly-teste

License
[MIT](https://choosealicense.com/licenses/mit/)
