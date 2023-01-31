export const GreyDot = ({ ...props }) => {
  return (

<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg" { ...props }>
<circle cx="2" cy="2" r="2" fill="white"/>
<circle cx="2" cy="2" r="2" fill="black" fillOpacity="0.32"/>
</svg>


  );
};
