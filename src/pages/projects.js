import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Grid, GridElement } from "../components/Grid";
import GitHubCorner from "../components/GitHubCorner";
import colors from "../utils/colors";

export default function({ data }) {
  return (
    <Layout title="Omkar's projects">
      <GitHubCorner
        url={"https://github.com/konaraddi/konaraddi-com-v2"}
        fill={colors.primary}
        color={colors.white}
      />
      <Grid>
        {data.allJson.edges.map(({ node }) => (
          <GridElement key={node.link}>
            <p>
              <a href={node.link} target="_blank" rel="noopener noreferrer">
                <strong>{node.name}</strong>
              </a>
              <br />
              {node.description}
            </p>
          </GridElement>
        ))}
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query {
    allJson {
      edges {
        node {
          name
          link
          description
          tech
        }
      }
    }
  }
`;
