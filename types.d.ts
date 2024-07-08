type ProductProps = {
  id: number;
  name: string;
  price: number;
  category: string;
};

type CartProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

interface ModalProps {
  modalHeader?: string;
  children: ReactElement;
  showModal?: boolean;
  setShowModal?: (x: boolean) => void;
}
