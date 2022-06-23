const botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
const botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
const soma = document.getElementById('soma') as HTMLInputElement;
const campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = `R$ ${0..toFixed(2)}`



const somarAoSaldo = () => {
    let pattern: RegExp = /^\d+|.$/g;

    if (pattern.test(soma.value)) {
        let value: number = parseFloat(soma.value);
        let previousValue: number;
        if (typeof campoSaldo.textContent === 'string') {
            previousValue = parseFloat(campoSaldo.textContent.split(' ')[1]);
        } else {
            previousValue = 0;
        }

        campoSaldo.innerHTML = `R$ ${(value + previousValue).toFixed(2)}`;
        soma.value = '';
    } else {
        alert('Informe um valor numérico!');
        soma.value = '';
    }
}

const limparSaldo = () => {
    campoSaldo.innerHTML = `R$ ${0..toFixed(2)}`
    soma.value = ''
}

botaoAtualizar.addEventListener('click', somarAoSaldo);

botaoLimpar.addEventListener('click', limparSaldo);