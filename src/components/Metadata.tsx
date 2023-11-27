import "./styles.scss";

const Metadata = (props: IMetadataProps) => {
  const { depth, layerAmount } = props;

  return (
    <>
      <span className="bold"> Dept: </span>
      {depth}m <br />
      <span className="bold"> Layer Amount: </span>
      {layerAmount}
    </>
  );
};

export default Metadata;

interface IMetadataProps {
  depth: number;
  layerAmount: number;
}
