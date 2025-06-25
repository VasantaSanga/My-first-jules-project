import React from 'react';

const CreateBlogPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Blog Post</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-1">Post Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-700 font-medium mb-1">Author Name (Optional)</label>
            <input
              type="text"
              id="author"
              name="author"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name (publicly visible)"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="slug" className="block text-gray-700 font-medium mb-1">Slug (URL Path)</label>
            <input
              type="text"
              id="slug"
              name="slug"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., my-awesome-post-title (auto-generated if empty)"
            />
            <p className="text-xs text-gray-500 mt-1">Leave blank to auto-generate from title. Use lowercase letters, numbers, and hyphens.</p>
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-1">Content</label>
            <textarea
              id="content"
              name="content"
              rows={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your blog post content here. Markdown might be supported in the future."
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Publish Post
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600 mt-6">
          Note: This form is open for anyone to create a blog post. No login is required for this feature as per requirements.
          Consider adding moderation or spam protection in a real-world scenario.
        </p>
      </div>
    </div>
  );
};

export default CreateBlogPage;
