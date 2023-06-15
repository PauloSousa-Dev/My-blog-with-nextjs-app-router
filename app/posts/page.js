import AllPosts from "@/components/posts/all-posts";
import styles from "./page.module.css";
import { getAllPosts } from "@/lib/posts-util";

export default function AllPostsPage() {
  const posts = getAllPosts();
  return <AllPosts posts={posts} />;
}
