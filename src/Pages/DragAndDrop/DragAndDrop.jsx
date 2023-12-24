import { useState } from "react";
import Containt from "../Containt/Containt";
import { useDrop } from "react-dnd";


const DragAndDrop = () => {
    const [border, setborder] = useState([])
    const contant = [
        {
            id: 1,
            title: "saiful islam"

        },
        {
            id: 2,
            title: "saiful islam"

        },
        {
            id: 3,
            title: "saiful islam"

        },
    ]

    const [{isOver}, drop] =useDrop(()=>({
        accept:"hadding",
        drop:(item) => add(item.id),
        collect: (monitor)=>({
            isOver: !!monitor.isOver(),
        })
    }))
    const add = (id)=>{
       const contants = contant.filter((pic => id === pic.id))
       setborder((border) => [...border, contants[0]])
    }
    console.log(border)
    return (
        <div>
            <h4 className=" text-center text-xl font-semibold mt-3 "> somoy ear jonno pura task ta korte pari nai smy takle kore ditam</h4>

            {
                contant?.map(cont => <Containt key={cont.id}
                opo ={cont}
                ></Containt>)
            }
            <div ref={drop} className=" h-screen border-4 border-black p-5 mt-10 ">
                {border.map(cont=><Containt key={cont.id}
                opo={cont}
                ></Containt>)}
            </div>
        </div>
    );
};

export default DragAndDrop;