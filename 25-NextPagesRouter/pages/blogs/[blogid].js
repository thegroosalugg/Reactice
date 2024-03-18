import { useRouter } from 'next/router';
import Link from "next/link";

// dynamic nested page. Filename must be inside [squarebrackets] which serves as the dynamic path. URL: our-domain.com/blogs/anydynamicdata

export default function dynamicBlogPage() {
  const router = useRouter();

  const blogId = router.query.blogid; // router has a query key, on which we call the custom file name, i.e. blogid

  // rwuivalent of using Params in App Router and React Router

  console.log(blogId);

  return (
    <>
      <h1>Dynamic Page</h1>
      <p>Your URL via router is: <strong>{blogId}</strong></p>
      <Link href='/blogs'>Back</Link>
    </>
  );
}
