import ButtonWithIcon from ".";
import { AddRecordIcon, OpenDrawerIcon, RemoveRecordIcon } from "../Icons";

export const AddButton = (props) => (
  <ButtonWithIcon
    icon={<AddRecordIcon />}
    text={"Add Record"}
    onClick={props.onClick}
  />
);

export const RemoveButton = (props) => (
  <ButtonWithIcon
    icon={<RemoveRecordIcon />}
    text={"Remove Record"}
    onClick={props.onClick}
  />
);

export const OpenDrawerButton = (props) => (
  <ButtonWithIcon
    icon={<OpenDrawerIcon />}
    onClick={props.onClick}
    isOpenDrawer={true}
  />
);
