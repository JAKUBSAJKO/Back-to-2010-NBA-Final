import { useQuery } from "graphql-hooks";

export interface IResponse {
  allQuestions: IQuestion[];
}

interface IQuestion {
  slug: string;
  title: string;
  question: string;
  answers: string[];
  correctanswer: string;
  initialcomment: string;
  goodcomment: string;
  badcomment: string;
  image: {
    url: string | null;
  };
}

const getSingleQuestion = `
query getSingleQuestion($slug: String!) {
    allQuestions(filter: {slug: {eq: $slug}}) {
      slug
      title
      question
      answers
      correctanswer
      initialcomment
      goodcomment
      badcomment
      image {
        url
      }
    }
  }
`;

export const useQuestion = (slug: string) => {
  const { loading, error, data } = useQuery<IResponse>(getSingleQuestion, {
    variables: { slug: slug },
  });

  return { loading, error, data };
};
