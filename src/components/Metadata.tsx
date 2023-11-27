const Metadata = (props: IMetadataProps) => {
  const { depth, layerAmount } = props;

  return (
    <>
      <span style={{ fontWeight: "bold" }}> Dept: </span>
      {depth}m <br />
      <span style={{ fontWeight: "bold" }}> Layer Amount: </span>
      {layerAmount}
    </>
  );
};

export default Metadata;

interface IMetadataProps {
  depth: number;
  layerAmount: number;
}
