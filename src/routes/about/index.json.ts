import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import marked from "marked";

const getPost = () => {
    const document = fs.readFileSync(path.resolve("content", 'about.md'), "utf-8");
    const { data, content } = grayMatter(document);
    const renderer = new marked.Renderer();
    const html = marked(content, { renderer })
    return { html, ...data }
}

  export function get(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    const post = getPost();
    res.end(JSON.stringify(post));
  }