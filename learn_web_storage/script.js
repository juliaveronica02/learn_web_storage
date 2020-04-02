const addItemInHTML = (value) =>{
    if (value == null){
        return;
    }

    const daftarList = document.getElementsByClassName("daftar-list")
    // const li = document.createElement("li")
    // const content = document.createTextNode(value)

    // daftarList[0].appendChild(li)
    // li.appendChild(content)
    const li = document.createElement("li")
    const itemHTML = `${value} <button class="js">hapus</button>`;
    daftarList[0].appendChild(li)
    li.innerHTML = itemHTML
}

const addItem = () =>{
    console.log('addItem')
    const itemInput = document.getElementsByName("itemInput")
    //console.log(itemInput[0].value);
    let itemInputValue = itemInput[0].value
    if(!itemInputValue){
        return;//gunanya untuk exit
    }
    addItemInHTML(itemInputValue)
    let itemArray = localStorage.getItem("item")

    if ((typeof itemArray)!= "string" || (itemArray) == null){
        //jika itemArray adalah string atau null maka kita bikin array baru dengan key 0 dengan value 
        //itemInputValue
        itemArray = [itemInputValue]
    }
    else{
        //jika itemArray adalah bukan string atau null maka kemungkinan dia adalah array
        //jadi kita tambahkan dengan menggunakan method "push"
        itemArray = JSON.parse(itemArray)
        itemArray.push(itemInputValue)
    }
    // debugger;
    // localStorage.setItem("item", itemArray);

    // const daftarList = document.getElementsByClassName("daftar-list")
    // const li = document.createElement("li")
    // const content = document.createTextNode(value)
    // localStorage.setItem("item",value);

    //merubah array ke string supaya bisa disimpan di local storage
    const itemArrayStringify = JSON.stringify(itemArray);
    localStorage.setItem("item", itemArrayStringify);
    itemInput[0].value = ""
}

const runNow = ()=>{
    const itemFromLocalStorage = localStorage.getItem("item")
    if(itemFromLocalStorage != null){
        const items = JSON.parse(itemFromLocalStorage);
        items.forEach(item =>{//forEach untuk array jika item ada 3 maka akan dieksekusi sampai 3x dengan item yang berbeda
        addItemInHTML(item)
        })
    }

}
runNow();