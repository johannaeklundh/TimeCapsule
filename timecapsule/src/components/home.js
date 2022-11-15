const home = () => {
  return (
    <p>
      <div className="top">
        <h1> TIME CAPSULE </h1>
        <button id="plus" type="button" onClick={() => setVisible(true)}>
          Create new capsule
          <img src={CapsulePlus} />
        </button>
      </div>
      <div className="middle">
        {capsules.map((capsuledata, index) => {
          return <Capsule data={capsuledata}></Capsule>;
        })}
      </div>
      <div className="bottom">
        <button type="button">
          Opened capsule
          <img src={CapsulePlus} />
        </button>
      </div>
    </p>
  );
};

export default home;
