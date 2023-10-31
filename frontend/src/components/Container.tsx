interface ContainerPorps {
    children:React.ReactNode;
    itemAlign:string;
}

const Container: React.FC<ContainerPorps> = ({children, itemAlign})=>{
    return (
      <div className={`mx-auto w-full max-w-7xl flex justify-center min-h-screen ${itemAlign}`}>
        {children}
      </div>
    );
}

export default Container;