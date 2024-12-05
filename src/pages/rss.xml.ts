import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection('blogPosts');
  return rss({
    title: "4ephyr's Blog",
    description: "Always the cool tech stuff.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      date: post.data.date,
      description: post.data.description,
      tags: post.data.tags,
      link: `/blogs/${post.slug}/`,
    })),
  });
}