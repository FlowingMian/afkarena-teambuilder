import HeroBox from "../../Hero/HeroBox/HeroBox";
import { UsageResult } from "../model/UsageResult";
import './AnalysisByUsageTable.css'

type AnalysisByUsageTableProps = {
  usageResult: UsageResult;
};

function AnalysisByUsageTable({ usageResult }: AnalysisByUsageTableProps) {

  const rows = usageResult.heroUsageResults.map(ur => {
    return <div className="AnalysisByUsageTableRow">
      <HeroBox hero={ur.hero} />
      <div className="AnalysisByUsageTableCell">
        {ur.coreCompositions.length} ({Math.round(ur.coreCompositions.length * 100 / usageResult.compositionCount)}%)
      </div>
      <div className="AnalysisByUsageTableCell">
      {ur.flexCompositions.length} ({Math.round(ur.flexCompositions.length * 100 / usageResult.compositionCount)}%)
      </div>
    </div>
  });

  return <div className="AnalysisByUsageTable">
     {rows}
  </div>;
}

export default AnalysisByUsageTable;
