const Metadata = (props: any) => {
  const { point } = props;

  return (
    <>
      <span style={{ fontWeight: "bold" }}> Dept: </span>
      {point.depth}m <br />
      <span style={{ fontWeight: "bold" }}> Layer Amount: </span>
      {point.layerAmount}
    </>
  );
};

export default Metadata;
