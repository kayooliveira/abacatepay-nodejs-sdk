import { AbacatePayError } from "./exceptions";
import { createRequest } from "./requests";
import type {
  CreateBillingData,
  CreateBillingLinkData,
  CreateBillingResponse,
  CreateCustomerData,
  CreateCustomerResponse,
  ListBillingResponse,
  ListCustomerResponse,
} from "./types";

export default function AbacatePay(apiKey: string) {
  if (!apiKey) throw new AbacatePayError("API key is required!");
  const request = createRequest(apiKey);

  return {
    /**
     * Gerencie suas cobranças.
     */
    billing: {
      /**
       * Permite que você crie um link de cobrança pro seu cliente pagar você.
       *
       * @param data Dados da cobrança
       * @returns Dados da cobrança criada ou erro
       */
      create(data: CreateBillingData): Promise<CreateBillingResponse> {
        return request("/billing/create", {
          method: "POST",
          body: JSON.stringify(data),
        });
      },

      /**
       * Permite que você crie um link de cobrança sem precisar de um cliente (o cliente informa os dados dele na hora de pagar).
       *
       * @param data Dados da cobrança
       * @returns Dados da cobrança criada ou erro
       */
      createLink(data: CreateBillingLinkData): Promise<CreateBillingResponse> {
        return request("/billing/create", {
          method: "POST",
          body: JSON.stringify({
            ...data,
            frequency: "MULTIPLE_PAYMENTS",
          }),
        });
      },

      /**
       * Permite que você recupere uma lista de todas as cobranças criadas.
       *
       * @returns Lista de cobranças criadas ou erro
       */
      list(): Promise<ListBillingResponse> {
        return request("/billing/list", { method: "GET" });
      },
    },
    /**
     * Gerencie seus clientes, aqueles que pagam você.
     */
    customer: {
      /**
       * Permite que você crie um novo cliente para a sua loja.
       *
       * @param data Dados do cliente
       * @returns Dados do cliente criado ou erro
       */
      create(data: CreateCustomerData): Promise<CreateCustomerResponse> {
        return request("/customer/create", {
          method: "POST",
          body: JSON.stringify(data),
        });
      },
      /**
       * Permite que você recupere uma lista de todos os seus clientes.
       *
       * @returns Lista de clientes ou erro
       */
      list(): Promise<ListCustomerResponse> {
        return request("/customer/list", { method: "GET" });
      },
    },
  };
}

export { AbacatePayError };
