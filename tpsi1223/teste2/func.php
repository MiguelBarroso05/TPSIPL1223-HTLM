<?php

session_start();
function menu()
{

    for ($i = 1; $i <= 5; $i++) {
        $opt = $i;
        switch ($opt) {
            case '1':
                echo '<li><a href="?nav=quem">Quem</a></li>';
                break;
            case '2':
                echo '<li><a href="?nav=serviços">Serviços</a></li>';
                break;
            case '3':
                echo '<li><a href="?nav=produtos">Produtos</a></li>';
                break;
            case '4':
                echo '<li><a href="?nav=contactos">Contactos</a></li>';
                break;
        }
    }
    if (@$_SESSION["utilizador"] != '') {
        echo '<li><a href="teste/sair.php">Sair</a></li>';    
    }
    else{
        echo '<li><a href="?nav=login">Login</a></li>';
    }
}

function menu_opt_conteudo($nav)
{
    @$nav = $_REQUEST['nav'];
    switch ($nav) {
        case 'quem':
            echo 'Menu 1';
            break;
        case 'serviços':
            echo 'Menu 2';
            break;
        case 'produtos':
            echo 'Menu 3';
            break;
        case 'contactos':
            echo 'Menu 4';
            break;
        case 'login':
            login();
            break;
        case '9':
            break;
        case '10':
            break;
        default:
            echo 'Home';
            break;
    }
}
function login(){
    if(!$_SESSION["utilizador"]){
        echo '
        <form method="post">
        <div class="form-floating mb-3">
            <input class="form-control" id="inputEmail" type="text" name="nome" placeholder="name@example.com" />
            <label for="inputEmail">Nome</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="inputPassword" type="password" name="senha" placeholder="Password" />
            <label for="inputPassword">Password</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
            <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
            <a class="small" href="password.html">Forgot Password?</a>
            <button type="submit" name="login" class="btn btn-primary">Login</button>
        </div>
    </form>
    ';
}
}
?>