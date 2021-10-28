import "./header.css"

export default function Header(){
	return (
		<div className="header">
			<div className="headerTitle">
				<span className="smHeaderTitle">A Kinda Neat</span>
				<span className="lgHeaderTitle">Blog</span>
				
			</div>
			<img
				className="heroImg" 
				src="./images/moon-header.jpg" 
				alt="Man standing looking at the sunset and the moonrising." 
			/>
		</div>	
	)
}
