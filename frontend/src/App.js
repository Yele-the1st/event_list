import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./scenes/HomePage";
import EventsPage, { loader as eventsLoader } from "./scenes/EventsPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction
} from "./scenes/EventDetailPage";
import EditEventPage from "./scenes/EditEventPage";
import NewEventPage, { action as newEventAction } from "./scenes/NewEventPage";
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
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
