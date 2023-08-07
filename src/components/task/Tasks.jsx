import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (taskList, startIndex, endIndex) => {
  // タスクを並び替える
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
  // destinationは目的地
};

const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);

    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        {/* ↑ ドロップした後に順番が元に戻ってしまうのを防ぐプロパティ */}
        <Droppable droppableId="droppable">
          {/* droppableの中は関数でなければならない */}
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/* innerRef ドラッグしてる要素以外の制御をしてくれるもの */}
              {taskList.map((task, index) => (
                // map関数は中身を一つずつ取り出してくる性質があり、
                // 取り出してきた一つ一つにidをつけてあげる必要があるのでkey=task.id
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
              {/* ↑ droppableのエリアを拡張したり縮小したり柔軟性を持たせてくれる */}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
