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
		id: 1,
	},
	{
		image: JPMorganLogo,
		imageAlt: "JPMorgan Logo",
		id: 2,
	},
	{
		image: VisaLogo,
		imageAlt: "Visa Logo",
		id: 3,
	},
	{
		image: TinderLogo,
		imageAlt: "Tinder Logo",
		id: 4,
	},
	{
		image: SamsungLogo,
		imageAlt: "Samsung Logo",
		id: 5,
	},

	{
		image: VerizonLogo,
		imageAlt: "Verizon Logo",
		id: 6,
	},
]

const clientLogos = clientData.map(
	({
		image,
		imageAlt,
		id,
	}: {
		image: StaticImageData
		imageAlt: string
		id: number
	}) => {
		return <Image src={image} alt={imageAlt} key={id} />
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
