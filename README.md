# Instruções para clonar o repositório e rodar o código

## Instalar o Git

Antes de clonar o repositório é preciso instalar o git.

1. Instalando no Linux

- Se você deseja instalar o Git no Linux através de um instalador binário, você pode geralmente fazê-lo através da ferramenta básica de gerenciamento de pacotes que vem com sua distribuição. Se você usar Fedora por exemplo, você pode usar o yum:

$ sudo yum install git-all

- Se você usar uma distribuição baseada em Debian como o Ubuntu, use o apt-get:

$ sudo apt-get install git-all

- Para mais opções de instruções de como instalar o Git em outros vários sistemas Unix, veja na página do Git, em http://git-scm.com/download/linux.

2. Instalando no Mac

- Existem várias maneiras de instalar o Git em um Mac. O mais fácil é provavelmente instalar as ferramentas de linha de comando Xcode. No Mavericks (10,9) ou acima, você pode fazer isso simplesmente rodando git a partir do Terminal pela primeira vez. Se você não tiver o Git instalado, ele irá pedir-lhe para instalá-lo.

- Se você quiser uma versão mais atualizada, você também pode instalá-lo através de um instalador binário. Um instalador OSX Git é mantido e disponível para download no site do Git, pelo http://git-scm.com/download/mac.

3. Instalando no Windows

- Há também algumas maneiras de instalar o Git no Windows. A compilação mais oficial está disponível para download no site do Git. Basta ir ao http://git-scm.com/download/win e o download começará automaticamente. Note que este é um projeto chamado Git para Windows (também chamado msysGit), que é algo separado do Git; para mais informações sobre isso, vá para http://msysgit.github.io/.

- Outra forma fácil de obter Git instalada é através da instalação de GitHub para Windows. O instalador inclui uma versão de linha de comando do Git, bem como a GUI. Ele também funciona bem com o PowerShell, e configura o cache de credenciais sólidas e as devidas configurações CRLF. Vamos saber mais sobre isso um pouco mais tarde, por enquanto basta dizer que estas são coisas que você deveria ter. Você pode baixá-lo da página GitHub para Windows, em http://windows.github.com.


### Clonar o repositório
1. Na página principal do repositório do GitHub, acima da lista de arquivos, clique em Código ou Code. 

2. Copie a URL do repositório.
- Use HTTPS Para clonar o repositório usando HTTPS, em "HTTPS", clique no botão ao lado da url para copiar. 

3. Abra o terminal dentro da pasta que irá receber o clone do projeto e em seguida insira o comando sem as aspas "git clone https://github.com/USERNAME/REPOSITORY" substitua essa url fictícia pela url que copiamos.

- Pressione **ENTER** para criar seu clone local.

4. Caso prefira ou seja necessário utilize o Visual Studio Code para clonar o projeto.

- Abra o Visual Studio Code utilize a tecla de atalho [Ctrl + K  + O] para abrir o explorador de arquivos e abrir a pasta local que irá receber o clone do projeto ou utilize o menu superior do software. Selecione a pasta que irá receber o clone do projeto, caso ainda não tenha criado poderá criar dentro do próprio explorador de arquivos do Visual Studio Code.

- Abra o terminal do Visual Studio Code para isso utilize a tecla de atalho [Ctrl + Shift  + `] ou navegue no menu superior ate terminal -> novo terminal. 

- insira o comando sem as aspas "git clone https://github.com/USERNAME/REPOSITORY" substitua essa url fictícia pela url que copiamos.

- Pressione **ENTER** para criar seu clone local.

## Rodar o código
- Utilize o explorador de arquivos para ir até a pasta que recebeu o clone do projeto, dentro da pasta estará todos os arquivos. Abra o arquivo "index.html".

- Obs: Não há necessidade de utilizar um **localhost** para tratar os dados pelo arquivo PHP. Pois os dados estão sendo enviados para um servidor online. Os dados estão públicos em www.marcostulio.in/uploads e o código fonte do arquivo PHP também.
