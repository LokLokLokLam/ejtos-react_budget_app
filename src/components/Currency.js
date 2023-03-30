import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (event) => {
        let newCurrency = event.target.value;

        dispatch ({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="selectCurrency">Currency</label>
            </div>
            <select className="custom-select" id="selectCurrency" onChange={changeCurrency}>
                <option value="$" name="Dollar">$ Dollar</option>
                <option defaultValue selected="selected" value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
}

export default Currency;