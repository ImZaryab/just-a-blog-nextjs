import { Console } from "console";

async function Page({ params }) {
  const blogpostBlocks = await fetch(
    "http://localhost:3000/api/getBlogpostBlocks",
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({ slug: params.slug }),
    }
  );

  const blogpostBlocksResponse = await blogpostBlocks.json();

  const html = blogpostBlocksResponse.response;

  //replace the - in slug with blank space
  const Topic = params.slug.split("-").join(" ");

  return (
    <>
      <section className="p-2 xl:p-4 outline-4 outline mt-1">
        <h1 className="text-md sm:text-lg md:text-2xl xl:text-4xl"><b>{Topic}</b></h1>
      </section>

      <section className="p-2 xl:p-4 sm:text-lg">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </section>
    </>
  );
}

export default Page;
