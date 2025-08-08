export function Login2() {
    let div = document.createElement('div');
    div.className = "login2";
    
    let cuadro = document.createElement('div');
    cuadro.className = "cuadro";
    div.appendChild(cuadro);

    let flecha = document.createElement('img');
    flecha.className = "flecha";
    flecha.src = "../../assets/icons/Back Button.png"; // ruta absoluta desde la raíz
    div.appendChild(flecha);

    let titulo = document.createElement('h1');
    titulo.className = "titulo1"
    titulo.textContent = "Welcome Back!"
    div.appendChild(titulo);

    let span5 = document.createElement('span');
    span5.className = "span5";
    span5.textContent = "Yay! You're back! Thanks for shopping with us. We have excited deals and promotions going on, grab your pick now!"
    div.appendChild(span5);

    let fashion = document.createElement('img');
    fashion.className = "fashion";
    fashion.src = "../../assets/imgs/Fashion.png";
    div.appendChild(fashion);

    let titulo2 = document.createElement('h1');
    titulo2.className = "titulo2"
    titulo2.textContent = "LOG IN"
    div.appendChild(titulo2);

    let span6 = document.createElement('span');
    span6.className = "span6"
    span6.textContent = "Email address"
    div.appendChild(span6);

    let cuadro2 = document.createElement('div');
    cuadro2.className = "cuadro2";
    div.appendChild(cuadro2);

    let email = document.createElement('img');
    email.className = "email";
    email.src = "../../assets/icons/Envelope Simple.png";
    div.appendChild(email);

    let span7 = document.createElement('span');
    span7.className = "span7"
    span7.textContent = "hlo@geeta.co"
    div.appendChild(span7);

    let error = document.createElement('img');
    error.className = "error";
    error.src = "../../assets/icons/Error Circle.png";
    div.appendChild(error);

    let span8 = document.createElement('span');
    span8.className = "span8"
    span8.textContent = "Password"
    div.appendChild(span8);

    let cuadro3 = document.createElement('div');
    cuadro3.className = "cuadro3";
    div.appendChild(cuadro3);

    let candado = document.createElement('img');
    candado.className = "candado";
    candado.src = "../../assets/icons/Lock.png";
    div.appendChild(candado);

    let span9 = document.createElement('span');
    span9.className = "span9"
    span9.textContent = "Enter you password"
    div.appendChild(span9);

    let check = document.createElement('img');
    check.className = "check";
    check.src = "../../assets/icons/check.png";
    div.appendChild(check);

    let span10 = document.createElement('span');
    span10.className = "span10"
    span10.textContent = "Remember me"
    div.appendChild(span10);

    let span11 = document.createElement('span');
    span11.className = "span11"
    span11.textContent = "Forgot Password?"
    div.appendChild(span11);

    let cuadro4 = document.createElement('div');
    cuadro4.className = "cuadro4";
    cuadro4.textContent = "LOG IN"
    div.appendChild(cuadro4);

    let span12 = document.createElement('span');
    span12.className = "span12"
    span12.textContent = "Not registered yet?"
    div.appendChild(span12);

    let span13 = document.createElement('span');
    span13.className = "span13"
    span13.textContent = "Create an Account"
    div.appendChild(span13);


    return div;
}