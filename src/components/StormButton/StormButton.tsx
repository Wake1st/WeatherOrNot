import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { IconButton } from "@mui/material";

export type StormButtonProps = {
  color: "primary" | "secondary";
};

const StormButton = ({ color }: StormButtonProps) => {
  return (
    <IconButton aria-label="storm-button" color={color}>
      <ThunderstormIcon sx={{ fontSize: 64 }} />
    </IconButton>
  );
};

export default StormButton;
