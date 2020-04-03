import React, { useState, useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";
import { NavBar } from "../../feature/Nav/NavBar";
import { ActivityDashboard } from "../../feature/Activities/dashboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/Activities")
      .then(response => {
        let activities: IActivity[] = [];
        response.data.forEach(activity => {
          activity.date = activity.date.split(".")[0];
          activities.push(activity);
        });
        setActivities(activities);
      });
  }, []);

  const handleSelectActivity = (id: string): void => {
    setSelectedActivity(activities.filter(a => a.id === id)[0]);
    setEditMode(false);
  };

  const openCreateFrom = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  const HandleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  };
  const HandleEditActivity = (activity: IActivity) => {
    setActivities([...activities.filter(a => a.id !== activity.id), activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  };
  const HandleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(a => a.id !== id)]);
  };
  return (
    <Fragment>
      <NavBar openCreateForm={openCreateFrom} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectActivityhandler={handleSelectActivity}
          selectedActivity={selectedActivity!}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivities={HandleCreateActivity}
          editActivities={HandleEditActivity}
          deleteActivity={HandleDeleteActivity}
        />
      </Container>
    </Fragment>
  );
};

export default App;
