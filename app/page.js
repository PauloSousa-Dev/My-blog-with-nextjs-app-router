import { getFeaturedPosts } from "@/lib/posts-util";
import styles from "./page.module.css";
import { FeaturedPosts, Hero } from "@/components/";

export default function HomePage() {
  const posts = getFeaturedPosts();
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}
