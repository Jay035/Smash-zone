type CartProps = {
  quantity: number;
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  stock_id: string | null;
  product_image: any[];
  categories: any[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: any[];
  photos: [
    {
      model_name: string;
      model_id: string;
      organization_id: string;
      filename: string;
      url: string;
      is_featured: boolean;
      save_as_jpg: boolean;
      is_public: boolean;
      file_rename: boolean;
      position: number;
    }
  ];
  current_price: [
    {
      NGN: [boolean, null, []];
    }
  ];
  stocks: any | null;
  is_deleted: boolean;
  available_quantity: number | null;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: any | null;
  featured_reviews: any | null;
  unavailability: any[];
};

interface ModalProps {
  modalHeader?: string;
  children?: ReactElement;
  showModal?: boolean;
  setShowModal?: (x: boolean) => void;
  handleClick?: (x: any) => void;
  item?: ProductItem;
}

interface Product {
  available_quantity: number;
  buying_price: number | null;
  categories: string[];
  current_price: CurrencyPrice[];
  date_created: string;
  description: string;
  discounted_price: number | null;
  extra_infos: any | null;
  id: string;
  is_available: boolean;
  is_deleted: boolean;
  is_service: boolean;
  last_updated: string;
  name: string;
  organization_id: string;
  parent: any | null;
  parent_product_id: string | null;
  photos: Photo[];
  previous_url_slugs: any | null;
  product_image: any[];
  selling_price: number | null;
  unavailable: boolean;
  unavailable_end: string | null;
  unavailable_start: string | null;
  unique_id: string;
  url_slug: string;
  user_id: string;
}

interface Photo {
  file_rename: boolean;
  filename: string;
  is_featured: boolean;
  is_public: boolean;
  model_id: string;
  model_name: string;
  organization_id: string;
  position: number;
  save_as_jpg: boolean;
  url: string;
}

// interface ProductData {
//   debug: any | null;
//   items: Product[];
// }

interface ProductItem {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  stock_id: string | null;
  product_image: any[];
  categories: any[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: any[];
  photos: [
    {
      model_name: string;
      model_id: string;
      organization_id: string;
      filename: string;
      url: string;
      is_featured: boolean;
      save_as_jpg: boolean;
      is_public: boolean;
      file_rename: boolean;
      position: number;
    }
  ];
  current_price: [
    {
      NGN: [boolean, null, []];
    }
  ];
  stocks: any | null;
  is_deleted: boolean;
  available_quantity: number | null;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: any | null;
  featured_reviews: any | null;
  unavailability: any[];
}

interface ProductResponse {
  items: ProductItem[];
}
