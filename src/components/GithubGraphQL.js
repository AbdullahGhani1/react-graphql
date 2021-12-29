import { useEffect } from "react";
import axios from "axios"; // for API Calling

// fetch
//  ajaxCall
const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`, // access token
  },
});

function GithubGraphQL() {
  // First Method
  //   const feetchData_js = async (organizationName) => {
  //     const QUERY_ORGANIZATION = `query{
  //         organization(login:"${organizationName}"){
  //             name
  //             description
  //             url
  //             createdAt
  //         }
  //         viewer{
  //             login
  //             email
  //             company
  //             repositories(first:5){
  //                 edges{
  //                     node{
  //                         name
  //                     }
  //                 }
  //             }

  //         }
  //       }`;
  //     const res = await api.post("/graphql", {
  //       query: QUERY_ORGANIZATION
  //     });
  //     console.log("GraphQL Response: ", res);
  //   };
  //   =================================================================================================

  //   const feetchData_js = async (organizationName) => {
  //     const QUERY_ORGANIZATION = `query queryOrganization($organizationName: String!){
  //           organization(login:"$organizationName"){
  //               name
  //               description
  //               url
  //               createdAt
  //           }
  //           viewer{
  //               login
  //               email
  //               company
  //               repositories(first:5){
  //                   edges{
  //                       node{
  //                           name
  //                       }
  //                   }
  //               }
  //           }
  //         }`;
  //     const res = await api.post("/graphql", {
  //       query: QUERY_ORGANIZATION,
  //       variables: { organizationName },
  //     });
  //     console.log("GraphQL Response: ", res);
  //   };

  // =================Mutation =============
  const addStar = async (repositoryId) => {
    const MUTATION_ADD_START = `mutation AddStartToMyRepo($abc: ID!){
        addStar(input: {starrableId: $abc}){
            starrable {
                viewerHasStarred
            }
        }
    }`;
    const {
      data: { data: addStar },
    } = await api.post("/graphql", {
      query: MUTATION_ADD_START,
      variables: { abc: repositoryId },
    });
    console.log("GraphQL Response: ", addStar);
  };

  useEffect(() => {
    // feetchData_js("google"); //querry
    addStar("R_kgDOGmNF5w"); // Mutation
  }, []);

  return (
    <div>
      <h3>User Data</h3>
      <h3>User Repo Data</h3>
    </div>
  );
}

export default GithubGraphQL;
