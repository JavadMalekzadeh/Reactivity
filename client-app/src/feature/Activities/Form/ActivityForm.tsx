import React, { useState, FormEvent, ChangeEvent } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { v4 as uuid } from "uuid";
interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivities: (activity: IActivity) => void;
  editActivities: (activity: IActivity) => void;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialActivityState,
  createActivities,
  editActivities
}) => {
  const initialForm = () => {
    if (initialActivityState) {
      return initialActivityState;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        city: "",
        venue: "",
        date: "",
        category: ""
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initialForm);

  const HandleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };
  const HandleSubmit = () => {
    if (activity.id.length === 0) {
      setActivity({ ...activity, id: uuid() });
      createActivities(activity);
    } else {
      editActivities(activity);
    }
  };
  return (
    <Segment clearing>
      <Form>
        <Form.Input
          onChange={HandleInputChange}
          name="title"
          placeholder="Title"
          value={activity.title}
        />
        <Form.TextArea
          onChange={HandleInputChange}
          placeholder="Description"
          name="description"
          value={activity.description}
        />
        <Form.Input
          onChange={HandleInputChange}
          placeholder="Category"
          name="category"
          value={activity.category}
        />
        <Form.Input
          onChange={HandleInputChange}
          type="datetime-loacal"
          placeholder="Date"
          name="date"
          value={activity.date}
        />
        <Form.Input
          onChange={HandleInputChange}
          placeholder="City"
          name="city"
          value={activity.city}
        />
        <Form.Input
          onChange={HandleInputChange}
          placeholder="Venue"
          name="venue"
          value={activity.venue}
        />
        <Button
          onClick={HandleSubmit}
          floated="right"
          type="submit"
          positive
          content="submit"
        />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};
