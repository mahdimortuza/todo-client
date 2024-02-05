import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFIlter from "./TodoFIlter";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  //* from local state
  // const { todos } = useAppSelector((state) => state.todos);

  //from server
  const { data: todos, isError, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFIlter priority={priority} setPriority={setPriority} />
      </div>
      <div className=" bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md  text-2xl font-bold">
          <p>There is no task pending.</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
