import React from "react";
import { List, Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { ActivityList } from "./ActivityList";
import { ActivityDetails } from "../Details/ActivityDetails";
import { ActivityForm } from "../Form/ActivityForm";

interface IProp {
  activities: IActivity[];
  selectActivityhandler: (id: string) => void;
  selectedActivity: IActivity;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
  createActivities: (activity: IActivity) => void;
  editActivities: (activity: IActivity) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityDashboard: React.FC<IProp> = ({
  activities,
  selectActivityhandler,
  selectedActivity,
  editMode,
  setEditMode,
  setSelectedActivity,
  createActivities,
  editActivities,
  deleteActivity
}) => {
  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <ActivityList
            activities={activities}
            selectActivityhandler={selectActivityhandler}
            deleteActivity={deleteActivity}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              setEditMode={setEditMode}
              setSelectedActivity={setSelectedActivity}
            />
          )}
          {editMode && (
            <ActivityForm
              key={(selectedActivity && selectedActivity.id) || 0}
              setEditMode={setEditMode}
              activity={selectedActivity}
              createActivities={createActivities}
              editActivities={editActivities}
            />
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};
