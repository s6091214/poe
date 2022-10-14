import data from "../public/task.json";

export default function Home() {
  const { task } = data;
  
  return (
    <div className={"flex justify-center flex-col items-center"}>
      <div className="py-4">
        {task.length > 0 &&
          task.map((item, index) => {
            const { title, content } = item;
            return (
              <div key={index}>
                <h1
                  className="text-3xl text-center font-bold mt-5"
                  style={{ color: "#af6025" }}
                >
                  {title}
                </h1>

                {content.length > 0 &&
                  content?.map((item, idx) => {
                    return (
                      <div
                        data-active={"active_" + idx}
                        className={`flex items-center`}
                        key={idx}
                      >
                        <span>{`${idx + 1}.`}</span>
                        <input
                          className="mx-2"
                          type="checkbox"
                          name={`${title}_${idx}`}
                          id={`${title}_${idx}`}
                          onChange={(e) => {
                            if (e.target.checked) {
                              e.target.labels[0].style.opacity = 0.2;
                              e.target.labels[0].style.textDecorationLine =
                                "line-through";
                            } else {
                              e.target.labels[0].style.opacity = 1;
                              e.target.labels[0].style.textDecorationLine =
                                "none";
                            }
                          }}
                        />
                        <label
                          className="text-left text-xl cursor-pointer"
                          htmlFor={`${title}_${idx}`}
                        >
                          {item}
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
