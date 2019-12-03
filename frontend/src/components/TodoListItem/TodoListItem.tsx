import React from "react";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Divider
} from "@material-ui/core";

const TodoListItem = ({
  value,
  onToggle,
  checked,
  labelId
}: {
  value: number;
  onToggle: (value: number) => void;
  checked: boolean;
  labelId: string;
}) => (
  <div>
    <Divider />
    <ListItem role={undefined} dense button onClick={() => onToggle(value)}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
    </ListItem>
  </div>
);

export default TodoListItem;
