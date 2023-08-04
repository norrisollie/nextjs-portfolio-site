import Nav from "@/components/Nav"
import "../styles/styles.scss"
import Footer from "@/components/Footer"

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body>
				<Nav />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	)
}
