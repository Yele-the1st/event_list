import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./scenes/HomePage";
import EventsPage, { loader as eventsLoader } from "./scenes/EventsPage";
import EventDetailPage from "./scenes/EventDetailPage";
import EditEventPage from "./scenes/EditEventPage";
import NewEventPage from "./scenes/NewEventPage";
import RootLayout from "./scenes/Root";
import EventsRootLayout from "./scenes/EventsRoot";
import ErrorPage from "./scenes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
