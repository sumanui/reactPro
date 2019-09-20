import React from "react";
import products from "../../json/products.json"
const availableSize = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']
export default class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productState: products,
            productsSize: [],
            cartquantity: [],
            cartValue: "",
            totalQuantity: 1,
        }
    }

    onChangePrice(e) {
        if (e.target.value == "low") {
            let productState = this.state.productState
            for (let i = 1; i < productState.length; i++) {
                for (let j = 0; j < i; j++) {
                    if (productState[i].price < productState[j].price) {
                        let data = productState[i]
                        productState[i] = productState[j]
                        productState[j] = data
                    }
                }
            }
            this.setState({
                productState
            })
        } else if (e.target.value == "high") {
            let productState = this.state.productState
            for (let i = 1; i < productState.length; i++) {
                for (let j = 0; j < i; j++) {
                    if (productState[i].price > productState[j].price) {
                        let data = productState[i]
                        productState[i] = productState[j]
                        productState[j] = data
                    }
                }
            }
            this.setState({
                productState
            })
        }
    }

    sizeSelection(id) {
        let productsSize = this.state.productsSize
        let copyProduct = products
        for (let i = 0; i < copyProduct.length; i++) {
            for (let j = 0; j < copyProduct[i].size.length; j++) {
                if (copyProduct[i].size[j] == id) {
                    productsSize.push(copyProduct[i])
                }
                if (document.getElementById(id).checked == false && copyProduct[i].size[j] == id) {
                    // let array = productsSize.filter((item) => item.size != id)
                    // var result = productsSize.filter(function (a) {
                        // console.log(!(a.size), (a.size) = true);
                        // return !this[a.size] && (this[a.size] = true);
                    // });
                    // console.log(result)
                    // consolensole.log(productsSize);
                    // console.log(copyProduct[i].size[j], id);
                    // for (let i = 0; i < productsSize.length; i++) {
                    //     for (let j = 0; j < productsSize[i].size.length; j++) {
                    //         if (productsSize[i].size[j] == id) {
                    //             productsSize.splice(i, 1)
                    //             console.log(productsSize);
                    //         }
                    //     }
                    // }
                }
            }
        }
        this.setState({
            productState: [...new Set(productsSize)]
        })
    }

    addToCard(id) {
        var { cartValue, cartquantity, productState } = this.state
        for (let i = 0; i < productState.length; i++) {
            if (productState[i].id == id) {
                cartquantity.push(productState[i])
                cartValue = productState[i].name
            }
        }
        this.setState({
            cartquantity,
            cartValue
        })
    }

    moreQuantity(name) {
        var { cartquantity } = this.state
        for (let j = 0; j < cartquantity.length; j++) {
            if (cartquantity[j].name == name) {
                cartquantity[j].qty = isNaN(cartquantity[j].qty) ? 0 : cartquantity[j].qty;
                cartquantity[j].qty++;
                this.state.totalQuantity++
            }
        }
        this.setState({
            cartquantity
        })
    }
    removeQuantity(name) {
        var { cartquantity } = this.state
        for (let j = 0; j < cartquantity.length; j++) {
            if (cartquantity[j].name == name) {
                cartquantity[j].qty = isNaN(cartquantity[j].qty) ? 0 : cartquantity[j].qty;
                cartquantity[j].qty--;
            }
        }
        this.setState({
            cartquantity
        })
    }

    render() {
        return (
            <div>
                <div className="mainDivProduct col-md-9">
                    {this.state.productState.map((data, key) => (
                        <div className="col-md-3 m-top-20" key={key}><div className="particularProduct">
                            {/* <div className="productImgBox"><img src={require("../../assets/images/" + data.img)} alt={data.img} />
                            </div> */}
                            <div className="productDescription"><h4>{data.name}</h4><h5>Rs{data.price}</h5><h3>{data.size.join(',')}</h3>
                                <button type="button" className={this.state.cartValue == `${data.name}` ? "disableBtn btnCart" : "btnCart"} onClick={() => this.state.cartValue == `${data.name}` ? null : this.addToCard(data.id)}>Add To Cart</button>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="filterDiv col-md-3">
                    <div className="selectFilter">
                        <label>Select price here</label>
                        <select onChange={(e) => this.onChangePrice(e)}>
                            <option value="">_____ Select ______</option>
                            <option value="low">Low to Hight</option>
                            <option value="high">Hight to Low</option>
                        </select>
                    </div>
                    <div className="sizefilter">
                        <label>Filter size here</label>
                        {availableSize.map((data, key) => (
                            <div className="checkBoxMain" key={key}><input type="checkbox" id={data} className="sizeCheckBox" name={data} onChange={() => this.sizeSelection(data)} /><label className="checkmark" htmlFor={data}>{data}</label></div>
                        ))}
                    </div>
                </div>
                <div className="addcart">
                    <ul>
                        {this.state.cartquantity.length == 0 ? null : this.state.cartquantity.map((data, key) => (
                            <li key={key}>
                                {data.name}
                                <button type="button" onClick={(e) => this.moreQuantity(data.name)}>+</button>
                                <button type="button" onClick={(e) => this.removeQuantity(data.name)}>-</button>
                                <label>product quantity<span>{data.qty}</span></label>
                            </li>
                        ))}
                        <label>total quantity<span>{this.state.totalQuantity}</span></label>
                    </ul>
                </div>
            </div>
        )
    }
}