import { Stage } from "@/types/Stage";
import checkIcon from "../../public/check.png";
import trashIcon from "../../public/trash.png";
import rewindIcon from "../../public/rewind.png";

/* eslint-disable @next/next/no-img-element */
export function StageElement({ stage, selectStage, banStage, cancelStageChoice }: Props) {
  const basicClasses = 'w-full rounded outline outline-solid';
  const noneClasses = stage.state === 'none' ? 'outline-2 outline-white' : '';
  const bannedClasses = stage.state === 'banned' ? 'outline-3 outline-red-500' : '';
  const validedClasses = stage.state === 'valided' ? 'outline-3 outline-green-500' : '';
  const allClasses = [basicClasses, noneClasses, validedClasses, bannedClasses].join(' ');
  const isStageSelected = ['banned', 'valided'].includes(stage.state);

  return (
    <section className="w-28 sm:w-40 my-3 text-xs relative">
      <figure>
        <img src={stage.url} alt="ssbu stage" className={allClasses} />
        <figcaption className="text-center mt-2">{stage.title}</figcaption>
      </figure>
      <div className="absolute top-9 sm:top-14 left-1">
        {!isStageSelected && (
          <button className="border bg-green-500 hover:bg-opacity-70 h-6 w-6 p-1 rounded mr-1" onClick={selectStage}>
            <img src={checkIcon.src} alt="icon" />
          </button>
        )}
        {!isStageSelected && (
          <button className="border bg-red-500 hover:bg-opacity-70 h-6 w-6 p-1 rounded ml-1" onClick={banStage}>
            <img src={trashIcon.src} alt="icon" />
          </button>
        )}
        {isStageSelected && (
          <button className="border bg-gray-500 hover:bg-opacity-70 h-6 w-6 p-1 rounded ml-1" onClick={cancelStageChoice}>
            <img src={rewindIcon.src} alt="icon" />
          </button>
        )}
      </div>
    </section>
  );
}

type Props = {
  stage: Stage;
  selectStage: () => void;
  banStage: () => void;
  cancelStageChoice: () => void;
};