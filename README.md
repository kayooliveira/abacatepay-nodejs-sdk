# abacatepay-nodejs-sdk
AbacatePay NodeJS SDK for you to start receiving payments in seconds

## exemplo
```
import AbacatePay from 'abacatepay';

const abacate = AbacatePay('{{ key }}');

const billing = abacate.billing.create({
  frequency: "ONE_TIME",
  methods: ["PIX"],
  products: [
    {
      externalId: "PLANO-PRO",
      name: "Plano PRO",
      quantity: 1,
      price: 1000
    }
  ],
  returnUrl: "https://meusite.com/app",
  completionUrl: "https://meusite.com/pagamento/sucesso",
  automaticTaxReceipt: true
});

console.log(billing)
/*
{
  _id: 'bill_12345667',
  url: 'https://abacatepay.com/pay/bill_12345667',
  amount: 1000,
  status: 'PENDING',
  devMode: true,
  methods: ['PIX'],
  frequency: 'ONE_TIME',
  nextBilling: null,
  createdAt: '2024-11-04T18:38:28.573',
  updatedAt: '2024-11-04T18:38:28.573',
}
*/
```
