import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={220}
    height={200}
    viewBox="0 0 220 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="133" rx="10" ry="10" width="169" height="17" />
    <rect x="0" y="157" rx="5" ry="5" width="65" height="20" />
    <circle cx="145" cy="167" r="16" />
    <rect x="0" y="0" rx="12" ry="12" width="163" height="130" />
  </ContentLoader>
);

export default Skeleton;
