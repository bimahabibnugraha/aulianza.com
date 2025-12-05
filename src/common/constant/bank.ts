import { BankAccountsProps } from "../types/bank";

export const BANK_ACCOUNTS: BankAccountsProps[] = [
  {
    number: "901020264738",
    holder: "Bima Habib Nugraha",
    bank: "SeaBank",
    type: "mastercard",
    logo: "/images/payment/seabank.png",
    color: "#e55300",
    className:
      "bg-[#e55300]/5 border-[#e55300] hover:bg-[#e55300] hover:text-white",
  },
  {
    number: "089530324308",
    holder: "Bima Habib Nugraha",
    bank: "DANA",
    type: "ewallet",
    logo: "/images/payment/dana.png",
    color: "#005EB8",
    className:
      "bg-[#005EB8]/5 border-[#005EB8] hover:bg-[#005EB8] hover:text-white",
  },
  {
    number: "089530324308",
    holder: "Bima Habib Nugraha",
    bank: "Gopay",
    type: "mastercard",
    logo: "/images/payment/gopay.png",
    color: "#00b7ffff",
    className:
      "bg-[#00b7ffff]/5 border-[#00b7ffff] hover:bg-[#00b7ffff] hover:text-white",
  },
  {
    number: "089530324308",
    holder: "Bima Habib Nugraha",
    bank: "ShopeePay",
    type: "visa",
    logo: "/images/payment/shopeepay.png",
    color: "#ff2600ff",
    className:
      "bg-[#ff2600ff]/5 border-[#ff2600ff] hover:bg-[#ff2600ff] hover:text-white",
  },
];
