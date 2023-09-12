import React from "react";
import { FancyButton } from "./index.slyle";

export const InterestingButton = ({ children, ...props }) => {
  return <FancyButton {...props}>{children}</FancyButton>;
};
