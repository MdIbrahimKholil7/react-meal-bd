
const setDataLocal=id=>{
    let storageCart=getData()
    // console.log(storageCart)
    const quantity=storageCart[id]
    if(quantity){
        storageCart[id]+=1
    }else{
        storageCart[id]=1
    }
    localStorage.setItem('add-to-cart',JSON.stringify(storageCart))
  /*   if(){
        storageCart[id]+=1
    }else{
        storageCart[id]=1
    }
    localStorage.setItem('add-to-cart') */
}

const getData=()=>{
    let storageCart={}
    const getCart=localStorage.getItem('add-to-cart')
    if(getCart){
        storageCart=JSON.parse(getCart);
    }
    return storageCart;
}

export {setDataLocal,getData}