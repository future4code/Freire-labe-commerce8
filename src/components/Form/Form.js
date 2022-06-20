import React from 'react';
import styled from 'styled-components';


class Form extends React.Component {
    render() {
        return (
                <div className='contato'>
                    <form>
                        <label for="nomesobrenome">Nome e sobrenome</label>
                        <input type="text" id="nomesobrenome" class="input-padrao" required/>

                        <label for="email">Email</label>
                        <input type="email" id="email" class="input-padrao" required placeholder="seuemail@dominio.com"/>

                        <label for="telefone">Telefone</label>
                        <input type="tel" id="telefone" class="input-padrao" required placeholder="(XX) XXXXX-XXXX"/>

                        <label for="mensagem">Mensagem</label>
                        <textarea cols="70" rows="10" id="mensagem" class="input-padrao" required></textarea>

                        <div>
                            <legend>Como prefere o nosso contato?</legend>
                            <label for="radio-email"><input type="radio" name="contato" value="email" id="radio-email"/> Email</label>

                            <label for="radio-telefone"><input type="radio" name="contato" value="telefone" id="radio-telefone"/> Telefone</label>

                            <label for="radio-whatsapp"><input type="radio" name="contato" value="whatsapp" id="radio-whatsapp" checked/> WhatsApp</label>
                        </div>

                        <label class="checkbox"><input type="checkbox" checked/>Gostaria de receber nossas novidades por email?</label>

                        <input type="submit" value="Enviar formulário" class="enviar"/>
                    </form>
                </div>
        )
    }
}

export default Form;



