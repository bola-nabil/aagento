const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-10 lg:px-24 pt-[100px]">
      {children}
    </div>
  );
};

export default Container;