import createClient from "@sanity/client";
/* import imageUrlBuilder from '@sanity/image-url' */


const client = createClient({
  projectId: "yz3kgj6k",     /* sxqtf6yn */
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});

export async function load({ params }) {

    if ( 1 === 1) {
      const data = await client.fetch(`
      *[_type == "project"]{
          projectTitle,
          _id,
          slug,
          "bilde": image.asset->url,
          gallery[]
        }
      `);
    
      if (data) {
        return {
          recipies: data
        };
      }
      return {
        status: 600,
        body: new Error("Internal Server Error")
      };
  
    }
    return {
      status: 400,
        body: new Error("Internal Server Error")
    }
  
  }