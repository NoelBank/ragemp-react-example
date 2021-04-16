export interface ShopResponse {
  Name: "Kleidungsladen";
  Products: ProductsEntity[];
}
export interface ProductsEntity {
  ID: number;
  Name: string;
  Type: string;
  Variants?: number[];
  Price: number;
}

const shopResponseMock: ShopResponse = {
  Name: "Kleidungsladen",
  Products: [
    {
      ID: 1,
      Name: "Schacks",
      Type: "Schuhe",
      Variants: [0, 1, 2, 4],
      Price: 20,
    },
    {
      ID: 2,
      Name: "Abidas Classic",
      Type: "Schuhe",
      Variants: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      Price: 20,
    },
    {
      ID: 3,
      Name: "The Boatguys",
      Type: "Schuhe",
      Variants: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      Price: 20,
    },
    {
      ID: 4,
      Name: "Shiny Business",
      Type: "Schuhe",
      Variants: [0, 7, 12, 15],
      Price: 20,
    },
    {
      ID: 5,
      Name: "Flippige Flops",
      Type: "Schuhe",
      Variants: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      Price: 20,
    },
    {
      ID: 6,
      Name: "Frengler Jeans",
      Type: "Hose",
      Variants: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      Price: 20,
    },
    {
      ID: 7,
      Name: "Skinny Jeans",
      Type: "Hose",
      Variants: [0, 1, 2, 3, 4],
      Price: 20,
    },
    {
      ID: 8,
      Name: "XWild Cargo",
      Type: "Hose",
      Variants: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      Price: 20,
    },
    {
      ID: 9,
      Name: "Nice Badehose",
      Type: "Hose",
      Variants: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      Price: 20,
    },
    {
      ID: 10,
      Name: "OneSuit Laufhose",
      Type: "Hose",
      Variants: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Price: 20,
    },
  ],
};

export default shopResponseMock;
