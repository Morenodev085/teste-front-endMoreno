/** 📚 ESTUDAR: compare os nomes e tipos com a resposta real do endpoint. */
export interface Produto {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}
export interface RespostaProdutos {
  success: boolean;
  products: Produto[];
}