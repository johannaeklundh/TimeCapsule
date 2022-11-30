const Capsule = ({ data }) => {
  return (
    <p>
      {" "}
      {data.name} {Math.floor(data.day)}
    </p>
  );
};

export default Capsule;
