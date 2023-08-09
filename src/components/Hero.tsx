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
		image: WalmartLogo,
		imageAlt: "Walmart Logo",
	},
	{
		image: JPMorganLogo,
		imageAlt: "JPMorgan Logo",
	},
	{
		image: VisaLogo,
		imageAlt: "Visa Logo",
	},
	{
		image: TinderLogo,
		imageAlt: "Tinder Logo",
	},
	{
		image: SamsungLogo,
		imageAlt: "Samsung Logo",
	},

	{
		image: VerizonLogo,
		imageAlt: "Verizon Logo",
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
			<div className="section-wrapper black">
				<div className="content-wrapper hero__content-wrapper">
					<div className="hero__text-wrapper">
						<h1>Helping companies build better, scalable software.</h1>
						<p>
							Award-winning web developer and author, with over 15+ years of
							working experience with Fortune 500 companies like Apple, Google,
							Facebook, and more.
						</p>
					</div>
					<div className="hero__clients-wrapper">{clientLogos}</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
