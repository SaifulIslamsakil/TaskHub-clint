import { useDrag } from "react-dnd";


const Containt = ({opo}) => {
    const [{isDragging},drag] = useDrag(()=>({
        type:"hadding",
        item:{id:opo.id},
        collect: (monitor)=>({
            isDragging: !!monitor.isDragging(),
        })
    }))
    return (
        <div className="">
            <h2 ref={drag} className=" p-10 bg-red-500 text-white mt-2" style={{
                border:isDragging ? "10px solid black":"0px"
            }}>{opo.title}</h2>
        </div>
    );
};

export default Containt;