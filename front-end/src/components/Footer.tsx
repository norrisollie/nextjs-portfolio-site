import React from "react"

import Image from "next/image"

import Github from "../assets/Github.svg"
import LinkedIn from "../assets/LinkedIn.svg"
import Twitter from "../assets/Twitter.svg"
import Link from "next/link"

const socialData = [
	{
		linkHref: "www.github.com",
		linkImage: Github,
		linkAlt: "Github Logo",
	},
	{
		linkHref: "www.linkedIn.com",
		linkImage: LinkedIn,
		linkAlt: "LinkedIn Logo",
	},
	{
		linkHref: "www.twitter.com",
		linkImage: Twitter,
		linkAlt: "Twitter Logo",
	},
]

const socialLinks = socialData.map(({linkHref, linkImage, linkAlt}) => {
	return (
		<Link href={linkHref}>
			<Image src={linkImage} alt={linkAlt} />
		</Link>
	)
})

const Footer = () => {
	return (
		<section>
			<div className="section-wrapper">
				<div className="content-wrapper">
					<div>
						<a href="/">Johnathon Spectre</a>
					</div>
					<div>{socialLinks}</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
