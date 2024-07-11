import { useState } from "react";
import { Custominput } from "./Custominput";
import Image from "next/image";

type Props = {};

export function PaymentMethod({}: Props) {
  const [payWithCreditCard, setPayWithCreditCard] = useState(true);
  const [payWithPaypal, setPayWithPaypal] = useState(false);
  const [payWithGiftCard, setPayWithGiftCard] = useState(false);

  const [cardNo, setCardNo] = useState();
  const [cardSecurityCode, setCardSecurityCode] = useState();
  const [cardExpirationDate, setCardExpirationDate] = useState("");
  const [cardName, setCardName] = useState("");

  return (
    <section
      id="payment_method"
      className="mt-[50px] mb-[91px] text-[#3B3B3B] flex flex-col gap-4"
    >
      <h1 className="text-2xl font-bold mb-2">How would you like to pay?</h1>
      <div className="flex flex-col gap-[14px] mt-4 mb-7 font-exo-2">
        {/* credit_card_payment */}
        <label
          htmlFor="credit_card_payment"
          className={`text-[#212121] ${
            !payWithCreditCard && "opacity-70"
          } text-lg flex items-center gap-4 w-fit`}
        >
          <div
            className={`rounded-full p-[5px] border-2 border-[#212121] flex cursor-pointer 
            `}
          >
            <input
              className={`appearance-none w-2 h-2 rounded-full ${
                payWithCreditCard ? "bg-[#212121]" : ""
              } checked:bg-[#212121]`}
              type="radio"
              checked={payWithCreditCard}
              onChange={(event: any) => {
                setPayWithCreditCard?.(event.target.checked);
                setPayWithPaypal?.(false);
                setPayWithGiftCard?.(false);
              }}
              name="payment-method"
              id="credit_card_payment"
            />
          </div>
          Pay with Credit card
        </label>
        {/* paypal_payment */}
        <label
          htmlFor="paypal_payment"
          className={`text-[#212121] ${
            !payWithPaypal && "opacity-70"
          } text-lg flex items-center gap-4 w-fit`}
        >
          <div
            className={`rounded-full p-[5px] border-2 border-[#212121] flex cursor-pointer 
            `}
          >
            <input
              className={`appearance-none w-2 h-2 rounded-full ${
                payWithPaypal ? " bg-[#212121]" : ""
              } checked:bg-[#212121]`}
              type="radio"
              checked={payWithPaypal}
              onChange={(event: any) => {
                setPayWithPaypal?.(event.target.checked);
                setPayWithCreditCard?.(false);
                setPayWithGiftCard?.(false);
              }}
              name="payment-method"
              id="paypal_payment"
            />
          </div>
          Pay with Paypal
        </label>
        {/* giftcard_payment */}
        <label
          htmlFor="giftcard_payment"
          className={`text-[#212121] ${
            !payWithGiftCard && "opacity-70"
          } text-lg flex items-center gap-4 w-fit`}
        >
          <div
            className={`rounded-full p-[5px] border-2 border-[#212121] flex cursor-pointer 
            `}
          >
            <input
              className={`appearance-none w-2 h-2 rounded-full ${
                payWithGiftCard ? "bg-[#212121]" : ""
              } checked:bg-[#212121]`}
              type="radio"
              checked={payWithGiftCard}
              onChange={(event: any) => {
                setPayWithGiftCard?.(event.target.checked);
                setPayWithCreditCard?.(false);
                setPayWithPaypal?.(false);
              }}
              name="payment-method"
              id="giftcard_payment"
            />
          </div>
          Use gift card
        </label>
      </div>
      <div className="relative">
        <Custominput
          value={cardNo}
          onChange={(e: any) => setCardNo(e.target.value)}
          type="number"
          name="card_number"
          id="card_number"
          placeholder="Card Number"
          required={true}
        />
        <Image
          className="w-6 h-6 absolute top-4 right-6"
          src="/padlock.svg"
          width="0"
          height="0"
          alt="logo"
          priority
        />
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <Custominput
          value={cardExpirationDate}
          onChange={(e: any) => setCardExpirationDate(e.target.value)}
          type="text"
          name="expiration_date"
          id="expiration_date"
          placeholder="Expiration date (MM/YY)"
          required={true}
        />
        <Custominput
          value={cardSecurityCode}
          onChange={(e: any) => setCardSecurityCode(e.target.value)}
          type="number"
          name="security_code"
          id="security_code"
          placeholder="Security code"
          required={true}
        />
      </div>
      <Custominput
        value={cardName}
        onChange={(e: any) => setCardName(e.target.value)}
        type="text"
        name="card_name"
        id="card_name"
        placeholder="Name on card"
        required={true}
      />
    </section>
  );
}
