"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error(error));
  }, []);

  const draftTasks = tasks.filter(task => task.status === 'draft');
  const wipTasks = tasks.filter(task => task.status === 'wip');
  const doneTasks = tasks.filter(task => task.status === 'done');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="flex w-full">
        <div className="flex flex-col w-1/3 p-4">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">Draft</h2>
          {draftTasks.map(task => (
            <div key={task.id}>
              <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {task.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  {task.description}
                </p>
                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400" href="#">
                  詳細を見る
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-1/3 p-4">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">WIP</h2>
          {wipTasks.map(task => (
            <div key={task.id}>
              <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {task.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  {task.description}
                </p>
                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400" href="#">
                  詳細を見る
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-1/3 p-4">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">Done</h2>
          {doneTasks.map(task => (
            <div key={task.id}>
              <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {task.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  {task.description}
                </p>
                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400" href="#">
                  詳細を見る
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
