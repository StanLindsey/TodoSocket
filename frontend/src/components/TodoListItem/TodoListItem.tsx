import React from "react";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Divider
} from "@material-ui/core";

const TodoListItem = ({
  id,
  title,
  onToggle,
  checked,
  labelId
}: {
  id: number;
  title: string;
  onToggle: (id: number) => void;
  checked: boolean;
  labelId: string;
}) => (
  <div>
    <Divider />
    <ListItem role={undefined} dense button onClick={() => onToggle(id)}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={title} />
    </ListItem>
  </div>
);

export default TodoListItem;
