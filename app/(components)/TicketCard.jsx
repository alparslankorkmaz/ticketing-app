import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <>
      <div className="bg-card hover:bg-card-hover m-2 flex flex-col rounded-md p-3 shadow-lg">
        <div className="mb-3 flex">
          <PriorityDisplay />
          <div className="ml-auto">
            <DeleteBlock />
          </div>
        </div>
        <h4 className="">Ticket Title</h4>
        <hr className="bg-page mb-2 h-px border-0" />
        <p className="whitespace-pre-wrap">
          this is the ticket description! please do this ticket
        </p>
        <div className="flex-grow"></div>
        <div className="mt-2 flex">
          <div className="flex flex-col">
            <p className="my-1 text-xs">08/31/23 10:43PM</p>
            <ProgressDisplay />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
