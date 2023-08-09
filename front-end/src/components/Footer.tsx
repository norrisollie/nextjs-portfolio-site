import React from "react"

import Image from "next/image"

import Github from "../assets/Github.svg"
import LinkedIn from "../assets/LinkedIn.svg"
import Twitter from "../assets/Twitter.svg"
import Link from "next/link"
import Logo from "./Logo"

const socialData = [
	{
		linkHref: "https://www.github.com",
		linkImage: Github,
		linkAlt: "Github Logo",
		id: 1,
	},
	{
		linkHref: "https://www.linkedin.com",
		linkImage: LinkedIn,
		linkAlt: "LinkedIn Logo",
		id: 2,
	},
	{
		linkHref: "https://www.twitter.com",
		linkImage: Twitter,
		linkAlt: "Twitter Logo",
		id: 3,
	},
]

const socialLinks = socialData.map(({linkHref, linkImage, linkAlt, id}) => {
	return (
		<Link href={linkHref} key={id}>
			<Image src={linkImage} alt={linkAlt} />
		</Link>
	)
})

const Footer = () => {
	return (
		<section>
			<div className="section-wrapper grey">
				<div className="footer__content-wrapper">
					<Logo />
					<div className="footer__social-links">{socialLinks}</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
