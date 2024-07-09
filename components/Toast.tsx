export function Toast({ children, showModal, setShowModal }: ModalProps) {
  return (
    <div
      className={`${
        showModal ? "translate-x-0" : "translate-x-[120%]"
      } fixed font-exo-2 z-[99999999999999999] transition-transform ease-in border shadow-lg text-lg sm:text-xl top-3 right-1 bg-white px-2 py-4 w-full max-w-md h-fit flex justify-between items gap-4`}
    >
      {children}

      <svg
        className="cursor-pointer w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        onClick={() => setShowModal?.(false)}
      >
        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
      </svg>
    </div>
  );
}
