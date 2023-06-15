import PostContent from "@/components/posts/post-detail/post-content";
import styles from "./page.module.css";
import { getPostData, getPageFiles, getPostsFiles } from "@/lib/posts-util";

export async function generateStaticParams() {
  const postsFilesNames = getPostsFiles();
  const slugs = postsFilesNames.map((filename) =>
    filename.replace(/\.md$/, "")
  );

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function PostDetailPage({ params: { slug } }) {
  const post = getPostData(slug);
  return <PostContent post={post} />;
}
