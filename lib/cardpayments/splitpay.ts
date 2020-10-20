export interface ISplitPay {
  linkedAccount: string
  amount?: number
  percent?: number
}

export class SplitPay implements ISplitPay {
  linkedAccount: string
  amount?: number
  percent?: number

  constructor(resp?: ISplitPay) {
    if (resp) {
      if (resp.linkedAccount) {
        this.linkedAccount = resp.linkedAccount
      }
      if (typeof resp.amount === 'number') {
        this.amount = resp.amount
      }
      if (resp.percent) {
        this.percent = resp.percent
      }
    }
  }

  setLinkedAccount(linkedAccount: string) {
    this.linkedAccount = linkedAccount
  }

  getLinkedAccount() {
    return this.linkedAccount
  }

  setAmount(amount: number) {
    this.amount = amount
  }

  getAmount(): number | undefined {
    return this.amount
  }

  setPercent(percent: number) {
    this.percent = percent
  }

  getPercent(): number | undefined {
    return this.percent
  }
}
