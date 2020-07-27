import React from 'react';

function ButtonLink(props) {
    //props => { className: "Nome da Classe", href: "link do botão"  }
    return (
        <a className={props.className} href={props.href}>
            Novo Vídeo
        </a>
    );
}

export default ButtonLink; 