/*
Faturamentos:
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53
*/

let faturamentosMensais = [
    {
        estado:"SP",
        faturamento: 67836.43,
    },
    {
        estado:"RJ",
        faturamento: 36678.66,
    },
    {
        estado:"MG",
        faturamento: 29229.88,
    },
    {
        estado:"ES",
        faturamento: 27165.48,
    },
    {
        estado:"Outros",
        faturamento: 19849.53,
    }
]

let faturamentoTotal = 0;


faturamentosMensais.forEach((element)=>{
    faturamentoTotal+= element.faturamento;
})

faturamentosMensais.forEach((element)=>{
    element.percentual = element.faturamento * 100/ faturamentoTotal;
})

console.log(faturamentosMensais)