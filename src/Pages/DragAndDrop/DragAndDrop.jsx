import { useState } from "react";
import Containt from "../Containt/Containt";
import { useDrop } from "react-dnd";
import UseAxiosPublice from "../../Hooks/UseAxiosPublic"
import { useQuery } from "@tanstack/react-query";


const DragAndDrop = () => {
    const [border, setborder] = useState([])
    const [border2, setborder2] = useState([])
    const AxiosPublice = UseAxiosPublice()

    const { data: SeeTask = [], refetch } = useQuery({
        queryKey: ['all-class'],
        queryFn: async () => {
            const res = await AxiosPublice.get("/seeTask")
            return res.data
        }
    })
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
        console.log(id)
       const contants = SeeTask.filter((pic => id === pic._id))
       setborder((border) => [...border, contants[0]])
    //    setborder2((border) => [...border, contants[0]])
    
    }
    console.log(SeeTask)
    return (
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 ">
            <div className=" space-y-4">
                <h1 className=" text-2xl font-semibold text-center "> In Progress </h1>
            <div className="  space-y-4">
            {
                SeeTask?.map(contents => <Containt key={contents._id}
                    contents ={contents}
                ></Containt>)
            }
            </div>
            </div>
           
            <div className=" space-y-4">
           <h1 className=" text-2xl font-semibold text-center space-y-4 ">Completed</h1>

            <div ref={drop} className=" h-screen space-y-4 mt-10 ">
                {border.map(contents=><Containt key={contents._id}
                contents={contents}
                ></Containt>)}
            </div>
            </div>
        </div>
    );
};

export default DragAndDrop;