import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const data = [{id: 1, name: 'Milk 1l'}, 
      {id: 2, name: 'Eggs Medium 12 pack'}, 
      {id: 3, name: 'Fresh Basil'}, 
      {id: 4, name: 'Wholegrain Bread 1 pkg'}, 
      {id: 5, name: 'Ground Coffee 200g'}, 
      {id: 6, name: 'Red Wine'}, 
      {id: 7, name: 'Mozzarella Cheese 150g'},
      {id: 8, name: 'Orange Juice 1l'},
      {id: 9, name: 'Tomatoes'}];

const app = document.getElementById('app');
ReactDOM.render(<Layout data={data}/>, app); 
