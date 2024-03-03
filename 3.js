const faturamentoDiario = [
    {
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
]

//Menor faturamento do mes
let menorFaturamento = faturamentoDiario[0].valor;
let diaMenorFaturamento = faturamentoDiario[0].dia;

//Maior faturamento do mes
let maiorFaturamento = faturamentoDiario[0].valor;
let diaMaiorFaturamento = faturamentoDiario[0].dia;

//calculo de media
let soma = 0;
let diasMedia = 30;

faturamentoDiario.forEach((faturamento)=>{
    if (faturamento.valor > 0 && faturamento.valor < menorFaturamento){
        menorFaturamento = faturamento.valor;
        diaMenorFaturamento = faturamento.dia;
    };

    if (faturamento.valor > 0 && faturamento.valor > maiorFaturamento){
        maiorFaturamento = faturamento.valor;
        diaMaiorFaturamento = faturamento.dia;
    };

    soma += faturamento.valor;
    if(faturamento.valor === 0){
        diasMedia--;
    }
})

const mediaFinal = soma/diasMedia;
let diasMediaSuperior = 0;
faturamentoDiario.forEach((faturamento)=>{
    if(faturamento.valor > mediaFinal){
        diasMediaSuperior++; 
    }
})

console.log("O menor faturamento foi no valor de", menorFaturamento, "no dia", diaMenorFaturamento)
console.log("O maior faturamento foi no valor de", maiorFaturamento,"no dia", diaMaiorFaturamento)
console.log("Média de faturamento mensal: ", mediaFinal)
console.log(diasMediaSuperior, "dias tiveram um faturamento superior a média mensal.")