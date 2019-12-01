# Mobly-Teste

Teste fullstack da [Mobly](https://mobly.com.br/), Laravel + ReactJS.

## Visuals

#### SignIn da aplicação.

![mobly](https://user-images.githubusercontent.com/53484547/67404562-f3bbb300-f589-11e9-88b2-43fe73df72c9.png "mobly Screenshot")

#### Dashboard da aplicação.

![mobly](https://user-images.githubusercontent.com/53484547/67404553-f1f1ef80-f589-11e9-810b-c19778ae4206.png "mobly Screenshot")


## Installation

Para inicializar o projeto
```bash
 git clone https://github.com/Lucas-Fonte/mobly.git
```
Ou faça o download do .zip do projeto.

Para o banco de dados, pode ser utilizado qualquer banco SQL, para este projeto foi utilizado **MySQL**.

```
 Exemplo com credenciais padrão do projeto
 
 docker pull mysql:8.0.1
 docker run --name my-own-mysql -e MYSQL_ROOT_PASSWORD=mobly -d mysql:8.0.1
 docker pull phpmyadmin/phpmyadmin:latest
 docker run --name my-own-phpmyadmin -d --link my-own-mysql:db -p 8081:80 phpmyadmin/phpmyadmin

```
Com o banco de dados configurado, basta criar uma *database* chamada 'mobly', ou como optar por chama-lá, lembrando sempre de alterar a variável no arquivo **.env**.

Use um package manager, [composer](https://getcomposer.org/), para instalar as dependências.

```bash
cd mobly
composer install
php artisan serve

```

```bash
cd frontend
yarn 
yarn start
```

Tudo pronto, agora basta aproveitar a criação de meetups entre vários usuários.

## License
mobly-teste

License
[MIT](https://choosealicense.com/licenses/mit/)
