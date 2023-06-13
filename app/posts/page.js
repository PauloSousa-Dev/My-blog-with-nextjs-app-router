import AllPosts from "@/components/posts/all-posts";
import styles from "./page.module.css";

export default function AllPostsPage() {
  return <AllPosts posts={props.posts} />;
}
