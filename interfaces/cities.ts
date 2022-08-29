export interface ICities {
  _id: string;
  code: number;
  name: string;
  __v: number;
}
export interface INeighbour {
  _id: string;
  code: number;
  name: string;
  __v: number;
  cityId: string;
  city: number;
}
