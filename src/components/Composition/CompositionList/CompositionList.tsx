import { Composition } from "../../../model/compositions";
import CompositionDetails from "../CompositionDetails/CompositionDetails";
import './CompositionList.css'

type CompositionListProps = {
  compositions: Array<Composition>;
};

function CompositionList({ compositions }: CompositionListProps) {
  const compositionBoxes = compositions.map((c) => <CompositionDetails key={c.id} composition={c} />);

  return <div className="CompositionList">{compositionBoxes}</div>;
}

export default CompositionList;
