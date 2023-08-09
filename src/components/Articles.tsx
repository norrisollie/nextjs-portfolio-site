import React from "react"

import Article from "./Article"

import Spense from "../assets/Spense.png"
import YelpCamp from "../assets/YelpCamp.png"

const articleData = [
	{
		title: "Spense.com",
		description:
			"Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc",
		image: Spense,
		imageAlt: "Spense.com alt image text",
		id: 1,
	},
	{
		title: "YelpCamp.com",
		description:
			"Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favorite in 2021.",
		image: YelpCamp,
		imageAlt: "YelpCamp.com alt image text",
		id: 2,
	},
]

const articleComponents = articleData.map((article) => {
	return <Article {...article} key={article.id} />
})

const Articles = () => {
	return (
		<section className="articles">
			<div className="section-wrapper black">
				<div className="articles__content-wrapper content-wrapper">
					{articleComponents}
				</div>
			</div>
		</section>
	)
}

export default Articles
