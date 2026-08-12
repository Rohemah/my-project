"use client";

import { useState } from "react";
import "./CourseModules.css";
// interface Module {
//   module: string;
//   hours: string;
//   title: string;
//   image: string;
//   topics: string[];
// }
interface Topic {
  id: number;
  topic: string;
}

interface Module {
  id: number;
  moduleName: string;
  hours: string;
  title: string;
  image: string;
  topics: Topic[];
}

interface Props {
  modules: Module[];
}

export default function CourseModules({ modules }: Props) {
  const [active, setActive] = useState(0);

  return (
    <section className="modules">

      {modules.map((item, index) => (

        <div className="module-card" key={index}>

          {/* Header */}

          <div
            className="module-header"
            onClick={() =>
              setActive(active === index ? -1 : index)
            }
          >

            <div className="module-left">

              <img
                src={item.image}
                alt={item.title}
              />

              <div>

                <p>
                  {item.moduleName} • {item.hours}
                </p>

                <h3>{item.title}</h3>

              </div>

            </div>

            <button className="module-btn">

              {active === index ? "−" : "+"}

            </button>

          </div>

          {/* Body */}

          {active === index && (

            <div className="module-body">

              <h4>What included</h4>

              <ul>

                {/* {item.topics.map((topic, i) => (

                  <li key={i}>{topic}</li>

                ))} */}
                {item.topics.map((topic) => (

  <li key={topic.id}>
    {topic.topic}
  </li>

))}

              </ul>

            </div>

          )}

        </div>

      ))}

    </section>
  );
}