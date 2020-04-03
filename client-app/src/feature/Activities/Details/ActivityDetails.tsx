import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
}
export const ActivityDetails: React.FC<IProps> = ({
  activity,
  setEditMode,
  setSelectedActivity
}) => {
  return (
    <Card fluid>
      <Image src="/assets/placeholder.jpg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => setEditMode(true)}
            content="Edit"
            color="blue"
            basic
          />
          <Button
            onClick={() => setSelectedActivity(null)}
            content="Cancel"
            color="grey"
            basic
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
