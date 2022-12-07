import "../App.css";

const Info = (props) => {
  return (
    <div>
      <h1 className="info">How the app works: </h1>
      <p className="info">
        In this app you can create multiple Time Capsules to save photos in a
        fun way. <br></br>
        <br></br> When creating a capsule, choose your own name and between
        which days you want to upload photos.<br></br>
        <br></br> Photos can only be uploaded to the capsule between the start
        date and end date. When the time is up, photos can no longer be uploaded
        to the capsule. <br></br>
        <br></br>
        Photos that have been added can now be viewed! Enjoy making memories
        that last forever!
      </p>
    </div>
  );
};

export default Info;
