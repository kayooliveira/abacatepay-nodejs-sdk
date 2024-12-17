export type BillingStatus =
  | 'PENDING'
  | 'EXPIRED'
  | 'CANCELLED'
  | 'PAID'
  | 'REFUNDED';
export type BillingMethods = 'PIX';
export type BillingKind = 'ONE_TIME';

export type IBilling = {
  id: string;
  url: string;
  amount: number;
  status: BillingStatus;
  devMode: boolean;
  methods: BillingMethods[];
  products: { id: string; externalId: string; quantity: number }[];
  frequency: BillingKind;
  nextBilling: string | null;
  customer: ICustomer;
  metadata: IBillingMetadata;
  createdAt: string;
  updatedAt: string;
};

export type IBillingMetadata = {
  fee: number;
  returnUrl: string;
  completionUrl: string;
};

export type CreateBillingData =
  | {
      frequency: BillingKind;
      methods: BillingMethods[];
      products: {
        externalId: string;
        name: string;
        quantity: number;
        price: number;
        description?: string;
      }[];
      returnUrl: string;
      completionUrl: string;
      customerId: string;
    }
  | {
      frequency: BillingKind;
      methods: BillingMethods[];
      products: {
        externalId: string;
        name: string;
        quantity: number;
        price: number;
        description?: string;
      }[];
      returnUrl: string;
      completionUrl: string;
      customer: ICustomerMetadata;
    };

export type CreateBillingResponse =
  | {
      error: string;
    }
  | {
      error: null;
      data: IBilling;
    };
export type ListBillingResponse =
  | {
      error: string;
    }
  | {
      error: null;
      data: IBilling[];
    };

export type ICustomerMetadata = {
  name?: string;
  cellphone?: string;
  email: string;
  taxId?: string;
};

export type ICustomer = {
  id: string;
  metadata: ICustomerMetadata;
};

export type CreateCustomerData = ICustomerMetadata;

export type CreateCustomerResponse =
  | {
      error: string;
    }
  | {
      error: null;
      data: ICustomer;
    };
export type ListCustomerResponse =
  | {
      error: string;
    }
  | {
      error: null;
      data: ICustomer[];
    };

export interface IAbacatePayBilling {
  create(data: CreateBillingData): Promise<CreateBillingResponse>;
  list(): Promise<ListBillingResponse>;
}

export interface IAbacatePayCustomerBilling {
  create(data: CreateCustomerData): Promise<CreateCustomerResponse>;
  list(): Promise<ListCustomerResponse>;
}

export interface IAbacatePay {
  billing: IAbacatePayBilling;
  customer: IAbacatePayCustomerBilling;
}
