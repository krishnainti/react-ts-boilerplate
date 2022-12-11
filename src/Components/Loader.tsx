import React, { FC, memo } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

interface LoaderProps {
  color?: string;
  loading?: boolean;
}

const Loader: FC<LoaderProps> = ({ color = "#fff", loading = true }) => {
  return (
    <Backdrop
      sx={{ color, zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default memo(Loader);
