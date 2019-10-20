import React, { Component } from 'react';

class TextCounter extends Component {

    //caso a propriedade: limit nao seja passada, o default evitara possiveis erros.
    static defaultProps = {
        limit: 15
    }

    constructor(props) {
        super(props);
        //variavel controlando determinado limite da aplicação,
        this.limit = 10
        //dicionario controlando determinado estado da aplicação,
        this.state = {
            totalChars: 0,
            text: ''
        }

        this.handleChange = this.handleChange.bind(this); // a função bind, permite que o js permaneça no atual scopo de execução, caso contrário ele perde o acesso as propriedades dos componentes.

    }   

    // criando uma função pra controlar o <textarea/>
    handleChange(event) {
        const element = event.target,
            text = element.value;

        if (text.length <= this.props.limit) {
            this.setState({
                totalChars: text.length,
                // text: element.value
                text

            })

        }

    }

    render() {
        const { state, props } = this; // define o objeto JS como global.
        /* para alterar o estado do objeto
this.setState = ({
    totalChars: 5
})*/

        // declarando a div como um componente
        return (
            <div>
                <h1>Meu Contador</h1>
                <textarea onChange={this.handleChange} value={state.text} />
                <div>
                    <strong>Total: </strong> {state.totalChars} / {props.limit}
                </div>
            </div>

        )

    }


}

export default TextCounter;// permite chamar o componente em outro arquivo