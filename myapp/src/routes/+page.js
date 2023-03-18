import createClient from "@sanity/client";
/* import imageUrlBuilder from '@sanity/image-url' */


const client = createClient({
  projectId: "n12skz8w",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});

export async function load({ params }) {

    if ( 1 === 1) {
      const data = await client.fetch(`*[_type == "recipie"]{
        "coverimageUrl": coverimage.asset->url,
        "ingredientimageUrl": ingredientImage.asset->url,
        recipieTitle,
        level,
        total, 
        active,
        slug,
      }`);
    
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