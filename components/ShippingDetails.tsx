import { useState } from "react";
import { Custominput } from "./Custominput";
import Image from "next/image";

type Props = {};

export function ShippingDetails({}: Props) {
  const [shipOption, setShipOption] = useState(true);
  const [pickupFromStore, setPickupFromStore] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState();
 
  return (
    <section
      id="shipping_details"
      className="my-[50px] text-[#3B3B3B] flex flex-col gap-4"
    >
      <h1 className="text-2xl font-bold mb-2">Shipping Details</h1>
      <div className="font-exo-2 border border-[#6E6E6E] rounded-[10px] mb-4">
        <div
          className={`flex justify-between border-b border-[#6E6E6E] items-center gap-4 p-[27px] ${
            !shipOption && "opacity-70"
          }`}
        >
          <label
            htmlFor="ship"
            className="text-[#212121] text-lg flex items-center gap-4 w-fit"
          >
            <div
              className={`rounded-full p-[5px] border-2 border-[#212121] flex cursor-pointer 
            `}
            >
              <input
                className={`appearance-none  rounded-full ${
                  shipOption ? "w-2 h-2 bg-[#212121]" : "w-2 h-2"
                } checked:bg-[#212121]`}
                type="radio"
                checked={shipOption}
                onChange={(event: any) => {
                  setShipOption?.(event.target.checked);
                  setPickupFromStore?.(false);
                }}
                name="delivery_option"
                id="ship-product"
              />
            </div>
            Ship
          </label>
          <Image
            className={`w-6 `}
            src="/transport.svg"
            width="0"
            height="0"
            alt="bus icon"
          />
        </div>
        <div
          className={`flex justify-between items-center gap-4 p-[27px] ${
            !pickupFromStore && "opacity-70"
          }`}
        >
          <label
            htmlFor="pickup_from_store"
            className="text-[#212121] text-lg flex items-center gap-4 w-fit"
          >
            <div
              className={`rounded-full border-2 border-[#212121] p-[5px] flex cursor-pointer `}
            >
              <input
                className={`appearance-none rounded-full w-2 h-2 ${
                  pickupFromStore ? "bg-[#212121]" : ""
                } checked:bg-[#212121]`}
                type="radio"
                checked={pickupFromStore}
                onChange={(event: any) => {
                  setPickupFromStore?.(event.target.checked);
                  setShipOption?.(false);
                }}
                name="delivery_option"
                id="pickup_from_store"
              />
            </div>
            Pickup in store
          </label>
          <Image
            className={`w-6 `}
            src="/store.svg"
            width="0"
            height="0"
            alt="store icon"
          />
        </div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <Custominput
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
          type="text"
          name="first_name"
          id="first_name"
          placeholder="First Name"
          required={true}
        />
        <Custominput
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Last Name"
          required={true}
        />
      </div>

      <Custominput
        value={phoneNo}
        onChange={(e: any) => setPhoneNo(e.target.value)}
        type="number"
        name="phone_no"
        id="phone_no"
        placeholder="Phone No"
        required={true}
      />
      <Custominput
        value={address}
        onChange={(e: any) => setAddress(e.target.value)}
        type="text"
        name="address"
        id="address"
        placeholder="Address"
        required={true}
      />
      <Custominput
        value={apartment}
        onChange={(e: any) => setApartment(e.target.value)}
        type="text"
        name="apartment"
        id="apartment"
        placeholder="Apartment, suite, etc (optional)"
        required={false}
      />
      <div className="flex gap-4 flex-col md:flex-row">
        <Custominput
          value={country}
          onChange={(e: any) => setCountry(e.target.value)}
          type="text"
          name="country"
          id="country"
          placeholder="Country"
          required={true}
        />
        <Custominput
          value={city}
          onChange={(e: any) => setCity(e.target.value)}
          type="text"
          name="city"
          id="city"
          placeholder="City"
          required={true}
        />
        <Custominput
          value={postCode}
          onChange={(e: any) => setPostCode(e.target.value)}
          type="number"
          name="postcode"
          id="postcode"
          placeholder="Postcode"
          required={true}
        />
      </div>
    </section>
  );
}
