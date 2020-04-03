import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "./card";

export function Home() {
	const [phones, setPhones] = useState([]);
	useEffect(() => {
		fetch("https://8080-a9eeb69d-3800-482b-a6a8-715c0854e567.ws-us02.gitpod.io/wp-json/sample_api/v1/phones")
			.then(resp => resp.json())
			.then(data => {
				setPhones(data);
				// console.log(data);
			});
	}, []);
	return (
		<>
			<div className="card-group d-flex justify-content-center">
				{phones.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.post_title}
							dURL={
								"https://cdn.mobilesyrup.com/wp-content/uploads/2018/10/Pixel-2-XL-and-iPhone-XS-logo-bright.jpg"
							}
							sub={item.model}
							year={item.year}
						/>
					);
				})}
			</div>
		</>
	);
}
