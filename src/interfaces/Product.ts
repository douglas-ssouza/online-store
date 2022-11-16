/* eslint-disable @typescript-eslint/naming-convention */
export default interface Product {
  id: string;
  site_id: string;
  title: string;
  seller: object;
  price: number;
  prices: object;
  sale_price: null;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: object;
  address: object;
  promotions: any[];
  shipping: object;
  seller_address: object;
  attributes: any[];
  original_price: null;
  category_id: string;
  official_store_id: null;
  domain_id: string;
  catalog_product_id: null;
  tags: any[];
  order_backend: number;
  use_thumbnail_id: boolean;
  offer_score: null;
  offer_share: null;
  match_score: null;
  winner_item_id: null;
  melicoin: null;
  discounts: null;
  inventory_id: null;
// eslint-disable-next-line @babel/semi
}
