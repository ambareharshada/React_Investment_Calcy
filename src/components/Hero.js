const Hero = (props) => {
  return (
    <>
   { console.log(props.data)}
      <h1>Hello Welcome Hero</h1>
      {/* <p>Paragraph</p> */}
    {
        props.data.map((obj)=>{
            <div>{obj.year}</div>
        })
    }
    </>
  );
};
export default Hero;
