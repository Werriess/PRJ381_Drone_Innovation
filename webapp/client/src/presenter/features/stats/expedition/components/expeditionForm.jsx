import { CustomButton } from "../../../../layout/button";

const ExpeditionForm = () => {
  return (
    <div>
      <form action="" id="expiForm">
        <div className="expiFormContent">
          <select name="Expedition" id="">Expedition</select>
          <input type="text" placeholder="Enter droneID" />
          <input type="date" placeholder="Enter start time" />
          <input type="date" placeholder="Enter end time" />
          <input type="text" placeholder="Enter latitude" />
          <input type="text" placeholder="Enter longnitude" />
          <input type="text" placeholder="Enter longitude" />
          <input type="text" placeholder="Enter carbon monoxide level" />
          <input type="text" placeholder="Enter methane" />
          <input type="text" placeholder="Enter butane" />
          <input type="text" placeholder="Enter liquefied petroleum gas" />
        </div>
        <div className="expiFormContent">
          <textarea
            name=""
            id=""
            rows="25"
            cols="50"
            placeholder="Give us some feedback?"
          ></textarea>
          <div id="expiButtons">
            <CustomButton>Add</CustomButton>
            <CustomButton>Update</CustomButton>
            <CustomButton>Delete</CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpeditionForm;
