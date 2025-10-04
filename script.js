const vendedor = prompt("Digite o nome do vendedor:");
const tipoVendedor = Number(prompt("Qual tipo de vendedor? ex: 1, 2, 3"));
const quantVenda = Number(prompt("Quanto foi vendido?"));
let bonus;

if (tipoVendedor === 1) {
  if (quantVenda >= 20000 && quantVenda < 49000) {
    bonus = quantVenda * 0.20;
    console.log(`O vendedor ${vendedor}, nível 1, receberá uma bonificação de R$${bonus.toFixed(2)}.`);
  } else if (quantVenda >= 50000 && quantVenda < 79000) {
    bonus = quantVenda * 0.35;
    console.log(`O vendedor ${vendedor}, nível 1, receberá uma bonificação de R$${bonus.toFixed(2)}.`);
  } else if (quantVenda >= 80000) {
    console.log(`O vendedor ${vendedor} foi promovido!`);
  } else if (quantVenda >= 5000) {
    console.log(`O vendedor ${vendedor} está em risco de demissão.`);
  } else {
    console.log(`O vendedor ${vendedor} não atingiu nenhuma meta relevante.`);
  }
}

else if (tipoVendedor === 2) {
  if (quantVenda >= 90000 && quantVenda < 120000) {
    bonus = quantVenda * 0.25;
    console.log(`O vendedor ${vendedor}, nível 2, receberá uma bonificação de R$${bonus.toFixed(2)}.`);
  } else if (quantVenda >= 120000 && quantVenda < 200000) {
    bonus = quantVenda * 0.40;
    console.log(`O vendedor ${vendedor}, nível 2, receberá uma bonificação de R$${bonus.toFixed(2)}.`);
  } else if (quantVenda >= 200000) {
    console.log(`O vendedor ${vendedor} foi promovido do nível 2 ao nível 3!`);
  } else if (quantVenda >= 50000) {
    console.log(`O vendedor ${vendedor} está em risco de rebaixamento para nível 1.`);
  } else {
    console.log(`O vendedor ${vendedor} não atingiu nenhuma meta relevante.`);
  }
}

else if (tipoVendedor === 3) {
  if (quantVenda >= 210000 && quantVenda < 250000) {
    bonus = quantVenda * 0.30;
    console.log(`O vendedor ${vendedor}, nível 3, receberá uma bonificação de R$${bonus.toFixed(2)}.`);
  } else if (quantVenda >= 250000 && quantVenda < 500000) {
    bonus = quantVenda * 0.45;
    console.log(`O vendedor ${vendedor}, nível 3, receberá uma bonificação de R$${bonus.toFixed(2)}.`);
  } else if (quantVenda >= 500000) {
    console.log(`O vendedor ${vendedor} foi promovido a dono da firma!`);
  } else if (quantVenda >= 100000) {
    console.log(`O vendedor ${vendedor} está em risco de rebaixamento para nível 2.`);
  } else {
    console.log(`O vendedor ${vendedor} não atingiu nenhuma meta relevante.`);
  }
}

else {
  console.log("Tipo de vendedor inválido. Por favor, insira 1, 2 ou 3.");
}
