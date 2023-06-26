import BlogGridCard from './BlogGridCard';

const data = [
  {
    id: 1,
    title: "Learn the fundamentals of React.js",
    tags: ["React.js", "JavaScript"],
  },
  {
    id: 2,
    title: "Deploying a Next.js Web App to Docker",
    tags: ["Nextjs", "Docker"],
  },
  {
    id: 3,
    title: "Utilize Notion as a CMS/Database for Blogs",
    tags: ["Notion", "API"],
  },
  {
    id: 4,
    title: "Utilize Notion as a CMS/Database for Blogs",
    tags: ["Notion", "API"],
  },
  {
    id: 5,
    title: "Utilize Notion as a CMS/Database for Blogs",
    tags: ["Notion", "API"],
  },
  {
    id: 6,
    title: "Utilize Notion as a CMS/Database for Blogs",
    tags: ["Notion", "API"],
  },
  {
    id: 7,
    title: "Utilize Notion as a CMS/Database for Blogs",
    tags: ["Notion", "API"],
  },
  {
    id: 8,
    title: "Utilize Notion as a CMS/Database for Blogs",
    tags: ["Notion", "API"],
  },
];

async function fetchBlogPosts() {
  const blogPosts = await fetch('http://localhost:3000/api/getBlogposts', { cache: 'no-store' })

  if (!blogPosts.ok) {
    throw new Error ('Failed to fetch blogposts!')
  }

  return blogPosts.json();
}

async function BlogsGrid() {

  const blogPostsData = await fetchBlogPosts()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 place-items-stretch mt-1 gap-1">
      {blogPostsData.response &&
        blogPostsData.response.map((item) => (
          <BlogGridCard key={item.id} data={item} />
        ))}

      {blogPostsData.response === 0 && (
        <div className='w-full outline outline-4 col-span-full text-center py-48 text-5xl'>
          No blogposts found!
        </div>
      )}
    </div>
  );
}

export default BlogsGrid;
