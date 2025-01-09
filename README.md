# abacatepay-nodejs-sdk

Official NodeJS SDK for AbacatePay - Accept payments in seconds with a simple integration.

## Installation

```bash
npm install abacatepay-nodejs-sdk
```

## Quick Start

```js
import AbacatePay from 'abacatepay';

// Initialize the SDK with your API key
const abacate = AbacatePay('your_api_key');
```

## Usage

### Creating a Payment

```js
// Create a one-time payment
const billing = await abacate.billing.create({
  frequency: "ONE_TIME",
  methods: ["PIX"],
  products: [
    {
      externalId: "PRO-PLAN",
      name: "Pro plan",
      quantity: 1,
      price: 1000 // Amount in cents
    }
  ],
  returnUrl: "https://yoursite.com/app",
  completionUrl: "https://yoursite.com/pagamento/sucesso",
  customer: {
    email: 'customer@example.com'
  }
});
```

### Response

```js
{
  _id: 'bill_12345667',
  url: 'https://abacatepay.com/pay/bill_12345667', // Payment URL for your customer
  amount: 1000,
  status: 'PENDING',
  devMode: true,
  methods: ['PIX'],
  frequency: 'ONE_TIME',
  nextBilling: null,
  customer: {
    id: 'cust_12345',
    metadata: {
      email: 'customer@example.com'
    }
  },
  createdAt: '2024-11-04T18:38:28.573',
  updatedAt: '2024-11-04T18:38:28.573',
}
```

## Payment Methods

Currently supported payment methods:
- PIX (Instant Brazilian payment system)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
