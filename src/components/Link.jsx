// eslint-disable-next-line react/prop-types
const Link = ({ title }) => {
  return (
    <span className="font-semibold text-sm text-[hsl(219,9%,45%)] hover:text-black cursor-pointer transition-all duration-300 ease-in-out">
      {title}
    </span>
  );
};

export default Link;
