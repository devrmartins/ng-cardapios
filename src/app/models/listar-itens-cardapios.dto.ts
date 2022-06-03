import { Item } from "./item";

export interface ListarItensCardapiosDTO {
  id: string;
  titulo: string;
  itens: Item[];
}
