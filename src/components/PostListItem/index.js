import React from 'react'
import Link from 'next/link'
import usePost from '../../hooks/usePost'
import './style.css'

const PostListItem = ({ post }) => {
	const { formatDate } = usePost()
	return (
		<Link href={'/blog/post/[id]'} as={`/blog/post/${post.slug}`}>
			<a className="blogLink">
				<div className="blog">
					<div className="imagen">
						{post._embedded['wp:featuredmedia'] ? (
							<img
								className="blog__image"
								src={post._embedded['wp:featuredmedia'][0].source_url}
								alt={post.title.rendered}
							/>
						) : (
							<img
								className="blog__image"
								src="/assets/img/global/not-found.jpg"
								alt="Blog"
							/>
						)}
					</div>
					<div className="fecha">
						<p>{formatDate(post.date)}</p>
					</div>
					<div className="texto">
						<p>{post.title.rendered}</p>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default PostListItem
