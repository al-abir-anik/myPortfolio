// app/api/allWorks/route.js

const allWorks = [
  {
    url: "zoho",
    title: "Zoho",
    year: "2023",
    description:
      "This project tackles core challenge by building a intuitive digital experience focused on maximizing conversions.",
    image: "/images/works-bg.png",
  },
  {
    url: "poho",
    title: "Poho",
    year: "2022",
    description:
      "This project tackles core challenge by building a intuitive digital experience focused on maximizing conversions.",
    image: "/images/works-bg.png",
  },
];

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const workId = searchParams.get("url");

//   if (workId) {
//     const work = allWorks.find((w) => w.url === workId);
//     return Response.json(work || {});
//   }

//   return Response.json(allWorks);
// }
