import styles from "./page.module.css";
import { FeaturedPosts, Hero } from "@/components/";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}
