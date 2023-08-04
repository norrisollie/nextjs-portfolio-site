import React from "react"

import Image, {StaticImageData} from "next/image"

// remove me
import Spense from "../assets/Spense.png"
import YelpCamp from "../assets/YelpCamp.png"

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
		<article>
			<Image src={image} alt={imageAlt} />
			<h3>{title}</h3>
			<p>{description}</p>
		</article>
	)
}

export default Article
