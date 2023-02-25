import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "789pao4f",
  dataset: "production",
  apiVersion: "2021-08-31", // use a UTC date string
  token:
    "skFWf22eF3ezqYt0W4wfLveRdOYe4dMfrg3ka20nYgebVZiBBTsYoTZvpYVocdnS5aAK2XkhwvaKXaWTX7Ade5BojvXOn4hyZ6HxlUeX17DQYyNN6pbEFcReCmcC3YzEhMmSEFXSRvzxTxtQfFaxv43UUQYZH9oszGKv83tIgyrP2gUKlumh", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;

// const options = {
//   projectId: "789pao4f",
//   dataset: "production",
//   token:
//     "skFWf22eF3ezqYt0W4wfLveRdOYe4dMfrg3ka20nYgebVZiBBTsYoTZvpYVocdnS5aAK2XkhwvaKXaWTX7Ade5BojvXOn4hyZ6HxlUeX17DQYyNN6pbEFcReCmcC3YzEhMmSEFXSRvzxTxtQfFaxv43UUQYZH9oszGKv83tIgyrP2gUKlumh",
// };
// const client = sanityClient({
//   ...options,
//   useCdn: process.env.NODE_ENV === "production",
// });
