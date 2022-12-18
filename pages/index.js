import React, { useEffect, useState } from "react";
import data from "../public/task.json";

export default function Home() {
  const { task } = data;
  const [taskList, setTaskList] = useState([])

  const initialList = () => {
    if (task && task.length) {
      const list = task.map((item, index) => {
        const { title, content } = item
        const chapterId = index + 1
        const checkList = content.map((checkItem, cIndex) => ({ id: cIndex + 1, text: checkItem, checked: false }))
        return { chapterId, title, checkList }
      })
      if (list && list.length) setTaskList(list)
    }
  }

  useEffect(() => {
    let savedList = window.localStorage.getItem('todoList') || []
    if (savedList.length) {
      try {
        savedList = JSON.parse(savedList)
        setTaskList(savedList)
      } catch (error) {
        initialList()
      }
    } else initialList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCheck = (chapterId, taskId) => {
    const newList = JSON.parse(JSON.stringify(taskList))
    const checkList = newList[(chapterId - 1)]?.checkList
    if (checkList) {
      const haveDone = checkList.find(item => item.id === taskId)
      if (haveDone) haveDone.checked = !haveDone.checked
    }
    setTaskList(newList)
    window.localStorage.setItem('todoList', JSON.stringify(newList))
  }

  return (
    <div
      className={
        "flex justify-center flex-col items-center bg-black bg-fixed bg-cover bg-poe bg-no-repeat pt-16"
      }
    >
      <div className="py-4">
        {taskList.length > 0 &&
          taskList.map(chapter => {
            const { chapterId, title, checkList } = chapter;
            return (
              <div key={chapterId}>
                <h1
                  className="text-3xl text-center font-bold mt-5"
                  style={{ color: "#af6025" }}
                >
                  {title}
                </h1>

                {checkList.length > 0 &&
                  checkList?.map(checkItem => {
                    const { id, text, checked } = checkItem
                    return (
                      <div
                        data-active={"active_" + id}
                        className={`flex items-center`}
                        key={id}
                      >
                        <span className="w-12 text-right text-white">{`${chapterId}-${id}.`}</span>
                        <input
                          className="mx-2 "
                          type="checkbox"
                          name={`${title}_${id}`}
                          id={`${title}_${id}`}
                          onChange={() => handleCheck(chapterId, id)}
                          checked={checked}
                        />
                        <label
                          className="text-left text-xl cursor-pointer text-green-500"
                          htmlFor={`${title}_${id}`}
                          style={{ opacity: checked ? 0.2 : 1, textDecorationLine: checked ? 'line-through' : 'none' }}
                        >
                          {text}
                        </label>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
}
