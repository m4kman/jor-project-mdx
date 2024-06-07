import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import dynamic from "next/dynamic";
import CodeSnippet from "@/components/CodeSnippet";
import BlogHero from "@/components/BlogHero";
import { loadBlogPost } from "@/helpers/file-helpers";
import CircularColorsDemo from "@/components/CircularColorsDemo/CircularColorsDemo";

import styles from "./postSlug.module.css";

const getPost = React.cache(loadBlogPost);
const DivisionGroupsDemo = dynamic(
  () => import("@/components/DivisionGroupsDemo"),
);

export async function generateMetadata({ params }) {
  const post = await getPost(params.postSlug);
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.abstract,
  };
}
async function BlogPost({ params }) {
  const post = await getPost(params.postSlug);
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={post.frontmatter.title}
        publishedOn={post.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={post.content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
