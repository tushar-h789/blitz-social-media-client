const LeftAuth = ({title, description, icon}) => {
  return (
    <div>
      <div>{icon}</div>
      <h1 className="font-gilroyBold text-6xl text-primary_color">
        {title}
      </h1>
      <p className="font-gilroyNormal text-lg text-text_color mt-5">
        {description}
      </p>
    </div>
  ); 
};

export default LeftAuth;
