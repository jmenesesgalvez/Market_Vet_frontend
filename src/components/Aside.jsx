import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Aside = ({ onFilterChange }) => {
    return (
        <aside className="p-3 bg-light">
            <h5>Filtros</h5>
            <div className="form-check">
                <input
                    type="radio"
                    name="sort"
                    id="lowToHigh"
                    className="form-check-input"
                    onChange={() => onFilterChange('lowToHigh')}
                />
                <label htmlFor="lowToHigh" className="form-check-label">De menor a mayor</label>
            </div>
            <div className="form-check">
                <input
                    type="radio"
                    name="sort"
                    id="highToLow"
                    className="form-check-input"
                    onChange={() => onFilterChange('highToLow')}
                />
                <label htmlFor="highToLow" className="form-check-label">De mayor a menor</label>
            </div>
            <div className="form-check">
                <input
                    type="radio"
                    name="sort"
                    id="alphabetical"
                    className="form-check-input"
                    onChange={() => onFilterChange('alphabetical')}
                />
                <label htmlFor="alphabetical" className="form-check-label">Orden Alfabético</label>
            </div>
        </aside>
    );
};

export default Aside;
