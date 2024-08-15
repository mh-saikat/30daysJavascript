//Task 5

const functionArray = [];

const numberofFunction = 5;

for (let i = 0; i < numberofFunction; i++) {

    functionArray.push((function(index){
        return function(){
            console.log(`Function index: ${index}`);
        }
    })(i))
    
}

functionArray.forEach((func)=>{
    func()
})

//Task 6

function collectionofItem(){
    let items = []

    function add(item){
        items.push(item)
    }
    function remove(item){
        items = items.filter(i => i !== item)
    }
    function listItems(){
        return items.slice()
    }

    return{
        add,
        remove,
        listItems
    }
    
}

const manager = collectionofItem()
manager.add('apple')
manager.add('Orange')
manager.remove('Orange')
console.log(manager.listItems())
