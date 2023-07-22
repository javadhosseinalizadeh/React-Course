import React from 'react'
import CardWrapper from './card/card-wrapper'
import Card from './card/card'
import CardTitle from './card/card-title'
import CardText from './card/card-text'
import CArdFooter from './card/card-footer'
import { Link } from 'react-router-dom'
import { AddNewPanel } from '../../components/add-new-panel'
const ProductsCardView = ({ products }) => {
    return (
        <div>
            <AddNewPanel />
        
        <CardWrapper >
            {products.map(product =>
                <Card key={product.id}>
                    <CardTitle>{product.title}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <CardText>
                        Price: {product.price}{" "}
                        <span className="material-symbols-outlined">attach_money</span>
                    </CardText>
                    <CArdFooter>
                        <Link to={'edit/' + product.id}>
                        <span className="material-symbols-outlined">edit</span>
                        </Link>
                        <button>
                            <span className="material-symbols-outlined">Delete</span>
                        </button>
                    </CArdFooter>
                </Card>)}
        </CardWrapper>
        </div>
    )
}

export default ProductsCardView