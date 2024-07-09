"use client";
import { useState } from "react";
import { Toast } from "./Toast";

type Props = {};

export function Newsletter({}: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [subscriptionSuccessful, setSubscriptionSuccessful] =
    useState<boolean>(false);
  // const usersEmailRef = collection(db, "newsletter-subs");

  const handleEmailChange = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    try {
      // await addDoc(usersEmailRef, { email: email });
      setShowModal?.(true);
      setSubscriptionSuccessful(true);
      setTimeout(() => {
        setShowModal?.(false);
      }, 4000);
      setEmail("");
    } catch (err: any) {
      setSubscriptionSuccessful(false);
      setError(err.message);
      setTimeout(() => {
        setShowModal?.(false);
        setError("");
      }, 4000);
    }
  };
  return (
    <section className="relative flex flex-col gap-6 text-[#3B3B3B]">
      {/* TOAST  */}
      <Toast showModal={showModal} setShowModal={setShowModal}>
        <div className="flex items-center gap-2">
          <i
            className={`${
              subscriptionSuccessful && !error
                ? "ri-checkbox-circle-line text-green-500"
                : "ri-error-warning-fill text-red-500"
            } text-xl`}
          ></i>
          {subscriptionSuccessful && !error ? (
            <span>Congratulations, you have subscribed to our newsletter</span>
          ) : (
            <span>{error}</span>
          )}
        </div>
      </Toast>

      {/* ---------------------------  */}
      <h2 className="font-bold text-2xl text-[#212121]">NEWSLETTER</h2>
      <p className="font-exo-2">
        Sign up to our newsletter to receive exclusive offers and updates.
      </p>
      <input
        className="p-4 outline-none font-exo-2 placeholder:text-[#3B3B3B] w-full rounded-[100px] bg-transparent border border-[#6E6E6E]"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button
        disabled={email === ""}
        onClick={handleSubscribe}
        className="bg-[#212121] disabled:bg-[#212121]/80 font-exo-2 text-[#FBC02D] hover:border-black hover:bg-transparent hover:border hover:text-white rounded-[38px] w-[241px] px-6 py-4"
      >
        GET UPDATES
      </button>
    </section>
  );
}
