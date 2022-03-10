import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "src", "posts");
export default class PostService {
  static getPostSlugs() {
    let slugs = fs.readdirSync(postsDirectory);
    slugs = slugs.map((slug: string) => slug.replace(/\.md$/, ""));
    return slugs;
  }

  static getPostBySlug(slug: string, fields: string[] = []) {
    const fullPath = join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items: any = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field: string) => {
      if (field === "slug") {
        items[field] = slug;
      }
      if (field === "content") {
        items[field] = content;
      }

      if (typeof data[field] !== "undefined") {
        items[field] = data[field];
      }
    });

    return items;
  }

  static getPosts(fields: string[] = [], limit?: number) {
    const slugs = this.getPostSlugs();
    let posts = slugs
      .map((slug) => this.getPostBySlug(slug, fields))
      .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1));

    if (limit) {
      posts = posts.slice(0, limit - 1);
    }

    return posts;
  }
}
