const Capsule = ({ data }) => {
  return (
    <p>
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <div className="popup">
          <form>
            <label htmlFor="Memoryname">Name Memory:</label>
            <input
              type="text"
              id="Memoryname"
              name="Memoryname"
              onChange={capsuleNameHandler}
            ></input>
            <p>Select startdate:</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <p>Select enddate:</p>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
            <br></br>
          </form>
          <button type="button" onClick={() => setVisible(false)}>
            Cancel
          </button>
          <button type="button" onClick={createCapsule}>
            Done
          </button>
        </div>
      </Popup>
    </p>
  );
};

export default Capsule;
