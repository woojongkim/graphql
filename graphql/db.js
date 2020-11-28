export const people = [
  {
    id: 1,
    name: "woody",
    age: 34,
    gender: "male",
  },
  {
    id: 2,
    name: "inking",
    age: 29,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
