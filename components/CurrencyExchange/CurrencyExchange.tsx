import React from 'react';
import {useSelector} from "react-redux";
import {IGlobalState} from "../../redux/state";
import {CurrencyState} from "../../redux/currencyReducer";

type CurrencyExchangePropsType = {
    currenciesName: string[];
    currencyRate: number;
    changeCurrencyField: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeAction: (e: React.MouseEvent<HTMLSpanElement>) => void;
    changeCurrentCurrency: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const CurrencyExchange: React.FC<CurrencyExchangePropsType> = ({
                                                                   currenciesName,
                                                                   currencyRate,
                                                                   changeCurrencyField,
                                                                   changeAction,
                                                                   changeCurrentCurrency,
                                                               }) => {
    const state = useSelector<IGlobalState, CurrencyState>(state => state.currency)
    const viewCurrency = state.isBuying ? (
        <React.Fragment>
            <label>
                You give the next amount of BYN:
                <input value={state.amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
            </label>
            <label>
                You get the next amount of {state.currentCurrency}:
                <input value={state.amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
            </label>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <label>
                You give the next amount of {state.currentCurrency}:
                <input value={state.amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
            </label>
            <label>
                You get the next amount of BYN:
                <input value={state.amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
            </label>
        </React.Fragment>
    );

    return (
        <div className="currency">
            <h2>Currency exchange</h2>
            <div className="currency-names">
                <p>Current currency:</p>
                <ul>
                    {currenciesName.map((currency: string, index: number) => {
                        return (
                            <li
                                key={`${index}-${currency}`}
                                className={`currencies ${state.currentCurrency === currency ? 'activeCurrency' : null}`}
                                onClick={changeCurrentCurrency}
                                data-currency={currency}
                            >
                                {currency}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="currency-action">
        <span className={state.isBuying ? 'active' : ''} data-action="buy" onClick={changeAction}>
          Buy
        </span>
                <span className={state.isBuying ? '' : 'active'} data-action="sell" onClick={changeAction}>
          Sell
        </span>
            </div>
            <div className="fields">
                <p>Currency rate: {currencyRate}</p>
                {viewCurrency}
            </div>
        </div>
    );
};

export default CurrencyExchange;
