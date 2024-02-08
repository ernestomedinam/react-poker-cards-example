import React from "react";
import PropTypes from "prop-types";

export const PokerCard = (props) => {
    return (
        <div className="d-flex flex-column poker-card m-4 justify-content-between">
            <div 
                style={{color: props.suit.color}}
                className="d-flex justify-content-start suit pt-1 ps-2">
                {props.suit.kind}
            </div>
            <div className="d-flex justify-content-center face-value">
                {props.faceValue}
            </div>
            <div 
                style={{color: props.suit.color}}
                className="d-flex justify-content-end suit pb-1 pe-2">
                {props.suit.kind}
            </div>
        </div>
    )
};

PokerCard.propTypes = {
    suit: PropTypes.shape({
        color: PropTypes.oneOf(["red", "black"]),
        kind: PropTypes.oneOf(["♦", "♣", "♠", "♥"])
    }),
    faceValue: PropTypes.string
};
