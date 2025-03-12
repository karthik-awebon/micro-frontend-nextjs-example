import Link from 'next/link';

export default function Post({ params: { id } }: any) {
  return (
    <div>
      <h3>Post #{id}</h3>
      <p>Lorem ipsum</p>
      <Link href='/blog'>Back to blog</Link>
    </div>
  );
}
