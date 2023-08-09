import React from "react"

import Image, {StaticImageData} from "next/image"

const Article = ({
	title,
	description,
	image,
	imageAlt,
}: {
	title: string
	description: string
	image: StaticImageData
	imageAlt: string
}) => {
	return (
		<article className="article">
			<Image src={image} alt={imageAlt} />
			<h3>{title} →</h3>
			<p>{description}</p>
		</article>
	)
}

export default Article
