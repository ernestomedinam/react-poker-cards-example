import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { buildAllCards, faceValues } from "../cardBuilder";
import { PokerCard } from "./PokerCard";

//create your first component
const Home = () => {
	const allCards = buildAllCards();
	const [newCard, setNewCard] = useState({
		faceValue: "",
		suit: {
			color: "",
			kind: ""
		}
	});
	const [chosenCards, setChosenCards] = useState([]);
	useEffect(() => {
		console.log(allCards);
	}, []);
	return (
		<div className="text-center d-flex flex-column h-100 px-4">
			<h1 
				className="text-center mt-5 mb-3 display-2">
				{"Poker card list!"}
			</h1>
			<div className="table d-flex flex-wrap justify-content-center">
				{chosenCards.map((card, index) => {
					return (
						<PokerCard
							key={index}
							faceValue={card.faceValue} 
							suit={card.suit} />
					);
				})}
			</div>
			<button
				style={{justifySelf: "end"}}
				className="btn btn-success align-self-center mb-5 mt-3"
				onClick={(event) => {
					// we want to choose a random index for allCards
					const randomIndex = Math.floor(Math.random() * allCards.length); // 12
					// update the chosenCards array with the item on such random index
					setChosenCards([
						...chosenCards,
						allCards[randomIndex]
					])
				}}>
				choose a card
			</button>
			<div className="d-flex justify-content-between">
				<input 
					value={newCard.faceValue}
					onChange={(event) => {
						setNewCard({
							faceValue: event.target.value,
							suit: newCard.suit
						});
					}}
					type="text" 
					placeholder="value" />
				<input 
					value={newCard.suit.color}
					onChange={(event) => {
						setNewCard({
							faceValue: newCard.faceValue,
							suit: {
								color: event.target.value,
								kind: newCard.suit.kind
							}
						});
					}}
					type="text" 
					placeholder="color" />
				<input 
					value={newCard.suit.kind}
					onChange={(event) => {
						setNewCard({
							faceValue: newCard.faceValue,
							suit: {
								color: newCard.suit.color,
								kind: event.target.value
							}
						});
					}}
					type="text" 
					placeholder="suit" />
			</div>
			<button	
				onClick={(event) => {
					// create our new card object
					// add new Card to chosenCards
					setNewCard({
						faceValue: "",
						suit: {
							kind: "",
							color: ""
						}
					});
					setChosenCards([
						...chosenCards,
						newCard
					]);
				}}
				className="btn btn-primary">
				create card
			</button>
		</div>
	);
};

export default Home;
