import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";
import { getBlogPostList } from "../helpers/file-helpers.js";
import styles from "./homepage.module.css";

export const metadata = {
  title: "Bits & Bytes",
  description: "A blog about different things me",
};

async function Home() {
  const posts = await getBlogPostList();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {posts.map((post) => (
        <BlogSummaryCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          abstract={post.abstract}
          publishedOn={post.publishedOn}
        />
      ))}
    </div>
  );
}
export default Home;
