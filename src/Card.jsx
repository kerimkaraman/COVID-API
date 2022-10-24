import React from 'react';
import './card.css';

function Card(props) {
    return (
        <div className='card'>
            <div className="card-image">
                <img src={`https://flagcdn.com/w320/${props.TwoLetterSymbol}.png`} alt={`${props.Country}`} />
            </div>
            <div className="card-info">
                <h2>{props.Country}</h2>
                <table>
                    <tr>
                        <td>Total Tests:</td>
                        <td>{props.TotalTests}</td>
                    </tr>
                    <tr>
                        <td>Total Recovered:</td>
                        <td>{props.TotalRecovered}</td>
                    </tr>
                    <tr>
                        <td>Total Deaths:</td>
                        <td>{props.TotalDeaths}</td>
                    </tr>
                    <tr>
                        <td>New Cases:</td>
                        <td>{props.NewCases}</td>
                    </tr>
                    <tr>
                        <td>New Deaths:</td>
                        <td>{props.NewDeaths}</td>
                    </tr>
                    <tr>
                        <td>New Recovered:</td>
                        <td>{props.NewRecovered}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Card