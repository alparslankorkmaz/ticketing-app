import { PiFireSimpleFill } from "react-icons/pi";

const PriorityDisplay = ({ priority }) => {
  return (
    <>
      <div className="flex justify-start align-baseline">
        <div
          className={`pr-1 ${
            priority > 0 ? " text-red-400" : "text-slate-400"
          } small-icon`}
        >
          <PiFireSimpleFill />
        </div>
        <div
          className={`pr-1 ${
            priority > 1 ? " text-red-400" : "text-slate-400"
          } small-icon`}
        >
          <PiFireSimpleFill />
        </div>
        <div
          className={`pr-1 ${
            priority > 2 ? " text-red-400" : "text-slate-400"
          } small-icon`}
        >
          <PiFireSimpleFill />
        </div>
        <div
          className={`pr-1 ${
            priority > 3 ? " text-red-400" : "text-slate-400"
          } small-icon`}
        >
          <PiFireSimpleFill />
        </div>
        <div
          className={`pr-1 ${
            priority > 4 ? " text-red-400" : "text-slate-400"
          } small-icon`}
        >
          <PiFireSimpleFill />
        </div>
      </div>
    </>
  );
};

export default PriorityDisplay;
