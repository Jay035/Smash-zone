type ProductProps = {
  id: number;
  name: string;
  price: string;
  category: string;
};

type CartProps = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

interface ModalProps {
  modalHeader?: string;
  children: ReactElement;
  showModal?: boolean;
  setShowModal?: (x: boolean) => void;
}
