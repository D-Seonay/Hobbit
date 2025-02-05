import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
  {
    id: "1",
    title: "Design Homepage Wireframe",
    description: "Discuss layout with the marketing team for alignment.",
    status: "no_starting",
    priority: "Low",
    assignees: ["Davis", "John"],
    comments: 12,
    links: 1,
    category: "Design",
    xp_points: 10,
    dueDate: "02 Nov 2025",
  },
  {
    id: "2",
    title: "Configure Backend API",
    description: "Ensure endpoints are set up correctly.",
    status: "in_progress",
    priority: "High",
    assignees: ["Anna"],
    comments: 8,
    links: 2,
    category: "Development",
    xp_points: 20,
    dueDate: "05 Nov 2025",
  },
  { 
    id: "3",
    title: "Test Mobile Responsiveness",
    description: "Run cross-browser and device compatibility tests.",
    status: "done",
    priority: "Medium",
    assignees: ["Mark"],
    comments: 5,
    links: 0,
    category: "Testing",
    xp_points: 15,
    dueDate: "08 Nov 2025",
  },
  {
    id: "4",
    title: "Develop User Authentication",
    description: "Implement OAuth for secure user authentication.",
    status: "no_starting",
    priority: "High",
    assignees: ["Davis"],
    comments: 3,
    links: 3,
    category: "Development",
    xp_points: 25,
    dueDate: "10 Nov 2025",
  },
  {
    id: "5",
    title: "Deploy to Production",
    description: "Prepare the application for a live environment.",
    status: "no_starting",
    priority: "Medium",
    assignees: ["John"],
    comments: 2,
    links: 1,
    category: "Deployment",
    xp_points: 20,
    dueDate: "15 Nov 2025",
  }
];

const statuses = ["no_starting", "in_progress", "done"];
const statusLabels = {
  no_starting: "No Starting",
  in_progress: "In Progress",
  done: "Done",
};


const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = tasks.map((task) =>
      task.id === result.draggableId
        ? { ...task, status: result.destination.droppableId }
        : task
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-6">Task Board</h2>

      <DragDropContext onDragEnd={onDragEnd} className="w-full flex flex-col">
        <div className="grid grid-cols-1 gap-6 w-full max-w-7xl mb-6 lg:grid-cols-3">
          {statuses.map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="rounded-lg shadow-md p-4 bg-gray-800"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
                    {statusLabels[status]}
                  </h3>
                  <div
                    className="h-[500px] overflow-y-auto space-y-4"
                    ref={provided.innerRef}
                  >
                    {tasks
                      .filter((task) => task.status === status)
                      .map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-gray-700 rounded-lg p-4 shadow-md"
                            >
                              <h4 className="font-bold text-gray-100">
                                {task.title}
                              </h4>
                              <p className="text-gray-200 text-sm">
                                {task.description}
                              </p>
                              <p className="text-sm text-gray-300 mb-2">
                                Category: {task.category}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded-lg">
                                  {task.priority}
                                </span>
                                <span className="text-xs text-gray-200">
                                  Due: {task.dueDate}
                                </span>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskBoard;