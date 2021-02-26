import React from "react";

function Projects() {
  return (
    <section className="bg-gray-900 text-white body-font">
      <div className="container bg-gray-700 rounded-lg p-8 px-5 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Coding Projects
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-200">
            An [array] of coding projects I have undertaken through my 2020/21
            Full Stack Web Development Bootcamp with the University of Sydney
            and Trilogy College.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-white font-medium title-font mb-2">
                SubHub
              </h2>
              <p className="leading-relaxed text-base">
                SubHub provides location, information and user-reviews of
                restaurants nearby Sydney. SubHub retrieve data from Google
                Places API and Zomato API and third-party APIs that allows
                developers to access their data and functionality by making
                requests with specific parameters to a URL.
              </p>
              <div className="flex justify-center">
                <a href="https://annisapf.github.io/SubHub-Food-Finder/">
                  <button className="flex mx-auto mt-8 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Deployed Link
                  </button>
                </a>
                <a href="https://github.com/annisapf/SubHub-Food-Finder">
                  <button className="ml-4 flex mx-auto mt-8 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Github Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Weather Dashboard
              </h2>
              <p className="leading-relaxed text-base">
                A weather forecast dashboard that allows the user to search for
                a city and is then presented with future conditions for that
                city.
              </p>
              <div className="flex justify-center">
                <a href="https://mylesburt.github.io/weatherDashboard/">
                  <button className="flex mx-auto mt-8 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Deployed Link
                  </button>
                </a>
                <a href="https://github.com/mylesburt/weatherDashboard">
                  <button className="ml-4 flex mx-auto mt-8 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Github Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Work Day Scheduler
              </h2>
              <p className="leading-relaxed text-base">
                A simple calendar application that allows the user to save
                events for each hour of the day. This app will run in the
                browser and feature dynamically updated HTML and CSS powered by
                jQuery.
              </p>
              <div className="flex justify-center">
                <a href="https://mylesburt.github.io/workDayScheduler/">
                  <button className="flex mx-auto mt-8 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Deployed Link
                  </button>
                </a>
                <a href="https://github.com/mylesburt/workDayScheduler">
                  <button className="ml-4 flex mx-auto mt-8 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Github Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-white font-medium title-font mb-2">
                MySQL Employee Tracker
              </h2>
              <p className="leading-relaxed text-base">
                A Content Management System (CSM) for managing a companys
                employees using node, inquirer, and MySQL.
              </p>
              <div className="flex justify-center">
                <a href="https://github.com/mylesburt/mysqlEmployeeTracker">
                  <button className="ml-4 flex mx-auto mt-8 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Github Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Pacific Point Hotel
              </h2>
              <p className="leading-relaxed text-base">
                Pacific Point Hotel is a hotel web app that lets users easily
                book a room at the hotel for their chosen dates. Featuring a
                user login that saves user data to a database so a customer can
                easily login and view their bookings, and an Admin user can
                easily view which rooms have been booked and by whom.
              </p>
              <div className="flex justify-center">
                <a href="https://guarded-river-60808.herokuapp.com/">
                  <button className="flex mx-auto mt-8 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Deployed Link
                  </button>
                </a>
                <a href="https://github.com/bevhatzl/Hotel-Web-App">
                  <button className="ml-4 flex mx-auto mt-8 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Github Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Burger Logger
              </h2>
              <p className="leading-relaxed text-base">
                A burger logger with MySQL, Node, Express, Handlebars including
                a custom ORM.
              </p>
              <div className="flex justify-center">
                <a href="https://github.com/mylesburt/burger">
                  <button className="ml-4 flex mx-auto mt-8 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Github Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
