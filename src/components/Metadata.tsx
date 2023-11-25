const Metadata = (props: any) => {
  const { selectedPoint } = props;

  return (
    <div>
      <h2>{selectedPoint.name}</h2>
      <p>{selectedPoint.description}</p>
    </div>
  );
};

export default Metadata;
