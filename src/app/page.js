'use client';
import { useState } from 'react';
import './globals.css'

export default function StreamListPage() {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.trim() !== '') {
            setList([...list, item]);
            setItem('');
        }
    };

    return (
        <div className="app">
            <h1>StreamList</h1>
            <form className="streamlist" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a show or movie..."
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>

            {list.length > 0 && (
                <ol className="streamlist-items">
                    {list.map((entry, index) => (
                        <li key={index}>{entry}</li>
                    ))}
                </ol>
            )}
        </div>
    );
}