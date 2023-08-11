import React, {Key, useEffect} from "react"
import FocusTrap from "focus-trap-react"
import {useTransition, animated as a} from "react-spring"

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
			<a className={linkType} href={linkHref} key={id}>
				{linkName}
			</a>
		)
	}
)

const Menu = ({
	showMenu,
	closeMenu,
}: {
	showMenu: Boolean
	closeMenu: Function
}) => {
	const transitions = useTransition(showMenu, {
		from: {transform: "translate3d(100%,0,0)"},
		enter: {transform: "translate3d(0%,0,0)"},
		leave: {transform: "translate3d(100%,0,0)"},
	})

	return (
		<div>
			{transitions((style, item, key) => {
				return (
					item && (
						<a.div className="menu" style={style} key={key.toString()}>
							<FocusTrap
								focusTrapOptions={{
									escapeDeactivates: () => closeMenu(),
								}}>
								<div className="menu__wrapper">
									<button
										className="close-menu"
										onClick={() => {
											closeMenu()
										}}>
										Close
									</button>
									<div className="menu__links-wrapper">{links}</div>
								</div>
							</FocusTrap>
						</a.div>
					)
				)
			})}
		</div>
	)
}

export default Menu
