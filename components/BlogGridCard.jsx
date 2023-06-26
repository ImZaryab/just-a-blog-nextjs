/* eslint-disable react/prop-types */
function BlogGridCard({ data }) {
  return (
    <div
            key={data?.id}
            className="dark:text-white pt-12 pb-4 px-4 outline outline-4 flex flex-col justify-between"
          >
            <div>
              {/* Title */}
              <h2 className="text-lg sm:text-3xl font-light">{data?.title}</h2>

              {/* Tags */}
              <div className="flex gap-2 pt-4">
                {data.tags &&
                  data.tags.map((tag) => (
                    <p
                      key={tag}
                      className="text-white dark:text-black bg-black dark:bg-white py-2 px-4 selection:bg-white selection:text-black"
                    >
                      {tag}
                    </p>
                  ))}
              </div>
            </div>
            <div className="flex justify-end items-end place-items-end">
              <a href={`/blogposts/${data.slug}`}>
                  <p className="pt-6">Continue Reading...</p>
              </a>
            </div>
          </div>
  )
}

export default BlogGridCard