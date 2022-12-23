import { Icon } from "@mui/material";

const CustomIcon = ({ children, isDrawer }) => {
  return (
    <Icon
      style={{
        width: isDrawer ? 124 : 54,
        height: isDrawer ? 124 : 54,
        marginLeft: 12,
        padding: 0,
      }}
    >
      {children}
    </Icon>
  );
};

export const OpenDrawerIcon = () => (
  <CustomIcon isDrawer={true}>
    <svg
      width="124"
      height="124"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M82.6667 67.1666L62 87.8333L41.3333 67.1666"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M82.6667 36.1666L62 56.8333L41.3333 36.1666"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </CustomIcon>
);

export const AddRecordIcon = () => (
  <CustomIcon>
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 45L42.75 45C43.9926 45 45 43.9926 45 42.75L45 11.25C45 10.0074 43.9927 9 42.75 9L11.25 9C10.0074 9 9 10.0074 9 11.25L9 42.75C9 43.9926 10.0074 45 11.25 45Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 27H36"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 36L27 18"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </CustomIcon>
);

export const RemoveRecordIcon = () => (
  <CustomIcon>
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 45L42.75 45C43.9926 45 45 43.9926 45 42.75L45 11.25C45 10.0074 43.9927 9 42.75 9L11.25 9C10.0074 9 9 10.0074 9 11.25L9 42.75C9 43.9926 10.0074 45 11.25 45Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 27H36"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </CustomIcon>
);
