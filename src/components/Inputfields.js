import React, {useState } from 'react'
import './inputfields.css'
import './Suppliers.css'
import Supplierbutton from './Suppliers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Supplierbuttons(){
    const [Pname,setPname]=useState("")
    const [Qty,setQuantity]=useState("")
    const [Price,setPrice]=useState("")
    const handleprice1=(e)=>{
        const selectedvalue=e.target.value;
        setPname(selectedvalue);
        console.log(selectedvalue);
        if(selectedvalue === "redmi")
        {
            
            setPrice(20000);
        } 
        else if(selectedvalue === "realme"){
          
            setPrice(25000);
        }
        else if(selectedvalue === "samsung"){
            
            setPrice(35000);
        }  
    }
    const [datalist1,setDataList1]=useState([])
    const record_delete1=((index)=>{
        datalist1.splice(index,1);
        setDataList1([...datalist1]);
  })
  const storethedata1=()=>{
    const localdata1=JSON.parse(localStorage.getItem("productdetails1"));
    if(localdata1 !== null){
        localStorage.setItem("productdetails1",JSON.stringify([...localdata1,...datalist1]));
    }
    else{
        localStorage.setItem("productdetails1",JSON.stringify(datalist1));
    }
     
      setDataList1([]);
      toast.success("submitted successfully",{autoClose: false});
  }
  const Addrow1=()=>{
    if(Pname !== "" && Qty !== "" && Price !== ""){
         const dataDetails={
             Productname: Pname,
             ProductQuantity: Qty,
             ProductPrice: Price,
             ProductTotal: Price*Qty
         }
         setDataList1([...datalist1,dataDetails]);
    setPname("");
    setQuantity("");
    setPrice("");
        }
 }
 const handleprice2=(e)=>{
    const selectedvalue=e.target.value;
    setPname(selectedvalue);
    console.log(selectedvalue);
    if(selectedvalue === "Pant")
    {
       
        setPrice(1250);
    } 
    else if(selectedvalue === "Shirt"){
       
        setPrice(650);
    }
    else if(selectedvalue === "Kurti"){
       
        setPrice(1500);
    }  
    else if(selectedvalue === "Saree"){
       
        setPrice(3500);
    }  
    else if(selectedvalue === "Chudithar"){
       
        setPrice(890);
    }  
}
 const [datalist2,setDataList2]=useState([])
    const record_delete2=((index)=>{
        datalist2.splice(index,1);
        setDataList2([...datalist2]);
  })
  const storethedata2=()=>{
    const localdata2=JSON.parse(localStorage.getItem("productdetails2"));
    if(localdata2 !== null){
        localStorage.setItem("productdetails2",JSON.stringify([...localdata2,...datalist2]));
    }
    else{
        localStorage.setItem("productdetails2",JSON.stringify(datalist2));
    }
     
      setDataList2([]);
      toast.success("submitted successfully",{autoClose: false});
  }
  const Addrow2=()=>{
         const dataDetails={
             Productname: Pname,
             ProductQuantity: Qty,
             ProductPrice: Price,
             ProductTotal: Price*Qty
         }
         setDataList2([...datalist2,dataDetails]);
         setPname("");
    setQuantity("");
    setPrice("");     
 }
 const handleprice3=(e)=>{
    const selectedvalue=e.target.value;
    setPname(selectedvalue);
    console.log(selectedvalue);
    if(selectedvalue === "Tv")
    {
       
        setPrice(12500);
    } 
    else if(selectedvalue === "Fridge"){
       
        setPrice(25000);
    }
    else if(selectedvalue === "Ac"){
       
        setPrice(15000);
    }  
    else if(selectedvalue === "WashingMachine"){
       
        setPrice(13500);
    }  
    else if(selectedvalue === "Mixer"){
       
        setPrice(4500);
    }  
    else if(selectedvalue === "Grinder"){
       
        setPrice(5500);
    }  
}
 const [datalist3,setDataList3]=useState([])
    const record_delete3=((index)=>{
        datalist3.splice(index,1);
        setDataList3([...datalist3]);
  })
  const storethedata3=()=>{
    const localdata3=JSON.parse(localStorage.getItem("productdetails3"));
    if(localdata3 !== null){
        localStorage.setItem("productdetails3",JSON.stringify([...localdata3,...datalist3]));
    }
    else{
        localStorage.setItem("productdetails3",JSON.stringify(datalist3));
    }
     
      setDataList3([]);
      toast.success("submitted successfully",{autoClose: false});
  }
  const Addrow3=()=>{
         const dataDetails={
             Productname: Pname,
             ProductQuantity: Qty,
             ProductPrice: Price,
             ProductTotal: Price*Qty
         }
         setDataList3([...datalist3,dataDetails]);
         setPname("");
         setQuantity("");
         setPrice("");
 }
 const supplier_detail=(event)=>{
    console.log(supplier_detail);
    console.log(document.getElementById('inputcontainer1'));
    if(event.target.id === "button1"){
        document.getElementById('inputcontainer1').style.display="inline-block";
        document.getElementById('inputcontainer2').style.display="none";
        document.getElementById('inputcontainer3').style.display="none";
    }
    else if(event.target.id === "button2"){
        document.getElementById('inputcontainer1').style.display="none";
        document.getElementById('inputcontainer2').style.display="inline-block";
        document.getElementById('inputcontainer3').style.display="none";
    }
    else if(event.target.id === "button3"){
        document.getElementById('inputcontainer1').style.display="none";
        document.getElementById('inputcontainer2').style.display="none";
        document.getElementById('inputcontainer3').style.display="inline-block";
    }
 }
return(
<div className='supplierbutton'>
    <Supplierbutton supplier_detail={supplier_detail} />
    <div className='secondchild'>
    <div id='inputcontainer1'>
        <div className='inputs'>
            <select className="drop"  value={Pname} onChange={(e)=>handleprice1(e)}>
                <option value="">Choose</option>
                <option>redmi</option>
                <option>realme</option>
                <option>samsung</option>
            </select>
            <input className="box" type="number" name="text" id="text1" value={Qty} placeholder='Quality' onChange={(e)=>setQuantity(Math.abs(parseInt(e.target.value)))}/>
            <input className="box" type="text" name="text" id="text2" value={Price} placeholder='Price'  onChange={(e)=>setPrice(e.target.value)} readOnly/>
            <input className="box" type="text" name="text" id="text3" value={Price*Qty} placeholder='Total amount'/>
            <button className="plus" onClick={Addrow1}>+</button>
        </div>    
        <div>
                {datalist1.map((data,i)=>{
                    return (
                        <>
                          <input className="createproductbox" type="text" value={data.Productname}/>
                          <input className="createbox" type="text" value={data.ProductQuantity}/>
                          <input className="createbox" type="text" value={data.ProductPrice}/>
                          <input className="createbox" type="text" value={data.ProductTotal}/>
                          <button className="minus" onClick={()=>record_delete1(i)}>--</button>
                          <br/>
                        </>
                    )
                })}
        </div>
        <div>
            <button className="submit" onClick={storethedata1}>SUBMIT</button>
        </div>
    </div>
     
     <div id='inputcontainer2'>
        <div className='inputs'>
            <select className="drop"  value={Pname} onChange={(e)=>handleprice2(e)}>
            <option value="">Choose</option>
                <option>Pant</option>
                <option>Shirt</option>
                <option>Kurti</option>
                <option>Saree</option>
                <option>Chudithar</option>
            </select>
            <input className="box" type="number" name="text" id="text" value={Qty} placeholder='Quality' onChange={(e)=>setQuantity(Math.abs(parseInt(e.target.value)))}/>
            <input className="box" type="text" name="text" id="text" value={Price} placeholder='Price'  onChange={(e)=>setPrice(e.target.value)} readOnly/>
            <input className="box" type="text" name="text" id="text"  value={Price*Qty} placeholder='Total amount'/>
            <button className="plus" onClick={Addrow2}>+</button>
        </div>    
        <div>
                {datalist2.map((data,i)=>{
                    return (
                        <>
                          <input className="createproductbox" type="text" value={data.Productname}/>
                          <input className="createbox" type="text" value={data.ProductQuantity}/>
                          <input className="createbox" type="text" value={data.ProductPrice}/>
                          <input className="createbox" type="text" value={data.ProductTotal}/>
                          <button className="minus" onClick={()=>record_delete2(i)}>--</button>
                          <br/>
                        </>
                    )
                })}
        </div> 
        <div>
            <button className="submit" onClick={storethedata2}>SUBMIT</button>
        </div>
    </div>
   
    <div id='inputcontainer3'>
        <div className='inputs'>
            <select className="drop" value={Pname} onChange={(e)=>handleprice3(e)}>
            <option value="">Choose</option>
                <option>Tv</option>
                <option>Fridge</option>
                <option>Ac</option>
                <option>WashingMachine</option>
                <option>Mixer</option>
                <option>Grinder</option>
            </select>
            <input className="box" type="number" name="text" id="text" value={Qty} placeholder='Quality' onChange={(e)=>setQuantity(Math.abs(parseInt(e.target.value)))}/>
            <input className="box" type="text" name="text" id="text" value={Price} placeholder='Price'  onChange={(e)=>setPrice(e.target.value)} readOnly/>
            <input className="box" type="text" name="text" id="text" value={Price*Qty} placeholder='Total amount' />
            <button className="plus" onClick={Addrow3}>+</button>
        </div>    
        <div>
                {datalist3.map((data,i)=>{
                    return (
                        <>
                          <input className="createproductbox" type="text" value={data.Productname}/>
                          <input className="createbox" type="text" value={data.ProductQuantity}/>
                          <input className="createbox" type="text" value={data.ProductPrice}/>
                          <input className="createbox" type="text" value={data.ProductTotal}/>
                          <button className="minus" onClick={()=>record_delete3(i)}>--</button>
                          <br/>
                        </>
                    )
                })}
        </div>
        <div>
            <button className="submit" onClick={storethedata3}>SUBMIT</button>
        </div>
    </div>
    </div>
    <ToastContainer/>
</div>    
    )
}
export default Supplierbuttons
