import { BankAccountsProps } from "../types/bank";

export const BANK_ACCOUNTS: BankAccountsProps[] = [
  {
    number: "901020264738",
    holder: "Bima Habib Nugraha",
    bank: "SeaBank",
    type: "mastercard",
    logo: "/images/payment/bni.png",
    color: "#e55300",
    className:
      "bg-[#e55300]/5 border-[#e55300] hover:bg-[#e55300] hover:text-white",
  },
  {
    number: "089530324308",
    holder: "Bima Habib Nugraha",
    bank: "DANA",
    type: "mastercard",
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
      "bg-[#0066ae]/5 border-[#0066ae] hover:bg-[#0066ae] hover:text-white",
  },
  {
    number: "089530324308",
    holder: "Bima Habib Nugraha",
    bank: "ShopeePay",
    type: "visa",
    logo: "/images/payment/permata.png",
    color: "#ff2600ff",
    className:
      "bg-[#6e9123]/5 border-[#6e9123] hover:bg-[#6e9123] hover:text-white",
  },
];
