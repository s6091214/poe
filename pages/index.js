import React, { useEffect, useState } from 'react';
import data from '../public/task.json';

export default function Home() {
  const { task } = data;
  const [taskList, setTaskList] = useState([]);

  const initialList = () => {
    if (task && task.length) {
      const list = task.map((item, index) => {
        const { title, content } = item;
        const chapterId = index + 1;
        const checkList = content.map((checkItem, cIndex) => ({
          id: cIndex + 1,
          text: checkItem,
          checked: false,
        }));
        checkList.unshift({ id: 0, text: '一鍵全選', checked: false });
        return { chapterId, title, checkList };
      });
      if (list && list.length) setTaskList(list);
    }
  };

  useEffect(() => {
    let savedList = window.localStorage.getItem('todoList') || [];
    if (savedList.length) {
      try {
        savedList = JSON.parse(savedList);
        setTaskList(savedList);
      } catch (error) {
        initialList();
      }
    } else initialList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheck = (chapterId, taskId) => {
    const newList = JSON.parse(JSON.stringify(taskList));
    if (!chapterId) return false;
    const checkList = newList[chapterId - 1]?.checkList;
    if (checkList) {
      if (taskId === 0) {
        const setAllChecked = !checkList[0].checked;
        newList[chapterId - 1].checkList = [...checkList].map((item) => ({
          ...item,
          checked: setAllChecked,
        }));
      } else {
        const haveDone = checkList.find((item) => item.id === taskId);
        if (haveDone) haveDone.checked = !haveDone.checked;
      }
    }
    setTaskList(newList);
    window.localStorage.setItem('todoList', JSON.stringify(newList));
  };

  return (
    <div
      className={
        'flex flex-col items-center justify-center bg-black bg-poe bg-cover bg-fixed bg-no-repeat pt-16'
      }
    >
      <div className="py-4">
        {taskList.length &&
          taskList.map((chapter) => {
            const { chapterId, title, checkList } = chapter;
            return (
              <div key={chapterId}>
                <h1
                  className="mt-5 text-center text-3xl font-bold"
                  style={{ color: '#af6025' }}
                >
                  {title}
                </h1>

                {checkList &&
                  checkList.length &&
                  checkList.map((checkItem) => {
                    const { id, text, checked } = checkItem;
                    return (
                      <div
                        data-active={'active_' + id}
                        className={`flex items-center`}
                        key={id}
                      >
                        <span className="w-12 text-right text-white">
                          {id ? `${chapterId}-${id}.` : ''}
                        </span>
                        <input
                          className="mx-2 "
                          type="checkbox"
                          name={`${title}_${id}`}
                          id={`${title}_${id}`}
                          onChange={() => handleCheck(chapterId, id)}
                          checked={checked}
                        />
                        <label
                          className={`cursor-pointer text-left text-xl ${
                            id ? 'text-green-500' : 'text-yellow-500'
                          }`}
                          htmlFor={`${title}_${id}`}
                          style={{
                            opacity: checked ? 0.2 : 1,
                            textDecorationLine: checked
                              ? 'line-through'
                              : 'none',
                          }}
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
