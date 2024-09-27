// app/blog/[slug]/page.js (Server Component)

import PostCard from '../../components/PostCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
async function getPostBySlug(slug) {
    const res = await fetch(`https://stackviv.ai/wp-json/wp/v2/posts?slug=${slug}`);
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
}

export default async function SinglePostPage({ params }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <Header />
            <div className="container mx-auto p-6 ">
                <h1 className="text-4xl font-semibold mb-4">{post.title.rendered}</h1>
                <div className="text-lg text-white-700" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
            </div>
            <Footer />
        </div>
    );
}
