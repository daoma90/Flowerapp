export interface Flower {
  id: string;
  __v: {
    numberInt: number;
  };
  _id: {
    oid: string;
  };
  blooming_season: string;
  common_name: string;
  cover_image: string;
  depth: {
    numberInt: number;
  };
  height: [
    {
      numberInt: number;
    },
    {
      numberInt: number;
    }
  ];
  latin_name: string;
  notes: string;
  soil: string[];
  spacing: {
    numberInt: number;
  };
  sun: boolean;
}
