import React from "react";
import { Item, Image, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProp {
  activities: IActivity[];
  selectActivityhandler: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityList: React.FC<IProp> = ({
  activities,
  selectActivityhandler,
  deleteActivity
}) => {
  return (
    // <List>
    //         {activities.map(val => (
    //           <List.Item key={val.id}>{val.title}</List.Item>
    //         ))}
    //       </List>
    <Segment clearing>
      <Item.Group divided>
        {activities.map(val => (
          <Item key={val.id}>
            <Item.Content>
              <Item.Header as="a">{val.title}</Item.Header>
              <Item.Meta>{val.date}</Item.Meta>
              <Item.Description>
                <div>{val.description}</div>
                <div>
                  {val.city}, {val.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivityhandler(val.id)}
                  floated={"right"}
                  content="View"
                  color="blue"
                />
                <Button
                  onClick={() => deleteActivity(val.id)}
                  floated={"right"}
                  content="Delete"
                  color="red"
                />
                <Label content={val.category} basic />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
