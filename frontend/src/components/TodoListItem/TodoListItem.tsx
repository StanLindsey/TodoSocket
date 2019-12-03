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
  value: string;
  onToggle: () => void;
  checked: boolean;
  labelId: string;
}) => (
  <div>
    <Divider />
    <ListItem role={undefined} dense button onClick={() => onToggle()}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={value} />
    </ListItem>
  </div>
);

export default TodoListItem;
