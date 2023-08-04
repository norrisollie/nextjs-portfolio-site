import React from "react"

import Image, {StaticImageData} from "next/image"

import JPMorganLogo from "../assets/JP Morgan.svg"
import SamsungLogo from "../assets/Samsung.svg"
import TinderLogo from "../assets/Tinder.svg"
import VerizonLogo from "../assets/Verizon.svg"
import VisaLogo from "../assets/Visa.svg"
import WalmartLogo from "../assets/Walmart.svg"

const clientData = [
	{
		image: JPMorganLogo,
		imageAlt: "JPMorgan Logo",
	},
	{
		image: SamsungLogo,
		imageAlt: "Samsung Logo",
	},
	{
		image: TinderLogo,
		imageAlt: "Tinder Logo",
	},
	{
		image: VerizonLogo,
		imageAlt: "Verizon Logo",
	},
	{
		image: VisaLogo,
		imageAlt: "Visa Logo",
	},
	{
		image: WalmartLogo,
		imageAlt: "Walmart Logo",
	},
]

const clientLogos = clientData.map(
	({image, imageAlt}: {image: StaticImageData; imageAlt: string}) => {
		return <Image src={image} alt={imageAlt} />
	}
)

const Hero = () => {
	return (
		<section>
			<div className="section-wrapper">
				<div className="content-wrapper">
					<h1>Helping companies build better, scalable software.</h1>
					<h2>
						Award-winning web developer and author, with over 15+ years of
						working experience with Fortune 500 companies like Apple, Google,
						Facebook, and more.
					</h2>
					<div className="hero__client-image-list">{clientLogos}</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
