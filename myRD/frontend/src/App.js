import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [formData, setformData] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/item/') // to get data from Django server
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/item/', formData) // data get from form will be post on db
      .then((response) => {
        setItems((preItems) => [...preItems, response.data]);
        setformData({ name: '', description: '' });
      });
  };

  return (
    <>
      <h1>Products:</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: {item.description}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
        />
        <label>Product Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter product description"
        />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
}

export default App;
