import React, {Key, useEffect} from "react"
import Logo from "./Logo"

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

const Nav = ({openMenu}: {openMenu: Function}) => {
	return (
		<nav className="nav">
			<div className="section-wrapper black">
				<div className="nav__content-wrapper">
					<Logo />
					<button
						className="nav_mobile"
						onClick={() => {
							openMenu()
						}}>
						Menu
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Nav
