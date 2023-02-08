import { Mountain } from "./models/Mountain";
const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];
export const findNameOfTallestMountain = (
  array: Mountain[]
): string | undefined => {
  return array.reduce((ac, cv) => (cv.height > ac.height ? cv : ac)).name;
};
findNameOfTallestMountain(mountains);
console.table(findNameOfTallestMountain(mountains));
