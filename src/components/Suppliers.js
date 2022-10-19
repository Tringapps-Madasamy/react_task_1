import React from 'react'
import Card from './Card'
import './Suppliers.css'
const Supplier_button=({supplier_detail})=>{
    console.log("hello");
    console.log(supplier_detail);
    const data1= JSON.parse(localStorage.getItem("productdetails1"));
    const data2=JSON.parse(localStorage.getItem("productdetails2"));
    const data3=JSON.parse(localStorage.getItem("productdetails3"));
    return(
<div className='firstchild'>
<table  className='tabledata' id="data">
  <thead>
    <tr>
  <td className='btn'><button type="submit" id="button1" className='supplier1' onClick={supplier_detail}>S1</button></td>
  <td className='btn'><button type="submit" id="button2" className='supplier2' onClick={supplier_detail}>S2</button></td>
  <td className='btn'><button type="submit" id="button3" className='supplier3' onClick={supplier_detail}>S3</button></td>
    </tr>
  </thead>
  <tbody id="tablebody">
  <tr>
                    <td>
                        {
                            data1 !== null ? data1.map((obj,index) => (
                                <Card key = {index} product = {obj.Productname} quantity = {obj.ProductQuantity} price = {obj.ProductPrice} total = {obj.ProductTotal} />
                            )) : null    
                        }
                    </td>
                    <td>
                        {
                            data2 !== null ? data2.map((ele,index) => (
                                <Card key = {index} product = {ele.Productname} quantity = {ele.ProductQuantity} price = {ele.ProductPrice} total = {ele.ProductTotal} />
                            )) : null    
                        }
                    </td>
                    <td>
                        {
                            data3 !== null ? data3.map((ele,index) => (
                                <Card key = {index} product = {ele.Productname} quantity = {ele.ProductQuantity} price = {ele.ProductPrice} total = {ele.ProductTotal} />
                            )) : null    
                        }
                    </td>
   </tr>                 
  </tbody>
</table>
</div>
    );
}

export default Supplier_button