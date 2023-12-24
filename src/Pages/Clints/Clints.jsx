import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragAndDrop from "../DragAndDrop/DragAndDrop";

const Clints = () => {
    return (
       <DndProvider backend={HTML5Backend}>
            <div>
                <DragAndDrop></DragAndDrop>
            </div>
       </DndProvider>
    );
};

export default Clints;