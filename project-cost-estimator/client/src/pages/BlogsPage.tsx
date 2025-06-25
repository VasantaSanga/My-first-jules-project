import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder for blog post data
const mockBlogPosts = [
  { id: 1, title: 'Understanding Project Estimation', slug: 'understanding-project-estimation', excerpt: 'Learn the key factors that go into estimating a software project...', author: 'Admin', date: '2023-10-01' },
  { id: 2, title: 'Choosing the Right Tech Stack', slug: 'choosing-tech-stack', excerpt: 'A guide to selecting the technology that fits your project needs and budget.', author: 'Jane Doe', date: '2023-10-15' },
  { id: 3, title: 'The Importance of UI/UX in Development', slug: 'importance-of-ui-ux', excerpt: 'Why good design is crucial for user adoption and project success.', author: 'John Smith', date: '2023-11-01' },
];

const BlogsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Our Blog</h1>
        <Link
          to="/blogs/create"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Create New Post
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockBlogPosts.map(post => (
          <div key={post.id} className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              <Link to={`/blogs/${post.slug}`} className="hover:text-blue-600">{post.title}</Link>
            </h2>
            <p className="text-gray-500 text-sm mb-2">By {post.author} on {post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link
              to={`/blogs/${post.slug}`}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
      {mockBlogPosts.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
            <p>No blog posts yet. Why not create the first one?</p>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
