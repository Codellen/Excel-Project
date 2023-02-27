//now we have to write a alogo which give column with proper alphabetical naming
let containerElement = document.getElementById("column-container");
let cellInput = document.createElement('div');
let rowElement =document.getElementById("row-container")
let rowInput = document.createElement('div');
cellInput.id = "column";
for(let i = 1;i<=100;i++)
{
    let ans ="";

    let n = i;
   
     let cellInput = document.createElement('div');//create one div
    let rowInput = document.createElement('div');
    cellInput.classList.add("column-name");
    rowInput.classList.add("row-name");
    while(n>0)
    {
        let rem = n%26;
        if(rem==0)
        {
           ans = "Z" + ans;
           n = Math.floor(n/26)-1;
    
        }
        else{
          ans = String.fromCharCode(rem-1+65) + ans;
          n = Math.floor(n/26);
        }
    }
   
    cellInput.textContent=ans; //edit new create div value to ans;
    //cellInput.appendChild(ans);
    containerElement.appendChild(cellInput);
    //now we have to create row and fill values
    rowInput.textContent = i;
    rowElement.appendChild(rowInput);

}

//for adding cells in input cell we have to apply same logic as we did in traversing matrix

let inputCellElement = document.getElementById('inputcell');
let traverseRow = document.createElement('div');
 let traverseColumn= document.createElement('div');
 
for(let i =1;i<=100;i++)
{
    
    let traverseRow = document.createElement('div'); 
    traverseRow.classList.add("row-cell")
for(let j=1;j<=100;j++)
{
    let traverseColumn= document.createElement('div');
    traverseColumn.classList.add("input-cell");
    traverseColumn.id=`row-${i}-col-${j}`; //added variable into string 
    traverseColumn.classList.add("inout");
    
    
    //traverseColumn.contentEditable="true";
    traverseRow.appendChild(traverseColumn);
    
}
inputCellElement.appendChild(traverseRow);
}

let clickBait = document.getElementById('left');
let clickCenter = document.getElementById('center');
let clickRight = document.getElementById('right');
//after clicking any of two align icons (right or center) ,first selcted class should be
    // remove and add to clicked icon
clickCenter.addEventListener('click' ,function(){
    clickBait.classList.remove('selected-icon');
    clickCenter.classList.add('selected-icon');
    clickRight.classList.remove('selected-icon');
})

clickRight.addEventListener('click',function(){
    clickBait.classList.remove('selected-icon');
    clickRight.classList.add('selected-icon');
    clickCenter.classList.remove('selected-icon');
})
clickBait.addEventListener('click',function(){
    clickBait.classList.add('selected-icon');
    clickRight.classList.remove('selected-icon');
    clickCenter.classList.remove('selected-icon');
})
  
//for bold italic and undeline we have to add toggle selected class
let bold = document.getElementById('bold')
let italics = document.getElementById('italic')
let underline = document.getElementById('under')

bold.addEventListener("click",function(){
    bold.classList.toggle('selected-icon')
})
italics.addEventListener("click",function(){
   italics.classList.toggle('selected-icon')
})
underline.addEventListener("click",function(){
    underline.classList.toggle('selected-icon')
})
    
   let cell = document.querySelectorAll('.inout');
   let previouslyClickedElement;
   cell.forEach(function(element){
    element.addEventListener('click',function(event){
        
          if(event.ctrlKey){
            let [rowId,colId] = callRowCol(this); //until now we got current row id and col id
            if(rowId>1)
            {
                let checkTopSel = document.getElementById(`row-${rowId-1}-col-${colId}`)
                //console.log(checkTopSel)
                if(checkTopSel)
                {
                    element.classList.add('top-cell-selected');
                    checkTopSel.classList.add('bottom-cell-selected')
                }
            }
            /*if(rowId<100)
            {
                let checkBottomSel = document.getElementById(`row-${rowId+1}-col-${colId}`)
                //console.log(checkTopSel)
                if(checkBottomSel)
                {
                    element.classList.add('bottom-cell-selected');
                    checkBottomSel.classList.add('top-cell-selected')
                }
            }*/
            element.classList.add('sel');




          }

        else if (previouslyClickedElement) {
            previouslyClickedElement.classList.remove('sel');
          }
          element.classList.add('sel');
          
          previouslyClickedElement = element; //here we assign clicked cell value of previousclicked element,when second
                                              // happens this previous clicked class get removed and added to clicked one 
                                              //you bitch chat gpt.......... 
    })

})

//    for(let i =0;i<cell.length;i++)
//    {
//     cell[i].addEventListener('click',function(){
//         if(previouslyClickedElement)
//         {

//         }

//         cell[i].classList.remove('sel')
//         cell[i].classList.add('sel')
//     })
//    }

   let dblClick = document.querySelectorAll('.inout');
   let previouslyElement;
   cell.forEach(function(element){
    element.addEventListener('dblclick',function(){
        if (previouslyElement) {
            previouslyElement.classList.remove('sel');
            
          }
          element.classList.add('sel');
          element.setAttribute("contentEditable","true")
          previouslyElement = element; 
        })
    })

  //lets add scrollng property to rows and coloumn
  let leftScroll = document.getElementById('inputcell') ;
  let actual = document.getElementById('column-container')
  
  leftScroll.addEventListener('scroll',function(){
      actual.scrollLeft = leftScroll.scrollLeft;
  })

  let topScroll = document.getElementById('inputcell') ;
  let realTop = document.getElementById('row-container')
  
  topScroll.addEventListener('scroll',function(){
      realTop.scrollTop = topScroll.scrollTop;
  })

function callRowCol(ele){
    let id = (ele.getAttribute('id')).split('-');
    let rowId = parseInt(id[1]);
    // console.log(rowId)
    let colId = parseInt(id[3]);
    return [rowId,colId];
}

// we have to add bold , italics and underline property to selected cell
 

    let prop = document.getElementById('bold');
    prop.addEventListener('click',function(){
        let cellularElement = document.querySelectorAll('.inout'); 
        cellularElement.forEach(function(ele){
           if(prop.classList.contains('selected-icon'))
           {
            if(ele.classList.contains('sel'))
            {
                ele.style.fontWeight="bold"
            }
        
           }
           
           else{
                if(ele.classList.contains('sel'))
                {
                    ele.style.fontWeight="normal"
                }
            }
        })
    })
//italic property
let propItalic = document.getElementById('italic');
    propItalic.addEventListener('click',function(){
        let cellularElement = document.querySelectorAll('.inout'); 
        cellularElement.forEach(function(ele){
           if(propItalic.classList.contains('selected-icon'))
           {
            if(ele.classList.contains('sel'))
            {
                ele.style.fontStyle="italic"
            }
        
           }
           
           else{
                if(ele.classList.contains('sel'))
                {
                    ele.style.fontStyle="normal"
                }
            }
        })
    })

//Underline property
let propUnder = document.getElementById('under');
    propUnder.addEventListener('click',function(){
        let cellularElement = document.querySelectorAll('.inout'); 
        cellularElement.forEach(function(ele){
           if(propUnder.classList.contains('selected-icon'))
           {
            if(ele.classList.contains('sel'))
            {
                ele.style.textDecoration="underline"
            }
        
           }
           
           else{
                if(ele.classList.contains('sel'))
                {
                    ele.style.textDecoration="none"
                }
            }
        })
    })
//center align
let propCenter = document.getElementById('center');
    propCenter.addEventListener('click',function(){
        let cellularElement = document.querySelectorAll('.inout'); 
        cellularElement.forEach(function(ele){
           if(propCenter.classList.contains('selected-icon'))
           {
            if(ele.classList.contains('sel'))
            {
                ele.style.textAlign="center"
            }
        
           }
           
        })
    })

//right align
let propRight = document.getElementById('right');
    propRight.addEventListener('click',function(){
        let cellularElement = document.querySelectorAll('.inout'); 
        cellularElement.forEach(function(ele){
           if(propRight.classList.contains('selected-icon'))
           {
            if(ele.classList.contains('sel'))
            {
                ele.style.textAlign="right"
            }
        
           }
          
        })
    })

//left align
let propLeft = document.getElementById('left');
    propLeft.addEventListener('click',function(){
        let cellularElement = document.querySelectorAll('.inout'); 
        cellularElement.forEach(function(ele){
           if(propLeft.classList.contains('selected-icon'))
           {
            if(ele.classList.contains('sel'))
            {
                ele.style.textAlign="left"
            }
        
           }
          
        })
    })

//color-picker and text-picker
let clrPick = document.getElementById('color-icon');
let textClrPick = document.getElementById('text-icon')
let actualClr = document.getElementById('colorpicked')
clrPick.addEventListener('click',function(){
clrPick = actualClr.click();//when click on material icon fill(container) it also give same option as input typr color gives

})
textClrPick.addEventListener('click',function(){
    textClrPick = actualClr.click();//when click on material icon fill(container) it also give same option as input typr color gives
    
    })


     actualClr = document.getElementById('colorpicked')
     actualClr.addEventListener('change',function(){
        let colorCell = document.querySelectorAll('.inout'); 
        colorCell.forEach(function(ele){
            if(ele.classList.contains('sel'))
            {
                ele.style.backgroundColor = actualClr.value;

            }
           
        })
     })
     let textListner = document.getElementById('textpicked');
     textListner.addEventListener('change',function(){
        let colorCell = document.querySelectorAll('.inout'); 
        colorCell.forEach(function(ele){
            if(ele.classList.contains('sel'))
            {
                ele.style.color = textListner.value;

            }

        })
     })

     //set font size anf font family
     let fontListner = document.getElementById('fontoption');
     fontListner.addEventListener('change',function(){
        let colorCell = document.querySelectorAll('.inout'); 
        colorCell.forEach(function(ele){
            if(ele.classList.contains('sel'))
            {
                ele.style.fontFamily = fontListner.value;

            }

        })
     })
     let sizeListner = document.getElementById('sizeoption');
     sizeListner.addEventListener('change',function(){
        let colorCell = document.querySelectorAll('.inout'); 
        colorCell.forEach(function(ele){
            if(ele.classList.contains('sel'))
            {
                ele.style.fontSize = sizeListner.value;

            }

        })
     })