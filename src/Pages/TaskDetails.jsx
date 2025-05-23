
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../Components/DetailsCard";
import UserBidCount from "../Components/UserBidCount";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const TaskDetails = () => {
  const task = useLoaderData();
  const { user } = useContext(AuthContext);
  const [bidChanged, setBidChanged] = useState(false);

  return (
    <div>

      <div>
        <h1 className="text-2xl mb-4"></h1>
        <UserBidCount email={user?.email} bidChanged={bidChanged} />
      </div>
      <DetailsCard task={task} setBidChanged={setBidChanged} />
    </div>
  );
};

export default TaskDetails;
