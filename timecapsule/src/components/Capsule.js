const Capsule = ({ data }) => {
  return (
    <p>
      {" "}
      {data.name} {data.openDate.getMonth()}
    </p>
  );
};

export default Capsule;
