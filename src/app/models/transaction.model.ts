export class Transaction {
  id: string;
  subtotal: number;
  discount: number;
  shippingCost: number;
  taxPercent: number;
  total: number;
  paid: number;
  change: number;
  orderList: string;
  paymentType: string;
  paymentDetail: string;
  sellerId: string;
  buyerId: string;
  comment: string;
  employeeId: string;
  timestamp: Date;
  transactionId: number;

  constructor() {
    this.subtotal = 0;
    this.discount = 0;
    this.shippingCost = 0;
    this.taxPercent = 0;
    this.total = 0;
    this.paid = 0;
    this.change = 0;
    this.orderList = 'x';
    this.paymentType = 'x';
    this.paymentDetail = 'x';
    this.employeeId = 'x';
    this.sellerId = 'x';
    this.buyerId = 'x';
    this.comment = 'x';
  }
}

export interface ResponseTransaction {
  result: Transaction;
  message: string;
}

export interface ResponseTransactions {
  result: Transaction[];
  message: string;
}
