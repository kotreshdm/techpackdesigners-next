const Constants = {
  baseURL: "http://localhost:3000/",
  Navigation: {
    home: "/",
    about: "/about",
    services: "/services",
    techPack: "/techpack",
    portfolio: "/portfolio",
    manufacturing: "/manufacturing",
    blog: "/blog",
    contactUs: "/contact",
    signIn: "/sign-in",
    dashBoard: "/dashboard",
    categoty: "/category/",
    search: "/search",
  },
  // S3: {
  //   S3_BUCKET: import.meta.env.VITE_S3_BUCKET,
  //   REGION: import.meta.env.VITE_REGION,
  //   ACCESS_KEY: import.meta.env.VITE_ACCESS_KEY,
  //   SECRET_ACCESS_KEY: import.meta.env.VITE_SECRET_ACCESS_KEY,
  // },
  SocialMedia: {
    fb: "fburl",
    twitter: "fburl",
    google: "fburl",
    linkedIn: "fburl",
  },
  apiRoutes: {
    getAllPosts: "http://localhost:3000/api/get-posts",
    getAllCategories: "http://localhost:3000/api/get-categories",
    getpostOnslug: "http://localhost:3000/api/posts",
  },
  SEO: {
    title: "Clothing Designer | Tech Pack Designer | Clothing Manufacturer",
    description:
      "Clothing Designer, Apparel Tech Pack Designer  and Clothing Manufacturer Assist Brands in Apparel Design, Tech Packs and Garment Manufacturing",
    keywords:
      "Clothing Designer,Clothing Manufacturer, Clothing Design, Apparel Tech Pack, Garment Production, Garment Manufacturer, Clothing Line Sheet, Tech Pack Designer,Fashion Studio, Measurement Spec Sheet,Garment Producer, Garment Manufacturer, Apparel Manufacturer, designer studio clothing,garment spec sheet, apparel line sheet, Freelance Fashion Designer",
  },
};
export default Constants;
