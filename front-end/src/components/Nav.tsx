import React, {Key} from "react"

const pagesData = [
	{
		linkName: "Articles",
		linkHref: "/articles",
		linkType: "link",
		id: 1,
	},
	{
		linkName: "Chats",
		linkHref: "/chats",
		linkType: "link",
		id: 2,
	},
	{
		linkName: "Awards",
		linkHref: "/awards",
		linkType: "link",
		id: 3,
	},
	{
		linkName: "About",
		linkHref: "/about",
		linkType: "link",
		id: 4,
	},
	{
		linkName: "Get In Touch",
		linkHref: "/get-in-touch",
		linkType: "link-as-button",
		id: 5,
	},
]

const links = pagesData.map(
	({
		linkName,
		linkHref,
		linkType,
		id,
	}: {
		linkName: string
		linkHref: string
		linkType: string
		id: Key
	}) => {
		return (
			<li key={id}>
				<a className={linkType} href={linkHref}>
					{linkName}
				</a>
			</li>
		)
	}
)

const Nav = () => {
	return (
		<section>
			<div className="section-wrapper">
				<div className="content-wrapper">
					<a href="">Johnathon Spectre</a>
					<ul>{links}</ul>
				</div>
			</div>
		</section>
	)
}

export default Nav
