[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luan-gustavo-altruda-filipov-04360419a/)
![GitHub](https://img.shields.io/github/license/luangustavofilipov/html-system) ![GitHub language count](https://img.shields.io/github/languages/count/luangustavofilipov/html-system) ![GitHub last commit](https://img.shields.io/github/last-commit/luangustavofilipov/html-system) ![GitHub top language](https://img.shields.io/github/languages/top/luangustavofilipov/html-system)
</br>

## Como funciona?

<hr>

* `Primeiro clone o repositório do projeto:`
  #### Comando
        git clone https://github.com/luangustavofilipov/html-system.git
  
<br>

* `Após clonar o repositório entre na pasta do projeto`

<br>

* `Agora verifique se o docker e o docker-compose estão instalados:`
    #### Comando
        docker -v
        docker-compose -v
    
<br>

* `Caso não estejam instalos, faça o seguinte:`
    #### Comando

        //Atualize os repositórios do sistema
        sudo apt update -y
        sudo apt upgrade -y

        //Instale o docker e o docker-compose
        sudo apt istall docker.io docker-compose -y
        
        //Verifique a versão de cada um
        docker -v
        docker-compose -v
<br>

* `Após instalar pela primeira vez o docker faça o seguinte:`
    #### Comando
        sudo groupadd docker
        sudo gpasswd -a $USER docker
        newgrp docker

<br>

* `Agora vamos instalar o asdf para instalar o nodejs`
    #### Comando
        //Dependências
    	sudo apt install curl git dirmngr gpg curl gawk -y

        //Clone o repositório do ASDF
        git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0
 
 <br>

 * `Caso esteja usando o zsh, adicione "asdf" sem as aspas na seção de plugins do arquivo .zshrc`
  
<br>

* `Caso contrário, realize o seguinte:`
    #### Comando
        //Adicione o seguinte ao arquivo ~/.bashrc:
        . $HOME/.asdf/asdf.sh

        //Autocomplete precisa ser configurado adicionando ao arquivo .bashrc a seguinte linha:
        . $HOME/.asdf/completions/asdf.bash

<br>

* `Faça o logout e entre novamente no terminal para instalar o nodejs  com o asdf`
    #### Comando
        //Instale o nodejs com o ASDF
        asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
        asdf install nodejs latest
        asdf global nodejs latest

* `Agora volte para a pasta clonada referente a este projeto e execute:`
    #### Comando
        docker-compose up

* `Verifique se funcionou entrando em:` <i>http://localhost:3000</i>