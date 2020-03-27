
import React from 'react';
// import { Button, Container, Pagination, Segment } from 'semantic-ui-react';



import PizzaCard from "./PizzaCard";
import Filter from './Filter';
import { fetchPizzas } from '../../api/pizzas'

class MenuBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pizzas: [],
            isLoading: false,
            error: null,
            
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true }, () =>{
            fetchPizzas().then(pizzas => {
                this.setState({ pizzas, isLoading:false});
            })
            .catch(error => {
                this.setState({ error, isLoading:false});
            });
    
        });

    }


    render() {

        return(
            <div className="menu_book">
                <Filter />
                    <div className="menu-list"> 
                       { this.state.pizzas.map(pizza =>(
                          <PizzaCard
                          pizzaImage={pizza.pizzaImage}
                          pizzaName={pizza.pizzaName}
                          size={pizza.size}     
                          price={pizza.price} 
                          description={pizza.description}
                          ingredients={pizza.ingredients}  

                          />
                       ))
                        }
                    </div>
    
            </div>
        );
    }

}
 


export default MenuBook;

