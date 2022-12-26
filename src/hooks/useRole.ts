import { useQuery } from "graphql-hooks";

interface IAllRule {
  allRules: IRole[];
}

interface IRole {
  id: string;
  text: string;
}

const getAllRules = `
query getAllRules {
    allRules(orderBy: _createdAt_ASC) {
      id
      text
    }
  }
`;

export const useRole = () => {
  const { data, loading, error } = useQuery<IAllRule>(getAllRules);
  return { data, loading, error };
};
